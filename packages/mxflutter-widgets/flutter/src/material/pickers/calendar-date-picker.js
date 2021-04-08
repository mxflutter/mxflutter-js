"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._YearPickerGridDelegate = exports._YearPickerState = exports._YearPicker = exports._DayPickerGridDelegate = exports._DayPickerState = exports._DayPicker = exports._FocusedDate = exports._MonthPickerState = exports._MonthPicker = exports._DatePickerModeToggleButtonState = exports._DatePickerModeToggleButton = exports._CalendarDatePickerState = exports.CalendarDatePicker = void 0;
const sliver_grid_1 = require("../../rendering/sliver-grid");
const framework_1 = require("../../widgets/framework");
class CalendarDatePicker extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialDate = namedParameters.initialDate;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.currentDate = namedParameters.currentDate;
        this.onDateChanged = namedParameters.onDateChanged;
        this.onDisplayedMonthChanged = namedParameters.onDisplayedMonthChanged;
        this.initialCalendarMode = namedParameters.initialCalendarMode;
        this.selectableDayPredicate = namedParameters.selectableDayPredicate;
        this.className = 'CalendarDatePicker';
    }
}
exports.CalendarDatePicker = CalendarDatePicker;
class _CalendarDatePickerState extends framework_1.State {
}
exports._CalendarDatePickerState = _CalendarDatePickerState;
class _DatePickerModeToggleButton extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.mode = namedParameters.mode;
        this.title = namedParameters.title;
        this.onTitlePressed = namedParameters.onTitlePressed;
        this.className = '_DatePickerModeToggleButton';
    }
}
exports._DatePickerModeToggleButton = _DatePickerModeToggleButton;
class _DatePickerModeToggleButtonState extends framework_1.State {
}
exports._DatePickerModeToggleButtonState = _DatePickerModeToggleButtonState;
class _MonthPicker extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialMonth = namedParameters.initialMonth;
        this.currentDate = namedParameters.currentDate;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.selectedDate = namedParameters.selectedDate;
        this.onChanged = namedParameters.onChanged;
        this.onDisplayedMonthChanged = namedParameters.onDisplayedMonthChanged;
        this.selectableDayPredicate = namedParameters.selectableDayPredicate;
        this.className = '_MonthPicker';
    }
}
exports._MonthPicker = _MonthPicker;
class _MonthPickerState extends framework_1.State {
}
exports._MonthPickerState = _MonthPickerState;
class _FocusedDate extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.date = namedParameters.date;
        this.className = '_FocusedDate';
    }
}
exports._FocusedDate = _FocusedDate;
class _DayPicker extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.currentDate = namedParameters.currentDate;
        this.displayedMonth = namedParameters.displayedMonth;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.selectedDate = namedParameters.selectedDate;
        this.onChanged = namedParameters.onChanged;
        this.selectableDayPredicate = namedParameters.selectableDayPredicate;
        this.className = '_DayPicker';
    }
}
exports._DayPicker = _DayPicker;
class _DayPickerState extends framework_1.State {
}
exports._DayPickerState = _DayPickerState;
class _DayPickerGridDelegate extends sliver_grid_1.SliverGridDelegate {
}
exports._DayPickerGridDelegate = _DayPickerGridDelegate;
class _YearPicker extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.currentDate = namedParameters.currentDate;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.initialDate = namedParameters.initialDate;
        this.selectedDate = namedParameters.selectedDate;
        this.onChanged = namedParameters.onChanged;
        this.className = '_YearPicker';
    }
}
exports._YearPicker = _YearPicker;
class _YearPickerState extends framework_1.State {
    static get minYears() {
        return 18;
    }
}
exports._YearPickerState = _YearPickerState;
class _YearPickerGridDelegate extends sliver_grid_1.SliverGridDelegate {
}
exports._YearPickerGridDelegate = _YearPickerGridDelegate;
