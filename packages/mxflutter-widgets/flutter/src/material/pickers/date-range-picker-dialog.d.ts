import { Key } from '../../foundation/key';
import { DateTime } from '../../../../mx-dart-sdk';
import { DateTimeRange, DatePickerEntryMode } from './date-picker-common';
import { StatefulWidget, State, GlobalKey, StatelessWidget } from '../../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class _DateRangePickerDialog extends StatefulWidget {
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
    constructor(namedParameters?: {
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
    });
}
export { _DateRangePickerDialog };
declare class _DateRangePickerDialogState extends State {
    entryMode: DatePickerEntryMode;
    selectedStart: DateTime;
    selectedEnd: DateTime;
    autoValidate: boolean;
    calendarPickerKey: GlobalKey;
    inputPickerKey: GlobalKey;
}
export { _DateRangePickerDialogState };
declare class _CalendarRangePickerDialog extends StatelessWidget {
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
    constructor(namedParameters?: {
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
    });
}
export { _CalendarRangePickerDialog };
declare class _InputDateRangePickerDialog extends StatelessWidget {
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
    constructor(namedParameters?: {
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
    });
}
export { _InputDateRangePickerDialog };
