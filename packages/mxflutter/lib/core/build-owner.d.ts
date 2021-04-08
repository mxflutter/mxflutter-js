import { MXJSElement, MXWidgetRefreshFlutterData } from '../element/element';
export declare class MXJSBuildOwner {
    dirtyElements: MXJSElement[];
    scheduledFlushDirtyElements: boolean;
    dirtyElementsNeedsResorting: boolean;
    constructor();
    scheduleBuildFor(element: MXJSElement): void;
    buildScope(context: MXJSElement | null, mountCallback?: Function): MXWidgetRefreshFlutterData | null;
    callFlutterRebuildWidget(refreshFlutterData: MXWidgetRefreshFlutterData, element?: MXJSElement, startBuildTreeTime?: number): void;
    callFlutterPushWidget(refreshFlutterData: MXWidgetRefreshFlutterData, element?: MXJSElement, startBuildTreeTime?: number): void;
    callFlutterPushNamedWidget(navPushingWidgetElementID: string, routeName: string, mxArguments: any): void;
    callFlutterShowWidget(method: string, refreshFlutterData: MXWidgetRefreshFlutterData, element?: MXJSElement, startBuildTreeTime?: number): void;
    encodeWidgetTree(refreshFlutterData: MXWidgetRefreshFlutterData): string;
    finalizeTree(): void;
}
