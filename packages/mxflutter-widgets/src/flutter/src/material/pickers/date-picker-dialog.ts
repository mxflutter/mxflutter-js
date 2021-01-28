//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../../foundation/key';
import { DatePickerEntryMode, DatePickerMode } from './date-picker-common';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget$, State$, GlobalKey, BuildContext$ } from '../../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _DatePickerDialog extends StatefulWidget$ {
  initialDate: DateTime;
  firstDate: DateTime;
  lastDate: DateTime;
  currentDate: DateTime;
  initialEntryMode: DatePickerEntryMode;
  selectableDayPredicate: any;
  cancelText: string;
  confirmText: string;
  helpText: string;
  initialCalendarMode: DatePickerMode;
  errorFormatText: string;
  errorInvalidText: string;
  fieldHintText: string;
  fieldLabelText: string;
  public constructor(
    namedParameters: {
      key?: Key;
      initialDate?: DateTime;
      firstDate?: DateTime;
      lastDate?: DateTime;
      currentDate?: DateTime;
      initialEntryMode?: DatePickerEntryMode;
      selectableDayPredicate?: any;
      cancelText?: string;
      confirmText?: string;
      helpText?: string;
      initialCalendarMode?: DatePickerMode;
      errorFormatText?: string;
      errorInvalidText?: string;
      fieldHintText?: string;
      fieldLabelText?: string;
    } = {},
  ) {
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
export { _DatePickerDialog };
class _DatePickerDialogState extends State$ {
  entryMode: DatePickerEntryMode;
  selectedDate: DateTime;
  autoValidate: boolean;
  calendarPickerKey: GlobalKey;
  formKey: GlobalKey;
}
export { _DatePickerDialogState };
