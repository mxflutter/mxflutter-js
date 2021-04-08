import { DateTime } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum DayPeriod {
    am = "{ \"_name\": \"DayPeriod.am\", \"index\": 0 }",
    pm = "{ \"_name\": \"DayPeriod.pm\", \"index\": 1 }"
}
export { DayPeriod };
declare class TimeOfDay extends MXDartClass {
    hour: number;
    minute: number;
    constructor(namedParameters?: {
        hour?: number;
        minute?: number;
    });
    static get hoursPerDay(): number;
    static get hoursPerPeriod(): number;
    static get minutesPerHour(): number;
    static now(): TimeOfDay;
    static fromDateTime(time?: DateTime): TimeOfDay;
}
export { TimeOfDay };
declare enum TimeOfDayFormat {
    HH_colon_mm = "{ \"_name\": \"TimeOfDayFormat.HH_colon_mm\", \"index\": 0 }",
    HH_dot_mm = "{ \"_name\": \"TimeOfDayFormat.HH_dot_mm\", \"index\": 1 }",
    frenchCanadian = "{ \"_name\": \"TimeOfDayFormat.frenchCanadian\", \"index\": 2 }",
    H_colon_mm = "{ \"_name\": \"TimeOfDayFormat.H_colon_mm\", \"index\": 3 }",
    h_colon_mm_space_a = "{ \"_name\": \"TimeOfDayFormat.h_colon_mm_space_a\", \"index\": 4 }",
    a_space_h_colon_mm = "{ \"_name\": \"TimeOfDayFormat.a_space_h_colon_mm\", \"index\": 5 }"
}
export { TimeOfDayFormat };
declare enum HourFormat {
    HH = "{ \"_name\": \"HourFormat.HH\", \"index\": 0 }",
    H = "{ \"_name\": \"HourFormat.H\", \"index\": 1 }",
    h = "{ \"_name\": \"HourFormat.h\", \"index\": 2 }"
}
export { HourFormat };
