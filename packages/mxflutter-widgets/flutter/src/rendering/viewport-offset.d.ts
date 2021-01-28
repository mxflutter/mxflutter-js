import { ChangeNotifier } from '../foundation/change-notifier';
declare enum ScrollDirection {
    idle = "{ \"_name\": \"ScrollDirection.idle\", \"index\": 0 }",
    forward = "{ \"_name\": \"ScrollDirection.forward\", \"index\": 1 }",
    reverse = "{ \"_name\": \"ScrollDirection.reverse\", \"index\": 2 }"
}
export { ScrollDirection };
declare abstract class ViewportOffset extends ChangeNotifier {
    static fixed(value?: number): {
        listeners: any;
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
    static zero(): {
        listeners: any;
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
export { ViewportOffset };
declare class _FixedViewportOffset extends ViewportOffset {
    pixels: number;
    constructor(_pixels?: number);
    static zero(): _FixedViewportOffset;
}
export { _FixedViewportOffset };
