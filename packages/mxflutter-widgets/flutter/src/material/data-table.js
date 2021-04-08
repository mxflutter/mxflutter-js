"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._SortArrowState = exports._SortArrow = exports.TableRowInkWell = exports.DataTable = exports.DataCell = exports.DataRow = exports.DataColumn = void 0;
const ink_well_1 = require("./ink-well");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class DataColumn extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.label = namedParameters.label;
        this.tooltip = namedParameters.tooltip;
        this.numeric = namedParameters.numeric;
        this.onSort = namedParameters.onSort;
        this.className = 'DataColumn';
    }
}
exports.DataColumn = DataColumn;
class DataRow extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.selected = namedParameters.selected;
        this.onSelectChanged = namedParameters.onSelectChanged;
        this.color = namedParameters.color;
        this.cells = namedParameters.cells;
        this.className = 'DataRow';
    }
    static byIndex(namedParameters = {}) {
        var jsObj = new DataRow();
        jsObj['index'] = namedParameters.index;
        jsObj.selected = namedParameters.selected;
        jsObj.onSelectChanged = namedParameters.onSelectChanged;
        jsObj.color = namedParameters.color;
        jsObj.cells = namedParameters.cells;
        jsObj['constructorName'] = 'byIndex';
        return jsObj;
    }
}
exports.DataRow = DataRow;
class DataCell extends mxflutter_base_1.MXDartClass {
    constructor(child, namedParameters = {}) {
        super();
        this.child = child;
        this.placeholder = namedParameters.placeholder;
        this.showEditIcon = namedParameters.showEditIcon;
        this.onTap = namedParameters.onTap;
        this.className = 'DataCell';
    }
    static get empty() {
        var jsObj = new DataCell();
        jsObj['className'] = 'DataCell';
        jsObj['constructorName'] = 'empty';
        return jsObj;
    }
}
exports.DataCell = DataCell;
class DataTable extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.columns = namedParameters.columns;
        this.sortColumnIndex = namedParameters.sortColumnIndex;
        this.sortAscending = namedParameters.sortAscending;
        this.onSelectAll = namedParameters.onSelectAll;
        this.dataRowColor = namedParameters.dataRowColor;
        this.dataRowHeight = namedParameters.dataRowHeight;
        this.dataTextStyle = namedParameters.dataTextStyle;
        this.headingRowColor = namedParameters.headingRowColor;
        this.headingRowHeight = namedParameters.headingRowHeight;
        this.headingTextStyle = namedParameters.headingTextStyle;
        this.horizontalMargin = namedParameters.horizontalMargin;
        this.columnSpacing = namedParameters.columnSpacing;
        this.showCheckboxColumn = namedParameters.showCheckboxColumn;
        this.showBottomBorder = namedParameters.showBottomBorder;
        this.dividerThickness = namedParameters.dividerThickness;
        this.rows = namedParameters.rows;
        this.className = 'DataTable';
    }
}
exports.DataTable = DataTable;
class TableRowInkWell extends ink_well_1.InkResponse {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this['onTap'] = namedParameters.onTap;
        this['onDoubleTap'] = namedParameters.onDoubleTap;
        this['onLongPress'] = namedParameters.onLongPress;
        this['onHighlightChanged'] = namedParameters.onHighlightChanged;
        this['overlayColor'] = namedParameters.overlayColor;
        this.className = 'TableRowInkWell';
    }
}
exports.TableRowInkWell = TableRowInkWell;
class _SortArrow extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.visible = namedParameters.visible;
        this.up = namedParameters.up;
        this.duration = namedParameters.duration;
        this.className = '_SortArrow';
    }
}
exports._SortArrow = _SortArrow;
class _SortArrowState extends framework_1.State {
}
exports._SortArrowState = _SortArrowState;
