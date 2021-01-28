//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InkResponse } from './ink-well';
import { StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class DataColumn extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.label = namedParameters.label;
        this.tooltip = namedParameters.tooltip;
        this.numeric = namedParameters.numeric;
        this.onSort = namedParameters.onSort;
        this.className = 'DataColumn';
    }
}
export { DataColumn };
class DataRow extends MXDartClass {
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
export { DataRow };
class DataCell extends MXDartClass {
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
export { DataCell };
class DataTable extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.columns = namedParameters.columns;
        this.sortColumnIndex = namedParameters.sortColumnIndex;
        this.sortAscending = namedParameters.sortAscending;
        this.onSelectAll = namedParameters.onSelectAll;
        this.dataRowHeight = namedParameters.dataRowHeight;
        this.headingRowHeight = namedParameters.headingRowHeight;
        this.horizontalMargin = namedParameters.horizontalMargin;
        this.columnSpacing = namedParameters.columnSpacing;
        this.showCheckboxColumn = namedParameters.showCheckboxColumn;
        this.dividerThickness = namedParameters.dividerThickness;
        this.rows = namedParameters.rows;
        this.className = 'DataTable';
    }
}
export { DataTable };
class TableRowInkWell extends InkResponse {
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
export { TableRowInkWell };
class _SortArrow extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.visible = namedParameters.visible;
        this.down = namedParameters.down;
        this.duration = namedParameters.duration;
        this.className = '_SortArrow';
    }
}
export { _SortArrow };
class _SortArrowState extends State$ {
}
export { _SortArrowState };
