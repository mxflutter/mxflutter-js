import { LocalizationsDelegate } from '../widgets/localizations';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum DatePickerDateTimeOrder {
    date_time_dayPeriod = "{ \"_name\": \"DatePickerDateTimeOrder.date_time_dayPeriod\", \"index\": 0 }",
    date_dayPeriod_time = "{ \"_name\": \"DatePickerDateTimeOrder.date_dayPeriod_time\", \"index\": 1 }",
    time_dayPeriod_date = "{ \"_name\": \"DatePickerDateTimeOrder.time_dayPeriod_date\", \"index\": 2 }",
    dayPeriod_time_date = "{ \"_name\": \"DatePickerDateTimeOrder.dayPeriod_time_date\", \"index\": 3 }"
}
export { DatePickerDateTimeOrder };
declare enum DatePickerDateOrder {
    dmy = "{ \"_name\": \"DatePickerDateOrder.dmy\", \"index\": 0 }",
    mdy = "{ \"_name\": \"DatePickerDateOrder.mdy\", \"index\": 1 }",
    ymd = "{ \"_name\": \"DatePickerDateOrder.ymd\", \"index\": 2 }",
    ydm = "{ \"_name\": \"DatePickerDateOrder.ydm\", \"index\": 3 }"
}
export { DatePickerDateOrder };
declare abstract class CupertinoLocalizations extends MXDartClass {
}
export { CupertinoLocalizations };
declare class _CupertinoLocalizationsDelegate extends LocalizationsDelegate {
}
export { _CupertinoLocalizationsDelegate };
declare class DefaultCupertinoLocalizations extends MXDartClass {
    static get delegate(): {
        className: string;
        mirrorID: string;
    };
}
export { DefaultCupertinoLocalizations };
