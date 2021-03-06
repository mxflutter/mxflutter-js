"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedDataTableState = exports.PaginatedDataTable = void 0;
const framework_1 = require("../widgets/framework");
class PaginatedDataTable extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
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
exports.PaginatedDataTable = PaginatedDataTable;
class PaginatedDataTableState extends framework_1.State {
}
exports.PaginatedDataTableState = PaginatedDataTableState;
