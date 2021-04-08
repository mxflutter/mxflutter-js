"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderCheckbox = exports._CheckboxRenderObjectWidget = exports._CheckboxState = exports.Checkbox = void 0;
const toggleable_1 = require("./toggleable");
const framework_1 = require("../widgets/framework");
class Checkbox extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.tristate = namedParameters.tristate;
        this.onChanged = namedParameters.onChanged;
        this.mouseCursor = namedParameters.mouseCursor;
        this.activeColor = namedParameters.activeColor;
        this.checkColor = namedParameters.checkColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.visualDensity = namedParameters.visualDensity;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.className = 'Checkbox';
    }
    static get width() {
        return 18.0;
    }
}
exports.Checkbox = Checkbox;
class _CheckboxState extends framework_1.State {
}
exports._CheckboxState = _CheckboxState;
class _CheckboxRenderObjectWidget extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.tristate = namedParameters.tristate;
        this.activeColor = namedParameters.activeColor;
        this.checkColor = namedParameters.checkColor;
        this.inactiveColor = namedParameters.inactiveColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.onChanged = namedParameters.onChanged;
        this.additionalConstraints = namedParameters.additionalConstraints;
        this.hasFocus = namedParameters.hasFocus;
        this.hovering = namedParameters.hovering;
        this.className = '_CheckboxRenderObjectWidget';
    }
}
exports._CheckboxRenderObjectWidget = _CheckboxRenderObjectWidget;
class _RenderCheckbox extends toggleable_1.RenderToggleable {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.tristate = namedParameters.tristate;
        this.activeColor = namedParameters.activeColor;
        this.checkColor = namedParameters.checkColor;
        this.inactiveColor = namedParameters.inactiveColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.additionalConstraints = namedParameters.additionalConstraints;
        this.onChanged = namedParameters.onChanged;
        this.hasFocus = namedParameters.hasFocus;
        this.hovering = namedParameters.hovering;
        this.className = '_RenderCheckbox';
    }
}
exports._RenderCheckbox = _RenderCheckbox;
