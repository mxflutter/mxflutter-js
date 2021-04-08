import { MXWidget, MXBaseKey, MXBuildProfileInfo, MXDartClass } from '@mxflutter/mxflutter-base';
import { MXJSStatelessElement, MXJSStatefulElement, MXJSElement } from '../element/element';
import { WidgetsBindingObserver } from './widgets-binding-observer';
export declare abstract class MXJSBaseWidget implements MXWidget {
    key: MXBaseKey | undefined;
    className: string;
    name?: string;
    initialized: boolean;
    isJSLazyWidget: boolean;
    isLazyWidgetDelayBuild: boolean;
    flutterHostWidgetID: string;
    enableProfile: boolean;
    flutterPushParams: Object;
    constructor(name?: string, { key }?: {
        key?: MXBaseKey;
    });
    init(): void;
    onBuildEnd(args: any): void;
    isBuildSyncWithFlutter(): boolean;
    get pathComponent(): string;
    logString(): string;
    hostWidgetFirstFrameEnd(profileInfo: any): void;
    abstract createElement(): MXJSElement;
}
export declare abstract class MXJSStatelessWidget extends MXJSBaseWidget {
    constructor(name?: string, { key }?: {
        key?: MXBaseKey;
    });
    init(): void;
    createElement(): MXJSStatelessElement;
    onFirstFrameEnd(profileInfo: MXBuildProfileInfo | null): void;
    abstract build(buildContext: MXJSElement): MXWidget | null;
}
export declare abstract class MXJSStatefulWidget extends MXJSBaseWidget {
    constructor(name?: string, { key }?: {
        key?: MXBaseKey;
    });
    init(): void;
    createElement(): MXJSStatefulElement;
    abstract createState(): MXJSWidgetState;
}
export declare abstract class MXJSWidgetState extends WidgetsBindingObserver {
    static new: Function;
    widget: MXJSStatefulWidget | null;
    element: MXJSStatefulElement | null;
    protected isBuildEnd: boolean;
    protected setStateCallback: Function | null;
    constructor();
    get context(): MXJSStatefulElement | null;
    get mounted(): boolean;
    initState(): void;
    setState(fun: Function): void;
    onBuildEnd(args: any): void;
    onFirstFrameEnd(profileInfo: MXBuildProfileInfo | null): void;
    dispose(): void;
    didUpdateWidget(oldWidget: MXJSStatefulWidget): void;
    didChangeDependencies(): void;
    abstract build(buildContext: MXJSElement): MXWidget | null;
}
export declare class MXJSStatelessWapperWidget extends MXJSStatelessWidget {
    private child;
    constructor(child: MXWidget | null, { key }?: {
        key?: MXBaseKey;
    });
    build(): MXWidget;
}
export declare class MXJSSingleChildStatefulWidget extends MXJSStatefulWidget {
    child: MXWidget;
    constructor(child: MXWidget, { key, name }?: {
        key?: MXBaseKey;
        name?: string;
    });
    createState(): MXJSSingleChildStatefulWidgetState;
}
declare class MXJSSingleChildStatefulWidgetState extends MXJSWidgetState {
    build(buildContext: MXJSElement): MXWidget | null;
    onFirstFrameEnd(profileInfo: any): void;
}
export declare class MXJSHostStatefulWapperWidget extends MXJSSingleChildStatefulWidget {
    constructor(child: MXWidget, { key }?: {
        key?: MXBaseKey;
    });
}
export declare class MXJSLazyStatefulWapperWidget extends MXJSSingleChildStatefulWidget {
    constructor(child: MXWidget, { key }?: {
        key?: MXBaseKey;
    });
}
export declare class MXJSPageWidget extends MXDartClass {
    jsWidgetName: string;
    key: MXBaseKey | undefined;
    flutterPushParams: any | undefined;
    navPushingWidgetElementID: string | undefined;
    constructor({ jsWidgetName, key, flutterPushParams, }?: {
        jsWidgetName?: string;
        key?: MXBaseKey | undefined;
        flutterPushParams?: any | undefined;
    });
}
export {};
