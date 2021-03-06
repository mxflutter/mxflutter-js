"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DatePickerDialogState = exports._DatePickerDialog = void 0;
const framework_1 = require("../../widgets/framework");
class _DatePickerDialog extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialDate = namedParameters.initialDate;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.currentDate = namedParameters.currentDate;
        this.initialEntryMode = namedParameters.initialEntryMode;
        this.selectableDayPredicate = namedParameters.selectableDayPredicate;
        this.cancelText = namedParameters.cancelText;
        this.confirmText = namedParameters.confirmText;
        this.helpText = namedParameters.helpText;
        this.initialCalendarMode = namedParameters.initialCalendarMode;
        this.errorFormatText = namedParameters.errorFormatText;
        this.errorInvalidText = namedParameters.errorInvalidText;
        this.fieldHintText = namedParameters.fieldHintText;
        this.fieldLabelText = namedParameters.fieldLabelText;
        this.className = '_DatePickerDialog';
    }
}
exports._DatePickerDialog = _DatePickerDialog;
class _DatePickerDialogState extends framework_1.State {
}
exports._DatePickerDialogState = _DatePickerDialogState;
