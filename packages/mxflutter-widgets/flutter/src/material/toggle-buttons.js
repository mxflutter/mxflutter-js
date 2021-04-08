"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._SelectToggleButtonRenderObject = exports._SelectToggleButton = exports._ToggleButton = exports.ToggleButtons = void 0;
const shifted_box_1 = require("../rendering/shifted-box");
const framework_1 = require("../widgets/framework");
class ToggleButtons extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.isSelected = namedParameters.isSelected;
        this.onPressed = namedParameters.onPressed;
        this.mouseCursor = namedParameters.mouseCursor;
        this.textStyle = namedParameters.textStyle;
        this.constraints = namedParameters.constraints;
        this.color = namedParameters.color;
        this.selectedColor = namedParameters.selectedColor;
        this.disabledColor = namedParameters.disabledColor;
        this.fillColor = namedParameters.fillColor;
        this.focusColor = namedParameters.focusColor;
        this.highlightColor = namedParameters.highlightColor;
        this.hoverColor = namedParameters.hoverColor;
        this.splashColor = namedParameters.splashColor;
        this.focusNodes = namedParameters.focusNodes;
        this.renderBorder = namedParameters.renderBorder;
        this.borderColor = namedParameters.borderColor;
        this.selectedBorderColor = namedParameters.selectedBorderColor;
        this.disabledBorderColor = namedParameters.disabledBorderColor;
        this.borderRadius = namedParameters.borderRadius;
        this.borderWidth = namedParameters.borderWidth;
        this.className = 'ToggleButtons';
    }
}
exports.ToggleButtons = ToggleButtons;
class _ToggleButton extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.selected = namedParameters.selected;
        this.textStyle = namedParameters.textStyle;
        this.constraints = namedParameters.constraints;
        this.color = namedParameters.color;
        this.selectedColor = namedParameters.selectedColor;
        this.disabledColor = namedParameters.disabledColor;
        this.fillColor = namedParameters.fillColor;
        this.focusColor = namedParameters.focusColor;
        this.highlightColor = namedParameters.highlightColor;
        this.hoverColor = namedParameters.hoverColor;
        this.splashColor = namedParameters.splashColor;
        this.focusNode = namedParameters.focusNode;
        this.onPressed = namedParameters.onPressed;
        this.mouseCursor = namedParameters.mouseCursor;
        this.leadingBorderSide = namedParameters.leadingBorderSide;
        this.horizontalBorderSide = namedParameters.horizontalBorderSide;
        this.trailingBorderSide = namedParameters.trailingBorderSide;
        this.borderRadius = namedParameters.borderRadius;
        this.clipRadius = namedParameters.clipRadius;
        this.isFirstButton = namedParameters.isFirstButton;
        this.isLastButton = namedParameters.isLastButton;
        this.child = namedParameters.child;
        this.className = '_ToggleButton';
    }
}
exports._ToggleButton = _ToggleButton;
class _SelectToggleButton extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.leadingBorderSide = namedParameters.leadingBorderSide;
        this.horizontalBorderSide = namedParameters.horizontalBorderSide;
        this.trailingBorderSide = namedParameters.trailingBorderSide;
        this.borderRadius = namedParameters.borderRadius;
        this.isFirstButton = namedParameters.isFirstButton;
        this.isLastButton = namedParameters.isLastButton;
        this.className = '_SelectToggleButton';
    }
}
exports._SelectToggleButton = _SelectToggleButton;
class _SelectToggleButtonRenderObject extends shifted_box_1.RenderShiftedBox {
    constructor(_leadingBorderSide, _horizontalBorderSide, _trailingBorderSide, _borderRadius, _isFirstButton, _isLastButton, _textDirection, child) {
        super();
        this.leadingBorderSide = _leadingBorderSide;
        this.horizontalBorderSide = _horizontalBorderSide;
        this.trailingBorderSide = _trailingBorderSide;
        this.borderRadius = _borderRadius;
        this.isFirstButton = _isFirstButton;
        this.isLastButton = _isLastButton;
        this.textDirection = _textDirection;
        this['child'] = child;
        this.className = '_SelectToggleButtonRenderObject';
    }
}
exports._SelectToggleButtonRenderObject = _SelectToggleButtonRenderObject;
