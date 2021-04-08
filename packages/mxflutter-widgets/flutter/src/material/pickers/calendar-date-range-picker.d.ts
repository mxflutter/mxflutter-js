import { Color, TextDirection } from '../../../../mx-dart-sdk';
import { CustomPainter } from '../../rendering/custom-paint';
import { DragStartBehavior } from '../../gestures/recognizer';
import { SliverGridDelegate, SliverGridLayout } from '../../rendering/sliver-grid';
import { TraversalDirection } from '../../widgets/focus-traversal';
import { FocusNode } from '../../widgets/focus-manager';
import { ScrollController } from '../../widgets/scroll-controller';
import { Key } from '../../foundation/key';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget, State, GlobalKey, InheritedWidget, StatelessWidget } from '../../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CalendarDateRangePicker extends StatefulWidget {
    initialStartDate: DateTime;
    initialEndDate: DateTime;
    firstDate: DateTime;
    lastDate: DateTime;
    currentDate: DateTime;
    onStartDateChanged: any;
    onEndDateChanged: any;
    constructor(namedParameters?: {
        key?: Key;
        initialStartDate?: DateTime;
        initialEndDate?: DateTime;
        firstDate?: DateTime;
        lastDate?: DateTime;
        currentDate?: DateTime;
        onStartDateChanged?: any;
        onEndDateChanged?: any;
    });
}
export { CalendarDateRangePicker };
declare class _CalendarDateRangePickerState extends State {
    scrollViewKey: GlobalKey;
    startDate: DateTime;
    endDate: DateTime;
    initialMonthIndex: number;
    controller: ScrollController;
    showWeekBottomDivider: boolean;
}
export { _CalendarDateRangePickerState };
declare class _CalendarKeyboardNavigator extends StatefulWidget {
    child: MXWidget;
    firstDate: DateTime;
    lastDate: DateTime;
    initialFocusedDay: DateTime;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        firstDate?: DateTime;
        lastDate?: DateTime;
        initialFocusedDay?: DateTime;
    });
}
export { _CalendarKeyboardNavigator };
declare class _CalendarKeyboardNavigatorState extends State {
    shortcutMap: Map<any, any>;
    actionMap: Map<any, any>;
    dayGridFocus: FocusNode;
    dayTraversalDirection: TraversalDirection;
    focusedDay: DateTime;
}
export { _CalendarKeyboardNavigatorState };
declare class _FocusedDate extends InheritedWidget {
    date: DateTime;
    scrollDirection: TraversalDirection;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        date?: DateTime;
        scrollDirection?: TraversalDirection;
    });
}
export { _FocusedDate };
declare class _DayHeaders extends StatelessWidget {
}
export { _DayHeaders };
declare class _MonthItemGridDelegate extends SliverGridDelegate {
}
export { _MonthItemGridDelegate };
declare class _MonthSliverGridLayout extends SliverGridLayout {
    crossAxisCount: number;
    dayChildWidth: number;
    edgeChildWidth: number;
    reverseCrossAxis: boolean;
    constructor(namedParameters?: {
        crossAxisCount?: number;
        dayChildWidth?: number;
        edgeChildWidth?: number;
        reverseCrossAxis?: boolean;
    });
}
export { _MonthSliverGridLayout };
declare class _MonthItem extends StatefulWidget {
    selectedDateStart: DateTime;
    selectedDateEnd: DateTime;
    currentDate: DateTime;
    onChanged: any;
    firstDate: DateTime;
    lastDate: DateTime;
    displayedMonth: DateTime;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
        key?: Key;
        selectedDateStart?: DateTime;
        selectedDateEnd?: DateTime;
        currentDate?: DateTime;
        onChanged?: any;
        firstDate?: DateTime;
        lastDate?: DateTime;
        displayedMonth?: DateTime;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { _MonthItem };
declare class _MonthItemState extends State {
    dayFocusNodes: Array<any>;
}
export { _MonthItemState };
declare enum _HighlightPainterStyle {
    none = "{ \"_name\": \"_HighlightPainterStyle.none\", \"index\": 0 }",
    highlightLeading = "{ \"_name\": \"_HighlightPainterStyle.highlightLeading\", \"index\": 1 }",
    highlightTrailing = "{ \"_name\": \"_HighlightPainterStyle.highlightTrailing\", \"index\": 2 }",
    highlightAll = "{ \"_name\": \"_HighlightPainterStyle.highlightAll\", \"index\": 3 }"
}
export { _HighlightPainterStyle };
declare class _HighlightPainter extends CustomPainter {
    color: Color;
    style: _HighlightPainterStyle;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        color?: Color;
        style?: _HighlightPainterStyle;
        textDirection?: TextDirection;
    });
}
export { _HighlightPainter };
