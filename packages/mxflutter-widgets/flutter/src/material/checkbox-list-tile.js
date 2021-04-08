"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxListTile = void 0;
const framework_1 = require("../widgets/framework");
class CheckboxListTile extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.onChanged = namedParameters.onChanged;
        this.activeColor = namedParameters.activeColor;
        this.checkColor = namedParameters.checkColor;
        this.title = namedParameters.title;
        this.subtitle = namedParameters.subtitle;
        this.isThreeLine = namedParameters.isThreeLine;
        this.dense = namedParameters.dense;
        this.secondary = namedParameters.secondary;
        this.selected = namedParameters.selected;
        this.controlAffinity = namedParameters.controlAffinity;
        this.autofocus = namedParameters.autofocus;
        this.contentPadding = namedParameters.contentPadding;
        this.tristate = namedParameters.tristate;
        this.className = 'CheckboxListTile';
    }
}
exports.CheckboxListTile = CheckboxListTile;
