import { TextEditingController } from '../../widgets/editable-text';
import { Key } from '../../foundation/key';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget, State } from '../../widgets/framework';
declare class InputDateRangePicker extends StatefulWidget {
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
    constructor(namedParameters?: {
        key?: Key;
        initialStartDate?: DateTime;
        initialEndDate?: DateTime;
        firstDate?: DateTime;
        lastDate?: DateTime;
        onStartDateChanged?: any;
        onEndDateChanged?: any;
        helpText?: string;
        errorFormatText?: string;
        errorInvalidText?: string;
        errorInvalidRangeText?: string;
        fieldStartHintText?: string;
        fieldEndHintText?: string;
        fieldStartLabelText?: string;
        fieldEndLabelText?: string;
        autofocus?: boolean;
        autovalidate?: boolean;
    });
}
export { InputDateRangePicker };
declare class InputDateRangePickerState extends State {
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
