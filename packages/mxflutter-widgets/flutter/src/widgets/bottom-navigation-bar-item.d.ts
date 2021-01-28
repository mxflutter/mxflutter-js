import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class BottomNavigationBarItem extends MXDartClass {
    icon: MXWidget;
    activeIcon: MXWidget;
    title: MXWidget;
    backgroundColor: Color;
    constructor(namedParameters?: {
        icon?: MXWidget;
        title?: MXWidget;
        activeIcon?: MXWidget;
        backgroundColor?: Color;
    });
}
export { BottomNavigationBarItem };
