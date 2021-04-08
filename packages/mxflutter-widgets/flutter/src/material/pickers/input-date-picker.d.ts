import { TextEditingController } from '../../widgets/editable-text';
import { Key } from '../../foundation/key';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget, State } from '../../widgets/framework';
declare class InputDatePickerFormField extends StatefulWidget {
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
    constructor(namedParameters?: {
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
    });
}
export { InputDatePickerFormField };
declare class _InputDatePickerFormFieldState extends State {
    controller: TextEditingController;
    selectedDate: DateTime;
    inputText: string;
    autoSelected: boolean;
}
export { _InputDatePickerFormFieldState };
