"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderSwitch = exports._SwitchRenderObjectWidget = exports._SwitchState = exports.Switch = exports._SwitchType = void 0;
const toggleable_1 = require("./toggleable");
const framework_1 = require("../widgets/framework");
var _SwitchType;
(function (_SwitchType) {
    _SwitchType["material"] = "{ \"_name\": \"_SwitchType.material\", \"index\": 0 }";
    _SwitchType["adaptive"] = "{ \"_name\": \"_SwitchType.adaptive\", \"index\": 1 }";
})(_SwitchType || (_SwitchType = {}));
exports._SwitchType = _SwitchType;
;
class Switch extends framework_1.StatefulWidget {
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
        this.onActiveThumbImageError = namedParameters.onActiveThumbImageError;
        this.inactiveThumbImage = namedParameters.inactiveThumbImage;
        this.onInactiveThumbImageError = namedParameters.onInactiveThumbImageError;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.mouseCursor = namedParameters.mouseCursor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.className = 'Switch';
    }
    static adaptive(namedParameters = {}) {
        var jsObj = new Switch();
        jsObj.key = namedParameters.key;
        jsObj.value = namedParameters.value;
        jsObj.onChanged = namedParameters.onChanged;
        jsObj.activeColor = namedParameters.activeColor;
        jsObj.activeTrackColor = namedParameters.activeTrackColor;
        jsObj.inactiveThumbColor = namedParameters.inactiveThumbColor;
        jsObj.inactiveTrackColor = namedParameters.inactiveTrackColor;
        jsObj.activeThumbImage = namedParameters.activeThumbImage;
        jsObj.onActiveThumbImageError = namedParameters.onActiveThumbImageError;
        jsObj.inactiveThumbImage = namedParameters.inactiveThumbImage;
        jsObj.onInactiveThumbImageError = namedParameters.onInactiveThumbImageError;
        jsObj.materialTapTargetSize = namedParameters.materialTapTargetSize;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.mouseCursor = namedParameters.mouseCursor;
        jsObj.focusColor = namedParameters.focusColor;
        jsObj.hoverColor = namedParameters.hoverColor;
        jsObj.focusNode = namedParameters.focusNode;
        jsObj.autofocus = namedParameters.autofocus;
        jsObj['constructorName'] = 'adaptive';
        return jsObj;
    }
}
exports.Switch = Switch;
class _SwitchState extends framework_1.State {
}
exports._SwitchState = _SwitchState;
class _SwitchRenderObjectWidget extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.activeColor = namedParameters.activeColor;
        this.inactiveColor = namedParameters.inactiveColor;
        this.hoverColor = namedParameters.hoverColor;
        this.focusColor = namedParameters.focusColor;
        this.activeThumbImage = namedParameters.activeThumbImage;
        this.onActiveThumbImageError = namedParameters.onActiveThumbImageError;
        this.inactiveThumbImage = namedParameters.inactiveThumbImage;
        this.onInactiveThumbImageError = namedParameters.onInactiveThumbImageError;
        this.activeTrackColor = namedParameters.activeTrackColor;
        this.inactiveTrackColor = namedParameters.inactiveTrackColor;
        this.configuration = namedParameters.configuration;
        this.onChanged = namedParameters.onChanged;
        this.additionalConstraints = namedParameters.additionalConstraints;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.hasFocus = namedParameters.hasFocus;
        this.hovering = namedParameters.hovering;
        this.state = namedParameters.state;
        this.className = '_SwitchRenderObjectWidget';
    }
}
exports._SwitchRenderObjectWidget = _SwitchRenderObjectWidget;
class _RenderSwitch extends toggleable_1.RenderToggleable {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.activeColor = namedParameters.activeColor;
        this.inactiveColor = namedParameters.inactiveColor;
        this.hoverColor = namedParameters.hoverColor;
        this.focusColor = namedParameters.focusColor;
        this.activeThumbImage = namedParameters.activeThumbImage;
        this.onActiveThumbImageError = namedParameters.onActiveThumbImageError;
        this.inactiveThumbImage = namedParameters.inactiveThumbImage;
        this.onInactiveThumbImageError = namedParameters.onInactiveThumbImageError;
        this.activeTrackColor = namedParameters.activeTrackColor;
        this.inactiveTrackColor = namedParameters.inactiveTrackColor;
        this.configuration = namedParameters.configuration;
        this.additionalConstraints = namedParameters.additionalConstraints;
        this.textDirection = namedParameters.textDirection;
        this.onChanged = namedParameters.onChanged;
        this['dragStartBehavior'] = namedParameters.dragStartBehavior;
        this.hasFocus = namedParameters.hasFocus;
        this.hovering = namedParameters.hovering;
        this.state = namedParameters.state;
        this.className = '_RenderSwitch';
    }
}
exports._RenderSwitch = _RenderSwitch;
