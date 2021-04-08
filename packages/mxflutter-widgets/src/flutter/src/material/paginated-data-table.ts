// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { DataTableSource } from './data-table-source';
import { StatefulWidget, Widget, State, GlobalKey } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class PaginatedDataTable extends StatefulWidget {
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
  public constructor(namedParameters: {key?: Key, header?: MXWidget, actions?: Array<any>, columns?: Array<any>, sortColumnIndex?: number, sortAscending?: boolean, onSelectAll?: any, dataRowHeight?: number, headingRowHeight?: number, horizontalMargin?: number, columnSpacing?: number, showCheckboxColumn?: boolean, initialFirstRowIndex?: number, onPageChanged?: any, rowsPerPage?: number, availableRowsPerPage?: Array<any>, onRowsPerPageChanged?: any, dragStartBehavior?: DragStartBehavior, source?: DataTableSource} = {}) {
    super();
    this.key = namedParameters.key;
    this.header = namedParameters.header;
    this.actions = namedParameters.actions;
    this.columns = namedParameters.columns;
    this.sortColumnIndex = namedParameters.sortColumnIndex;
    this.sortAscending = namedParameters.sortAscending;
    this.onSelectAll = namedParameters.onSelectAll;
    this.dataRowHeight = namedParameters.dataRowHeight;
    this.headingRowHeight = namedParameters.headingRowHeight;
    this.horizontalMargin = namedParameters.horizontalMargin;
    this.columnSpacing = namedParameters.columnSpacing;
    this.showCheckboxColumn = namedParameters.showCheckboxColumn;
    this.initialFirstRowIndex = namedParameters.initialFirstRowIndex;
    this.onPageChanged = namedParameters.onPageChanged;
    this.rowsPerPage = namedParameters.rowsPerPage;
    this.availableRowsPerPage = namedParameters.availableRowsPerPage;
    this.onRowsPerPageChanged = namedParameters.onRowsPerPageChanged;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.source = namedParameters.source;
    this.className = 'PaginatedDataTable';
  }
  static get defaultRowsPerPage() {
    return 10;
  }
}
export { PaginatedDataTable };
class PaginatedDataTableState extends State {
  firstRowIndex: number;
  rowCount: number;
  rowCountApproximate: boolean;
  selectedRowCount: number;
  rows: Map<any, any>;
  tableKey: GlobalKey;
}
export { PaginatedDataTableState };
