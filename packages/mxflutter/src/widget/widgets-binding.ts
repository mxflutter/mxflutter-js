//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

/* eslint-disable complexity */
import { MXJSLog, MXLifecycleDartClass, MXMirrorObjMethodCall } from '@mxflutter/mxflutter-base';
import { MXJSBuildOwner } from '../core/build-owner';
import { MXJSRootMgrElement, MXJSElement, MXJSStatefulElement, MXWidgetRefreshFlutterData } from '../element/element';
import { MXJSFlutterApp } from '../core/base-app';
import { MXJSBaseWidget, MXJSHostStatefulWapperWidget } from './widget';
import { WidgetsBindingObserver } from './widgets-binding-observer';
import { MXJSProfile } from './profile';

export interface FlutterNavPushArgs {
  widgetID: string;
  widgetName: string;
  themeData: any;
  mediaQueryData: any;
  iconThemeData: any;
}

// 终端调用 MXJSFlutterApp.nativeCall 传递的参数
interface NativeCallArgs {
  method: string;
  arguments: any;
}

// The glue between the js widgets and the Flutter MXUIEngine.
export class WidgetsBinding extends MXLifecycleDartClass {
  public static instance: WidgetsBinding | null = null;
  public jsFlutterApp: MXJSFlutterApp;
  public buildOwner: MXJSBuildOwner;
  public rootMgrElement: MXJSRootMgrElement;
  public observers: WidgetsBindingObserver[] = [];
  public constructor() {
    super(new MXMirrorObjMethodCall({ className: 'WidgetsBinding' }));
    this.buildOwner = new MXJSBuildOwner();
    // rootMgrElement是个虚拟Element，负责管理push的Widget或runAPP 的Widget
    this.rootMgrElement = new MXJSRootMgrElement();
    this.rootMgrElement.assignOwner(this.buildOwner);
    this.initInstances();
    MXJSLog.debug(`WidgetsBinding::constructor this:${this}`);
  }

  public initInstances() {
    WidgetsBinding.instance = this;
  }

  // MXJSWidgetState inherits from WidgetsBindingObserver,
  // so you can directly subclass MXJSWidgetState and call addObserver
  //
  // Registers the given object as a binding observer. Binding
  // observers are notified when various application events occur,
  public addObserver(observer: WidgetsBindingObserver) {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      return;
    }

    this.observers.push(observer);

    if (this.observers.length === 1) {
      const callFlutter = new MXMirrorObjMethodCall({
        className: 'WidgetsBinding',
        funcName: 'addObserver',
      });

      super.invokeMirrorObjMethod(callFlutter);
    }
  }

  // Unregisters the given observer. This should be used sparingly as
  // it is relatively expensive (O(N) in the number of registered
  // observers).
  public removeObserver(observer: WidgetsBindingObserver) {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  public onObserverEvent(args: { funcName: string; eventArgs: any }) {
    const { funcName } = args;
    const { eventArgs } = args;

    if (funcName === 'didChangeAppLifecycleState') {
      // eventArgs = AppLifecycleState.fromInt(eventArgs);
    }
    this.observers.forEach((observer) => {
      const eventFun = observer[funcName];
      if (eventFun) {
        eventFun.call(observer, eventArgs);
      }
    });
  }

  // Flutter -> JS channel
  public nativeCall(args: NativeCallArgs) {
    console.log('nativeCall', args);
    // TODO mark const

    if (args.method === 'flutterCallFrequencyLimitCallList') {
      // list native call
      this.flutterCallFrequencyLimitCallList(args.arguments);
    } else if (args.method === 'flutterCallNavigatorPushWithName') {
      this.flutterCallNavigatorPushWithName(args.arguments);
    } else if (args.method === 'flutterCallRefreshLazyWidget') {
      this.flutterCallRefreshLazyWidget(args.arguments);
    } else if (args.method === 'flutterCallOnEventCallback') {
      // {arguments: {widgetID: "5", buildSeq: "1", args: "qweeqwe", callID: "5/9"},
      // method: "flutterCallOnEventCallback"}
      return this.flutterCallOnEventCallback(args.arguments);
    } else if (args.method === 'flutterCallOnBuildEnd') {
      // {method: "flutterCallOnBuildEnd", arguments: {widgetID: "6", buildSeq: "1", rootWidgetID: "5"}}
      this.flutterCallOnBuildEnd(args.arguments);
    } else if (args.method === 'flutterCallOnDispose') {
      this.flutterCallOnDispose(args.arguments);
    } else if (args.method === 'flutterCallOnFirstFrameEnd') {
      this.flutterCallOnFirstFrameEnd(args.arguments);
    } else if (args.method === 'nativeCallInitProfileInfo') {
      this.nativeCallInitProfileInfo(args.arguments);
    } else if (args.method === 'futterCallDidChangeDependencies') {
      this.futterCallDidChangeDependencies(args.arguments);
    } else if (args.method === 'syncPropsCallback') {
      const decodeArgs = JSON.parse(args.arguments);
      return this.syncPropsCallback(decodeArgs);
    }
  }

  private flutterCallFrequencyLimitCallList(nativeCallArgsList: NativeCallArgs[]) {
    if (nativeCallArgsList) {
      nativeCallArgsList.forEach((callArgs: NativeCallArgs) => {
        this.nativeCall(callArgs);
      });
    }

    this.rootMgrElement.debugPrintElementTree();
  }

  private flutterCallNavigatorPushWithName(args: { widgetName: string; widgetID: string; flutterPushParams: string; bizPath: string }) {
    const { widgetName } = args;
    const flutterHostWidgetID = args.widgetID;
    let flutterPushParams;
    if (args.flutterPushParams) {
      flutterPushParams = JSON.parse(args.flutterPushParams);
    }
    let bizPath = args.bizPath;

    this.navigatorPushWithName(widgetName, flutterHostWidgetID, flutterPushParams, bizPath, args);
  }

  // Flutter通过MXJSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage",...);push页面时,会调用到此函数
  private navigatorPushWithName(widgetName: string, flutterHostWidgetID: string, flutterPushParams: Object, bizPath: string, args: any) {
    // 调用到用户代码，根据widgetName创建JSWidget
    // TODO: TS Widget  let widget: MXJSBaseWidget
    const widget: MXJSBaseWidget = this.jsFlutterApp.createJSWidgetWithName(widgetName, flutterPushParams, bizPath);
    if (!widget) {
      // TODO 报告错误，push一个错误提示页面。
      return;
    }

    widget.init();
    const hostWidget = new MXJSHostStatefulWapperWidget(widget);
    hostWidget.flutterHostWidgetID = flutterHostWidgetID;
    // TODO: 框架默认打开性能监控
    hostWidget.enableProfile = true;

    // TODO: buildContextInfo 重构
    const buildContextInfo = args;
    this.attachRootWidget(hostWidget, buildContextInfo);

    this.rootMgrElement.debugPrintElementTree();
  }

  // Flutter->JS  push/run widget 为js入口api ，作为根部widget ，可以有多个root widget
  // void attachRootWidget(Widget rootWidget)
  private attachRootWidget(rootWidget: MXJSBaseWidget, buildContextInfo: any) {
    const rootElement: MXJSElement = rootWidget.createElement();
    //
    rootElement.assignOwner(this.buildOwner);
    // TODO:重构setInheritedInfo
    rootElement.setInheritedInfo(buildContextInfo);
    this.rootMgrElement.addRootElement(rootElement);

    // 把element build完成之后，安装到 root element上
    // element 为rootElement,parent = null，但this.rootMgrElement 的childrenElement有rootElement
    const startBuildTreeTime = new Date().valueOf();
    const refreshFlutterData: MXWidgetRefreshFlutterData | null = this.buildOwner.buildScope(rootElement, () =>
      rootElement.mount(null),
    );

    if (refreshFlutterData) {
      this.buildOwner.callFlutterRebuildWidget(refreshFlutterData, rootElement, startBuildTreeTime);
    }
  }

  private flutterCallRefreshLazyWidget(args: { widgetID: string }) {
    const { widgetID } = args;
    const element: MXJSElement | undefined = this.rootMgrElement.findChild(widgetID);

    if (element) {
      const statefullElement = element as MXJSStatefulElement;
      statefullElement.lazyModeFirstBuild();
    } else {
      MXJSLog.error(
        `WidgetsBinding::flutterCallRefreshLazyWidget error: element type:(${typeof element}) widgetID: ${widgetID}} `,
      );
    }

    this.rootMgrElement.debugPrintElementTree();
  }

  // flutter -> js
  private flutterCallOnEventCallback(args: { callID: string; buildSeq: string; args: any }) {
    const { callID } = args; //   widgetID/callID 格式 ： "1313/3434"
    if (!callID) {
      return;
    }
    const arr = callID.split('/');

    const [widgetID] = arr;
    const buildWidgetDataSeq = args.buildSeq;
    const callArgs = args.args;

    const element = this.rootMgrElement.findChild(widgetID);

    if (element) {
      return element.invokeCallback(buildWidgetDataSeq, callID, callArgs);
    }
    MXJSLog.error(`WidgetsBinding::onEventCallback error: element == null onEventCallback(args:${args}`);
    this.rootMgrElement.debugPrintElementTree();
  }

  private flutterCallOnBuildEnd(args: { widgetID: string; buildSeq: string }) {
    const { widgetID } = args;
    const buildWidgetDataSeq = args.buildSeq;
    const element: MXJSElement | undefined = this.rootMgrElement.findChild(widgetID);

    if (element) {
      element.onBuildEnd(buildWidgetDataSeq);
    } else {
      MXJSLog.error(
        `WidgetsBinding::onBuildEnd error: element == null widgetID: ${widgetID} buildWidgetDataSeq: ${buildWidgetDataSeq}`,
      );
    }
  }

  private flutterCallOnDispose(args: { widgetID: string; mirrorObjIDList: string[] }) {
    const { widgetID } = args;

    const element = this.rootMgrElement.findChild(widgetID);
    if (element) {
      element.onDispose();
    } else {
      MXJSLog.error(`WidgetsBinding::onDispose error: element == null widgetID ${widgetID}`);
    }

    // TODO: MirrorMoudle
    // const { mirrorObjIDList } = args;
    // MXMirror.getInstance().removeMirrorObjects(mirrorObjIDList);
  }

  private flutterCallOnFirstFrameEnd(args: { widgetID: string; buildSeq: string; profileInfo: any }) {
    const { widgetID } = args;
    const element: MXJSElement | undefined = this.rootMgrElement.findChild(widgetID);
    if (element) {
      const { profileInfo } = args;
      element.onFirstFrameEnd(profileInfo);
    } else {
      MXJSLog.error(
        `WidgetsBinding::onFirstFrameEnd error: element == null widgetID: ${widgetID} buildWidgetDataSeq: ${args.buildSeq}`,
      );
    }
  }

  private nativeCallInitProfileInfo(args: { mxNativeJSLoadCost: number }) {
    MXJSLog.debug(`WidgetsBinding::initProfileInfo mxNativeJSLoadCost:${args.mxNativeJSLoadCost}`);
    MXJSProfile.mxNativeJSLoadCost = args.mxNativeJSLoadCost;
  }

  private futterCallDidChangeDependencies(args: { widgetID: string }) {
    const { widgetID } = args;

    const element = this.rootMgrElement.findChild(widgetID);
    if (element) {
      element.didChangeDependencies();
    } else {
      MXJSLog.error(`WidgetsBinding::didChangeDependencies error: element == null widgetID ${widgetID}`);
    }
  }

  private syncPropsCallback(args: { callID: string; buildSeq: string; args: any }) {
    const { callID } = args;
    if (!callID) {
      return;
    }
    const arr = callID.split('/');

    const [widgetID] = arr;
    const buildWidgetDataSeq = args.buildSeq;

    const element = this.rootMgrElement.findChild(widgetID);

    if (element) {
      const result = element.invokeCallback(buildWidgetDataSeq, callID, args.args);
      const handleResult = element.handleSyncCallbackResult(element.currentWidgetTree!, result);
      return JSON.stringify(handleResult);
    }
    MXJSLog.error(`WidgetsBinding::syncPropsCallback error: element == null, args:${args}`);
    this.rootMgrElement.debugPrintElementTree();
  }
}

// copy flutter api
export class WidgetsFlutterBinding extends WidgetsBinding {
  // copy flutter api : WidgetsFlutterBinding.ensureInitialized()
  public static ensureInitialized(): WidgetsFlutterBinding {
    if (WidgetsBinding.instance === null) {
      return new WidgetsFlutterBinding();
    }
    return WidgetsBinding.instance;
  }
}
