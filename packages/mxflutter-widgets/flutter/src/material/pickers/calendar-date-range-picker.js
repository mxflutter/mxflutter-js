"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._HighlightPainter = exports._HighlightPainterStyle = exports._MonthItemState = exports._MonthItem = exports._MonthSliverGridLayout = exports._MonthItemGridDelegate = exports._DayHeaders = exports._FocusedDate = exports._CalendarKeyboardNavigatorState = exports._CalendarKeyboardNavigator = exports._CalendarDateRangePickerState = exports.CalendarDateRangePicker = void 0;
const custom_paint_1 = require("../../rendering/custom-paint");
const sliver_grid_1 = require("../../rendering/sliver-grid");
const framework_1 = require("../../widgets/framework");
class CalendarDateRangePicker extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialStartDate = namedParameters.initialStartDate;
        this.initialEndDate = namedParameters.initialEndDate;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.currentDate = namedParameters.currentDate;
        this.onStartDateChanged = namedParameters.onStartDateChanged;
        this.onEndDateChanged = namedParameters.onEndDateChanged;
        this.className = 'CalendarDateRangePicker';
    }
}
exports.CalendarDateRangePicker = CalendarDateRangePicker;
class _CalendarDateRangePickerState extends framework_1.State {
}
exports._CalendarDateRangePickerState = _CalendarDateRangePickerState;
class _CalendarKeyboardNavigator extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.initialFocusedDay = namedParameters.initialFocusedDay;
        this.className = '_CalendarKeyboardNavigator';
    }
}
exports._CalendarKeyboardNavigator = _CalendarKeyboardNavigator;
class _CalendarKeyboardNavigatorState extends framework_1.State {
}
exports._CalendarKeyboardNavigatorState = _CalendarKeyboardNavigatorState;
class _FocusedDate extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.date = namedParameters.date;
        this.scrollDirection = namedParameters.scrollDirection;
        this.className = '_FocusedDate';
    }
}
exports._FocusedDate = _FocusedDate;
class _DayHeaders extends framework_1.StatelessWidget {
}
exports._DayHeaders = _DayHeaders;
class _MonthItemGridDelegate extends sliver_grid_1.SliverGridDelegate {
}
exports._MonthItemGridDelegate = _MonthItemGridDelegate;
class _MonthSliverGridLayout extends sliver_grid_1.SliverGridLayout {
    constructor(namedParameters = {}) {
        super();
        this.crossAxisCount = namedParameters.crossAxisCount;
        this.dayChildWidth = namedParameters.dayChildWidth;
        this.edgeChildWidth = namedParameters.edgeChildWidth;
        this.reverseCrossAxis = namedParameters.reverseCrossAxis;
        this.className = '_MonthSliverGridLayout';
    }
}
exports._MonthSliverGridLayout = _MonthSliverGridLayout;
class _MonthItem extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.selectedDateStart = namedParameters.selectedDateStart;
        this.selectedDateEnd = namedParameters.selectedDateEnd;
        this.currentDate = namedParameters.currentDate;
        this.onChanged = namedParameters.onChanged;
        this.firstDate = namedParameters.firstDate;
        this.lastDate = namedParameters.lastDate;
        this.displayedMonth = namedParameters.displayedMonth;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.className = '_MonthItem';
    }
}
exports._MonthItem = _MonthItem;
class _MonthItemState extends framework_1.State {
}
exports._MonthItemState = _MonthItemState;
var _HighlightPainterStyle;
(function (_HighlightPainterStyle) {
    _HighlightPainterStyle["none"] = "{ \"_name\": \"_HighlightPainterStyle.none\", \"index\": 0 }";
    _HighlightPainterStyle["highlightLeading"] = "{ \"_name\": \"_HighlightPainterStyle.highlightLeading\", \"index\": 1 }";
    _HighlightPainterStyle["highlightTrailing"] = "{ \"_name\": \"_HighlightPainterStyle.highlightTrailing\", \"index\": 2 }";
    _HighlightPainterStyle["highlightAll"] = "{ \"_name\": \"_HighlightPainterStyle.highlightAll\", \"index\": 3 }";
})(_HighlightPainterStyle || (_HighlightPainterStyle = {}));
exports._HighlightPainterStyle = _HighlightPainterStyle;
;
class _HighlightPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.style = namedParameters.style;
        this.textDirection = namedParameters.textDirection;
        this.className = '_HighlightPainter';
    }
}
exports._HighlightPainter = _HighlightPainter;
