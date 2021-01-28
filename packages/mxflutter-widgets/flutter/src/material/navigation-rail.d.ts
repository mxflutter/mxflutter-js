import { Key } from '../foundation/key';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { IconThemeData } from '../widgets/icon-theme-data';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$, StatelessWidget$, InheritedWidget } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class NavigationRail extends StatefulWidget$ {
    backgroundColor: Color;
    extended: boolean;
    leading: MXWidget;
    trailing: MXWidget;
    destinations: Array<any>;
    selectedIndex: number;
    onDestinationSelected: any;
    elevation: number;
    groupAlignment: number;
    labelType: NavigationRailLabelType;
    unselectedLabelTextStyle: TextStyle;
    selectedLabelTextStyle: TextStyle;
    unselectedIconTheme: IconThemeData;
    selectedIconTheme: IconThemeData;
    minWidth: number;
    minExtendedWidth: number;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        extended?: boolean;
        leading?: MXWidget;
        trailing?: MXWidget;
        destinations?: Array<any>;
        selectedIndex?: number;
        onDestinationSelected?: any;
        elevation?: number;
        groupAlignment?: number;
        labelType?: NavigationRailLabelType;
        unselectedLabelTextStyle?: TextStyle;
        selectedLabelTextStyle?: TextStyle;
        unselectedIconTheme?: IconThemeData;
        selectedIconTheme?: IconThemeData;
        minWidth?: number;
        minExtendedWidth?: number;
    });
}
export { NavigationRail };
declare class _NavigationRailState extends State$ {
    destinationControllers: Array<any>;
    destinationAnimations: Array<any>;
    extendedController: AnimationController;
    extendedAnimation: Animation;
}
export { _NavigationRailState };
declare class _RailDestination extends StatelessWidget$ {
    minWidth: number;
    minExtendedWidth: number;
    icon: MXWidget;
    label: MXWidget;
    destinationAnimation: Animation;
    labelType: NavigationRailLabelType;
    selected: boolean;
    extendedTransitionAnimation: Animation;
    iconTheme: IconThemeData;
    labelTextStyle: TextStyle;
    onTap: any;
    indexLabel: string;
    positionAnimation: Animation;
    constructor(namedParameters?: {
        minWidth?: number;
        minExtendedWidth?: number;
        icon?: MXWidget;
        label?: MXWidget;
        destinationAnimation?: Animation;
        extendedTransitionAnimation?: Animation;
        labelType?: NavigationRailLabelType;
        selected?: boolean;
        iconTheme?: IconThemeData;
        labelTextStyle?: TextStyle;
        onTap?: any;
        indexLabel?: string;
    });
}
export { _RailDestination };
declare enum NavigationRailLabelType {
    none = "{ \"_name\": \"NavigationRailLabelType.none\", \"index\": 0 }",
    selected = "{ \"_name\": \"NavigationRailLabelType.selected\", \"index\": 1 }",
    all = "{ \"_name\": \"NavigationRailLabelType.all\", \"index\": 2 }"
}
export { NavigationRailLabelType };
declare class NavigationRailDestination extends MXDartClass {
    icon: MXWidget;
    selectedIcon: MXWidget;
    label: MXWidget;
    constructor(namedParameters?: {
        icon?: MXWidget;
        selectedIcon?: MXWidget;
        label?: MXWidget;
    });
}
export { NavigationRailDestination };
declare class _ExtendedNavigationRailAnimation extends InheritedWidget {
    animation: Animation;
    constructor(namedParameters?: {
        key?: Key;
        animation?: Animation;
        child?: MXWidget;
    });
}
export { _ExtendedNavigationRailAnimation };
