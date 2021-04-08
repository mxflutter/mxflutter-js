"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchListTile = exports._SwitchListTileType = void 0;
const framework_1 = require("../widgets/framework");
var _SwitchListTileType;
(function (_SwitchListTileType) {
    _SwitchListTileType["material"] = "{ \"_name\": \"_SwitchListTileType.material\", \"index\": 0 }";
    _SwitchListTileType["adaptive"] = "{ \"_name\": \"_SwitchListTileType.adaptive\", \"index\": 1 }";
})(_SwitchListTileType || (_SwitchListTileType = {}));
exports._SwitchListTileType = _SwitchListTileType;
;
class SwitchListTile extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.onChanged = namedParameters.onChanged;
        this.activeColor = namedParameters.activeColor;
        this.activeTrackColor = namedParameters.activeTrackColor;
        this.inactiveThumbColor = namedParameters.inactiveThumbColor;
        this.inactiveTrackColor = namedParameters.inactiveTrackColor;
        this.activeThumbImage = namedParameters.activeThumbImage;
        this.inactiveThumbImage = namedParameters.inactiveThumbImage;
        this.title = namedParameters.title;
        this.subtitle = namedParameters.subtitle;
        this.isThreeLine = namedParameters.isThreeLine;
        this.dense = namedParameters.dense;
        this.contentPadding = namedParameters.contentPadding;
        this.secondary = namedParameters.secondary;
        this.selected = namedParameters.selected;
        this.autofocus = namedParameters.autofocus;
        this.controlAffinity = namedParameters.controlAffinity;
        this.className = 'SwitchListTile';
    }
    static adaptive(namedParameters = {}) {
        var jsObj = new SwitchListTile();
        jsObj.key = namedParameters.key;
        jsObj.value = namedParameters.value;
        jsObj.onChanged = namedParameters.onChanged;
        jsObj.activeColor = namedParameters.activeColor;
        jsObj.activeTrackColor = namedParameters.activeTrackColor;
        jsObj.inactiveThumbColor = namedParameters.inactiveThumbColor;
        jsObj.inactiveTrackColor = namedParameters.inactiveTrackColor;
        jsObj.activeThumbImage = namedParameters.activeThumbImage;
        jsObj.inactiveThumbImage = namedParameters.inactiveThumbImage;
        jsObj.title = namedParameters.title;
        jsObj.subtitle = namedParameters.subtitle;
        jsObj.isThreeLine = namedParameters.isThreeLine;
        jsObj.dense = namedParameters.dense;
        jsObj.contentPadding = namedParameters.contentPadding;
        jsObj.secondary = namedParameters.secondary;
        jsObj.selected = namedParameters.selected;
        jsObj.autofocus = namedParameters.autofocus;
        jsObj.controlAffinity = namedParameters.controlAffinity;
        jsObj['constructorName'] = 'adaptive';
        return jsObj;
    }
}
exports.SwitchListTile = SwitchListTile;
