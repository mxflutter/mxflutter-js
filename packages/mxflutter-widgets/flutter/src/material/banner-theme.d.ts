import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class MaterialBannerThemeData extends MXDartClass {
    backgroundColor: Color;
    contentTextStyle: TextStyle;
    padding: EdgeInsetsGeometry;
    leadingPadding: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        contentTextStyle?: TextStyle;
        padding?: EdgeInsetsGeometry;
        leadingPadding?: EdgeInsetsGeometry;
    });
}
export { MaterialBannerThemeData };
declare class MaterialBannerTheme extends InheritedTheme {
    data: MaterialBannerThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: MaterialBannerThemeData;
        child?: MXWidget;
    });
}
export { MaterialBannerTheme };
