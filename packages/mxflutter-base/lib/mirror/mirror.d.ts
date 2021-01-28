import { MXDartClass } from './base-type';
declare class MXMirror {
    private static instance;
    static getInstance(): MXMirror;
    private mirrorIdFeed;
    private mirrorObjMap;
    private callbackIdFeed;
    private callbackId2fun;
    private funcName2fun;
    constructor();
    addMirrorObject(obj: MXDartClass): string;
    getMirrorObject(mirrorId: string): MXDartClass;
    removeMirrorObject(obj: MXDartClass): void;
    removeMirrorObjectWithID(mirrorId: string): void;
    removeMirrorObjectWithIDList(mirrorIdList: []): void;
    generateCallbackId(): string;
    addCallback(callback: Function): string;
    invokeCallback(mirrorID: string, funcName: string, callbackID: string, args: any): any;
    findCallback(callbackId: string): Function;
    canInvoke(callbackId: string): boolean;
    removeCallback(callbackId: string): void;
    flutterCallInvokeJSMirrorObjMethod(mirrorMethodCall: {
        mirrorID: string;
        funcName: string;
        callbackID: string;
        args: any;
    }): void;
    registerFunctionWithFuncName(funcName: string, callback: Function): void;
    findFunctionWithFuncName(funcName: string): Function | undefined;
    removeFunctionWithFuncName(funcName: string): void;
    flutterCallFuncNameMethod(mirrorMethodCall: {
        funcName: string;
        args: any;
    }): any;
    resetData(): void;
}
export { MXMirror };
