"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCupertinoLocalizations = exports._CupertinoLocalizationsDelegate = exports.CupertinoLocalizations = exports.DatePickerDateOrder = exports.DatePickerDateTimeOrder = void 0;
const localizations_1 = require("../widgets/localizations");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var DatePickerDateTimeOrder;
(function (DatePickerDateTimeOrder) {
    DatePickerDateTimeOrder["date_time_dayPeriod"] = "{ \"_name\": \"DatePickerDateTimeOrder.date_time_dayPeriod\", \"index\": 0 }";
    DatePickerDateTimeOrder["date_dayPeriod_time"] = "{ \"_name\": \"DatePickerDateTimeOrder.date_dayPeriod_time\", \"index\": 1 }";
    DatePickerDateTimeOrder["time_dayPeriod_date"] = "{ \"_name\": \"DatePickerDateTimeOrder.time_dayPeriod_date\", \"index\": 2 }";
    DatePickerDateTimeOrder["dayPeriod_time_date"] = "{ \"_name\": \"DatePickerDateTimeOrder.dayPeriod_time_date\", \"index\": 3 }";
})(DatePickerDateTimeOrder || (DatePickerDateTimeOrder = {}));
exports.DatePickerDateTimeOrder = DatePickerDateTimeOrder;
;
var DatePickerDateOrder;
(function (DatePickerDateOrder) {
    DatePickerDateOrder["dmy"] = "{ \"_name\": \"DatePickerDateOrder.dmy\", \"index\": 0 }";
    DatePickerDateOrder["mdy"] = "{ \"_name\": \"DatePickerDateOrder.mdy\", \"index\": 1 }";
    DatePickerDateOrder["ymd"] = "{ \"_name\": \"DatePickerDateOrder.ymd\", \"index\": 2 }";
    DatePickerDateOrder["ydm"] = "{ \"_name\": \"DatePickerDateOrder.ydm\", \"index\": 3 }";
})(DatePickerDateOrder || (DatePickerDateOrder = {}));
exports.DatePickerDateOrder = DatePickerDateOrder;
;
class CupertinoLocalizations extends mxflutter_base_1.MXDartClass {
}
exports.CupertinoLocalizations = CupertinoLocalizations;
class _CupertinoLocalizationsDelegate extends localizations_1.LocalizationsDelegate {
}
exports._CupertinoLocalizationsDelegate = _CupertinoLocalizationsDelegate;
class DefaultCupertinoLocalizations extends mxflutter_base_1.MXDartClass {
    static get delegate() {
        var jsObj = new class MXLocalizationsDelegate extends localizations_1.LocalizationsDelegate {
        }();
        jsObj['className'] = 'DefaultCupertinoLocalizations';
        jsObj['constructorName'] = 'delegate';
        return jsObj;
    }
}
exports.DefaultCupertinoLocalizations = DefaultCupertinoLocalizations;
