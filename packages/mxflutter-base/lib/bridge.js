"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.mxJSBridgeDartLog = exports.releaseMirrorObj = exports.invokeMirrorObjMethodSync = exports.invokeMirrorObjMethod = exports.createMirrorObj = exports.invokeFlutterFFIPort = exports.invokeFlutterCommonChannel = exports.bridgeMXNativeJSFlutterApp = exports.runApp = void 0;
const log_1 = require("./log");
const mirror_1 = require("./mirror/mirror");
/**
 * js -> flutter
 * native 注入的API
 * build 数据通道
 */
const bridgeMXNativeJSFlutterApp = {
    setCurrentJSApp: (app) => {
        globalThis.MXJSAPI.setCurrentJSApp(app);
    },
    callFlutterReloadApp: (app, widgetData) => {
        globalThis.MXJSAPI.callFlutterReloadApp(app, widgetData);
    },
    callFlutterWidgetChannel: (method, args) => {
        globalThis.MXJSAPI.callFlutterWidgetChannel(method, args);
    },
};
exports.bridgeMXNativeJSFlutterApp = bridgeMXNativeJSFlutterApp;
// copy 一些 简单封装的老函数
const runApp = (app) => {
    bridgeMXNativeJSFlutterApp.setCurrentJSApp(app);
};
exports.runApp = runApp;
// ============js --> flutter===================================
/**
 * js --> flutter
 * js->flutter 顶层API总入口
 */
const invokeFlutterCommonChannel = (funcName, args, callback) => {
    const invokeData = JSON.stringify({ funcName, args });
    globalThis.MXJSAPI.mxJSBridgeInvokeFlutterCommonChannel(invokeData, (resultStr) => {
        if (callback) {
            callback(resultStr);
        }
    });
};
exports.invokeFlutterCommonChannel = invokeFlutterCommonChannel;
/**
 * js --> flutter
 * js->flutter 通过FFI Port调用
 */
const invokeFlutterFFIPort = (funcName, args) => {
    const invokeData = JSON.stringify({ funcName, args });
    return globalThis.MXJSAPI.mxJSBridgeInvokeFlutterFFIPort(invokeData);
};
exports.invokeFlutterFFIPort = invokeFlutterFFIPort;
// mirrorObj sys
// 调用Logic mirrorObj的函数
// *重要区分： JS Logic MirrorObj的生命周期JS侧控制，由Native Weak Ref辅助完成释放
const createMirrorObj = (mirrorObjMethodCall) => {
    invokeFlutterCommonChannel('mxJSBridgeCreateMirrorObj', mirrorObjMethodCall);
};
exports.createMirrorObj = createMirrorObj;
// 包装了invokeFlutterCommonChannel一层...
// 调用dart侧 mxfJSBridgeInvokeMirrorObjWithCallback 函数
const releaseMirrorObj = (mirrorObjMethodCall) => {
    invokeFlutterCommonChannel('mxJSBridgeReleaseMirrorObj', mirrorObjMethodCall);
};
exports.releaseMirrorObj = releaseMirrorObj;
// 包装了invokeFlutterCommonChannel一层...
// 调用dart侧 mxfJSBridgeInvokeMirrorObjWithCallback 函数
const invokeMirrorObjMethod = (mirrorObjMethodCall, callback) => {
    invokeFlutterCommonChannel('mxJSBridgeInvokeMirrorObjWithCallback', mirrorObjMethodCall, callback);
};
exports.invokeMirrorObjMethod = invokeMirrorObjMethod;
// 包装了invokeFlutterFFIPort一层...
// 调用dart侧 mxfJSBridgeInvokeMirrorObjWithCallback 函数
const invokeMirrorObjMethodSync = (mirrorObjMethodCall) => {
    return invokeFlutterFFIPort('mxJSBridgeInvokeMirrorObj', mirrorObjMethodCall);
};
exports.invokeMirrorObjMethodSync = invokeMirrorObjMethodSync;
const mxJSBridgeDartLog = (log) => {
    invokeFlutterCommonChannel('mxJSBridgeDartLog', log);
};
exports.mxJSBridgeDartLog = mxJSBridgeDartLog;
// ============flutter->js===================================
/**
 * flutter->js 总入口
 */
globalThis.MXJSAPI.mxfJSBridgeInvokeJSCommonChannel = (messageStr) => {
    const messageObj = JSON.parse(messageStr);
    const { method, arguments: args } = messageObj;
    log_1.MXJSLog.log(`mxfJSBridgeInvokeJSCommonChannel, method: ${method}, arguments: ${args}`);
    if (method === 'invokeJSMirrorObj') {
        mirror_1.MXMirror.getInstance().flutterCallInvokeJSMirrorObjMethod(args);
    }
    else if (method === 'invokeJSMirrorFuncNameMethod') {
        mirror_1.MXMirror.getInstance().flutterCallFuncNameMethod(args);
    }
    else if (method === 'invokeJSMirrorResetData') {
        mirror_1.MXMirror.getInstance().resetData();
    }
};
