// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color, TextDirection } from '../../../../mx-dart-sdk';
import { CustomPainter } from '../../rendering/custom-paint';
import { DragStartBehavior } from '../../gestures/recognizer';
import { SliverGridDelegate, SliverGridLayout } from '../../rendering/sliver-grid';
import { TraversalDirection } from '../../widgets/focus-traversal';
import { FocusNode } from '../../widgets/focus-manager';
import { ScrollController } from '../../widgets/scroll-controller';
import { Key } from '../../foundation/key';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget, State, GlobalKey, Widget, InheritedWidget, StatelessWidget } from '../../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CalendarDateRangePicker extends StatefulWidget {
  initialStartDate: DateTime;
  initialEndDate: DateTime;
  firstDate: DateTime;
  lastDate: DateTime;
  currentDate: DateTime;
  onStartDateChanged: any;
  onEndDateChanged: any;
  public constructor(namedParameters: {key?: Key, initialStartDate?: DateTime, initialEndDate?: DateTime, firstDate?: DateTime, lastDate?: DateTime, currentDate?: DateTime, onStartDateChanged?: any, onEndDateChanged?: any} = {}) {
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
class _CalendarDateRangePickerState extends State {
  scrollViewKey: GlobalKey;
  startDate: DateTime;
  endDate: DateTime;
  initialMonthIndex: number;
  controller: ScrollController;
  showWeekBottomDivider: boolean;
}
export { _CalendarDateRangePickerState };
class _CalendarKeyboardNavigator extends StatefulWidget {
  child: MXWidget;
  firstDate: DateTime;
  lastDate: DateTime;
  initialFocusedDay: DateTime;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, firstDate?: DateTime, lastDate?: DateTime, initialFocusedDay?: DateTime} = {}) {
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
class _CalendarKeyboardNavigatorState extends State {
  shortcutMap: Map<any, any>;
  actionMap: Map<any, any>;
  dayGridFocus: FocusNode;
  dayTraversalDirection: TraversalDirection;
  focusedDay: DateTime;
}
export { _CalendarKeyboardNavigatorState };
class _FocusedDate extends InheritedWidget {
  date: DateTime;
  scrollDirection: TraversalDirection;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, date?: DateTime, scrollDirection?: TraversalDirection} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.date = namedParameters.date;
    this.scrollDirection = namedParameters.scrollDirection;
    this.className = '_FocusedDate';
  }
}
export { _FocusedDate };
class _DayHeaders extends StatelessWidget {}
export { _DayHeaders };
class _MonthItemGridDelegate extends SliverGridDelegate {}
export { _MonthItemGridDelegate };
class _MonthSliverGridLayout extends SliverGridLayout {
  crossAxisCount: number;
  dayChildWidth: number;
  edgeChildWidth: number;
  reverseCrossAxis: boolean;
  public constructor(namedParameters: {crossAxisCount?: number, dayChildWidth?: number, edgeChildWidth?: number, reverseCrossAxis?: boolean} = {}) {
    super();
    this.crossAxisCount = namedParameters.crossAxisCount;
    this.dayChildWidth = namedParameters.dayChildWidth;
    this.edgeChildWidth = namedParameters.edgeChildWidth;
    this.reverseCrossAxis = namedParameters.reverseCrossAxis;
    this.className = '_MonthSliverGridLayout';
  }
}
export { _MonthSliverGridLayout };
class _MonthItem extends StatefulWidget {
  selectedDateStart: DateTime;
  selectedDateEnd: DateTime;
  currentDate: DateTime;
  onChanged: any;
  firstDate: DateTime;
  lastDate: DateTime;
  displayedMonth: DateTime;
  dragStartBehavior: DragStartBehavior;
  public constructor(namedParameters: {key?: Key, selectedDateStart?: DateTime, selectedDateEnd?: DateTime, currentDate?: DateTime, onChanged?: any, firstDate?: DateTime, lastDate?: DateTime, displayedMonth?: DateTime, dragStartBehavior?: DragStartBehavior} = {}) {
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
class _MonthItemState extends State {
  dayFocusNodes: Array<any>;
}
export { _MonthItemState };
enum _HighlightPainterStyle {
  none = '{ "_name": "_HighlightPainterStyle.none", "index": 0 }',
  highlightLeading = '{ "_name": "_HighlightPainterStyle.highlightLeading", "index": 1 }',
  highlightTrailing = '{ "_name": "_HighlightPainterStyle.highlightTrailing", "index": 2 }',
  highlightAll = '{ "_name": "_HighlightPainterStyle.highlightAll", "index": 3 }',
};

export { _HighlightPainterStyle };
class _HighlightPainter extends CustomPainter {
  color: Color;
  style: _HighlightPainterStyle;
  textDirection: TextDirection;
  public constructor(namedParameters: {color?: Color, style?: _HighlightPainterStyle, textDirection?: TextDirection} = {}) {
    super();
    this.color = namedParameters.color;
    this.style = namedParameters.style;
    this.textDirection = namedParameters.textDirection;
    this.className = '_HighlightPainter';
  }
}
export { _HighlightPainter };
