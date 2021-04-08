import { ScrollController } from '../../widgets/scroll-controller';
import { SliverGridDelegate } from '../../rendering/sliver-grid';
import { FocusNode } from '../../widgets/focus-manager';
import { PageController } from '../../widgets/page-view';
import { AnimationController } from '../../animation/animation-controller';
import { TextDirection } from '../../../../mx-dart-sdk';
import { MaterialLocalizations } from '../material-localizations';
import { Key } from '../../foundation/key';
import { DatePickerMode } from './date-picker-common';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatefulWidget, State, GlobalKey, InheritedWidget } from '../../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CalendarDatePicker extends StatefulWidget {
    initialDate: DateTime;
    firstDate: DateTime;
    lastDate: DateTime;
    currentDate: DateTime;
    onDateChanged: any;
    onDisplayedMonthChanged: any;
    initialCalendarMode: DatePickerMode;
    selectableDayPredicate: any;
    constructor(namedParameters?: {
        key?: Key;
        initialDate?: DateTime;
        firstDate?: DateTime;
        lastDate?: DateTime;
        currentDate?: DateTime;
        onDateChanged?: any;
        onDisplayedMonthChanged?: any;
        initialCalendarMode?: DatePickerMode;
        selectableDayPredicate?: any;
    });
}
export { CalendarDatePicker };
declare class _CalendarDatePickerState extends State {
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
declare class _DatePickerModeToggleButton extends StatefulWidget {
    mode: DatePickerMode;
    title: string;
    onTitlePressed: any;
    constructor(namedParameters?: {
        mode?: DatePickerMode;
        title?: string;
        onTitlePressed?: any;
    });
}
export { _DatePickerModeToggleButton };
declare class _DatePickerModeToggleButtonState extends State {
    controller: AnimationController;
}
export { _DatePickerModeToggleButtonState };
declare class _MonthPicker extends StatefulWidget {
    initialMonth: DateTime;
    currentDate: DateTime;
    firstDate: DateTime;
    lastDate: DateTime;
    selectedDate: DateTime;
    onChanged: any;
    onDisplayedMonthChanged: any;
    selectableDayPredicate: any;
    constructor(namedParameters?: {
        key?: Key;
        initialMonth?: DateTime;
        currentDate?: DateTime;
        firstDate?: DateTime;
        lastDate?: DateTime;
        selectedDate?: DateTime;
        onChanged?: any;
        onDisplayedMonthChanged?: any;
        selectableDayPredicate?: any;
    });
}
export { _MonthPicker };
declare class _MonthPickerState extends State {
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
declare class _FocusedDate extends InheritedWidget {
    date: DateTime;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        date?: DateTime;
    });
}
export { _FocusedDate };
declare class _DayPicker extends StatefulWidget {
    selectedDate: DateTime;
    currentDate: DateTime;
    onChanged: any;
    firstDate: DateTime;
    lastDate: DateTime;
    displayedMonth: DateTime;
    selectableDayPredicate: any;
    constructor(namedParameters?: {
        key?: Key;
        currentDate?: DateTime;
        displayedMonth?: DateTime;
        firstDate?: DateTime;
        lastDate?: DateTime;
        selectedDate?: DateTime;
        onChanged?: any;
        selectableDayPredicate?: any;
    });
}
export { _DayPicker };
declare class _DayPickerState extends State {
    dayFocusNodes: Array<any>;
}
export { _DayPickerState };
declare class _DayPickerGridDelegate extends SliverGridDelegate {
}
export { _DayPickerGridDelegate };
declare class _YearPicker extends StatefulWidget {
    currentDate: DateTime;
    firstDate: DateTime;
    lastDate: DateTime;
    initialDate: DateTime;
    selectedDate: DateTime;
    onChanged: any;
    constructor(namedParameters?: {
        key?: Key;
        currentDate?: DateTime;
        firstDate?: DateTime;
        lastDate?: DateTime;
        initialDate?: DateTime;
        selectedDate?: DateTime;
        onChanged?: any;
    });
}
export { _YearPicker };
declare class _YearPickerState extends State {
    scrollController: ScrollController;
    static get minYears(): number;
}
export { _YearPickerState };
declare class _YearPickerGridDelegate extends SliverGridDelegate {
}
export { _YearPickerGridDelegate };
