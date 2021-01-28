import { TextPainter } from '../painting/text-painter';
import { FixedExtentScrollController } from '../widgets/list-wheel-scroll-view';
import { Alignment, AlignmentGeometry } from '../painting/alignment';
import { CupertinoLocalizations } from './localizations';
import { Key } from '../foundation/key';
import { DateTime, Duration } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
declare class _DatePickerLayoutDelegate extends MultiChildLayoutDelegate {
    columnWidths: Array<any>;
    textDirectionFactor: number;
    constructor(namedParameters?: {
        columnWidths?: Array<any>;
        textDirectionFactor?: number;
    });
}
export { _DatePickerLayoutDelegate };
declare enum CupertinoDatePickerMode {
    time = "{ \"_name\": \"CupertinoDatePickerMode.time\", \"index\": 0 }",
    date = "{ \"_name\": \"CupertinoDatePickerMode.date\", \"index\": 1 }",
    dateAndTime = "{ \"_name\": \"CupertinoDatePickerMode.dateAndTime\", \"index\": 2 }"
}
export { CupertinoDatePickerMode };
declare enum _PickerColumnType {
    dayOfMonth = "{ \"_name\": \"_PickerColumnType.dayOfMonth\", \"index\": 0 }",
    month = "{ \"_name\": \"_PickerColumnType.month\", \"index\": 1 }",
    year = "{ \"_name\": \"_PickerColumnType.year\", \"index\": 2 }",
    date = "{ \"_name\": \"_PickerColumnType.date\", \"index\": 3 }",
    hour = "{ \"_name\": \"_PickerColumnType.hour\", \"index\": 4 }",
    minute = "{ \"_name\": \"_PickerColumnType.minute\", \"index\": 5 }",
    dayPeriod = "{ \"_name\": \"_PickerColumnType.dayPeriod\", \"index\": 6 }"
}
export { _PickerColumnType };
declare class CupertinoDatePicker extends StatefulWidget$ {
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
    constructor(namedParameters?: {
        key?: Key;
        mode?: CupertinoDatePickerMode;
        onDateTimeChanged?: any;
        initialDateTime?: DateTime;
        minimumDate?: DateTime;
        maximumDate?: DateTime;
        minimumYear?: number;
        maximumYear?: number;
        minuteInterval?: number;
        use24hFormat?: boolean;
        backgroundColor?: Color;
    });
}
export { CupertinoDatePicker };
declare class _CupertinoDatePickerDateTimeState extends State$ {
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
declare class _CupertinoDatePickerDateState extends State$ {
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
declare enum CupertinoTimerPickerMode {
    hm = "{ \"_name\": \"CupertinoTimerPickerMode.hm\", \"index\": 0 }",
    ms = "{ \"_name\": \"CupertinoTimerPickerMode.ms\", \"index\": 1 }",
    hms = "{ \"_name\": \"CupertinoTimerPickerMode.hms\", \"index\": 2 }"
}
export { CupertinoTimerPickerMode };
declare class CupertinoTimerPicker extends StatefulWidget$ {
    mode: CupertinoTimerPickerMode;
    initialTimerDuration: Duration;
    minuteInterval: number;
    secondInterval: number;
    onTimerDurationChanged: any;
    alignment: AlignmentGeometry;
    backgroundColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        mode?: CupertinoTimerPickerMode;
        initialTimerDuration?: Duration;
        minuteInterval?: number;
        secondInterval?: number;
        alignment?: AlignmentGeometry;
        backgroundColor?: Color;
        onTimerDurationChanged?: any;
    });
}
export { CupertinoTimerPicker };
declare class _CupertinoTimerPickerState extends State$ {
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
