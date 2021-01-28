//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomPainter } from '../../rendering/custom-paint';
import { SliverGridDelegate, SliverGridLayout } from '../../rendering/sliver-grid';
import { StatefulWidget$, State$, InheritedWidget, StatelessWidget$, } from '../../widgets/framework';
class CalendarDateRangePicker extends StatefulWidget$ {
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
export { CalendarDateRangePicker };
class _CalendarDateRangePickerState extends State$ {
}
export { _CalendarDateRangePickerState };
class _CalendarKeyboardNavigator extends StatefulWidget$ {
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
export { _CalendarKeyboardNavigator };
class _CalendarKeyboardNavigatorState extends State$ {
}
export { _CalendarKeyboardNavigatorState };
class _FocusedDate extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.date = namedParameters.date;
        this.scrollDirection = namedParameters.scrollDirection;
        this.className = '_FocusedDate';
    }
}
export { _FocusedDate };
class _DayHeaders extends StatelessWidget$ {
}
export { _DayHeaders };
class _MonthItemGridDelegate extends SliverGridDelegate {
}
export { _MonthItemGridDelegate };
class _MonthSliverGridLayout extends SliverGridLayout {
    constructor(namedParameters = {}) {
        super();
        this.crossAxisCount = namedParameters.crossAxisCount;
        this.dayChildWidth = namedParameters.dayChildWidth;
        this.edgeChildWidth = namedParameters.edgeChildWidth;
        this.reverseCrossAxis = namedParameters.reverseCrossAxis;
        this.className = '_MonthSliverGridLayout';
    }
}
export { _MonthSliverGridLayout };
class _MonthItem extends StatefulWidget$ {
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
export { _MonthItem };
class _MonthItemState extends State$ {
}
export { _MonthItemState };
var _HighlightPainterStyle;
(function (_HighlightPainterStyle) {
    _HighlightPainterStyle["none"] = "{ \"_name\": \"_HighlightPainterStyle.none\", \"index\": 0 }";
    _HighlightPainterStyle["highlightLeading"] = "{ \"_name\": \"_HighlightPainterStyle.highlightLeading\", \"index\": 1 }";
    _HighlightPainterStyle["highlightTrailing"] = "{ \"_name\": \"_HighlightPainterStyle.highlightTrailing\", \"index\": 2 }";
    _HighlightPainterStyle["highlightAll"] = "{ \"_name\": \"_HighlightPainterStyle.highlightAll\", \"index\": 3 }";
})(_HighlightPainterStyle || (_HighlightPainterStyle = {}));
export { _HighlightPainterStyle };
class _HighlightPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.style = namedParameters.style;
        this.textDirection = namedParameters.textDirection;
        this.className = '_HighlightPainter';
    }
}
export { _HighlightPainter };
