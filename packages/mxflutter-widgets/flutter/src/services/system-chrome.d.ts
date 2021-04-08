import { MXLifecycleWidgetBase } from '@mxflutter/mxflutter-base';
import { Color, Brightness } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum DeviceOrientation {
    portraitUp = "{ \"_name\": \"DeviceOrientation.portraitUp\", \"index\": 0 }",
    landscapeLeft = "{ \"_name\": \"DeviceOrientation.landscapeLeft\", \"index\": 1 }",
    portraitDown = "{ \"_name\": \"DeviceOrientation.portraitDown\", \"index\": 2 }",
    landscapeRight = "{ \"_name\": \"DeviceOrientation.landscapeRight\", \"index\": 3 }"
}
export { DeviceOrientation };
declare class ApplicationSwitcherDescription extends MXDartClass {
    label: string;
    primaryColor: number;
    constructor(namedParameters?: {
        label?: string;
        primaryColor?: number;
    });
}
export { ApplicationSwitcherDescription };
declare enum SystemUiOverlay {
    top = "{ \"_name\": \"SystemUiOverlay.top\", \"index\": 0 }",
    bottom = "{ \"_name\": \"SystemUiOverlay.bottom\", \"index\": 1 }"
}
export { SystemUiOverlay };
declare class SystemUiOverlayStyle extends MXDartClass {
    systemNavigationBarColor: Color;
    systemNavigationBarDividerColor: Color;
    systemNavigationBarIconBrightness: Brightness;
    statusBarColor: Color;
    statusBarBrightness: Brightness;
    statusBarIconBrightness: Brightness;
    constructor(namedParameters?: {
        systemNavigationBarColor?: Color;
        systemNavigationBarDividerColor?: Color;
        systemNavigationBarIconBrightness?: Brightness;
        statusBarColor?: Color;
        statusBarBrightness?: Brightness;
        statusBarIconBrightness?: Brightness;
    });
    static get light(): SystemUiOverlayStyle;
    static get dark(): SystemUiOverlayStyle;
}
export { SystemUiOverlayStyle };
declare class SystemChrome extends MXLifecycleWidgetBase {
    static setSystemUIOverlayStyle(style?: SystemUiOverlayStyle): void;
}
export { SystemChrome };
