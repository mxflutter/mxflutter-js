//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
var DayPeriod;
(function (DayPeriod) {
    DayPeriod["am"] = "{ \"_name\": \"DayPeriod.am\", \"index\": 0 }";
    DayPeriod["pm"] = "{ \"_name\": \"DayPeriod.pm\", \"index\": 1 }";
})(DayPeriod || (DayPeriod = {}));
export { DayPeriod };
class TimeOfDay extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.hour = namedParameters.hour;
        this.minute = namedParameters.minute;
        this.className = 'TimeOfDay';
    }
    static get hoursPerDay() {
        return 24;
    }
    static get hoursPerPeriod() {
        return 12;
    }
    static get minutesPerHour() {
        return 60;
    }
    static now() {
        var jsObj = new TimeOfDay();
        jsObj['constructorName'] = 'now';
        return jsObj;
    }
    static fromDateTime(time) {
        var jsObj = new TimeOfDay();
        jsObj['time'] = time;
        jsObj['constructorName'] = 'fromDateTime';
        return jsObj;
    }
}
export { TimeOfDay };
var TimeOfDayFormat;
(function (TimeOfDayFormat) {
    TimeOfDayFormat["HH_colon_mm"] = "{ \"_name\": \"TimeOfDayFormat.HH_colon_mm\", \"index\": 0 }";
    TimeOfDayFormat["HH_dot_mm"] = "{ \"_name\": \"TimeOfDayFormat.HH_dot_mm\", \"index\": 1 }";
    TimeOfDayFormat["frenchCanadian"] = "{ \"_name\": \"TimeOfDayFormat.frenchCanadian\", \"index\": 2 }";
    TimeOfDayFormat["H_colon_mm"] = "{ \"_name\": \"TimeOfDayFormat.H_colon_mm\", \"index\": 3 }";
    TimeOfDayFormat["h_colon_mm_space_a"] = "{ \"_name\": \"TimeOfDayFormat.h_colon_mm_space_a\", \"index\": 4 }";
    TimeOfDayFormat["a_space_h_colon_mm"] = "{ \"_name\": \"TimeOfDayFormat.a_space_h_colon_mm\", \"index\": 5 }";
})(TimeOfDayFormat || (TimeOfDayFormat = {}));
export { TimeOfDayFormat };
var HourFormat;
(function (HourFormat) {
    HourFormat["HH"] = "{ \"_name\": \"HourFormat.HH\", \"index\": 0 }";
    HourFormat["H"] = "{ \"_name\": \"HourFormat.H\", \"index\": 1 }";
    HourFormat["h"] = "{ \"_name\": \"HourFormat.h\", \"index\": 2 }";
})(HourFormat || (HourFormat = {}));
export { HourFormat };
