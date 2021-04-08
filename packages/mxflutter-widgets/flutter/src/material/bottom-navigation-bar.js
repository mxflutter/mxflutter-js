"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RadialPainter = exports._Circle = exports._BottomNavigationBarState = exports._Label = exports._TileIcon = exports._BottomNavigationTile = exports.BottomNavigationBar = exports.BottomNavigationBarType = void 0;
const custom_paint_1 = require("../rendering/custom-paint");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var BottomNavigationBarType;
(function (BottomNavigationBarType) {
    BottomNavigationBarType["fixed"] = "{ \"_name\": \"BottomNavigationBarType.fixed\", \"index\": 0 }";
    BottomNavigationBarType["shifting"] = "{ \"_name\": \"BottomNavigationBarType.shifting\", \"index\": 1 }";
})(BottomNavigationBarType || (BottomNavigationBarType = {}));
exports.BottomNavigationBarType = BottomNavigationBarType;
;
class BottomNavigationBar extends framework_1.StatefulWidget {
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
exports.BottomNavigationBar = BottomNavigationBar;
class _BottomNavigationTile extends framework_1.StatelessWidget {
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
exports._BottomNavigationTile = _BottomNavigationTile;
class _TileIcon extends framework_1.StatelessWidget {
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
exports._TileIcon = _TileIcon;
class _Label extends framework_1.StatelessWidget {
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
exports._Label = _Label;
class _BottomNavigationBarState extends framework_1.State {
}
exports._BottomNavigationBarState = _BottomNavigationBarState;
class _Circle extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.index = namedParameters.index;
        this.color = namedParameters.color;
        this.className = '_Circle';
    }
}
exports._Circle = _Circle;
class _RadialPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.circles = namedParameters.circles;
        this.textDirection = namedParameters.textDirection;
        this.className = '_RadialPainter';
    }
}
exports._RadialPainter = _RadialPainter;
