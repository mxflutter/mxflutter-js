"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ExtendedNavigationRailAnimation = exports.NavigationRailDestination = exports.NavigationRailLabelType = exports._RailDestination = exports._NavigationRailState = exports.NavigationRail = void 0;
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class NavigationRail extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.extended = namedParameters.extended;
        this.leading = namedParameters.leading;
        this.trailing = namedParameters.trailing;
        this.destinations = namedParameters.destinations;
        this.selectedIndex = namedParameters.selectedIndex;
        this.onDestinationSelected = namedParameters.onDestinationSelected;
        this.elevation = namedParameters.elevation;
        this.groupAlignment = namedParameters.groupAlignment;
        this.labelType = namedParameters.labelType;
        this.unselectedLabelTextStyle = namedParameters.unselectedLabelTextStyle;
        this.selectedLabelTextStyle = namedParameters.selectedLabelTextStyle;
        this.unselectedIconTheme = namedParameters.unselectedIconTheme;
        this.selectedIconTheme = namedParameters.selectedIconTheme;
        this.minWidth = namedParameters.minWidth;
        this.minExtendedWidth = namedParameters.minExtendedWidth;
        this.className = 'NavigationRail';
    }
}
exports.NavigationRail = NavigationRail;
class _NavigationRailState extends framework_1.State {
}
exports._NavigationRailState = _NavigationRailState;
class _RailDestination extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.minWidth = namedParameters.minWidth;
        this.minExtendedWidth = namedParameters.minExtendedWidth;
        this.icon = namedParameters.icon;
        this.label = namedParameters.label;
        this.destinationAnimation = namedParameters.destinationAnimation;
        this.extendedTransitionAnimation = namedParameters.extendedTransitionAnimation;
        this.labelType = namedParameters.labelType;
        this.selected = namedParameters.selected;
        this.iconTheme = namedParameters.iconTheme;
        this.labelTextStyle = namedParameters.labelTextStyle;
        this.onTap = namedParameters.onTap;
        this.indexLabel = namedParameters.indexLabel;
        this.className = '_RailDestination';
    }
}
exports._RailDestination = _RailDestination;
var NavigationRailLabelType;
(function (NavigationRailLabelType) {
    NavigationRailLabelType["none"] = "{ \"_name\": \"NavigationRailLabelType.none\", \"index\": 0 }";
    NavigationRailLabelType["selected"] = "{ \"_name\": \"NavigationRailLabelType.selected\", \"index\": 1 }";
    NavigationRailLabelType["all"] = "{ \"_name\": \"NavigationRailLabelType.all\", \"index\": 2 }";
})(NavigationRailLabelType || (NavigationRailLabelType = {}));
exports.NavigationRailLabelType = NavigationRailLabelType;
;
class NavigationRailDestination extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.icon = namedParameters.icon;
        this.selectedIcon = namedParameters.selectedIcon;
        this.label = namedParameters.label;
        this.className = 'NavigationRailDestination';
    }
}
exports.NavigationRailDestination = NavigationRailDestination;
class _ExtendedNavigationRailAnimation extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animation = namedParameters.animation;
        this.child = namedParameters.child;
        this.className = '_ExtendedNavigationRailAnimation';
    }
}
exports._ExtendedNavigationRailAnimation = _ExtendedNavigationRailAnimation;
