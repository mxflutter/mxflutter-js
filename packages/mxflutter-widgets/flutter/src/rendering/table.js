"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderTable = exports.TableCellVerticalAlignment = exports.MinColumnWidth = exports.MaxColumnWidth = exports.FlexColumnWidth = exports.FractionColumnWidth = exports.FixedColumnWidth = exports.IntrinsicColumnWidth = exports.TableColumnWidth = exports.TableCellParentData = void 0;
const box_1 = require("./box");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class TableCellParentData extends box_1.BoxParentData {
}
exports.TableCellParentData = TableCellParentData;
class TableColumnWidth extends mxflutter_base_1.MXDartClass {
}
exports.TableColumnWidth = TableColumnWidth;
class IntrinsicColumnWidth extends TableColumnWidth {
    constructor(namedParameters = {}) {
        super();
        this.flex = namedParameters.flex;
        this.className = 'IntrinsicColumnWidth';
    }
}
exports.IntrinsicColumnWidth = IntrinsicColumnWidth;
class FixedColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'FixedColumnWidth';
    }
}
exports.FixedColumnWidth = FixedColumnWidth;
class FractionColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'FractionColumnWidth';
    }
}
exports.FractionColumnWidth = FractionColumnWidth;
class FlexColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'FlexColumnWidth';
    }
}
exports.FlexColumnWidth = FlexColumnWidth;
class MaxColumnWidth extends TableColumnWidth {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
        this.className = 'MaxColumnWidth';
    }
}
exports.MaxColumnWidth = MaxColumnWidth;
class MinColumnWidth extends TableColumnWidth {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
        this.className = 'MinColumnWidth';
    }
}
exports.MinColumnWidth = MinColumnWidth;
var TableCellVerticalAlignment;
(function (TableCellVerticalAlignment) {
    TableCellVerticalAlignment["top"] = "{ \"_name\": \"TableCellVerticalAlignment.top\", \"index\": 0 }";
    TableCellVerticalAlignment["middle"] = "{ \"_name\": \"TableCellVerticalAlignment.middle\", \"index\": 1 }";
    TableCellVerticalAlignment["bottom"] = "{ \"_name\": \"TableCellVerticalAlignment.bottom\", \"index\": 2 }";
    TableCellVerticalAlignment["baseline"] = "{ \"_name\": \"TableCellVerticalAlignment.baseline\", \"index\": 3 }";
    TableCellVerticalAlignment["fill"] = "{ \"_name\": \"TableCellVerticalAlignment.fill\", \"index\": 4 }";
})(TableCellVerticalAlignment || (TableCellVerticalAlignment = {}));
exports.TableCellVerticalAlignment = TableCellVerticalAlignment;
;
class RenderTable extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.columns = namedParameters.columns;
        this.rows = namedParameters.rows;
        this.columnWidths = namedParameters.columnWidths;
        this.defaultColumnWidth = namedParameters.defaultColumnWidth;
        this.textDirection = namedParameters.textDirection;
        this.border = namedParameters.border;
        this.rowDecorations = namedParameters.rowDecorations;
        this.configuration = namedParameters.configuration;
        this.defaultVerticalAlignment = namedParameters.defaultVerticalAlignment;
        this.textBaseline = namedParameters.textBaseline;
        this.children = namedParameters.children;
        this.className = 'RenderTable';
    }
}
exports.RenderTable = RenderTable;
