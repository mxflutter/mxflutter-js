import { CupertinoTextThemeData } from './text-theme';
import { Brightness, Color } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { StatelessWidget$, InheritedWidget } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class CupertinoTheme extends StatelessWidget$ {
    data: CupertinoThemeData;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        data?: CupertinoThemeData;
        child?: MXWidget;
    });
}
export { CupertinoTheme };
declare class _InheritedCupertinoTheme extends InheritedWidget {
    theme: CupertinoTheme;
    constructor(namedParameters?: {
        key?: Key;
        theme?: CupertinoTheme;
        child?: MXWidget;
    });
}
export { _InheritedCupertinoTheme };
declare class CupertinoThemeData extends MXDartClass {
    defaults: _CupertinoThemeDefaults;
    brightness: Brightness;
    primaryColor: Color;
    primaryContrastingColor: Color;
    textTheme: CupertinoTextThemeData;
    barBackgroundColor: Color;
    scaffoldBackgroundColor: Color;
    constructor(namedParameters?: {
        brightness?: Brightness;
        primaryColor?: Color;
        primaryContrastingColor?: Color;
        textTheme?: CupertinoTextThemeData;
        barBackgroundColor?: Color;
        scaffoldBackgroundColor?: Color;
    });
    static raw(brightness?: Brightness, primaryColor?: Color, primaryContrastingColor?: Color, textTheme?: CupertinoTextThemeData, barBackgroundColor?: Color, scaffoldBackgroundColor?: Color): CupertinoThemeData;
}
export { CupertinoThemeData };
declare class _NoDefaultCupertinoThemeData extends CupertinoThemeData {
    primaryColor: Color;
    primaryContrastingColor: Color;
    textTheme: CupertinoTextThemeData;
    barBackgroundColor: Color;
    scaffoldBackgroundColor: Color;
    constructor(brightness?: Brightness, primaryColor?: Color, primaryContrastingColor?: Color, textTheme?: CupertinoTextThemeData, barBackgroundColor?: Color, scaffoldBackgroundColor?: Color);
}
export { _NoDefaultCupertinoThemeData };
declare class _CupertinoThemeDefaults extends MXDartClass {
    brightness: Brightness;
    primaryColor: Color;
    primaryContrastingColor: Color;
    barBackgroundColor: Color;
    scaffoldBackgroundColor: Color;
    textThemeDefaults: _CupertinoTextThemeDefaults;
    constructor(brightness?: Brightness, primaryColor?: Color, primaryContrastingColor?: Color, barBackgroundColor?: Color, scaffoldBackgroundColor?: Color, textThemeDefaults?: _CupertinoTextThemeDefaults);
}
export { _CupertinoThemeDefaults };
declare class _CupertinoTextThemeDefaults extends MXDartClass {
    labelColor: Color;
    inactiveGray: Color;
    constructor(labelColor?: Color, inactiveGray?: Color);
}
export { _CupertinoTextThemeDefaults };
declare class _DefaultCupertinoTextThemeData extends CupertinoTextThemeData {
    labelColor: Color;
    inactiveGray: Color;
    constructor(namedParameters?: {
        labelColor?: Color;
        inactiveGray?: Color;
        primaryColor?: Color;
    });
}
export { _DefaultCupertinoTextThemeData };
