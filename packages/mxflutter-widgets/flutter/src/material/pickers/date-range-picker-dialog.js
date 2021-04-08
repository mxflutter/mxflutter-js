"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._InputDateRangePickerDialog = exports._CalendarRangePickerDialog = exports._DateRangePickerDialogState = exports._DateRangePickerDialog = void 0;
const framework_1 = require("../../widgets/framework");
class _DateRangePickerDialog extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialDateRange = namedParameters.initialDateRange;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.currentDate = namedParameters.currentDate;
        this.initialEntryMode = namedParameters.initialEntryMode;
        this.helpText = namedParameters.helpText;
        this.cancelText = namedParameters.cancelText;
        this.confirmText = namedParameters.confirmText;
        this.saveText = namedParameters.saveText;
        this.errorInvalidRangeText = namedParameters.errorInvalidRangeText;
        this.errorFormatText = namedParameters.errorFormatText;
        this.errorInvalidText = namedParameters.errorInvalidText;
        this.fieldStartHintText = namedParameters.fieldStartHintText;
        this.fieldEndHintText = namedParameters.fieldEndHintText;
        this.fieldStartLabelText = namedParameters.fieldStartLabelText;
        this.fieldEndLabelText = namedParameters.fieldEndLabelText;
        this.className = '_DateRangePickerDialog';
    }
}
exports._DateRangePickerDialog = _DateRangePickerDialog;
class _DateRangePickerDialogState extends framework_1.State {
}
exports._DateRangePickerDialogState = _DateRangePickerDialogState;
class _CalendarRangePickerDialog extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.selectedStartDate = namedParameters.selectedStartDate;
        this.selectedEndDate = namedParameters.selectedEndDate;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.currentDate = namedParameters.currentDate;
        this.onStartDateChanged = namedParameters.onStartDateChanged;
        this.onEndDateChanged = namedParameters.onEndDateChanged;
        this.onConfirm = namedParameters.onConfirm;
        this.onCancel = namedParameters.onCancel;
        this.onToggleEntryMode = namedParameters.onToggleEntryMode;
        this.confirmText = namedParameters.confirmText;
        this.helpText = namedParameters.helpText;
        this.className = '_CalendarRangePickerDialog';
    }
}
exports._CalendarRangePickerDialog = _CalendarRangePickerDialog;
class _InputDateRangePickerDialog extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.selectedStartDate = namedParameters.selectedStartDate;
        this.selectedEndDate = namedParameters.selectedEndDate;
        this.currentDate = namedParameters.currentDate;
        this.picker = namedParameters.picker;
        this.onConfirm = namedParameters.onConfirm;
        this.onCancel = namedParameters.onCancel;
        this.onToggleEntryMode = namedParameters.onToggleEntryMode;
        this.confirmText = namedParameters.confirmText;
        this.cancelText = namedParameters.cancelText;
        this.helpText = namedParameters.helpText;
        this.className = '_InputDateRangePickerDialog';
    }
}
exports._InputDateRangePickerDialog = _InputDateRangePickerDialog;
