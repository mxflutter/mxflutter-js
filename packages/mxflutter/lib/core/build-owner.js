"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MXJSBuildOwner = void 0;
/* eslint-disable operator-linebreak */
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
// Manager class for the widgets framework.
class MXJSBuildOwner {
    constructor() {
        this.dirtyElements = [];
        // 标示正在 build 流程中
        this.scheduledFlushDirtyElements = false;
        this.dirtyElementsNeedsResorting = false;
    }
    //  Adds an element to the dirty elements list so that it will be rebuilt
    scheduleBuildFor(element) {
        if (element.inDirtyList) {
            this.dirtyElementsNeedsResorting = true;
            return;
        }
        this.dirtyElements.push(element);
        element.inDirtyList = true;
        // flutter 是在 WidgetBinding.drawFrame()里触发build drity element， 这里直接调用buildScope
        const startBuildTreeTime = new Date().valueOf();
        const refreshFlutterData = this.buildScope(element);
        if (refreshFlutterData) {
            this.callFlutterRebuildWidget(refreshFlutterData, element, startBuildTreeTime);
        }
    }
    // build dirty elements
    buildScope(context, mountCallback) {
        if (mountCallback === null && this.dirtyElements.length === 0) {
            return null;
        }
        // TODO 支持嵌套element build
        if (this.dirtyElements.length > 1) {
            mxflutter_base_1.MXJSLog.log('MXJSBuildOwner::buildScope _dirtyElements.length > 1 !!!!!!!!!!!!!!!');
        }
        // build 数据
        let refreshFlutterData = null;
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
    callFlutterRebuildWidget(refreshFlutterData, element, startBuildTreeTime) {
        this.callFlutterShowWidget('rebuild', refreshFlutterData, element, startBuildTreeTime);
    }
    callFlutterPushWidget(refreshFlutterData, element, startBuildTreeTime) {
        this.callFlutterShowWidget('navigatorPush', refreshFlutterData, element, startBuildTreeTime);
    }
    callFlutterPushNamedWidget(navPushingWidgetElementID, routeName, mxArguments) {
        mxflutter_base_1.MXJSLog.debug('MXJSBuildOwner::callFlutterPushNamedWidget ' +
            `routeName: ${routeName} ` +
            `navPushingWidgetElementID: ${navPushingWidgetElementID} mxArguments: ${mxArguments}`);
        const args = {
            navPushingWidgetElementID,
            routeName,
            mxArguments,
        };
        // call flutter setState
        mxflutter_base_1.bridgeMXNativeJSFlutterApp.callFlutterWidgetChannel('navigatorPushNamed', args);
    }
    callFlutterShowWidget(method, refreshFlutterData, element, startBuildTreeTime) {
        const startEncodeDataTime = new Date().valueOf();
        const widgetData = this.encodeWidgetTree(refreshFlutterData);
        const startTransferDataTime = new Date().valueOf();
        mxflutter_base_1.MXJSLog.debug('MXJSBuildOwner::callFlutterShowWidget ' +
            `buildTree: ${startEncodeDataTime - (startBuildTreeTime !== null && startBuildTreeTime !== void 0 ? startBuildTreeTime : 0)} ` +
            `EncodeData: ${startTransferDataTime - startEncodeDataTime} dataLen: ${widgetData.length}`);
        // 保存性能数据
        if ((element === null || element === void 0 ? void 0 : element.widget.enableProfile) && !element.profileInfo) {
            const profileInfo = new mxflutter_base_1.MXBuildProfileInfo();
            profileInfo.buildWidgetDataSeq = element.buildWidgetDataSeq;
            profileInfo.startBuildTreeTime = startBuildTreeTime !== null && startBuildTreeTime !== void 0 ? startBuildTreeTime : 0;
            profileInfo.startEncodeDataTime = startEncodeDataTime;
            profileInfo.startTransferDataTime = startTransferDataTime;
            profileInfo.transferDataLen = widgetData.length;
            element.profileInfo = profileInfo;
        }
        // call flutter setState
        mxflutter_base_1.bridgeMXNativeJSFlutterApp.callFlutterWidgetChannel(method, widgetData);
    }
    // encodeWidgetTree to json
    // 可能会encode成其他数据结构
    encodeWidgetTree(refreshFlutterData) {
        return JSON.stringify(refreshFlutterData);
    }
    finalizeTree() { }
}
exports.MXJSBuildOwner = MXJSBuildOwner;
