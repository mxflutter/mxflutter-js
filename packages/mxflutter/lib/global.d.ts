import { MXJSFlutterApp } from './core/base-app';
import { MXJSBaseWidget } from './widget/widget';
interface PageModuleInfo {
    name: string;
    RootWidget: typeof MXJSBaseWidget;
}
/** *
 * JSCore/V8实例, 对应一个APP实例
 */
export declare class GlobalJSFlutterApp extends MXJSFlutterApp {
    private static instance;
    static runApp(): void;
    static getInstance(): GlobalJSFlutterApp;
    private widgetPageModuleMap;
    private constructor();
    regist(moduleInfo: PageModuleInfo): void;
    createJSWidgetWithName(widgetName: any, flutterPushParams: any, bizPath: any): any;
}
export {};
