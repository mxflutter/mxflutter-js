//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$, StatelessWidget$, InheritedWidget } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class NavigationRail extends StatefulWidget$ {
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
export { NavigationRail };
class _NavigationRailState extends State$ {
}
export { _NavigationRailState };
class _RailDestination extends StatelessWidget$ {
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
export { _RailDestination };
var NavigationRailLabelType;
(function (NavigationRailLabelType) {
    NavigationRailLabelType["none"] = "{ \"_name\": \"NavigationRailLabelType.none\", \"index\": 0 }";
    NavigationRailLabelType["selected"] = "{ \"_name\": \"NavigationRailLabelType.selected\", \"index\": 1 }";
    NavigationRailLabelType["all"] = "{ \"_name\": \"NavigationRailLabelType.all\", \"index\": 2 }";
})(NavigationRailLabelType || (NavigationRailLabelType = {}));
export { NavigationRailLabelType };
class NavigationRailDestination extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.icon = namedParameters.icon;
        this.selectedIcon = namedParameters.selectedIcon;
        this.label = namedParameters.label;
        this.className = 'NavigationRailDestination';
    }
}
export { NavigationRailDestination };
class _ExtendedNavigationRailAnimation extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animation = namedParameters.animation;
        this.child = namedParameters.child;
        this.className = '_ExtendedNavigationRailAnimation';
    }
}
export { _ExtendedNavigationRailAnimation };
