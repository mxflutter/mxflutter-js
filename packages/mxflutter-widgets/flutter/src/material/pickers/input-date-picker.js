//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../../widgets/framework';
class InputDatePickerFormField extends StatefulWidget$ {
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
export { InputDatePickerFormField };
class _InputDatePickerFormFieldState extends State$ {
}
export { _InputDatePickerFormFieldState };
