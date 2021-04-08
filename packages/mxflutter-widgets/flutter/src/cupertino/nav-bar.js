"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._NavigationBarComponentsTransition = exports._NavigationBarTransition = exports._TransitionableNavigationBar = exports._BackLabel = exports._BackChevron = exports.CupertinoNavigationBarBackButton = exports._NavigationBarStaticComponents = exports._NavigationBarStaticComponentsKeys = exports._PersistentNavigationBar = exports._LargeTitleNavigationBarSliverDelegate = exports._CupertinoSliverNavigationBarState = exports.CupertinoSliverNavigationBar = exports._CupertinoNavigationBarState = exports.CupertinoNavigationBar = exports._HeroTag = void 0;
const sliver_persistent_header_1 = require("../widgets/sliver-persistent-header");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _HeroTag extends mxflutter_base_1.MXDartClass {
    constructor(navigator) {
        super();
        this.navigator = navigator;
        this.className = '_HeroTag';
    }
}
exports._HeroTag = _HeroTag;
class CupertinoNavigationBar extends framework_1.StatefulWidget {
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
exports.CupertinoNavigationBar = CupertinoNavigationBar;
class _CupertinoNavigationBarState extends framework_1.State {
}
exports._CupertinoNavigationBarState = _CupertinoNavigationBarState;
class CupertinoSliverNavigationBar extends framework_1.StatefulWidget {
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
exports.CupertinoSliverNavigationBar = CupertinoSliverNavigationBar;
class _CupertinoSliverNavigationBarState extends framework_1.State {
}
exports._CupertinoSliverNavigationBarState = _CupertinoSliverNavigationBarState;
class _LargeTitleNavigationBarSliverDelegate extends sliver_persistent_header_1.SliverPersistentHeaderDelegate {
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
exports._LargeTitleNavigationBarSliverDelegate = _LargeTitleNavigationBarSliverDelegate;
class _PersistentNavigationBar extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.components = namedParameters.components;
        this.padding = namedParameters.padding;
        this.middleVisible = namedParameters.middleVisible;
        this.className = '_PersistentNavigationBar';
    }
}
exports._PersistentNavigationBar = _PersistentNavigationBar;
class _NavigationBarStaticComponentsKeys extends mxflutter_base_1.MXDartClass {
}
exports._NavigationBarStaticComponentsKeys = _NavigationBarStaticComponentsKeys;
class _NavigationBarStaticComponents extends mxflutter_base_1.MXDartClass {
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
exports._NavigationBarStaticComponents = _NavigationBarStaticComponents;
class CupertinoNavigationBarBackButton extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.previousPageTitle = namedParameters.previousPageTitle;
        this.onPressed = namedParameters.onPressed;
        this.className = 'CupertinoNavigationBarBackButton';
    }
}
exports.CupertinoNavigationBarBackButton = CupertinoNavigationBarBackButton;
class _BackChevron extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this.className = '_BackChevron';
    }
}
exports._BackChevron = _BackChevron;
class _BackLabel extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.specifiedPreviousTitle = namedParameters.specifiedPreviousTitle;
        this.route = namedParameters.route;
        this.className = '_BackLabel';
    }
}
exports._BackLabel = _BackLabel;
class _TransitionableNavigationBar extends framework_1.StatelessWidget {
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
exports._TransitionableNavigationBar = _TransitionableNavigationBar;
class _NavigationBarTransition extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.animation = namedParameters.animation;
        this.topNavBar = namedParameters.topNavBar;
        this.bottomNavBar = namedParameters.bottomNavBar;
        this.className = '_NavigationBarTransition';
    }
}
exports._NavigationBarTransition = _NavigationBarTransition;
class _NavigationBarComponentsTransition extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.animation = namedParameters.animation;
        this['bottomNavBar'] = namedParameters.bottomNavBar;
        this['topNavBar'] = namedParameters.topNavBar;
        this['directionality'] = namedParameters.directionality;
        this.className = '_NavigationBarComponentsTransition';
    }
}
exports._NavigationBarComponentsTransition = _NavigationBarComponentsTransition;
