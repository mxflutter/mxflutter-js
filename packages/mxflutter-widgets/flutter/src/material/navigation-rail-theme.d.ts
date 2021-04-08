import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { NavigationRailLabelType } from './navigation-rail';
import { IconThemeData } from '../widgets/icon-theme-data';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class NavigationRailThemeData extends MXDartClass {
    backgroundColor: Color;
    elevation: number;
    unselectedLabelTextStyle: TextStyle;
    selectedLabelTextStyle: TextStyle;
    unselectedIconTheme: IconThemeData;
    selectedIconTheme: IconThemeData;
    groupAlignment: number;
    labelType: NavigationRailLabelType;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        elevation?: number;
        unselectedLabelTextStyle?: TextStyle;
        selectedLabelTextStyle?: TextStyle;
        unselectedIconTheme?: IconThemeData;
        selectedIconTheme?: IconThemeData;
        groupAlignment?: number;
        labelType?: NavigationRailLabelType;
    });
}
export { NavigationRailThemeData };
declare class NavigationRailTheme extends InheritedTheme {
    data: NavigationRailThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: NavigationRailThemeData;
        child?: MXWidget;
    });
}
export { NavigationRailTheme };
