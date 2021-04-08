import { MXLifecycleWidgetBase } from '@mxflutter/mxflutter-base';
declare abstract class Listenable extends MXLifecycleWidgetBase {
    static merge(listenables?: Array<any>): {
        createMirrorObj(newMirrorObjCall: import("@mxflutter/mxflutter-base/lib/mirror/base-type").MXMirrorObjMethodCall): void;
        invokeMirrorObjMethod(methodArgs: import("@mxflutter/mxflutter-base/lib/mirror/base-type").MXMirrorObjMethodCall, callback?: any): void;
        invokeMirrorObjMethodAsyc(methodArgs: import("@mxflutter/mxflutter-base/lib/mirror/base-type").MXMirrorObjMethodCall): Promise<unknown>;
        invokeMirrorObjMethodSync(methodArgs: import("@mxflutter/mxflutter-base/lib/mirror/base-type").MXMirrorObjMethodCall): string;
        addCallback(callback: Function): string;
        removeCallback(callbackID: string): void;
        release(): void;
        fillInvokeMethodArgs(args: import("@mxflutter/mxflutter-base/lib/mirror/base-type").MXMirrorObjMethodCall): void;
        className: string;
        mirrorID: string;
    };
}
export { Listenable };
declare abstract class ValueListenable extends Listenable {
}
export { ValueListenable };
declare class ChangeNotifier extends MXLifecycleWidgetBase {
    listeners: any;
}
export { ChangeNotifier };
declare class _MergingListenable extends Listenable {
    children: Array<any>;
    constructor(_children?: Array<any>);
}
export { _MergingListenable };
declare class ValueNotifier extends ChangeNotifier {
    value: any;
    constructor(_value?: any);
}
export { ValueNotifier };
