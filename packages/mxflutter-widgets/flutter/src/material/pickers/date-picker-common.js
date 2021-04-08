"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeRange = exports.DatePickerMode = exports.DatePickerEntryMode = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var DatePickerEntryMode;
(function (DatePickerEntryMode) {
    DatePickerEntryMode["calendar"] = "{ \"_name\": \"DatePickerEntryMode.calendar\", \"index\": 0 }";
    DatePickerEntryMode["input"] = "{ \"_name\": \"DatePickerEntryMode.input\", \"index\": 1 }";
})(DatePickerEntryMode || (DatePickerEntryMode = {}));
exports.DatePickerEntryMode = DatePickerEntryMode;
;
var DatePickerMode;
(function (DatePickerMode) {
    DatePickerMode["day"] = "{ \"_name\": \"DatePickerMode.day\", \"index\": 0 }";
    DatePickerMode["year"] = "{ \"_name\": \"DatePickerMode.year\", \"index\": 1 }";
})(DatePickerMode || (DatePickerMode = {}));
exports.DatePickerMode = DatePickerMode;
;
class DateTimeRange extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.start = namedParameters.start;
        this.end = namedParameters.end;
        this.className = 'DateTimeRange';
    }
}
exports.DateTimeRange = DateTimeRange;
