//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
class _DatePickerLayoutDelegate extends MultiChildLayoutDelegate {
    constructor(namedParameters = {}) {
        super();
        this.columnWidths = namedParameters.columnWidths;
        this.textDirectionFactor = namedParameters.textDirectionFactor;
        this.className = '_DatePickerLayoutDelegate';
    }
}
export { _DatePickerLayoutDelegate };
var CupertinoDatePickerMode;
(function (CupertinoDatePickerMode) {
    CupertinoDatePickerMode["time"] = "{ \"_name\": \"CupertinoDatePickerMode.time\", \"index\": 0 }";
    CupertinoDatePickerMode["date"] = "{ \"_name\": \"CupertinoDatePickerMode.date\", \"index\": 1 }";
    CupertinoDatePickerMode["dateAndTime"] = "{ \"_name\": \"CupertinoDatePickerMode.dateAndTime\", \"index\": 2 }";
})(CupertinoDatePickerMode || (CupertinoDatePickerMode = {}));
export { CupertinoDatePickerMode };
var _PickerColumnType;
(function (_PickerColumnType) {
    _PickerColumnType["dayOfMonth"] = "{ \"_name\": \"_PickerColumnType.dayOfMonth\", \"index\": 0 }";
    _PickerColumnType["month"] = "{ \"_name\": \"_PickerColumnType.month\", \"index\": 1 }";
    _PickerColumnType["year"] = "{ \"_name\": \"_PickerColumnType.year\", \"index\": 2 }";
    _PickerColumnType["date"] = "{ \"_name\": \"_PickerColumnType.date\", \"index\": 3 }";
    _PickerColumnType["hour"] = "{ \"_name\": \"_PickerColumnType.hour\", \"index\": 4 }";
    _PickerColumnType["minute"] = "{ \"_name\": \"_PickerColumnType.minute\", \"index\": 5 }";
    _PickerColumnType["dayPeriod"] = "{ \"_name\": \"_PickerColumnType.dayPeriod\", \"index\": 6 }";
})(_PickerColumnType || (_PickerColumnType = {}));
export { _PickerColumnType };
class CupertinoDatePicker extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.mode = namedParameters.mode;
        this.onDateTimeChanged = namedParameters.onDateTimeChanged;
        this.initialDateTime = namedParameters.initialDateTime;
        this.minimumDate = namedParameters.minimumDate;
        this.maximumDate = namedParameters.maximumDate;
        this.minimumYear = namedParameters.minimumYear;
        this.maximumYear = namedParameters.maximumYear;
        this.minuteInterval = namedParameters.minuteInterval;
        this.use24hFormat = namedParameters.use24hFormat;
        this.backgroundColor = namedParameters.backgroundColor;
        this.className = 'CupertinoDatePicker';
    }
}
export { CupertinoDatePicker };
class _CupertinoDatePickerDateTimeState extends State$ {
}
export { _CupertinoDatePickerDateTimeState };
class _CupertinoDatePickerDateState extends State$ {
}
export { _CupertinoDatePickerDateState };
var CupertinoTimerPickerMode;
(function (CupertinoTimerPickerMode) {
    CupertinoTimerPickerMode["hm"] = "{ \"_name\": \"CupertinoTimerPickerMode.hm\", \"index\": 0 }";
    CupertinoTimerPickerMode["ms"] = "{ \"_name\": \"CupertinoTimerPickerMode.ms\", \"index\": 1 }";
    CupertinoTimerPickerMode["hms"] = "{ \"_name\": \"CupertinoTimerPickerMode.hms\", \"index\": 2 }";
})(CupertinoTimerPickerMode || (CupertinoTimerPickerMode = {}));
export { CupertinoTimerPickerMode };
class CupertinoTimerPicker extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.mode = namedParameters.mode;
        this.initialTimerDuration = namedParameters.initialTimerDuration;
        this.minuteInterval = namedParameters.minuteInterval;
        this.secondInterval = namedParameters.secondInterval;
        this.alignment = namedParameters.alignment;
        this.backgroundColor = namedParameters.backgroundColor;
        this.onTimerDurationChanged = namedParameters.onTimerDurationChanged;
        this.className = 'CupertinoTimerPicker';
    }
}
export { CupertinoTimerPicker };
class _CupertinoTimerPickerState extends State$ {
}
export { _CupertinoTimerPickerState };
