declare const mxMirrorClassNameKey = "className";
declare class MXMirrorObjMethodCall {
    widgetID?: string;
    mirrorID?: string;
    className?: string;
    funcName?: string;
    args: any;
    constructor({ widgetID, mirrorID, className, funcName, args, }?: {
        widgetID?: string;
        mirrorID?: string;
        className?: string;
        funcName?: string;
        args?: any;
    });
    toJsonMap(): any;
}
declare class MXDartClass {
    className: string;
    mirrorID: string;
    constructor();
}
declare class MXLifecycleDartClassBase extends MXDartClass {
    createMirrorObj(newMirrorObjCall: MXMirrorObjMethodCall): void;
    invokeMirrorObjMethod(methodArgs: MXMirrorObjMethodCall, callback?: any): void;
    invokeMirrorObjMethodAsyc(methodArgs: MXMirrorObjMethodCall): Promise<unknown>;
    invokeMirrorObjMethodSync(methodArgs: MXMirrorObjMethodCall): string;
    addCallback(callback: Function): string;
    removeCallback(callbackID: string): void;
    release(): void;
    fillInvokeMethodArgs(args: MXMirrorObjMethodCall): void;
}
declare abstract class MXLifecycleDartClass extends MXLifecycleDartClassBase {
    constructor(newDartMirrorObjCall: MXMirrorObjMethodCall);
}
export { MXDartClass, MXLifecycleDartClassBase, MXLifecycleDartClass, MXMirrorObjMethodCall, mxMirrorClassNameKey };
