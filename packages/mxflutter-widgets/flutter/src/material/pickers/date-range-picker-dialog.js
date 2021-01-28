//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$, StatelessWidget$ } from '../../widgets/framework';
class _DateRangePickerDialog extends StatefulWidget$ {
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
export { _DateRangePickerDialog };
class _DateRangePickerDialogState extends State$ {
}
export { _DateRangePickerDialogState };
class _CalendarRangePickerDialog extends StatelessWidget$ {
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
export { _CalendarRangePickerDialog };
class _InputDateRangePickerDialog extends StatelessWidget$ {
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
export { _InputDateRangePickerDialog };
