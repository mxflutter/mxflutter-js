"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetsFlutterBinding = exports.WidgetsBinding = void 0;
/* eslint-disable complexity */
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
const build_owner_1 = require("../core/build-owner");
const element_1 = require("../element/element");
const widget_1 = require("./widget");
const profile_1 = require("./profile");
// The glue between the js widgets and the Flutter MXUIEngine.
class WidgetsBinding extends mxflutter_base_1.MXLifecycleDartClass {
    constructor() {
        super(new mxflutter_base_1.MXMirrorObjMethodCall({ className: 'WidgetsBinding' }));
        this.observers = [];
        this.buildOwner = new build_owner_1.MXJSBuildOwner();
        // rootMgrElement是个虚拟Element，负责管理push的Widget或runAPP 的Widget
        this.rootMgrElement = new element_1.MXJSRootMgrElement();
        this.rootMgrElement.assignOwner(this.buildOwner);
        this.initInstances();
        mxflutter_base_1.MXJSLog.debug(`WidgetsBinding::constructor this:${this}`);
    }
    initInstances() {
        WidgetsBinding.instance = this;
    }
    // MXJSWidgetState inherits from WidgetsBindingObserver,
    // so you can directly subclass MXJSWidgetState and call addObserver
    //
    // Registers the given object as a binding observer. Binding
    // observers are notified when various application events occur,
    addObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            return;
        }
        this.observers.push(observer);
        if (this.observers.length === 1) {
            const callFlutter = new mxflutter_base_1.MXMirrorObjMethodCall({
                className: 'WidgetsBinding',
                funcName: 'addObserver',
            });
            super.invokeMirrorObjMethod(callFlutter);
        }
    }
    // Unregisters the given observer. This should be used sparingly as
    // it is relatively expensive (O(N) in the number of registered
    // observers).
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    }
    onObserverEvent(args) {
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
    nativeCall(args) {
        console.log('nativeCall', args);
        // TODO mark const
        if (args.method === 'flutterCallFrequencyLimitCallList') {
            // list native call
            this.flutterCallFrequencyLimitCallList(args.arguments);
        }
        else if (args.method === 'flutterCallNavigatorPushWithName') {
            this.flutterCallNavigatorPushWithName(args.arguments);
        }
        else if (args.method === 'flutterCallRefreshLazyWidget') {
            this.flutterCallRefreshLazyWidget(args.arguments);
        }
        else if (args.method === 'flutterCallOnEventCallback') {
            // {arguments: {widgetID: "5", buildSeq: "1", args: "qweeqwe", callID: "5/9"},
            // method: "flutterCallOnEventCallback"}
            return this.flutterCallOnEventCallback(args.arguments);
        }
        else if (args.method === 'flutterCallOnBuildEnd') {
            // {method: "flutterCallOnBuildEnd", arguments: {widgetID: "6", buildSeq: "1", rootWidgetID: "5"}}
            this.flutterCallOnBuildEnd(args.arguments);
        }
        else if (args.method === 'flutterCallOnDispose') {
            this.flutterCallOnDispose(args.arguments);
        }
        else if (args.method === 'flutterCallOnFirstFrameEnd') {
            this.flutterCallOnFirstFrameEnd(args.arguments);
        }
        else if (args.method === 'nativeCallInitProfileInfo') {
            this.nativeCallInitProfileInfo(args.arguments);
        }
        else if (args.method === 'futterCallDidChangeDependencies') {
            this.futterCallDidChangeDependencies(args.arguments);
        }
        else if (args.method === 'syncPropsCallback') {
            const decodeArgs = JSON.parse(args.arguments);
            return this.syncPropsCallback(decodeArgs);
        }
    }
    flutterCallFrequencyLimitCallList(nativeCallArgsList) {
        if (nativeCallArgsList) {
            nativeCallArgsList.forEach((callArgs) => {
                this.nativeCall(callArgs);
            });
        }
        this.rootMgrElement.debugPrintElementTree();
    }
    flutterCallNavigatorPushWithName(args) {
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
    navigatorPushWithName(widgetName, flutterHostWidgetID, flutterPushParams, bizPath, args) {
        // 调用到用户代码，根据widgetName创建JSWidget
        // TODO: TS Widget  let widget: MXJSBaseWidget
        const widget = this.jsFlutterApp.createJSWidgetWithName(widgetName, flutterPushParams, bizPath);
        if (!widget) {
            // TODO 报告错误，push一个错误提示页面。
            return;
        }
        widget.init();
        const hostWidget = new widget_1.MXJSHostStatefulWapperWidget(widget);
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
    attachRootWidget(rootWidget, buildContextInfo) {
        const rootElement = rootWidget.createElement();
        //
        rootElement.assignOwner(this.buildOwner);
        // TODO:重构setInheritedInfo
        rootElement.setInheritedInfo(buildContextInfo);
        this.rootMgrElement.addRootElement(rootElement);
        // 把element build完成之后，安装到 root element上
        // element 为rootElement,parent = null，但this.rootMgrElement 的childrenElement有rootElement
        const startBuildTreeTime = new Date().valueOf();
        const refreshFlutterData = this.buildOwner.buildScope(rootElement, () => rootElement.mount(null));
        if (refreshFlutterData) {
            this.buildOwner.callFlutterRebuildWidget(refreshFlutterData, rootElement, startBuildTreeTime);
        }
    }
    flutterCallRefreshLazyWidget(args) {
        const { widgetID } = args;
        const element = this.rootMgrElement.findChild(widgetID);
        if (element) {
            const statefullElement = element;
            statefullElement.lazyModeFirstBuild();
        }
        else {
            mxflutter_base_1.MXJSLog.error(`WidgetsBinding::flutterCallRefreshLazyWidget error: element type:(${typeof element}) widgetID: ${widgetID}} `);
        }
        this.rootMgrElement.debugPrintElementTree();
    }
    // flutter -> js
    flutterCallOnEventCallback(args) {
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
        mxflutter_base_1.MXJSLog.error(`WidgetsBinding::onEventCallback error: element == null onEventCallback(args:${args}`);
        this.rootMgrElement.debugPrintElementTree();
    }
    flutterCallOnBuildEnd(args) {
        const { widgetID } = args;
        const buildWidgetDataSeq = args.buildSeq;
        const element = this.rootMgrElement.findChild(widgetID);
        if (element) {
            element.onBuildEnd(buildWidgetDataSeq);
        }
        else {
            mxflutter_base_1.MXJSLog.error(`WidgetsBinding::onBuildEnd error: element == null widgetID: ${widgetID} buildWidgetDataSeq: ${buildWidgetDataSeq}`);
        }
    }
    flutterCallOnDispose(args) {
        const { widgetID } = args;
        const element = this.rootMgrElement.findChild(widgetID);
        if (element) {
            element.onDispose();
        }
        else {
            mxflutter_base_1.MXJSLog.error(`WidgetsBinding::onDispose error: element == null widgetID ${widgetID}`);
        }
        // TODO: MirrorMoudle
        // const { mirrorObjIDList } = args;
        // MXMirror.getInstance().removeMirrorObjects(mirrorObjIDList);
    }
    flutterCallOnFirstFrameEnd(args) {
        const { widgetID } = args;
        const element = this.rootMgrElement.findChild(widgetID);
        if (element) {
            const { profileInfo } = args;
            element.onFirstFrameEnd(profileInfo);
        }
        else {
            mxflutter_base_1.MXJSLog.error(`WidgetsBinding::onFirstFrameEnd error: element == null widgetID: ${widgetID} buildWidgetDataSeq: ${args.buildSeq}`);
        }
    }
    nativeCallInitProfileInfo(args) {
        mxflutter_base_1.MXJSLog.debug(`WidgetsBinding::initProfileInfo mxNativeJSLoadCost:${args.mxNativeJSLoadCost}`);
        profile_1.MXJSProfile.mxNativeJSLoadCost = args.mxNativeJSLoadCost;
    }
    futterCallDidChangeDependencies(args) {
        const { widgetID } = args;
        const element = this.rootMgrElement.findChild(widgetID);
        if (element) {
            element.didChangeDependencies();
        }
        else {
            mxflutter_base_1.MXJSLog.error(`WidgetsBinding::didChangeDependencies error: element == null widgetID ${widgetID}`);
        }
    }
    syncPropsCallback(args) {
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
            const handleResult = element.handleSyncCallbackResult(element.currentWidgetTree, result);
            return JSON.stringify(handleResult);
        }
        mxflutter_base_1.MXJSLog.error(`WidgetsBinding::syncPropsCallback error: element == null, args:${args}`);
        this.rootMgrElement.debugPrintElementTree();
    }
}
exports.WidgetsBinding = WidgetsBinding;
WidgetsBinding.instance = null;
// copy flutter api
class WidgetsFlutterBinding extends WidgetsBinding {
    // copy flutter api : WidgetsFlutterBinding.ensureInitialized()
    static ensureInitialized() {
        if (WidgetsBinding.instance === null) {
            return new WidgetsFlutterBinding();
        }
        return WidgetsBinding.instance;
    }
}
exports.WidgetsFlutterBinding = WidgetsFlutterBinding;
