import { HeroController } from '../widgets/heroes';
import { ScrollBehavior } from '../widgets/scroll-configuration';
import { Key } from '../foundation/key';
import { Color, Locale } from '../../../mx-dart-sdk';
import { CupertinoThemeData } from './theme';
import { StatefulWidget$, GlobalKey, State$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CupertinoApp extends StatefulWidget$ {
    navigatorKey: GlobalKey;
    home: MXWidget;
    theme: CupertinoThemeData;
    routes: Map<any, any>;
    initialRoute: string;
    onGenerateRoute: any;
    onGenerateInitialRoutes: any;
    onUnknownRoute: any;
    navigatorObservers: Array<any>;
    builder: any;
    title: string;
    onGenerateTitle: any;
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
    constructor(namedParameters?: {
        key?: Key;
        navigatorKey?: GlobalKey;
        home?: MXWidget;
        theme?: CupertinoThemeData;
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
        locale?: Locale;
        localizationsDelegates?: any;
        localeListResolutionCallback?: any;
        localeResolutionCallback?: any;
        supportedLocales?: any;
        showPerformanceOverlay?: boolean;
        checkerboardRasterCacheImages?: boolean;
        checkerboardOffscreenLayers?: boolean;
        showSemanticsDebugger?: boolean;
        debugShowCheckedModeBanner?: boolean;
        shortcuts?: Map<any, any>;
        actions?: Map<any, any>;
    });
}
export { CupertinoApp };
declare class _AlwaysCupertinoScrollBehavior extends ScrollBehavior {
}
export { _AlwaysCupertinoScrollBehavior };
declare class _CupertinoAppState extends State$ {
    heroController: HeroController;
}
export { _CupertinoAppState };
