"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialButtonWithIconMixin = exports.MaterialButton = void 0;
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class MaterialButton extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onPressed = namedParameters.onPressed;
        this.onLongPress = namedParameters.onLongPress;
        this.onHighlightChanged = namedParameters.onHighlightChanged;
        this.mouseCursor = namedParameters.mouseCursor;
        this.textTheme = namedParameters.textTheme;
        this.textColor = namedParameters.textColor;
        this.disabledTextColor = namedParameters.disabledTextColor;
        this.color = namedParameters.color;
        this.disabledColor = namedParameters.disabledColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.splashColor = namedParameters.splashColor;
        this.colorBrightness = namedParameters.colorBrightness;
        this.elevation = namedParameters.elevation;
        this.focusElevation = namedParameters.focusElevation;
        this.hoverElevation = namedParameters.hoverElevation;
        this.highlightElevation = namedParameters.highlightElevation;
        this.disabledElevation = namedParameters.disabledElevation;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.animationDuration = namedParameters.animationDuration;
        this.minWidth = namedParameters.minWidth;
        this.height = namedParameters.height;
        this.enableFeedback = namedParameters.enableFeedback;
        this.child = namedParameters.child;
        this.className = 'MaterialButton';
    }
}
exports.MaterialButton = MaterialButton;
class MaterialButtonWithIconMixin extends mxflutter_base_1.MXDartClass {
}
exports.MaterialButtonWithIconMixin = MaterialButtonWithIconMixin;
