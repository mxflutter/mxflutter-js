//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { BoxParentData, RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TableCellParentData extends BoxParentData {
}
export { TableCellParentData };
class TableColumnWidth extends MXDartClass {
}
export { TableColumnWidth };
class IntrinsicColumnWidth extends TableColumnWidth {
    constructor(namedParameters = {}) {
        super();
        this.flex = namedParameters.flex;
        this.className = 'IntrinsicColumnWidth';
    }
}
export { IntrinsicColumnWidth };
class FixedColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'FixedColumnWidth';
    }
}
export { FixedColumnWidth };
class FractionColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'FractionColumnWidth';
    }
}
export { FractionColumnWidth };
class FlexColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'FlexColumnWidth';
    }
}
export { FlexColumnWidth };
class MaxColumnWidth extends TableColumnWidth {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
        this.className = 'MaxColumnWidth';
    }
}
export { MaxColumnWidth };
class MinColumnWidth extends TableColumnWidth {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
        this.className = 'MinColumnWidth';
    }
}
export { MinColumnWidth };
var TableCellVerticalAlignment;
(function (TableCellVerticalAlignment) {
    TableCellVerticalAlignment["top"] = "{ \"_name\": \"TableCellVerticalAlignment.top\", \"index\": 0 }";
    TableCellVerticalAlignment["middle"] = "{ \"_name\": \"TableCellVerticalAlignment.middle\", \"index\": 1 }";
    TableCellVerticalAlignment["bottom"] = "{ \"_name\": \"TableCellVerticalAlignment.bottom\", \"index\": 2 }";
    TableCellVerticalAlignment["baseline"] = "{ \"_name\": \"TableCellVerticalAlignment.baseline\", \"index\": 3 }";
    TableCellVerticalAlignment["fill"] = "{ \"_name\": \"TableCellVerticalAlignment.fill\", \"index\": 4 }";
})(TableCellVerticalAlignment || (TableCellVerticalAlignment = {}));
export { TableCellVerticalAlignment };
class RenderTable extends RenderBox {
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
export { RenderTable };
