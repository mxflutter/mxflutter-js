//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ScrollController } from '../../widgets/scroll-controller';
import { SliverConstraints } from '../../rendering/sliver';
import { SliverGridDelegate } from '../../rendering/sliver-grid';
import { TextStyle } from '../../painting/text-style';
import {
  NextFocusIntent,
  PreviousFocusIntent,
  DirectionalFocusIntent,
  TraversalDirection,
} from '../../widgets/focus-traversal';
import { FocusNode } from '../../widgets/focus-manager';
import { PageController } from '../../widgets/page-view';
import { AnimationController } from '../../animation/animation-controller';
import { TextDirection } from '../../../../mx-dart-sdk';
import { MaterialLocalizations } from '../material-localizations';
import { Key } from '../../foundation/key';
import { DatePickerMode } from './date-picker-common';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget$, State$, GlobalKey, BuildContext$, InheritedWidget, Widget } from '../../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CalendarDatePicker extends StatefulWidget$ {
  initialDate: DateTime;
  firstDate: DateTime;
  lastDate: DateTime;
  currentDate: DateTime;
  onDateChanged: any;
  onDisplayedMonthChanged: any;
  initialCalendarMode: DatePickerMode;
  selectableDayPredicate: any;
  public constructor(
    namedParameters: {
      key?: Key;
      initialDate?: DateTime;
      firstDate?: DateTime;
      lastDate?: DateTime;
      currentDate?: DateTime;
      onDateChanged?: any;
      onDisplayedMonthChanged?: any;
      initialCalendarMode?: DatePickerMode;
      selectableDayPredicate?: any;
    } = {},
  ) {
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
export { CalendarDatePicker };
class _CalendarDatePickerState extends State$ {
  announcedInitialDate: boolean;
  mode: DatePickerMode;
  currentDisplayedMonthDate: DateTime;
  selectedDate: DateTime;
  monthPickerKey: GlobalKey;
  yearPickerKey: GlobalKey;
  localizations: MaterialLocalizations;
  textDirection: TextDirection;
}
export { _CalendarDatePickerState };
class _DatePickerModeToggleButton extends StatefulWidget$ {
  mode: DatePickerMode;
  title: string;
  onTitlePressed: any;
  public constructor(namedParameters: { mode?: DatePickerMode; title?: string; onTitlePressed?: any } = {}) {
    super();
    this.mode = namedParameters.mode;
    this.title = namedParameters.title;
    this.onTitlePressed = namedParameters.onTitlePressed;
    this.className = '_DatePickerModeToggleButton';
  }
}
export { _DatePickerModeToggleButton };
class _DatePickerModeToggleButtonState extends State$ {
  controller: AnimationController;
}
export { _DatePickerModeToggleButtonState };
class _MonthPicker extends StatefulWidget$ {
  initialMonth: DateTime;
  currentDate: DateTime;
  firstDate: DateTime;
  lastDate: DateTime;
  selectedDate: DateTime;
  onChanged: any;
  onDisplayedMonthChanged: any;
  selectableDayPredicate: any;
  public constructor(
    namedParameters: {
      key?: Key;
      initialMonth?: DateTime;
      currentDate?: DateTime;
      firstDate?: DateTime;
      lastDate?: DateTime;
      selectedDate?: DateTime;
      onChanged?: any;
      onDisplayedMonthChanged?: any;
      selectableDayPredicate?: any;
    } = {},
  ) {
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
export { _MonthPicker };
class _MonthPickerState extends State$ {
  pageViewKey: GlobalKey;
  currentMonth: DateTime;
  nextMonthDate: DateTime;
  previousMonthDate: DateTime;
  pageController: PageController;
  localizations: MaterialLocalizations;
  textDirection: TextDirection;
  shortcutMap: Map<any, any>;
  actionMap: Map<any, any>;
  dayGridFocus: FocusNode;
  focusedDay: DateTime;
}
export { _MonthPickerState };
class _FocusedDate extends InheritedWidget {
  date: DateTime;
  public constructor(namedParameters: { key?: Key; child?: MXWidget; date?: DateTime } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.date = namedParameters.date;
    this.className = '_FocusedDate';
  }
}
export { _FocusedDate };
class _DayPicker extends StatefulWidget$ {
  selectedDate: DateTime;
  currentDate: DateTime;
  onChanged: any;
  firstDate: DateTime;
  lastDate: DateTime;
  displayedMonth: DateTime;
  selectableDayPredicate: any;
  public constructor(
    namedParameters: {
      key?: Key;
      currentDate?: DateTime;
      displayedMonth?: DateTime;
      firstDate?: DateTime;
      lastDate?: DateTime;
      selectedDate?: DateTime;
      onChanged?: any;
      selectableDayPredicate?: any;
    } = {},
  ) {
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
export { _DayPicker };
class _DayPickerState extends State$ {
  dayFocusNodes: Array<any>;
}
export { _DayPickerState };
class _DayPickerGridDelegate extends SliverGridDelegate {}
export { _DayPickerGridDelegate };
class _YearPicker extends StatefulWidget$ {
  currentDate: DateTime;
  firstDate: DateTime;
  lastDate: DateTime;
  initialDate: DateTime;
  selectedDate: DateTime;
  onChanged: any;
  public constructor(
    namedParameters: {
      key?: Key;
      currentDate?: DateTime;
      firstDate?: DateTime;
      lastDate?: DateTime;
      initialDate?: DateTime;
      selectedDate?: DateTime;
      onChanged?: any;
    } = {},
  ) {
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
export { _YearPicker };
class _YearPickerState extends State$ {
  scrollController: ScrollController;
  static get minYears() {
    return 18;
  }
}
export { _YearPickerState };
class _YearPickerGridDelegate extends SliverGridDelegate {}
export { _YearPickerGridDelegate };
