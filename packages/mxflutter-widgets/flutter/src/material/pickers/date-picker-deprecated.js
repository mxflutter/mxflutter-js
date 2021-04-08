"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._YearPickerState = exports.YearPicker = exports._MonthPickerSortKey = exports._MonthPickerState = exports.MonthPicker = exports.DayPicker = exports._DayPickerGridDelegate = void 0;
const semantics_1 = require("../../semantics/semantics");
const framework_1 = require("../../widgets/framework");
const sliver_grid_1 = require("../../rendering/sliver-grid");
class _DayPickerGridDelegate extends sliver_grid_1.SliverGridDelegate {
}
exports._DayPickerGridDelegate = _DayPickerGridDelegate;
class DayPicker extends framework_1.StatelessWidget {
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
exports.DayPicker = DayPicker;
class MonthPicker extends framework_1.StatefulWidget {
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
exports.MonthPicker = MonthPicker;
class _MonthPickerState extends framework_1.State {
}
exports._MonthPickerState = _MonthPickerState;
class _MonthPickerSortKey extends semantics_1.OrdinalSortKey {
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
exports._MonthPickerSortKey = _MonthPickerSortKey;
class YearPicker extends framework_1.StatefulWidget {
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
exports.YearPicker = YearPicker;
class _YearPickerState extends framework_1.State {
}
exports._YearPickerState = _YearPickerState;
