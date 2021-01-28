//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../../foundation/key';
import { DateTime } from '../../../../mx-dart-sdk';
import { DateTimeRange, DatePickerEntryMode } from './date-picker-common';
import { StatefulWidget$, State$, GlobalKey, BuildContext$, StatelessWidget$, Widget } from '../../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _DateRangePickerDialog extends StatefulWidget$ {
  initialDateRange: DateTimeRange;
  firstDate: DateTime;
  lastDate: DateTime;
  currentDate: DateTime;
  initialEntryMode: DatePickerEntryMode;
  cancelText: string;
  confirmText: string;
  saveText: string;
  helpText: string;
  errorInvalidRangeText: string;
  errorFormatText: string;
  errorInvalidText: string;
  fieldStartHintText: string;
  fieldEndHintText: string;
  fieldStartLabelText: string;
  fieldEndLabelText: string;
  public constructor(
    namedParameters: {
      key?: Key;
      initialDateRange?: DateTimeRange;
      firstDate?: DateTime;
      lastDate?: DateTime;
      currentDate?: DateTime;
      initialEntryMode?: DatePickerEntryMode;
      helpText?: string;
      cancelText?: string;
      confirmText?: string;
      saveText?: string;
      errorInvalidRangeText?: string;
      errorFormatText?: string;
      errorInvalidText?: string;
      fieldStartHintText?: string;
      fieldEndHintText?: string;
      fieldStartLabelText?: string;
      fieldEndLabelText?: string;
    } = {},
  ) {
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
  entryMode: DatePickerEntryMode;
  selectedStart: DateTime;
  selectedEnd: DateTime;
  autoValidate: boolean;
  calendarPickerKey: GlobalKey;
  inputPickerKey: GlobalKey;
}
export { _DateRangePickerDialogState };
class _CalendarRangePickerDialog extends StatelessWidget$ {
  selectedStartDate: DateTime;
  selectedEndDate: DateTime;
  firstDate: DateTime;
  lastDate: DateTime;
  currentDate: DateTime;
  onStartDateChanged: any;
  onEndDateChanged: any;
  onConfirm: any;
  onCancel: any;
  onToggleEntryMode: any;
  confirmText: string;
  helpText: string;
  public constructor(
    namedParameters: {
      key?: Key;
      selectedStartDate?: DateTime;
      selectedEndDate?: DateTime;
      firstDate?: DateTime;
      lastDate?: DateTime;
      currentDate?: DateTime;
      onStartDateChanged?: any;
      onEndDateChanged?: any;
      onConfirm?: any;
      onCancel?: any;
      onToggleEntryMode?: any;
      confirmText?: string;
      helpText?: string;
    } = {},
  ) {
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
  selectedStartDate: DateTime;
  selectedEndDate: DateTime;
  currentDate: DateTime;
  picker: MXWidget;
  onConfirm: any;
  onCancel: any;
  onToggleEntryMode: any;
  confirmText: string;
  cancelText: string;
  helpText: string;
  public constructor(
    namedParameters: {
      key?: Key;
      selectedStartDate?: DateTime;
      selectedEndDate?: DateTime;
      currentDate?: DateTime;
      picker?: MXWidget;
      onConfirm?: any;
      onCancel?: any;
      onToggleEntryMode?: any;
      confirmText?: string;
      cancelText?: string;
      helpText?: string;
    } = {},
  ) {
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
