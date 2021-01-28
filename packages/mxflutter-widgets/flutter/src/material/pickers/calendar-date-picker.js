//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { SliverGridDelegate } from '../../rendering/sliver-grid';
import { StatefulWidget$, State$, InheritedWidget } from '../../widgets/framework';
class CalendarDatePicker extends StatefulWidget$ {
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
export { CalendarDatePicker };
class _CalendarDatePickerState extends State$ {
}
export { _CalendarDatePickerState };
class _DatePickerModeToggleButton extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.mode = namedParameters.mode;
        this.title = namedParameters.title;
        this.onTitlePressed = namedParameters.onTitlePressed;
        this.className = '_DatePickerModeToggleButton';
    }
}
export { _DatePickerModeToggleButton };
class _DatePickerModeToggleButtonState extends State$ {
}
export { _DatePickerModeToggleButtonState };
class _MonthPicker extends StatefulWidget$ {
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
export { _MonthPicker };
class _MonthPickerState extends State$ {
}
export { _MonthPickerState };
class _FocusedDate extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.date = namedParameters.date;
        this.className = '_FocusedDate';
    }
}
export { _FocusedDate };
class _DayPicker extends StatefulWidget$ {
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
export { _DayPicker };
class _DayPickerState extends State$ {
}
export { _DayPickerState };
class _DayPickerGridDelegate extends SliverGridDelegate {
}
export { _DayPickerGridDelegate };
class _YearPicker extends StatefulWidget$ {
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
export { _YearPicker };
class _YearPickerState extends State$ {
    static get minYears() {
        return 18;
    }
}
export { _YearPickerState };
class _YearPickerGridDelegate extends SliverGridDelegate {
}
export { _YearPickerGridDelegate };
