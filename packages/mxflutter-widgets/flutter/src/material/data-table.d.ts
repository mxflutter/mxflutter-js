import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Duration } from '../../../mx-dart-sdk';
import { InkResponse } from './ink-well';
import { TextStyle } from '../painting/text-style';
import { MaterialStateProperty } from './material-state';
import { LocalKey, Key } from '../foundation/key';
import { StatelessWidget, StatefulWidget, State } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class DataColumn extends MXDartClass {
    label: MXWidget;
    tooltip: string;
    numeric: boolean;
    onSort: any;
    constructor(namedParameters?: {
        label?: MXWidget;
        tooltip?: string;
        numeric?: boolean;
        onSort?: any;
    });
}
export { DataColumn };
declare class DataRow extends MXDartClass {
    key: LocalKey;
    onSelectChanged: any;
    selected: boolean;
    cells: Array<any>;
    color: MaterialStateProperty;
    constructor(namedParameters?: {
        key?: LocalKey;
        selected?: boolean;
        onSelectChanged?: any;
        color?: MaterialStateProperty;
        cells?: Array<any>;
    });
    static byIndex(namedParameters?: {
        index?: number;
        selected?: boolean;
        onSelectChanged?: any;
        color?: MaterialStateProperty;
        cells?: Array<any>;
    }): DataRow;
}
export { DataRow };
declare class DataCell extends MXDartClass {
    child: MXWidget;
    placeholder: boolean;
    showEditIcon: boolean;
    onTap: any;
    constructor(child?: MXWidget, namedParameters?: {
        placeholder?: boolean;
        showEditIcon?: boolean;
        onTap?: any;
    });
    static get empty(): DataCell;
}
export { DataCell };
declare class DataTable extends StatelessWidget {
    columns: Array<any>;
    sortColumnIndex: number;
    sortAscending: boolean;
    onSelectAll: any;
    dataRowColor: MaterialStateProperty;
    dataRowHeight: number;
    dataTextStyle: TextStyle;
    headingRowColor: MaterialStateProperty;
    headingRowHeight: number;
    headingTextStyle: TextStyle;
    horizontalMargin: number;
    columnSpacing: number;
    showCheckboxColumn: boolean;
    rows: Array<any>;
    dividerThickness: number;
    showBottomBorder: boolean;
    onlyTextColumn: number;
    constructor(namedParameters?: {
        key?: Key;
        columns?: Array<any>;
        sortColumnIndex?: number;
        sortAscending?: boolean;
        onSelectAll?: any;
        dataRowColor?: MaterialStateProperty;
        dataRowHeight?: number;
        dataTextStyle?: TextStyle;
        headingRowColor?: MaterialStateProperty;
        headingRowHeight?: number;
        headingTextStyle?: TextStyle;
        horizontalMargin?: number;
        columnSpacing?: number;
        showCheckboxColumn?: boolean;
        showBottomBorder?: boolean;
        dividerThickness?: number;
        rows?: Array<any>;
    });
}
export { DataTable };
declare class TableRowInkWell extends InkResponse {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        onTap?: any;
        onDoubleTap?: any;
        onLongPress?: any;
        onHighlightChanged?: any;
        overlayColor?: MaterialStateProperty;
    });
}
export { TableRowInkWell };
declare class _SortArrow extends StatefulWidget {
    visible: boolean;
    up: boolean;
    duration: Duration;
    constructor(namedParameters?: {
        key?: Key;
        visible?: boolean;
        up?: boolean;
        duration?: Duration;
    });
}
export { _SortArrow };
declare class _SortArrowState extends State {
    opacityController: AnimationController;
    opacityAnimation: Animation;
    orientationController: AnimationController;
    orientationAnimation: Animation;
    orientationOffset: number;
    up: boolean;
}
export { _SortArrowState };
