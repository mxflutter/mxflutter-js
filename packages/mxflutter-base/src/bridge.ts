//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXJSLog } from './log';
import { MXMirrorObjMethodCall } from './mirror/base-type';
import { MXMirror } from './mirror/mirror';

/**
 * js -> flutter
 * native 注入的API
 * build 数据通道
 */
const bridgeMXNativeJSFlutterApp = {
  setCurrentJSApp: (app: any) => {
    globalThis.MXJSAPI.setCurrentJSApp(app);
  },
  callFlutterReloadApp: (app: any, widgetData: string) => {
    globalThis.MXJSAPI.callFlutterReloadApp(app, widgetData);
  },
  callFlutterWidgetChannel: (method: string, args: any) => {
    globalThis.MXJSAPI.callFlutterWidgetChannel(method, args);
  },
};

// copy 一些 简单封装的老函数
const runApp = (app: any) => {
  bridgeMXNativeJSFlutterApp.setCurrentJSApp(app);
};

// ============js --> flutter===================================
/**
 * js --> flutter
 * js->flutter 顶层API总入口
 */
const invokeFlutterCommonChannel = (funcName: string, args: any, callback?: any) => {
  const invokeData = JSON.stringify({ funcName, args });
  globalThis.MXJSAPI.mxJSBridgeInvokeFlutterCommonChannel(invokeData, (resultStr: string) => {
    if (callback) {
      callback(resultStr);
    }
  });
};

/**
 * js --> flutter
 * js->flutter 通过FFI Port调用
 */
const invokeFlutterFFIPort = (funcName: string, args: any) => {
  const invokeData = JSON.stringify({ funcName, args });
  return globalThis.MXJSAPI.mxJSBridgeInvokeFlutterFFIPort(invokeData);
};

// mirrorObj sys
// 调用Logic mirrorObj的函数
// *重要区分： JS Logic MirrorObj的生命周期JS侧控制，由Native Weak Ref辅助完成释放
const createMirrorObj = (mirrorObjMethodCall: MXMirrorObjMethodCall) => {
  invokeFlutterCommonChannel('mxJSBridgeCreateMirrorObj', mirrorObjMethodCall);
};

// 包装了invokeFlutterCommonChannel一层...
// 调用dart侧 mxfJSBridgeInvokeMirrorObjWithCallback 函数
const releaseMirrorObj = (mirrorObjMethodCall: MXMirrorObjMethodCall) => {
  invokeFlutterCommonChannel('mxJSBridgeReleaseMirrorObj', mirrorObjMethodCall);
};

// 包装了invokeFlutterCommonChannel一层...
// 调用dart侧 mxfJSBridgeInvokeMirrorObjWithCallback 函数
const invokeMirrorObjMethod = (mirrorObjMethodCall: MXMirrorObjMethodCall, callback?: any) => {
  invokeFlutterCommonChannel('mxJSBridgeInvokeMirrorObjWithCallback', mirrorObjMethodCall, callback);
};

// 包装了invokeFlutterFFIPort一层...
// 调用dart侧 mxfJSBridgeInvokeMirrorObjWithCallback 函数
const invokeMirrorObjMethodSync = (mirrorObjMethodCall: MXMirrorObjMethodCall): string => {
  return invokeFlutterFFIPort('mxJSBridgeInvokeMirrorObj', mirrorObjMethodCall);
};

const mxJSBridgeDartLog = (log: string) => {
  invokeFlutterCommonChannel('mxJSBridgeDartLog', log);
};

// ============flutter->js===================================
/**
 * flutter->js 总入口
 */
globalThis.MXJSAPI.mxfJSBridgeInvokeJSCommonChannel = (messageStr: string) => {
  const messageObj = JSON.parse(messageStr);
  const { method, arguments: args } = messageObj;

  MXJSLog.log(`mxfJSBridgeInvokeJSCommonChannel, method: ${method}, arguments: ${args}`);

  if (method === 'invokeJSMirrorObj') {
    MXMirror.getInstance().flutterCallInvokeJSMirrorObjMethod(args);
  } else if (method === 'invokeJSMirrorFuncNameMethod') {
    MXMirror.getInstance().flutterCallFuncNameMethod(args);
  } else if (method === 'invokeJSMirrorResetData') {
    MXMirror.getInstance().resetData();
  }
};

export {
  runApp,
  bridgeMXNativeJSFlutterApp,
  invokeFlutterCommonChannel,
  invokeFlutterFFIPort,
  createMirrorObj,
  invokeMirrorObjMethod,
  invokeMirrorObjMethodSync,
  releaseMirrorObj,
  mxJSBridgeDartLog,
};
