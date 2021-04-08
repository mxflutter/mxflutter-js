import { DateTime } from '../../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum DatePickerEntryMode {
    calendar = "{ \"_name\": \"DatePickerEntryMode.calendar\", \"index\": 0 }",
    input = "{ \"_name\": \"DatePickerEntryMode.input\", \"index\": 1 }"
}
export { DatePickerEntryMode };
declare enum DatePickerMode {
    day = "{ \"_name\": \"DatePickerMode.day\", \"index\": 0 }",
    year = "{ \"_name\": \"DatePickerMode.year\", \"index\": 1 }"
}
export { DatePickerMode };
declare class DateTimeRange extends MXDartClass {
    start: DateTime;
    end: DateTime;
    constructor(namedParameters?: {
        start?: DateTime;
        end?: DateTime;
    });
}
export { DateTimeRange };
