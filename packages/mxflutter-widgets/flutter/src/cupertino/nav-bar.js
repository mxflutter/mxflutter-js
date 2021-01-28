//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { SliverPersistentHeaderDelegate } from '../widgets/sliver-persistent-header';
import { StatefulWidget$, State$, StatelessWidget$ } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _HeroTag extends MXDartClass {
    constructor(navigator) {
        super();
        this.navigator = navigator;
        this.className = '_HeroTag';
    }
}
export { _HeroTag };
class CupertinoNavigationBar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.leading = namedParameters.leading;
        this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
        this.automaticallyImplyMiddle = namedParameters.automaticallyImplyMiddle;
        this.previousPageTitle = namedParameters.previousPageTitle;
        this.middle = namedParameters.middle;
        this.trailing = namedParameters.trailing;
        this.border = namedParameters.border;
        this.backgroundColor = namedParameters.backgroundColor;
        this.brightness = namedParameters.brightness;
        this.padding = namedParameters.padding;
        this.actionsForegroundColor = namedParameters.actionsForegroundColor;
        this.transitionBetweenRoutes = namedParameters.transitionBetweenRoutes;
        this.heroTag = namedParameters.heroTag;
        this.className = 'CupertinoNavigationBar';
    }
}
export { CupertinoNavigationBar };
class _CupertinoNavigationBarState extends State$ {
}
export { _CupertinoNavigationBarState };
class CupertinoSliverNavigationBar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.largeTitle = namedParameters.largeTitle;
        this.leading = namedParameters.leading;
        this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
        this.automaticallyImplyTitle = namedParameters.automaticallyImplyTitle;
        this.previousPageTitle = namedParameters.previousPageTitle;
        this.middle = namedParameters.middle;
        this.trailing = namedParameters.trailing;
        this.border = namedParameters.border;
        this.backgroundColor = namedParameters.backgroundColor;
        this.brightness = namedParameters.brightness;
        this.padding = namedParameters.padding;
        this.actionsForegroundColor = namedParameters.actionsForegroundColor;
        this.transitionBetweenRoutes = namedParameters.transitionBetweenRoutes;
        this.heroTag = namedParameters.heroTag;
        this.className = 'CupertinoSliverNavigationBar';
    }
}
export { CupertinoSliverNavigationBar };
class _CupertinoSliverNavigationBarState extends State$ {
}
export { _CupertinoSliverNavigationBarState };
class _LargeTitleNavigationBarSliverDelegate extends SliverPersistentHeaderDelegate {
    constructor(namedParameters = {}) {
        super();
        this.keys = namedParameters.keys;
        this.components = namedParameters.components;
        this.userMiddle = namedParameters.userMiddle;
        this.backgroundColor = namedParameters.backgroundColor;
        this.brightness = namedParameters.brightness;
        this.border = namedParameters.border;
        this.padding = namedParameters.padding;
        this.actionsForegroundColor = namedParameters.actionsForegroundColor;
        this.transitionBetweenRoutes = namedParameters.transitionBetweenRoutes;
        this.heroTag = namedParameters.heroTag;
        this.persistentHeight = namedParameters.persistentHeight;
        this.alwaysShowMiddle = namedParameters.alwaysShowMiddle;
        this.className = '_LargeTitleNavigationBarSliverDelegate';
    }
}
export { _LargeTitleNavigationBarSliverDelegate };
class _PersistentNavigationBar extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.components = namedParameters.components;
        this.padding = namedParameters.padding;
        this.middleVisible = namedParameters.middleVisible;
        this.className = '_PersistentNavigationBar';
    }
}
export { _PersistentNavigationBar };
class _NavigationBarStaticComponentsKeys extends MXDartClass {
}
export { _NavigationBarStaticComponentsKeys };
class _NavigationBarStaticComponents extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['keys'] = namedParameters.keys;
        this['route'] = namedParameters.route;
        this['userLeading'] = namedParameters.userLeading;
        this['automaticallyImplyLeading'] = namedParameters.automaticallyImplyLeading;
        this['automaticallyImplyTitle'] = namedParameters.automaticallyImplyTitle;
        this['previousPageTitle'] = namedParameters.previousPageTitle;
        this['userMiddle'] = namedParameters.userMiddle;
        this['userTrailing'] = namedParameters.userTrailing;
        this['userLargeTitle'] = namedParameters.userLargeTitle;
        this['padding'] = namedParameters.padding;
        this['large'] = namedParameters.large;
        this.className = '_NavigationBarStaticComponents';
    }
}
export { _NavigationBarStaticComponents };
class CupertinoNavigationBarBackButton extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.previousPageTitle = namedParameters.previousPageTitle;
        this.onPressed = namedParameters.onPressed;
        this.className = 'CupertinoNavigationBarBackButton';
    }
}
export { CupertinoNavigationBarBackButton };
class _BackChevron extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this.className = '_BackChevron';
    }
}
export { _BackChevron };
class _BackLabel extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.specifiedPreviousTitle = namedParameters.specifiedPreviousTitle;
        this.route = namedParameters.route;
        this.className = '_BackLabel';
    }
}
export { _BackLabel };
class _TransitionableNavigationBar extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.componentsKeys = namedParameters.componentsKeys;
        this.backgroundColor = namedParameters.backgroundColor;
        this.backButtonTextStyle = namedParameters.backButtonTextStyle;
        this.titleTextStyle = namedParameters.titleTextStyle;
        this.largeTitleTextStyle = namedParameters.largeTitleTextStyle;
        this.border = namedParameters.border;
        this.hasUserMiddle = namedParameters.hasUserMiddle;
        this.largeExpanded = namedParameters.largeExpanded;
        this.child = namedParameters.child;
        this.className = '_TransitionableNavigationBar';
    }
}
export { _TransitionableNavigationBar };
class _NavigationBarTransition extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.animation = namedParameters.animation;
        this.topNavBar = namedParameters.topNavBar;
        this.bottomNavBar = namedParameters.bottomNavBar;
        this.className = '_NavigationBarTransition';
    }
}
export { _NavigationBarTransition };
class _NavigationBarComponentsTransition extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.animation = namedParameters.animation;
        this['bottomNavBar'] = namedParameters.bottomNavBar;
        this['topNavBar'] = namedParameters.topNavBar;
        this['directionality'] = namedParameters.directionality;
        this.className = '_NavigationBarComponentsTransition';
    }
}
export { _NavigationBarComponentsTransition };
