import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { Duration } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { Decoration } from '../painting/decoration';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class TooltipThemeData extends MXDartClass {
    height: number;
    padding: EdgeInsetsGeometry;
    margin: EdgeInsetsGeometry;
    verticalOffset: number;
    preferBelow: boolean;
    excludeFromSemantics: boolean;
    decoration: Decoration;
    textStyle: TextStyle;
    waitDuration: Duration;
    showDuration: Duration;
    constructor(namedParameters?: {
        height?: number;
        padding?: EdgeInsetsGeometry;
        margin?: EdgeInsetsGeometry;
        verticalOffset?: number;
        preferBelow?: boolean;
        excludeFromSemantics?: boolean;
        decoration?: Decoration;
        textStyle?: TextStyle;
        waitDuration?: Duration;
        showDuration?: Duration;
    });
}
export { TooltipThemeData };
declare class TooltipTheme extends InheritedTheme {
    data: TooltipThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: TooltipThemeData;
        child?: MXWidget;
    });
}
export { TooltipTheme };
