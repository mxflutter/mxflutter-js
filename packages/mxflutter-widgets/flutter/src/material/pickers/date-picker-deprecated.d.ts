import { ScrollController } from '../../widgets/scroll-controller';
import { OrdinalSortKey } from '../../semantics/semantics';
import { Animation } from '../../animation/animation';
import { AnimationController } from '../../animation/animation-controller';
import { PageController } from '../../widgets/page-view';
import { TextDirection } from '../../../../mx-dart-sdk';
import { MaterialLocalizations } from '../material-localizations';
import { Key } from '../../foundation/key';
import { DragStartBehavior } from '../../gestures/recognizer';
import { DateTime } from '../../../../mx-dart-sdk';
import { StatelessWidget$, StatefulWidget$, State$ } from '../../widgets/framework';
import { SliverGridDelegate } from '../../rendering/sliver-grid';
declare class _DayPickerGridDelegate extends SliverGridDelegate {
}
export { _DayPickerGridDelegate };
declare class DayPicker extends StatelessWidget$ {
    selectedDate: DateTime;
    currentDate: DateTime;
    onChanged: any;
    firstDate: DateTime;
    lastDate: DateTime;
    displayedMonth: DateTime;
    selectableDayPredicate: any;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
        key?: Key;
        selectedDate?: DateTime;
        currentDate?: DateTime;
        onChanged?: any;
        firstDate?: DateTime;
        lastDate?: DateTime;
        displayedMonth?: DateTime;
        selectableDayPredicate?: any;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { DayPicker };
declare class MonthPicker extends StatefulWidget$ {
    selectedDate: DateTime;
    onChanged: any;
    firstDate: DateTime;
    lastDate: DateTime;
    selectableDayPredicate: any;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
        key?: Key;
        selectedDate?: DateTime;
        onChanged?: any;
        firstDate?: DateTime;
        lastDate?: DateTime;
        selectableDayPredicate?: any;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { MonthPicker };
declare class _MonthPickerState extends State$ {
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
declare class _MonthPickerSortKey extends OrdinalSortKey {
    constructor(order?: number);
    static get previousMonth(): _MonthPickerSortKey;
    static get nextMonth(): _MonthPickerSortKey;
    static get calendar(): _MonthPickerSortKey;
}
export { _MonthPickerSortKey };
declare class YearPicker extends StatefulWidget$ {
    selectedDate: DateTime;
    onChanged: any;
    firstDate: DateTime;
    lastDate: DateTime;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
        key?: Key;
        selectedDate?: DateTime;
        onChanged?: any;
        firstDate?: DateTime;
        lastDate?: DateTime;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { YearPicker };
declare class _YearPickerState extends State$ {
    scrollController: ScrollController;
}
export { _YearPickerState };
