"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderListTile = exports._ListTileElement = exports._ListTile = exports._ListTileSlot = exports.ListTile = exports.ListTileControlAffinity = exports.ListTileTheme = exports.ListTileStyle = void 0;
const box_1 = require("../rendering/box");
const framework_1 = require("../widgets/framework");
const inherited_theme_1 = require("../widgets/inherited-theme");
var ListTileStyle;
(function (ListTileStyle) {
    ListTileStyle["list"] = "{ \"_name\": \"ListTileStyle.list\", \"index\": 0 }";
    ListTileStyle["drawer"] = "{ \"_name\": \"ListTileStyle.drawer\", \"index\": 1 }";
})(ListTileStyle || (ListTileStyle = {}));
exports.ListTileStyle = ListTileStyle;
;
class ListTileTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.dense = namedParameters.dense;
        this.shape = namedParameters.shape;
        this.style = namedParameters.style;
        this.selectedColor = namedParameters.selectedColor;
        this.iconColor = namedParameters.iconColor;
        this.textColor = namedParameters.textColor;
        this.contentPadding = namedParameters.contentPadding;
        this.tileColor = namedParameters.tileColor;
        this.selectedTileColor = namedParameters.selectedTileColor;
        this.child = namedParameters.child;
        this.className = 'ListTileTheme';
    }
}
exports.ListTileTheme = ListTileTheme;
var ListTileControlAffinity;
(function (ListTileControlAffinity) {
    ListTileControlAffinity["leading"] = "{ \"_name\": \"ListTileControlAffinity.leading\", \"index\": 0 }";
    ListTileControlAffinity["trailing"] = "{ \"_name\": \"ListTileControlAffinity.trailing\", \"index\": 1 }";
    ListTileControlAffinity["platform"] = "{ \"_name\": \"ListTileControlAffinity.platform\", \"index\": 2 }";
})(ListTileControlAffinity || (ListTileControlAffinity = {}));
exports.ListTileControlAffinity = ListTileControlAffinity;
;
class ListTile extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.leading = namedParameters.leading;
        this.title = namedParameters.title;
        this.subtitle = namedParameters.subtitle;
        this.trailing = namedParameters.trailing;
        this.isThreeLine = namedParameters.isThreeLine;
        this.dense = namedParameters.dense;
        this.visualDensity = namedParameters.visualDensity;
        this.shape = namedParameters.shape;
        this.contentPadding = namedParameters.contentPadding;
        this.enabled = namedParameters.enabled;
        this.onTap = namedParameters.onTap;
        this.onLongPress = namedParameters.onLongPress;
        this.mouseCursor = namedParameters.mouseCursor;
        this.selected = namedParameters.selected;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.tileColor = namedParameters.tileColor;
        this.selectedTileColor = namedParameters.selectedTileColor;
        this.className = 'ListTile';
    }
}
exports.ListTile = ListTile;
var _ListTileSlot;
(function (_ListTileSlot) {
    _ListTileSlot["leading"] = "{ \"_name\": \"_ListTileSlot.leading\", \"index\": 0 }";
    _ListTileSlot["title"] = "{ \"_name\": \"_ListTileSlot.title\", \"index\": 1 }";
    _ListTileSlot["subtitle"] = "{ \"_name\": \"_ListTileSlot.subtitle\", \"index\": 2 }";
    _ListTileSlot["trailing"] = "{ \"_name\": \"_ListTileSlot.trailing\", \"index\": 3 }";
})(_ListTileSlot || (_ListTileSlot = {}));
exports._ListTileSlot = _ListTileSlot;
;
class _ListTile extends framework_1.RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.leading = namedParameters.leading;
        this.title = namedParameters.title;
        this.subtitle = namedParameters.subtitle;
        this.trailing = namedParameters.trailing;
        this.isThreeLine = namedParameters.isThreeLine;
        this.isDense = namedParameters.isDense;
        this.visualDensity = namedParameters.visualDensity;
        this.textDirection = namedParameters.textDirection;
        this.titleBaselineType = namedParameters.titleBaselineType;
        this.subtitleBaselineType = namedParameters.subtitleBaselineType;
        this.className = '_ListTile';
    }
}
exports._ListTile = _ListTile;
class _ListTileElement extends framework_1.RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = '_ListTileElement';
    }
}
exports._ListTileElement = _ListTileElement;
class _RenderListTile extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.isDense = namedParameters.isDense;
        this.visualDensity = namedParameters.visualDensity;
        this.isThreeLine = namedParameters.isThreeLine;
        this.textDirection = namedParameters.textDirection;
        this.titleBaselineType = namedParameters.titleBaselineType;
        this.subtitleBaselineType = namedParameters.subtitleBaselineType;
        this.className = '_RenderListTile';
    }
}
exports._RenderListTile = _RenderListTile;
