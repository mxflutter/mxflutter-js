import { MXJSBaseWidget } from '../widget/widget';
import { WidgetsFlutterBinding } from '../widget/widgets-binding';
/**
 * MXJSFlutterApp 用于开发者的JS代码和Flutter MXUIEngine的交互
 * 开发者需要继承MXJSFlutterApp，重载createJSWidgetWithName函数，根据WidgetName创建框架需要的Widget
 */
export declare abstract class MXJSFlutterApp {
    widgetsBinding: WidgetsFlutterBinding;
    name: string;
    initialRoute: string;
    constructor(name: string, initialRoute: string);
    nativeCall(argsStr: string): any;
    private initWidgetsBinding;
    /**
     * 子类需要重载
     * 当Flutter通过MXJSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage",...);
     * push页面时，在这里根据widgetName 创建你自己的Widget
     * @param widgetName 页面名称
     * @param flutterPushParams 页面参数
     * @param bizPath 业务路径
     */
    abstract createJSWidgetWithName(widgetName: string, flutterPushParams: Object, bizPath?: string): MXJSBaseWidget;
}
