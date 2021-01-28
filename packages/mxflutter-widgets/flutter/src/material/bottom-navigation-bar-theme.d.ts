import { Key } from '../foundation/key';
import { InheritedWidget } from '../widgets/framework';
import { BottomNavigationBarType } from './bottom-navigation-bar';
import { TextStyle } from '../painting/text-style';
import { IconThemeData } from '../widgets/icon-theme-data';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class BottomNavigationBarThemeData extends MXDartClass {
    backgroundColor: Color;
    elevation: number;
    selectedIconTheme: IconThemeData;
    unselectedIconTheme: IconThemeData;
    selectedItemColor: Color;
    unselectedItemColor: Color;
    selectedLabelStyle: TextStyle;
    unselectedLabelStyle: TextStyle;
    showSelectedLabels: boolean;
    showUnselectedLabels: boolean;
    type: BottomNavigationBarType;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        elevation?: number;
        selectedIconTheme?: IconThemeData;
        unselectedIconTheme?: IconThemeData;
        selectedItemColor?: Color;
        unselectedItemColor?: Color;
        selectedLabelStyle?: TextStyle;
        unselectedLabelStyle?: TextStyle;
        showSelectedLabels?: boolean;
        showUnselectedLabels?: boolean;
        type?: BottomNavigationBarType;
    });
}
export { BottomNavigationBarThemeData };
declare class BottomNavigationBarTheme extends InheritedWidget {
    data: BottomNavigationBarThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: BottomNavigationBarThemeData;
        child?: MXWidget;
    });
}
export { BottomNavigationBarTheme };
