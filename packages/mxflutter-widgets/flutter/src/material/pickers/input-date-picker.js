"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._InputDatePickerFormFieldState = exports.InputDatePickerFormField = void 0;
const framework_1 = require("../../widgets/framework");
class InputDatePickerFormField extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialDate = namedParameters.initialDate;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.onDateSubmitted = namedParameters.onDateSubmitted;
        this.onDateSaved = namedParameters.onDateSaved;
        this.selectableDayPredicate = namedParameters.selectableDayPredicate;
        this.errorFormatText = namedParameters.errorFormatText;
        this.errorInvalidText = namedParameters.errorInvalidText;
        this.fieldHintText = namedParameters.fieldHintText;
        this.fieldLabelText = namedParameters.fieldLabelText;
        this.autofocus = namedParameters.autofocus;
        this.className = 'InputDatePickerFormField';
    }
}
exports.InputDatePickerFormField = InputDatePickerFormField;
class _InputDatePickerFormFieldState extends framework_1.State {
}
exports._InputDatePickerFormFieldState = _InputDatePickerFormFieldState;
