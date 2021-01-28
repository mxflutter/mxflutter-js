//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXJSLog } from './log';
import { MXMirror } from './mirror/mirror';
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
// copy 一些 简单封装的老函数
const runApp = (app) => {
    bridgeMXNativeJSFlutterApp.setCurrentJSApp(app);
};
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
/**
 * js --> flutter
 * js->flutter 通过FFI Port调用
 */
const invokeFlutterFFIPort = (funcName, args) => {
    const invokeData = JSON.stringify({ funcName, args });
    return globalThis.MXJSAPI.mxJSBridgeInvokeFlutterFFIPort(invokeData);
};
// mirrorObj sys
// 调用Logic mirrorObj的函数
// *重要区分： JS Logic MirrorObj的生命周期JS侧控制，由Native Weak Ref辅助完成释放
const createMirrorObj = (mirrorObjMethodCall) => {
    invokeFlutterCommonChannel('mxJSBridgeCreateMirrorObj', mirrorObjMethodCall);
};
// 包装了invokeFlutterCommonChannel一层...
// 调用dart侧 mxfJSBridgeInvokeMirrorObjWithCallback 函数
const releaseMirrorObj = (mirrorObjMethodCall) => {
    invokeFlutterCommonChannel('mxJSBridgeReleaseMirrorObj', mirrorObjMethodCall);
};
// 包装了invokeFlutterCommonChannel一层...
// 调用dart侧 mxfJSBridgeInvokeMirrorObjWithCallback 函数
const invokeMirrorObjMethod = (mirrorObjMethodCall, callback) => {
    invokeFlutterCommonChannel('mxJSBridgeInvokeMirrorObjWithCallback', mirrorObjMethodCall, callback);
};
// 包装了invokeFlutterFFIPort一层...
// 调用dart侧 mxfJSBridgeInvokeMirrorObjWithCallback 函数
const invokeMirrorObjMethodSync = (mirrorObjMethodCall) => {
    return invokeFlutterFFIPort('mxJSBridgeInvokeMirrorObj', mirrorObjMethodCall);
};
const mxJSBridgeDartLog = (log) => {
    invokeFlutterCommonChannel('mxJSBridgeDartLog', log);
};
// ============flutter->js===================================
/**
 * flutter->js 总入口
 */
globalThis.MXJSAPI.mxfJSBridgeInvokeJSCommonChannel = (messageStr) => {
    const messageObj = JSON.parse(messageStr);
    const { method, arguments: args } = messageObj;
    MXJSLog.log(`mxfJSBridgeInvokeJSCommonChannel, method: ${method}, arguments: ${args}`);
    if (method === 'invokeJSMirrorObj') {
        MXMirror.getInstance().flutterCallInvokeJSMirrorObjMethod(args);
    }
    else if (method === 'invokeJSMirrorFuncNameMethod') {
        MXMirror.getInstance().flutterCallFuncNameMethod(args);
    }
    else if (method === 'invokeJSMirrorResetData') {
        MXMirror.getInstance().resetData();
    }
};
export { runApp, bridgeMXNativeJSFlutterApp, invokeFlutterCommonChannel, invokeFlutterFFIPort, createMirrorObj, invokeMirrorObjMethod, invokeMirrorObjMethodSync, releaseMirrorObj, mxJSBridgeDartLog, };
