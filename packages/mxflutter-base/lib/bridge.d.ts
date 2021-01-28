import { MXMirrorObjMethodCall } from './mirror/base-type';
/**
 * js -> flutter
 * native 注入的API
 * build 数据通道
 */
declare const bridgeMXNativeJSFlutterApp: {
    setCurrentJSApp: (app: any) => void;
    callFlutterReloadApp: (app: any, widgetData: string) => void;
    callFlutterWidgetChannel: (method: string, args: any) => void;
};
declare const runApp: (app: any) => void;
/**
 * js --> flutter
 * js->flutter 顶层API总入口
 */
declare const invokeFlutterCommonChannel: (funcName: string, args: any, callback?: any) => void;
/**
 * js --> flutter
 * js->flutter 通过FFI Port调用
 */
declare const invokeFlutterFFIPort: (funcName: string, args: any) => any;
declare const createMirrorObj: (mirrorObjMethodCall: MXMirrorObjMethodCall) => void;
declare const releaseMirrorObj: (mirrorObjMethodCall: MXMirrorObjMethodCall) => void;
declare const invokeMirrorObjMethod: (mirrorObjMethodCall: MXMirrorObjMethodCall, callback?: any) => void;
declare const invokeMirrorObjMethodSync: (mirrorObjMethodCall: MXMirrorObjMethodCall) => string;
declare const mxJSBridgeDartLog: (log: string) => void;
export { runApp, bridgeMXNativeJSFlutterApp, invokeFlutterCommonChannel, invokeFlutterFFIPort, createMirrorObj, invokeMirrorObjMethod, invokeMirrorObjMethodSync, releaseMirrorObj, mxJSBridgeDartLog, };
