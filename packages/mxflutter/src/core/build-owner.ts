//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

/* eslint-disable operator-linebreak */
import { MXJSLog, bridgeMXNativeJSFlutterApp, MXBuildProfileInfo } from '@mxflutter/mxflutter-base';
import { MXJSElement, MXWidgetRefreshFlutterData } from '../element/element';

// Manager class for the widgets framework.
export class MXJSBuildOwner {
  public dirtyElements: MXJSElement[];
  public scheduledFlushDirtyElements: boolean;
  public dirtyElementsNeedsResorting: boolean;

  public constructor() {
    this.dirtyElements = [];
    // 标示正在 build 流程中
    this.scheduledFlushDirtyElements = false;
    this.dirtyElementsNeedsResorting = false;
  }

  //  Adds an element to the dirty elements list so that it will be rebuilt
  public scheduleBuildFor(element: MXJSElement) {
    if (element.inDirtyList) {
      this.dirtyElementsNeedsResorting = true;
      return;
    }

    this.dirtyElements.push(element);
    element.inDirtyList = true;

    // flutter 是在 WidgetBinding.drawFrame()里触发build drity element， 这里直接调用buildScope
    const startBuildTreeTime = new Date().valueOf();
    const refreshFlutterData: MXWidgetRefreshFlutterData | null = this.buildScope(element);
    if (refreshFlutterData) {
      this.callFlutterRebuildWidget(refreshFlutterData, element, startBuildTreeTime);
    }
  }

  // build dirty elements
  public buildScope(context: MXJSElement | null, mountCallback?: Function): MXWidgetRefreshFlutterData | null {
    if (mountCallback === null && this.dirtyElements.length === 0) {
      return null;
    }

    // TODO 支持嵌套element build
    if (this.dirtyElements.length > 1) {
      MXJSLog.log('MXJSBuildOwner::buildScope _dirtyElements.length > 1 !!!!!!!!!!!!!!!');
    }

    // build 数据
    let refreshFlutterData: MXWidgetRefreshFlutterData | null = null;

    this.scheduledFlushDirtyElements = true;

    if (mountCallback) {
      this.dirtyElementsNeedsResorting = false;
      // 会调用到mount，触发用户代码Widget第一次build，调用用户代码的地方，需要加try catch
      refreshFlutterData = mountCallback();
    }

    // TODO 支持嵌套element build
    // this._dirtyElements.sort(Element._sort);
    this.dirtyElementsNeedsResorting = false;

    if (this.dirtyElements.length > 0) {
      const [dirtyElement] = this.dirtyElements;
      // build
      refreshFlutterData = dirtyElement.rebuild();
    }
    this.dirtyElements.forEach((element) => {
      element.inDirtyList = false;
    });

    // clear
    this.dirtyElements = [];
    this.scheduledFlushDirtyElements = false;
    this.dirtyElementsNeedsResorting = false;

    return refreshFlutterData;
  }

  // js->flutter
  public callFlutterRebuildWidget(
    refreshFlutterData: MXWidgetRefreshFlutterData,
    element?: MXJSElement,
    startBuildTreeTime?: number,
  ) {
    this.callFlutterShowWidget('rebuild', refreshFlutterData, element, startBuildTreeTime);
  }

  public callFlutterPushWidget(
    refreshFlutterData: MXWidgetRefreshFlutterData,
    element?: MXJSElement,
    startBuildTreeTime?: number,
  ) {
    this.callFlutterShowWidget('navigatorPush', refreshFlutterData, element, startBuildTreeTime);
  }

  public callFlutterPushNamedWidget(navPushingWidgetElementID: string, routeName: string, mxArguments: any) {
    MXJSLog.debug(
      'MXJSBuildOwner::callFlutterPushNamedWidget ' +
        `routeName: ${routeName} ` +
        `navPushingWidgetElementID: ${navPushingWidgetElementID} mxArguments: ${mxArguments}`,
    );

    const args = {
      navPushingWidgetElementID,
      routeName,
      mxArguments,
    };

    // call flutter setState
    bridgeMXNativeJSFlutterApp.callFlutterWidgetChannel('navigatorPushNamed', args);
  }

  public callFlutterShowWidget(
    method: string,
    refreshFlutterData: MXWidgetRefreshFlutterData,
    element?: MXJSElement,
    startBuildTreeTime?: number,
  ) {
    const startEncodeDataTime = new Date().valueOf();
    const widgetData = this.encodeWidgetTree(refreshFlutterData);
    const startTransferDataTime = new Date().valueOf();

    MXJSLog.debug(
      'MXJSBuildOwner::callFlutterShowWidget ' +
        `buildTree: ${startEncodeDataTime - (startBuildTreeTime ?? 0)} ` +
        `EncodeData: ${startTransferDataTime - startEncodeDataTime} dataLen: ${widgetData.length}`,
    );

    // 保存性能数据
    if (element?.widget.enableProfile && !element.profileInfo) {
      const profileInfo = new MXBuildProfileInfo();
      profileInfo.buildWidgetDataSeq = element.buildWidgetDataSeq;
      profileInfo.startBuildTreeTime = startBuildTreeTime ?? 0;
      profileInfo.startEncodeDataTime = startEncodeDataTime;
      profileInfo.startTransferDataTime = startTransferDataTime;
      profileInfo.transferDataLen = widgetData.length;
      element.profileInfo = profileInfo;
    }

    // call flutter setState
    bridgeMXNativeJSFlutterApp.callFlutterWidgetChannel(method, widgetData);
  }

  // encodeWidgetTree to json
  // 可能会encode成其他数据结构
  public encodeWidgetTree(refreshFlutterData: MXWidgetRefreshFlutterData): string {
    return JSON.stringify(refreshFlutterData);
  }

  public finalizeTree() {}
}
