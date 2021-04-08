import { HeroController } from '../widgets/heroes';
import { ScrollBehavior } from '../widgets/scroll-configuration';
import { Key } from '../foundation/key';
import { Color, Locale } from '../../../mx-dart-sdk';
import { ThemeData } from './theme-data';
import { RouteInformationProvider, RouteInformationParser, RouterDelegate, BackButtonDispatcher } from '../widgets/router';
import { StatefulWidget, GlobalKey, State } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum ThemeMode {
    system = "{ \"_name\": \"ThemeMode.system\", \"index\": 0 }",
    light = "{ \"_name\": \"ThemeMode.light\", \"index\": 1 }",
    dark = "{ \"_name\": \"ThemeMode.dark\", \"index\": 2 }"
}
export { ThemeMode };
declare class MaterialApp extends StatefulWidget {
    navigatorKey: GlobalKey;
    home: MXWidget;
    routes: Map<any, any>;
    initialRoute: string;
    onGenerateRoute: any;
    onGenerateInitialRoutes: any;
    onUnknownRoute: any;
    navigatorObservers: Array<any>;
    routeInformationProvider: RouteInformationProvider;
    routeInformationParser: RouteInformationParser;
    routerDelegate: RouterDelegate;
    backButtonDispatcher: BackButtonDispatcher;
    builder: any;
    title: string;
    onGenerateTitle: any;
    theme: ThemeData;
    darkTheme: ThemeData;
    highContrastTheme: ThemeData;
    highContrastDarkTheme: ThemeData;
    themeMode: ThemeMode;
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
    debugShowCheckedModeBanner: boolean;
    shortcuts: Map<any, any>;
    actions: Map<any, any>;
    debugShowMaterialGrid: boolean;
    constructor(namedParameters?: {
        key?: Key;
        navigatorKey?: GlobalKey;
        home?: MXWidget;
        routes?: Map<any, any>;
        initialRoute?: string;
        onGenerateRoute?: any;
        onGenerateInitialRoutes?: any;
        onUnknownRoute?: any;
        navigatorObservers?: Array<any>;
        builder?: any;
        title?: string;
        onGenerateTitle?: any;
        color?: Color;
        theme?: ThemeData;
        darkTheme?: ThemeData;
        highContrastTheme?: ThemeData;
        highContrastDarkTheme?: ThemeData;
        themeMode?: ThemeMode;
        locale?: Locale;
        localizationsDelegates?: any;
        localeListResolutionCallback?: any;
        localeResolutionCallback?: any;
        supportedLocales?: any;
        debugShowMaterialGrid?: boolean;
        showPerformanceOverlay?: boolean;
        checkerboardRasterCacheImages?: boolean;
        checkerboardOffscreenLayers?: boolean;
        showSemanticsDebugger?: boolean;
        debugShowCheckedModeBanner?: boolean;
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
        color?: Color;
        theme?: ThemeData;
        darkTheme?: ThemeData;
        highContrastTheme?: ThemeData;
        highContrastDarkTheme?: ThemeData;
        themeMode?: ThemeMode;
        locale?: Locale;
        localizationsDelegates?: any;
        localeListResolutionCallback?: any;
        localeResolutionCallback?: any;
        supportedLocales?: any;
        debugShowMaterialGrid?: boolean;
        showPerformanceOverlay?: boolean;
        checkerboardRasterCacheImages?: boolean;
        checkerboardOffscreenLayers?: boolean;
        showSemanticsDebugger?: boolean;
        debugShowCheckedModeBanner?: boolean;
        shortcuts?: Map<any, any>;
        actions?: Map<any, any>;
    }): MaterialApp;
}
export { MaterialApp };
declare class _MaterialScrollBehavior extends ScrollBehavior {
}
export { _MaterialScrollBehavior };
declare class _MaterialAppState extends State {
    heroController: HeroController;
}
export { _MaterialAppState };
