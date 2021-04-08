"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerHeader = void 0;
const framework_1 = require("../../widgets/framework");
class DatePickerHeader extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.helpText = namedParameters.helpText;
        this.titleText = namedParameters.titleText;
        this.titleSemanticsLabel = namedParameters.titleSemanticsLabel;
        this.titleStyle = namedParameters.titleStyle;
        this.orientation = namedParameters.orientation;
        this.isShort = namedParameters.isShort;
        this.icon = namedParameters.icon;
        this.iconTooltip = namedParameters.iconTooltip;
        this.onIconPressed = namedParameters.onIconPressed;
        this.className = 'DatePickerHeader';
    }
}
exports.DatePickerHeader = DatePickerHeader;
