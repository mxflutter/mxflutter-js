"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderRadio = exports._RadioRenderObjectWidget = exports._RadioState = exports.Radio = void 0;
const toggleable_1 = require("./toggleable");
const framework_1 = require("../widgets/framework");
class Radio extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.groupValue = namedParameters.groupValue;
        this.onChanged = namedParameters.onChanged;
        this.mouseCursor = namedParameters.mouseCursor;
        this.toggleable = namedParameters.toggleable;
        this.activeColor = namedParameters.activeColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.visualDensity = namedParameters.visualDensity;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.className = 'Radio';
    }
    // MX modified begin
    mx_f_toDSL() {
        let onChangedProxy = (value) => {
            if (this.onChanged) {
                this.onChanged(this.value);
            }
        };
        return {
            key: this.key,
            value: JSON.stringify(this.value),
            groupValue: JSON.stringify(this.groupValue),
            onChanged: onChangedProxy,
            mouseCursor: this.mouseCursor,
            toggleable: this.toggleable,
            activeColor: this.activeColor,
            focusColor: this.focusColor,
            hoverColor: this.hoverColor,
            materialTapTargetSize: this.materialTapTargetSize,
            visualDensity: this.visualDensity,
            focusNode: this.focusNode,
            autofocus: this.autofocus,
            className: 'Radio',
        };
    }
}
exports.Radio = Radio;
class _RadioState extends framework_1.State {
}
exports._RadioState = _RadioState;
class _RadioRenderObjectWidget extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.selected = namedParameters.selected;
        this.activeColor = namedParameters.activeColor;
        this.inactiveColor = namedParameters.inactiveColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.additionalConstraints = namedParameters.additionalConstraints;
        this.onChanged = namedParameters.onChanged;
        this.toggleable = namedParameters.toggleable;
        this.hasFocus = namedParameters.hasFocus;
        this.hovering = namedParameters.hovering;
        this.className = '_RadioRenderObjectWidget';
    }
}
exports._RadioRenderObjectWidget = _RadioRenderObjectWidget;
class _RenderRadio extends toggleable_1.RenderToggleable {
    constructor(namedParameters = {}) {
        super();
        this['value'] = namedParameters.value;
        this['activeColor'] = namedParameters.activeColor;
        this['inactiveColor'] = namedParameters.inactiveColor;
        this['focusColor'] = namedParameters.focusColor;
        this['hoverColor'] = namedParameters.hoverColor;
        this['onChanged'] = namedParameters.onChanged;
        this['tristate'] = namedParameters.tristate;
        this['additionalConstraints'] = namedParameters.additionalConstraints;
        this['hasFocus'] = namedParameters.hasFocus;
        this['hovering'] = namedParameters.hovering;
        this.className = '_RenderRadio';
    }
}
exports._RenderRadio = _RenderRadio;
