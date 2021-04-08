// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextEditingController } from '../../widgets/editable-text';
import { Key } from '../../foundation/key';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget, State } from '../../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class InputDateRangePicker extends StatefulWidget {
  initialStartDate: DateTime;
  initialEndDate: DateTime;
  firstDate: DateTime;
  lastDate: DateTime;
  onStartDateChanged: any;
  onEndDateChanged: any;
  helpText: string;
  errorFormatText: string;
  errorInvalidText: string;
  errorInvalidRangeText: string;
  fieldStartHintText: string;
  fieldEndHintText: string;
  fieldStartLabelText: string;
  fieldEndLabelText: string;
  autofocus: boolean;
  autovalidate: boolean;
  public constructor(namedParameters: {key?: Key, initialStartDate?: DateTime, initialEndDate?: DateTime, firstDate?: DateTime, lastDate?: DateTime, onStartDateChanged?: any, onEndDateChanged?: any, helpText?: string, errorFormatText?: string, errorInvalidText?: string, errorInvalidRangeText?: string, fieldStartHintText?: string, fieldEndHintText?: string, fieldStartLabelText?: string, fieldEndLabelText?: string, autofocus?: boolean, autovalidate?: boolean} = {}) {
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
export { InputDateRangePicker };
class InputDateRangePickerState extends State {
  startInputText: string;
  endInputText: string;
  startDate: DateTime;
  endDate: DateTime;
  startController: TextEditingController;
  endController: TextEditingController;
  startErrorText: string;
  endErrorText: string;
  autoSelected: boolean;
}
export { InputDateRangePickerState };
