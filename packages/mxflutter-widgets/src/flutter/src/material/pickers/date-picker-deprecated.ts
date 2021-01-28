//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ScrollController } from '../../widgets/scroll-controller';
import { OrdinalSortKey } from '../../semantics/semantics';
import { ScrollStartNotification, ScrollEndNotification } from '../../widgets/scroll-notification';
import { Animation } from '../../animation/animation';
import { AnimationController } from '../../animation/animation-controller';
import { PageController } from '../../widgets/page-view';
import { TextDirection } from '../../../../mx-dart-sdk';
import { MaterialLocalizations } from '../material-localizations';
import { TextStyle } from '../../painting/text-style';
import { Key } from '../../foundation/key';
import { DragStartBehavior } from '../../gestures/recognizer';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatelessWidget$, BuildContext$, StatefulWidget$, State$ } from '../../widgets/framework';
import { SliverConstraints } from '../../rendering/sliver';
import { SliverGridDelegate } from '../../rendering/sliver-grid';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _DayPickerGridDelegate extends SliverGridDelegate {}
export { _DayPickerGridDelegate };
class DayPicker extends StatelessWidget$ {
  selectedDate: DateTime;
  currentDate: DateTime;
  onChanged: any;
  firstDate: DateTime;
  lastDate: DateTime;
  displayedMonth: DateTime;
  selectableDayPredicate: any;
  dragStartBehavior: DragStartBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      selectedDate?: DateTime;
      currentDate?: DateTime;
      onChanged?: any;
      firstDate?: DateTime;
      lastDate?: DateTime;
      displayedMonth?: DateTime;
      selectableDayPredicate?: any;
      dragStartBehavior?: DragStartBehavior;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.selectedDate = namedParameters.selectedDate;
    this.currentDate = namedParameters.currentDate;
    this.onChanged = namedParameters.onChanged;
    this.firstDate = namedParameters.firstDate;
    this.lastDate = namedParameters.lastDate;
    this.displayedMonth = namedParameters.displayedMonth;
    this.selectableDayPredicate = namedParameters.selectableDayPredicate;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = 'DayPicker';
  }
}
export { DayPicker };
class MonthPicker extends StatefulWidget$ {
  selectedDate: DateTime;
  onChanged: any;
  firstDate: DateTime;
  lastDate: DateTime;
  selectableDayPredicate: any;
  dragStartBehavior: DragStartBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      selectedDate?: DateTime;
      onChanged?: any;
      firstDate?: DateTime;
      lastDate?: DateTime;
      selectableDayPredicate?: any;
      dragStartBehavior?: DragStartBehavior;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.selectedDate = namedParameters.selectedDate;
    this.onChanged = namedParameters.onChanged;
    this.firstDate = namedParameters.firstDate;
    this.lastDate = namedParameters.lastDate;
    this.selectableDayPredicate = namedParameters.selectableDayPredicate;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = 'MonthPicker';
  }
}
export { MonthPicker };
class _MonthPickerState extends State$ {
  localizations: MaterialLocalizations;
  textDirection: TextDirection;
  todayDate: DateTime;
  currentDisplayedMonthDate: DateTime;
  timer: any;
  dayPickerController: PageController;
  chevronOpacityController: AnimationController;
  chevronOpacityAnimation: Animation;
  previousMonthDate: DateTime;
  nextMonthDate: DateTime;
}
export { _MonthPickerState };
class _MonthPickerSortKey extends OrdinalSortKey {
  public constructor(order?: number) {
    super();
    this['order'] = order;
    this.className = '_MonthPickerSortKey';
  }
  static get previousMonth() {
    var jsObj = new _MonthPickerSortKey();
    jsObj['className'] = '_MonthPickerSortKey';
    jsObj['constructorName'] = 'previousMonth';
    return jsObj;
  }
  static get nextMonth() {
    var jsObj = new _MonthPickerSortKey();
    jsObj['className'] = '_MonthPickerSortKey';
    jsObj['constructorName'] = 'nextMonth';
    return jsObj;
  }
  static get calendar() {
    var jsObj = new _MonthPickerSortKey();
    jsObj['className'] = '_MonthPickerSortKey';
    jsObj['constructorName'] = 'calendar';
    return jsObj;
  }
}
export { _MonthPickerSortKey };
class YearPicker extends StatefulWidget$ {
  selectedDate: DateTime;
  onChanged: any;
  firstDate: DateTime;
  lastDate: DateTime;
  dragStartBehavior: DragStartBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      selectedDate?: DateTime;
      onChanged?: any;
      firstDate?: DateTime;
      lastDate?: DateTime;
      dragStartBehavior?: DragStartBehavior;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.selectedDate = namedParameters.selectedDate;
    this.onChanged = namedParameters.onChanged;
    this.firstDate = namedParameters.firstDate;
    this.lastDate = namedParameters.lastDate;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = 'YearPicker';
  }
}
export { YearPicker };
class _YearPickerState extends State$ {
  scrollController: ScrollController;
}
export { _YearPickerState };
