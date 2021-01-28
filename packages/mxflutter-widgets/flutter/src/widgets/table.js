//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderObjectWidget, RenderObjectElement, ParentDataWidget, } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TableRow extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.decoration = namedParameters.decoration;
        this.children = namedParameters.children;
        this.className = 'TableRow';
    }
}
export { TableRow };
class _TableElementRow extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.className = '_TableElementRow';
    }
}
export { _TableElementRow };
class Table extends RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.columnWidths = namedParameters.columnWidths;
        this.defaultColumnWidth = namedParameters.defaultColumnWidth;
        this.textDirection = namedParameters.textDirection;
        this.border = namedParameters.border;
        this.defaultVerticalAlignment = namedParameters.defaultVerticalAlignment;
        this.textBaseline = namedParameters.textBaseline;
        this.className = 'Table';
    }
}
export { Table };
class _TableElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = '_TableElement';
    }
}
export { _TableElement };
class TableCell extends ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.verticalAlignment = namedParameters.verticalAlignment;
        this.child = namedParameters.child;
        this.className = 'TableCell';
    }
}
export { TableCell };
