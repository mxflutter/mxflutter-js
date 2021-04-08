import { MXWidget, MXBaseKey, MXMirrorWidget, MXBuildProfileInfo } from '@mxflutter/mxflutter-base';
import { MXJSBaseWidget, MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState, MXJSPageWidget } from '../widget/widget';
import { MXJSBuildOwner } from '../core/build-owner';
import { Size } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
export declare class MXWidgetRefreshFlutterData {
    key: MXBaseKey;
    name: string;
    className: string;
    navPushingWidgetElementID: string | null;
    enableProfile: any;
    widgetID: string;
    buildWidgetDataSeq: string;
    widgetData: any;
    isJSLazyWidget: boolean;
}
export declare abstract class MXJSBuildContext {
    widget: MXJSBaseWidget;
    owner: MXJSBuildOwner;
    inheritedInfo?: any;
    mediaQueryData?: any;
    themeData?: any;
    iconThemeData?: any;
    inheritedWidgets?: Map<String, any>;
    constructor();
    get size(): Size;
    inheritBuildContext(fromBuildContext: any): void;
    setInheritedInfo(args: any): void;
    dependOnInheritedWidget(widgetName: string, parseOfDataHandler: (jsonMap: any) => any): any;
    clearInheritedWidgetCache(): void;
    abstract buildContextJson2DartInfo(): any;
}
export declare class MXJSElement extends MXJSBuildContext {
    protected static widgetElementIDFeed: number;
    widgetElementID: string;
    inDirtyList: boolean;
    isPushed: boolean;
    rootMgrElement: MXJSElement | null;
    get isRootNode(): boolean;
    profileInfo: MXBuildProfileInfo | null;
    buildWidgetDataSeq: string;
    currentWidgetTree: MXJSWidgetTree | null;
    protected parent: MXJSElement | null;
    protected dirty: boolean;
    protected buildingWidgetTree: MXJSWidgetTree | null;
    protected preWidgetTree: MXJSWidgetTree | null;
    protected buildWidgetDataSeqFeed: number;
    protected buildSeq2WTreeMap: Map<string, MXJSWidgetTree>;
    protected navPushingWidgetElement: MXJSElement | null;
    protected navPushingWidgetElementID: string | null;
    protected navPushedWidgetElements: Map<string, MXJSElement>;
    constructor(widget: MXJSBaseWidget);
    logString(): string;
    widgetLogString(): string;
    assignOwner(owner: MXJSBuildOwner): void;
    navigatorPush(pushWidget: MXJSBaseWidget | MXMirrorWidget | MXJSPageWidget): void;
    navigatorPop(): void;
    navigatorPushNamed(routeName: string, mxArguments: any): void;
    markNeedsBuild(): void;
    mount(parent: MXJSElement | null, newSlot?: any): MXWidgetRefreshFlutterData;
    rebuild(): MXWidgetRefreshFlutterData;
    findChild(widgetID: string): MXJSElement | undefined;
    removeChild(child: MXJSElement): void;
    invokeCallback(buildWidgetDataSeq: string, callID: string, args: any): any;
    onBuildEnd(buildWidgetDataSeq: string): void;
    onFirstFrameEnd(profileInfo: any): void;
    onDispose(isParentDispose?: boolean): void;
    dispose(isParentDispose: boolean): void;
    clearBuildInfo(): void;
    didChangeDependencies(): void;
    debugLogElementTree(): string;
    debugPrintElementTree(): void;
    handleSyncCallbackResult(jsWidgetTree: MXJSWidgetTree, builtValue: any, elementPath?: string): any;
    buildContextJson2DartInfo(): any;
    protected firstBuild(): MXWidgetRefreshFlutterData;
    protected performRebuild(): MXWidgetRefreshFlutterData;
    protected build(): MXWidget | null;
    protected update(newStatefulWidget: MXJSBaseWidget): MXWidgetRefreshFlutterData | null;
    protected buildRefreshFlutterData(built: MXWidget | null): MXWidgetRefreshFlutterData;
    protected inflateWidgetTree(jsWidgetTree: MXJSWidgetTree, builtValue: any, elementPath?: string): any;
    protected updateStatefulWidget(jsWidgetTree: MXJSWidgetTree, statefulWidget: MXJSStatefulWidget, elementPath: string): any;
    protected inflateWidget(newWidget: MXJSBaseWidget, newSlot?: any): MXJSElement;
    protected preBuildFlutterWidget(flutterWidget: MXMirrorWidget): void;
    preBuildVsync(value: any, element: any): any;
    protected confirmCurrentWidgetTree(): void;
    protected findElementFromWidgetTree(widgetTree: MXJSWidgetTree, widgetID: string): MXJSElement;
    protected clearWidgetTree(buildWidgetDataSeq: string): void;
    protected clearPushedWidgetElements(): void;
    protected removePushedWidget(element: any): void;
    protected wappingPushingWidget(pushWidget: MXJSBaseWidget | MXMirrorWidget): MXJSBaseWidget;
    protected getWidgetTreeBuildSeq(widgetTree: MXJSWidgetTree | null): string;
    protected updateFirstFrameProfileInfo(profileInfo: any): void;
    protected navigatorPushBundleJSPage(pushWidget: MXJSPageWidget): void;
}
export declare class MXJSWidgetTree {
    buildWidgetDataSeq: string;
    ownerElement: MXJSElement;
    widgetID2ChildrenElements: Map<string, MXJSElement>;
    private childrenElements;
    private callbackIDFeed;
    private callbackID2fun;
    constructor(buildWidgetDataSeq: string);
    findElement(elementPath: string): MXJSElement | null;
    addChildElement(elementPath: string, element: MXJSElement): void;
    createCallbackID(callback: any, callbackPath: string): string;
    invokeCallback(callbackID: string, args: any[]): any;
    findCallback(callbackID: string): any;
    canInvoke(callbackID: string): boolean;
    private generateCallbackID;
}
export declare class MXJSStatelessElement extends MXJSElement {
    onFirstFrameEnd(profileInfo: any): void;
    protected build(): MXWidget | null;
    protected update(newWidget: MXJSStatelessWidget): MXWidgetRefreshFlutterData | null;
}
export declare class MXJSStatefulElement extends MXJSElement {
    state: MXJSWidgetState | null;
    constructor(widget: MXJSStatefulWidget);
    lazyModeFirstBuild(): void;
    onBuildEnd(buildWidgetDataSeq: string): void;
    onFirstFrameEnd(profileInfo: any): void;
    dispose(isParentDispose: boolean): void;
    protected setupState(): void;
    protected firstBuild(): MXWidgetRefreshFlutterData;
    protected build(): MXWidget | null;
    protected update(newStatefulWidget: MXJSStatefulWidget): MXWidgetRefreshFlutterData | null;
}
export declare class MXJSRootMgrElement extends MXJSElement {
    constructor();
    addRootElement(rootElement: MXJSElement): void;
}
