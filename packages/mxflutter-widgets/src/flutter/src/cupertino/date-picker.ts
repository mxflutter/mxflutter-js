// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextPainter } from '../painting/text-painter';
import { FixedExtentScrollController } from '../widgets/list-wheel-scroll-view';
import { Alignment, AlignmentGeometry } from '../painting/alignment';
import { CupertinoLocalizations } from './localizations';
import { Key } from '../foundation/key';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { DateTime, Duration } from '../../../mx-dart-sdk';
import { StatefulWidget, State } from '../widgets/framework';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _DatePickerLayoutDelegate extends MultiChildLayoutDelegate {
  columnWidths: Array<any>;
  textDirectionFactor: number;
  public constructor(namedParameters: {columnWidths?: Array<any>, textDirectionFactor?: number} = {}) {
    super();
    this.columnWidths = namedParameters.columnWidths;
    this.textDirectionFactor = namedParameters.textDirectionFactor;
    this.className = '_DatePickerLayoutDelegate';
  }
}
export { _DatePickerLayoutDelegate };
enum CupertinoDatePickerMode {
  time = '{ "_name": "CupertinoDatePickerMode.time", "index": 0 }',
  date = '{ "_name": "CupertinoDatePickerMode.date", "index": 1 }',
  dateAndTime = '{ "_name": "CupertinoDatePickerMode.dateAndTime", "index": 2 }',
};

export { CupertinoDatePickerMode };
enum _PickerColumnType {
  dayOfMonth = '{ "_name": "_PickerColumnType.dayOfMonth", "index": 0 }',
  month = '{ "_name": "_PickerColumnType.month", "index": 1 }',
  year = '{ "_name": "_PickerColumnType.year", "index": 2 }',
  date = '{ "_name": "_PickerColumnType.date", "index": 3 }',
  hour = '{ "_name": "_PickerColumnType.hour", "index": 4 }',
  minute = '{ "_name": "_PickerColumnType.minute", "index": 5 }',
  dayPeriod = '{ "_name": "_PickerColumnType.dayPeriod", "index": 6 }',
};

export { _PickerColumnType };
class CupertinoDatePicker extends StatefulWidget {
  mode: CupertinoDatePickerMode;
  initialDateTime: DateTime;
  minimumDate: DateTime;
  maximumDate: DateTime;
  minimumYear: number;
  maximumYear: number;
  minuteInterval: number;
  use24hFormat: boolean;
  onDateTimeChanged: any;
  backgroundColor: Color;
  public constructor(namedParameters: {key?: Key, mode?: CupertinoDatePickerMode, onDateTimeChanged?: any, initialDateTime?: DateTime, minimumDate?: DateTime, maximumDate?: DateTime, minimumYear?: number, maximumYear?: number, minuteInterval?: number, use24hFormat?: boolean, backgroundColor?: Color} = {}) {
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
class _CupertinoDatePickerDateTimeState extends State {
  textDirectionFactor: number;
  localizations: CupertinoLocalizations;
  alignCenterLeft: Alignment;
  alignCenterRight: Alignment;
  initialDateTime: DateTime;
  dateController: FixedExtentScrollController;
  hourController: FixedExtentScrollController;
  minuteController: FixedExtentScrollController;
  selectedAmPm: number;
  meridiemRegion: number;
  meridiemController: FixedExtentScrollController;
  isDatePickerScrolling: boolean;
  isHourPickerScrolling: boolean;
  isMinutePickerScrolling: boolean;
  isMeridiemPickerScrolling: boolean;
  estimatedColumnWidths: Map<any, any>;
}
export { _CupertinoDatePickerDateTimeState };
class _CupertinoDatePickerDateState extends State {
  textDirectionFactor: number;
  localizations: CupertinoLocalizations;
  alignCenterLeft: Alignment;
  alignCenterRight: Alignment;
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  dayController: FixedExtentScrollController;
  monthController: FixedExtentScrollController;
  yearController: FixedExtentScrollController;
  isDayPickerScrolling: boolean;
  isMonthPickerScrolling: boolean;
  isYearPickerScrolling: boolean;
  estimatedColumnWidths: Map<any, any>;
}
export { _CupertinoDatePickerDateState };
enum CupertinoTimerPickerMode {
  hm = '{ "_name": "CupertinoTimerPickerMode.hm", "index": 0 }',
  ms = '{ "_name": "CupertinoTimerPickerMode.ms", "index": 1 }',
  hms = '{ "_name": "CupertinoTimerPickerMode.hms", "index": 2 }',
};

export { CupertinoTimerPickerMode };
class CupertinoTimerPicker extends StatefulWidget {
  mode: CupertinoTimerPickerMode;
  initialTimerDuration: Duration;
  minuteInterval: number;
  secondInterval: number;
  onTimerDurationChanged: any;
  alignment: AlignmentGeometry;
  backgroundColor: Color;
  public constructor(namedParameters: {key?: Key, mode?: CupertinoTimerPickerMode, initialTimerDuration?: Duration, minuteInterval?: number, secondInterval?: number, alignment?: AlignmentGeometry, backgroundColor?: Color, onTimerDurationChanged?: any} = {}) {
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
class _CupertinoTimerPickerState extends State {
  textDirection: TextDirection;
  localizations: CupertinoLocalizations;
  selectedHour: number;
  selectedMinute: number;
  selectedSecond: number;
  lastSelectedHour: number;
  lastSelectedMinute: number;
  lastSelectedSecond: number;
  textPainter: TextPainter;
  numbers: Array<any>;
  numberLabelWidth: number;
  numberLabelHeight: number;
  numberLabelBaseline: number;
}
export { _CupertinoTimerPickerState };
