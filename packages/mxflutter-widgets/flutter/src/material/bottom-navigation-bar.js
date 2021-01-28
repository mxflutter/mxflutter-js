//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomPainter } from '../rendering/custom-paint';
import { StatefulWidget$, StatelessWidget$, State$ } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var BottomNavigationBarType;
(function (BottomNavigationBarType) {
    BottomNavigationBarType["fixed"] = "{ \"_name\": \"BottomNavigationBarType.fixed\", \"index\": 0 }";
    BottomNavigationBarType["shifting"] = "{ \"_name\": \"BottomNavigationBarType.shifting\", \"index\": 1 }";
})(BottomNavigationBarType || (BottomNavigationBarType = {}));
export { BottomNavigationBarType };
class BottomNavigationBar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.items = namedParameters.items;
        this.onTap = namedParameters.onTap;
        this.currentIndex = namedParameters.currentIndex;
        this.elevation = namedParameters.elevation;
        this.type = namedParameters.type;
        this['fixedColor'] = namedParameters.fixedColor;
        this.backgroundColor = namedParameters.backgroundColor;
        this.iconSize = namedParameters.iconSize;
        this.selectedItemColor = namedParameters.selectedItemColor;
        this.unselectedItemColor = namedParameters.unselectedItemColor;
        this.selectedIconTheme = namedParameters.selectedIconTheme;
        this.unselectedIconTheme = namedParameters.unselectedIconTheme;
        this.selectedFontSize = namedParameters.selectedFontSize;
        this.unselectedFontSize = namedParameters.unselectedFontSize;
        this.selectedLabelStyle = namedParameters.selectedLabelStyle;
        this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
        this.showSelectedLabels = namedParameters.showSelectedLabels;
        this.showUnselectedLabels = namedParameters.showUnselectedLabels;
        this.mouseCursor = namedParameters.mouseCursor;
        this.className = 'BottomNavigationBar';
    }
}
export { BottomNavigationBar };
class _BottomNavigationTile extends StatelessWidget$ {
    constructor(type, item, animation, iconSize, namedParameters = {}) {
        super();
        this.type = type;
        this.item = item;
        this.animation = animation;
        this.iconSize = iconSize;
        this.onTap = namedParameters.onTap;
        this.colorTween = namedParameters.colorTween;
        this.flex = namedParameters.flex;
        this.selected = namedParameters.selected;
        this.selectedLabelStyle = namedParameters.selectedLabelStyle;
        this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
        this.selectedIconTheme = namedParameters.selectedIconTheme;
        this.unselectedIconTheme = namedParameters.unselectedIconTheme;
        this.showSelectedLabels = namedParameters.showSelectedLabels;
        this.showUnselectedLabels = namedParameters.showUnselectedLabels;
        this.indexLabel = namedParameters.indexLabel;
        this.mouseCursor = namedParameters.mouseCursor;
        this.className = '_BottomNavigationTile';
    }
}
export { _BottomNavigationTile };
class _TileIcon extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.colorTween = namedParameters.colorTween;
        this.animation = namedParameters.animation;
        this.iconSize = namedParameters.iconSize;
        this.selected = namedParameters.selected;
        this.item = namedParameters.item;
        this.selectedIconTheme = namedParameters.selectedIconTheme;
        this.unselectedIconTheme = namedParameters.unselectedIconTheme;
        this.className = '_TileIcon';
    }
}
export { _TileIcon };
class _Label extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.colorTween = namedParameters.colorTween;
        this.animation = namedParameters.animation;
        this.item = namedParameters.item;
        this.selectedLabelStyle = namedParameters.selectedLabelStyle;
        this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
        this.showSelectedLabels = namedParameters.showSelectedLabels;
        this.showUnselectedLabels = namedParameters.showUnselectedLabels;
        this.className = '_Label';
    }
}
export { _Label };
class _BottomNavigationBarState extends State$ {
}
export { _BottomNavigationBarState };
class _Circle extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.index = namedParameters.index;
        this.color = namedParameters.color;
        this.className = '_Circle';
    }
}
export { _Circle };
class _RadialPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.circles = namedParameters.circles;
        this.textDirection = namedParameters.textDirection;
        this.className = '_RadialPainter';
    }
}
export { _RadialPainter };
