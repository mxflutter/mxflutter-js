import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { DataTableSource } from './data-table-source';
import { StatefulWidget$, State$, GlobalKey } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class PaginatedDataTable extends StatefulWidget$ {
    header: MXWidget;
    actions: Array<any>;
    columns: Array<any>;
    sortColumnIndex: number;
    sortAscending: boolean;
    onSelectAll: any;
    dataRowHeight: number;
    headingRowHeight: number;
    horizontalMargin: number;
    columnSpacing: number;
    showCheckboxColumn: boolean;
    initialFirstRowIndex: number;
    onPageChanged: any;
    rowsPerPage: number;
    availableRowsPerPage: Array<any>;
    onRowsPerPageChanged: any;
    source: DataTableSource;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
        key?: Key;
        header?: MXWidget;
        actions?: Array<any>;
        columns?: Array<any>;
        sortColumnIndex?: number;
        sortAscending?: boolean;
        onSelectAll?: any;
        dataRowHeight?: number;
        headingRowHeight?: number;
        horizontalMargin?: number;
        columnSpacing?: number;
        showCheckboxColumn?: boolean;
        initialFirstRowIndex?: number;
        onPageChanged?: any;
        rowsPerPage?: number;
        availableRowsPerPage?: Array<any>;
        onRowsPerPageChanged?: any;
        dragStartBehavior?: DragStartBehavior;
        source?: DataTableSource;
    });
    static get defaultRowsPerPage(): number;
}
export { PaginatedDataTable };
declare class PaginatedDataTableState extends State$ {
    firstRowIndex: number;
    rowCount: number;
    rowCountApproximate: boolean;
    selectedRowCount: number;
    rows: Map<any, any>;
    tableKey: GlobalKey;
}
export { PaginatedDataTableState };
