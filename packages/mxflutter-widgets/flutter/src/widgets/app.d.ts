import { Key } from '../foundation/key';
import { Color, Locale } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { RouteInformationParser, RouterDelegate, BackButtonDispatcher, RouteInformationProvider, PlatformRouteInformationProvider } from './router';
import { StatefulWidget, GlobalKey, State } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class WidgetsApp extends StatefulWidget {
    navigatorKey: GlobalKey;
    onGenerateRoute: any;
    onGenerateInitialRoutes: any;
    pageRouteBuilder: any;
    routeInformationParser: RouteInformationParser;
    routerDelegate: RouterDelegate;
    backButtonDispatcher: BackButtonDispatcher;
    routeInformationProvider: RouteInformationProvider;
    home: MXWidget;
    routes: Map<any, any>;
    onUnknownRoute: any;
    initialRoute: string;
    navigatorObservers: Array<any>;
    builder: any;
    title: string;
    onGenerateTitle: any;
    textStyle: TextStyle;
    color: Color;
    locale: Locale;
    localizationsDelegates: any;
    localeListResolutionCallback: any;
    localeResolutionCallback: any;
    supportedLocales: any;
    showPerformanceOverlay: boolean;
    checkerboardRasterCacheImages: boolean;
    checkerboardOffscreenLayers: boolean;
    showSemanticsDebugger: boolean;
    debugShowWidgetInspector: boolean;
    inspectorSelectButtonBuilder: any;
    debugShowCheckedModeBanner: boolean;
    shortcuts: Map<any, any>;
    actions: Map<any, any>;
    constructor(namedParameters?: {
        key?: Key;
        navigatorKey?: GlobalKey;
        onGenerateRoute?: any;
        onGenerateInitialRoutes?: any;
        onUnknownRoute?: any;
        navigatorObservers?: Array<any>;
        initialRoute?: string;
        pageRouteBuilder?: any;
        home?: MXWidget;
        routes?: Map<any, any>;
        builder?: any;
        title?: string;
        onGenerateTitle?: any;
        textStyle?: TextStyle;
        color?: Color;
        locale?: Locale;
        localizationsDelegates?: any;
        localeListResolutionCallback?: any;
        localeResolutionCallback?: any;
        supportedLocales?: any;
        showPerformanceOverlay?: boolean;
        checkerboardRasterCacheImages?: boolean;
        checkerboardOffscreenLayers?: boolean;
        showSemanticsDebugger?: boolean;
        debugShowWidgetInspector?: boolean;
        debugShowCheckedModeBanner?: boolean;
        inspectorSelectButtonBuilder?: any;
        shortcuts?: Map<any, any>;
        actions?: Map<any, any>;
    });
    static router(namedParameters?: {
        key?: Key;
        routeInformationProvider?: RouteInformationProvider;
        routeInformationParser?: RouteInformationParser;
        routerDelegate?: RouterDelegate;
        backButtonDispatcher?: BackButtonDispatcher;
        builder?: any;
        title?: string;
        onGenerateTitle?: any;
        textStyle?: TextStyle;
        color?: Color;
        locale?: Locale;
        localizationsDelegates?: any;
        localeListResolutionCallback?: any;
        localeResolutionCallback?: any;
        supportedLocales?: any;
        showPerformanceOverlay?: boolean;
        checkerboardRasterCacheImages?: boolean;
        checkerboardOffscreenLayers?: boolean;
        showSemanticsDebugger?: boolean;
        debugShowWidgetInspector?: boolean;
        debugShowCheckedModeBanner?: boolean;
        inspectorSelectButtonBuilder?: any;
        shortcuts?: Map<any, any>;
        actions?: Map<any, any>;
    }): WidgetsApp;
}
export { WidgetsApp };
declare class _WidgetsAppState extends State {
    defaultRouteInformationProvider: PlatformRouteInformationProvider;
    navigator: GlobalKey;
    locale: Locale;
}
export { _WidgetsAppState };
declare class _MediaQueryFromWindow extends StatefulWidget {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { _MediaQueryFromWindow };
declare class _MediaQueryFromWindowsState extends State {
}
export { _MediaQueryFromWindowsState };
