import { Key } from '../foundation/key';
import { InheritedWidget, BuildContext$ } from './framework';
import { EdgeInsets } from '../painting/edge-insets';
import { Size, Brightness, Window } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare enum Orientation {
    portrait = "{ \"_name\": \"Orientation.portrait\", \"index\": 0 }",
    landscape = "{ \"_name\": \"Orientation.landscape\", \"index\": 1 }"
}
export { Orientation };
declare class MediaQueryData extends MXDartClass {
    size: Size;
    devicePixelRatio: number;
    textScaleFactor: number;
    platformBrightness: Brightness;
    viewInsets: EdgeInsets;
    padding: EdgeInsets;
    viewPadding: EdgeInsets;
    systemGestureInsets: EdgeInsets;
    alwaysUse24HourFormat: boolean;
    accessibleNavigation: boolean;
    invertColors: boolean;
    highContrast: boolean;
    disableAnimations: boolean;
    boldText: boolean;
    navigationMode: NavigationMode;
    constructor(namedParameters?: {
        size?: Size;
        devicePixelRatio?: number;
        textScaleFactor?: number;
        platformBrightness?: Brightness;
        padding?: EdgeInsets;
        viewInsets?: EdgeInsets;
        systemGestureInsets?: EdgeInsets;
        viewPadding?: EdgeInsets;
        alwaysUse24HourFormat?: boolean;
        accessibleNavigation?: boolean;
        invertColors?: boolean;
        highContrast?: boolean;
        disableAnimations?: boolean;
        boldText?: boolean;
        navigationMode?: NavigationMode;
    });
    static fromWindow(window?: Window): MediaQueryData;
    static fromJson(mapObj: any): MediaQueryData;
}
export { MediaQueryData };
declare class MediaQuery extends InheritedWidget {
    data: MediaQueryData;
    constructor(namedParameters?: {
        key?: Key;
        data?: MediaQueryData;
        child?: MXWidget;
    });
    static removePadding(namedParameters?: {
        key?: Key;
        context?: BuildContext$;
        removeLeft?: boolean;
        removeTop?: boolean;
        removeRight?: boolean;
        removeBottom?: boolean;
        child?: MXWidget;
    }): MediaQuery;
    static removeViewInsets(namedParameters?: {
        key?: Key;
        context?: BuildContext$;
        removeLeft?: boolean;
        removeTop?: boolean;
        removeRight?: boolean;
        removeBottom?: boolean;
        child?: MXWidget;
    }): MediaQuery;
    static removeViewPadding(namedParameters?: {
        key?: Key;
        context?: BuildContext$;
        removeLeft?: boolean;
        removeTop?: boolean;
        removeRight?: boolean;
        removeBottom?: boolean;
        child?: MXWidget;
    }): MediaQuery;
    static of(context: any): MediaQueryData;
}
export { MediaQuery };
declare enum NavigationMode {
    traditional = "{ \"_name\": \"NavigationMode.traditional\", \"index\": 0 }",
    directional = "{ \"_name\": \"NavigationMode.directional\", \"index\": 1 }"
}
export { NavigationMode };
