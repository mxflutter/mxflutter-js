import { RenderBox } from '../rendering/box';
import { BorderTween } from '../widgets/implicit-animations';
import { Tween, ColorTween } from '../animation/tween';
import { Animation } from '../animation/animation';
import { TextStyle } from '../painting/text-style';
import { ModalRoute } from '../widgets/routes';
import { KeyedSubtree } from '../widgets/basic';
import { SliverPersistentHeaderDelegate } from '../widgets/sliver-persistent-header';
import { Key } from '../foundation/key';
import { Border } from '../painting/box-border';
import { EdgeInsetsDirectional } from '../painting/edge-insets';
import { Color, Brightness, Rect, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, State, StatelessWidget, GlobalKey } from '../widgets/framework';
import { NavigatorState } from '../widgets/navigator';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _HeroTag extends MXDartClass {
    navigator: NavigatorState;
    constructor(navigator?: NavigatorState);
}
export { _HeroTag };
declare class CupertinoNavigationBar extends StatefulWidget {
    leading: MXWidget;
    automaticallyImplyLeading: boolean;
    automaticallyImplyMiddle: boolean;
    previousPageTitle: string;
    middle: MXWidget;
    trailing: MXWidget;
    backgroundColor: Color;
    brightness: Brightness;
    padding: EdgeInsetsDirectional;
    border: Border;
    actionsForegroundColor: Color;
    transitionBetweenRoutes: boolean;
    heroTag: any;
    constructor(namedParameters?: {
        key?: Key;
        leading?: MXWidget;
        automaticallyImplyLeading?: boolean;
        automaticallyImplyMiddle?: boolean;
        previousPageTitle?: string;
        middle?: MXWidget;
        trailing?: MXWidget;
        border?: Border;
        backgroundColor?: Color;
        brightness?: Brightness;
        padding?: EdgeInsetsDirectional;
        actionsForegroundColor?: Color;
        transitionBetweenRoutes?: boolean;
        heroTag?: any;
    });
}
export { CupertinoNavigationBar };
declare class _CupertinoNavigationBarState extends State {
    keys: _NavigationBarStaticComponentsKeys;
}
export { _CupertinoNavigationBarState };
declare class CupertinoSliverNavigationBar extends StatefulWidget {
    largeTitle: MXWidget;
    leading: MXWidget;
    automaticallyImplyLeading: boolean;
    automaticallyImplyTitle: boolean;
    previousPageTitle: string;
    middle: MXWidget;
    trailing: MXWidget;
    backgroundColor: Color;
    brightness: Brightness;
    padding: EdgeInsetsDirectional;
    border: Border;
    actionsForegroundColor: Color;
    transitionBetweenRoutes: boolean;
    heroTag: any;
    constructor(namedParameters?: {
        key?: Key;
        largeTitle?: MXWidget;
        leading?: MXWidget;
        automaticallyImplyLeading?: boolean;
        automaticallyImplyTitle?: boolean;
        previousPageTitle?: string;
        middle?: MXWidget;
        trailing?: MXWidget;
        border?: Border;
        backgroundColor?: Color;
        brightness?: Brightness;
        padding?: EdgeInsetsDirectional;
        actionsForegroundColor?: Color;
        transitionBetweenRoutes?: boolean;
        heroTag?: any;
    });
}
export { CupertinoSliverNavigationBar };
declare class _CupertinoSliverNavigationBarState extends State {
    keys: _NavigationBarStaticComponentsKeys;
}
export { _CupertinoSliverNavigationBarState };
declare class _LargeTitleNavigationBarSliverDelegate extends SliverPersistentHeaderDelegate {
    keys: _NavigationBarStaticComponentsKeys;
    components: _NavigationBarStaticComponents;
    userMiddle: MXWidget;
    backgroundColor: Color;
    brightness: Brightness;
    border: Border;
    padding: EdgeInsetsDirectional;
    actionsForegroundColor: Color;
    transitionBetweenRoutes: boolean;
    heroTag: any;
    persistentHeight: number;
    alwaysShowMiddle: boolean;
    constructor(namedParameters?: {
        keys?: _NavigationBarStaticComponentsKeys;
        components?: _NavigationBarStaticComponents;
        userMiddle?: MXWidget;
        backgroundColor?: Color;
        brightness?: Brightness;
        border?: Border;
        padding?: EdgeInsetsDirectional;
        actionsForegroundColor?: Color;
        transitionBetweenRoutes?: boolean;
        heroTag?: any;
        persistentHeight?: number;
        alwaysShowMiddle?: boolean;
    });
}
export { _LargeTitleNavigationBarSliverDelegate };
declare class _PersistentNavigationBar extends StatelessWidget {
    components: _NavigationBarStaticComponents;
    padding: EdgeInsetsDirectional;
    middleVisible: boolean;
    constructor(namedParameters?: {
        key?: Key;
        components?: _NavigationBarStaticComponents;
        padding?: EdgeInsetsDirectional;
        middleVisible?: boolean;
    });
}
export { _PersistentNavigationBar };
declare class _NavigationBarStaticComponentsKeys extends MXDartClass {
    navBarBoxKey: GlobalKey;
    leadingKey: GlobalKey;
    backChevronKey: GlobalKey;
    backLabelKey: GlobalKey;
    middleKey: GlobalKey;
    trailingKey: GlobalKey;
    largeTitleKey: GlobalKey;
}
export { _NavigationBarStaticComponentsKeys };
declare class _NavigationBarStaticComponents extends MXDartClass {
    leading: KeyedSubtree;
    backChevron: KeyedSubtree;
    backLabel: KeyedSubtree;
    middle: KeyedSubtree;
    trailing: KeyedSubtree;
    largeTitle: KeyedSubtree;
    constructor(namedParameters?: {
        keys?: _NavigationBarStaticComponentsKeys;
        route?: ModalRoute;
        userLeading?: MXWidget;
        automaticallyImplyLeading?: boolean;
        automaticallyImplyTitle?: boolean;
        previousPageTitle?: string;
        userMiddle?: MXWidget;
        userTrailing?: MXWidget;
        userLargeTitle?: MXWidget;
        padding?: EdgeInsetsDirectional;
        large?: boolean;
    });
}
export { _NavigationBarStaticComponents };
declare class CupertinoNavigationBarBackButton extends StatelessWidget {
    color: Color;
    previousPageTitle: string;
    onPressed: any;
    backChevron: MXWidget;
    backLabel: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        color?: Color;
        previousPageTitle?: string;
        onPressed?: any;
    });
}
export { CupertinoNavigationBarBackButton };
declare class _BackChevron extends StatelessWidget {
    constructor(namedParameters?: {
        key?: Key;
    });
}
export { _BackChevron };
declare class _BackLabel extends StatelessWidget {
    specifiedPreviousTitle: string;
    route: ModalRoute;
    constructor(namedParameters?: {
        key?: Key;
        specifiedPreviousTitle?: string;
        route?: ModalRoute;
    });
}
export { _BackLabel };
declare class _TransitionableNavigationBar extends StatelessWidget {
    componentsKeys: _NavigationBarStaticComponentsKeys;
    backgroundColor: Color;
    backButtonTextStyle: TextStyle;
    titleTextStyle: TextStyle;
    largeTitleTextStyle: TextStyle;
    border: Border;
    hasUserMiddle: boolean;
    largeExpanded: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        componentsKeys?: _NavigationBarStaticComponentsKeys;
        backgroundColor?: Color;
        backButtonTextStyle?: TextStyle;
        titleTextStyle?: TextStyle;
        largeTitleTextStyle?: TextStyle;
        border?: Border;
        hasUserMiddle?: boolean;
        largeExpanded?: boolean;
        child?: MXWidget;
    });
}
export { _TransitionableNavigationBar };
declare class _NavigationBarTransition extends StatelessWidget {
    animation: Animation;
    topNavBar: _TransitionableNavigationBar;
    bottomNavBar: _TransitionableNavigationBar;
    heightTween: Tween;
    backgroundTween: ColorTween;
    borderTween: BorderTween;
    constructor(namedParameters?: {
        animation?: Animation;
        topNavBar?: _TransitionableNavigationBar;
        bottomNavBar?: _TransitionableNavigationBar;
    });
}
export { _NavigationBarTransition };
declare class _NavigationBarComponentsTransition extends MXDartClass {
    animation: Animation;
    bottomComponents: _NavigationBarStaticComponentsKeys;
    topComponents: _NavigationBarStaticComponentsKeys;
    bottomNavBarBox: RenderBox;
    topNavBarBox: RenderBox;
    bottomBackButtonTextStyle: TextStyle;
    topBackButtonTextStyle: TextStyle;
    bottomTitleTextStyle: TextStyle;
    topTitleTextStyle: TextStyle;
    bottomLargeTitleTextStyle: TextStyle;
    topLargeTitleTextStyle: TextStyle;
    bottomHasUserMiddle: boolean;
    topHasUserMiddle: boolean;
    bottomLargeExpanded: boolean;
    topLargeExpanded: boolean;
    transitionBox: Rect;
    forwardDirection: number;
    constructor(namedParameters?: {
        animation?: Animation;
        bottomNavBar?: _TransitionableNavigationBar;
        topNavBar?: _TransitionableNavigationBar;
        directionality?: TextDirection;
    });
}
export { _NavigationBarComponentsTransition };
