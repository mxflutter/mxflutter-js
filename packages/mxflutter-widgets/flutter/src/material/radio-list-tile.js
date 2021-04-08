"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioListTile = void 0;
const framework_1 = require("../widgets/framework");
class RadioListTile extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.groupValue = namedParameters.groupValue;
        this.onChanged = namedParameters.onChanged;
        this.toggleable = namedParameters.toggleable;
        this.activeColor = namedParameters.activeColor;
        this.title = namedParameters.title;
        this.subtitle = namedParameters.subtitle;
        this.isThreeLine = namedParameters.isThreeLine;
        this.dense = namedParameters.dense;
        this.secondary = namedParameters.secondary;
        this.selected = namedParameters.selected;
        this.controlAffinity = namedParameters.controlAffinity;
        this.autofocus = namedParameters.autofocus;
        this.className = 'RadioListTile';
    }
    // MX modified begin
    mx_f_toDSL() {
        // MX modified begin
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
            toggleable: this.toggleable,
            activeColor: this.activeColor,
            title: this.title,
            subtitle: this.subtitle,
            isThreeLine: this.isThreeLine,
            dense: this.dense,
            secondary: this.secondary,
            selected: this.selected,
            controlAffinity: this.controlAffinity,
            autofocus: this.autofocus,
            className: 'Radio',
        };
    }
}
exports.RadioListTile = RadioListTile;
