"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDateRangePickerState = exports.InputDateRangePicker = void 0;
const framework_1 = require("../../widgets/framework");
class InputDateRangePicker extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialStartDate = namedParameters.initialStartDate;
        this.initialEndDate = namedParameters.initialEndDate;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.onStartDateChanged = namedParameters.onStartDateChanged;
        this.onEndDateChanged = namedParameters.onEndDateChanged;
        this.helpText = namedParameters.helpText;
        this.errorFormatText = namedParameters.errorFormatText;
        this.errorInvalidText = namedParameters.errorInvalidText;
        this.errorInvalidRangeText = namedParameters.errorInvalidRangeText;
        this.fieldStartHintText = namedParameters.fieldStartHintText;
        this.fieldEndHintText = namedParameters.fieldEndHintText;
        this.fieldStartLabelText = namedParameters.fieldStartLabelText;
        this.fieldEndLabelText = namedParameters.fieldEndLabelText;
        this.autofocus = namedParameters.autofocus;
        this.autovalidate = namedParameters.autovalidate;
        this.className = 'InputDateRangePicker';
    }
}
exports.InputDateRangePicker = InputDateRangePicker;
class InputDateRangePickerState extends framework_1.State {
}
exports.InputDateRangePickerState = InputDateRangePickerState;
