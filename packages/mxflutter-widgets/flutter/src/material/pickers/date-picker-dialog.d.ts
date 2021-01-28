import { Key } from '../../foundation/key';
import { DatePickerEntryMode, DatePickerMode } from './date-picker-common';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget$, State$, GlobalKey } from '../../widgets/framework';
declare class _DatePickerDialog extends StatefulWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { _DatePickerDialog };
declare class _DatePickerDialogState extends State$ {
    entryMode: DatePickerEntryMode;
    selectedDate: DateTime;
    autoValidate: boolean;
    calendarPickerKey: GlobalKey;
    formKey: GlobalKey;
}
export { _DatePickerDialogState };
