//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TextEditingController } from '../../widgets/editable-text';
import { Key } from '../../foundation/key';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget$, State$, BuildContext$ } from '../../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class InputDatePickerFormField extends StatefulWidget$ {
  initialDate: DateTime;
  firstDate: DateTime;
  lastDate: DateTime;
  onDateSubmitted: any;
  onDateSaved: any;
  selectableDayPredicate: any;
  errorFormatText: string;
  errorInvalidText: string;
  fieldHintText: string;
  fieldLabelText: string;
  autofocus: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      initialDate?: DateTime;
      firstDate?: DateTime;
      lastDate?: DateTime;
      onDateSubmitted?: any;
      onDateSaved?: any;
      selectableDayPredicate?: any;
      errorFormatText?: string;
      errorInvalidText?: string;
      fieldHintText?: string;
      fieldLabelText?: string;
      autofocus?: boolean;
    } = {},
  ) {
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
export { InputDatePickerFormField };
class _InputDatePickerFormFieldState extends State$ {
  controller: TextEditingController;
  selectedDate: DateTime;
  inputText: string;
  autoSelected: boolean;
}
export { _InputDatePickerFormFieldState };
