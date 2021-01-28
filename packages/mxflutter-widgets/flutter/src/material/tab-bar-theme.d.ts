import { TextStyle } from '../painting/text-style';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color } from '../../../mx-dart-sdk';
import { TabBarIndicatorSize } from './tabs';
import { Decoration } from '../painting/decoration';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class TabBarTheme extends MXDartClass {
    indicator: Decoration;
    indicatorSize: TabBarIndicatorSize;
    labelColor: Color;
    labelPadding: EdgeInsetsGeometry;
    labelStyle: TextStyle;
    unselectedLabelColor: Color;
    unselectedLabelStyle: TextStyle;
    constructor(namedParameters?: {
        indicator?: Decoration;
        indicatorSize?: TabBarIndicatorSize;
        labelColor?: Color;
        labelPadding?: EdgeInsetsGeometry;
        labelStyle?: TextStyle;
        unselectedLabelColor?: Color;
        unselectedLabelStyle?: TextStyle;
    });
}
export { TabBarTheme };
