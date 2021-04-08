import { MXLifecycleDartClass } from '@mxflutter/mxflutter-base';
import { MXJSBuildOwner } from '../core/build-owner';
import { MXJSRootMgrElement } from '../element/element';
import { MXJSFlutterApp } from '../core/base-app';
import { WidgetsBindingObserver } from './widgets-binding-observer';
export interface FlutterNavPushArgs {
    widgetID: string;
    widgetName: string;
    themeData: any;
    mediaQueryData: any;
    iconThemeData: any;
}
interface NativeCallArgs {
    method: string;
    arguments: any;
}
export declare class WidgetsBinding extends MXLifecycleDartClass {
    static instance: WidgetsBinding | null;
    jsFlutterApp: MXJSFlutterApp;
    buildOwner: MXJSBuildOwner;
    rootMgrElement: MXJSRootMgrElement;
    observers: WidgetsBindingObserver[];
    constructor();
    initInstances(): void;
    addObserver(observer: WidgetsBindingObserver): void;
    removeObserver(observer: WidgetsBindingObserver): void;
    onObserverEvent(args: {
        funcName: string;
        eventArgs: any;
    }): void;
    nativeCall(args: NativeCallArgs): any;
    private flutterCallFrequencyLimitCallList;
    private flutterCallNavigatorPushWithName;
    private navigatorPushWithName;
    private attachRootWidget;
    private flutterCallRefreshLazyWidget;
    private flutterCallOnEventCallback;
    private flutterCallOnBuildEnd;
    private flutterCallOnDispose;
    private flutterCallOnFirstFrameEnd;
    private nativeCallInitProfileInfo;
    private futterCallDidChangeDependencies;
    private syncPropsCallback;
}
export declare class WidgetsFlutterBinding extends WidgetsBinding {
    static ensureInitialized(): WidgetsFlutterBinding;
}
export {};
