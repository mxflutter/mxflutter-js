//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { OrdinalSortKey } from '../../semantics/semantics';
import { StatelessWidget$, StatefulWidget$, State$ } from '../../widgets/framework';
import { SliverGridDelegate } from '../../rendering/sliver-grid';
class _DayPickerGridDelegate extends SliverGridDelegate {
}
export { _DayPickerGridDelegate };
class DayPicker extends StatelessWidget$ {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
}
export { _MonthPickerState };
class _MonthPickerSortKey extends OrdinalSortKey {
    constructor(order) {
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
    constructor(namedParameters = {}) {
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
}
export { _YearPickerState };
