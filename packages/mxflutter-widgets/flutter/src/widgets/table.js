"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = exports._TableElement = exports.Table = exports._TableElementRow = exports.TableRow = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class TableRow extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.decoration = namedParameters.decoration;
        this.children = namedParameters.children;
        this.className = 'TableRow';
    }
}
exports.TableRow = TableRow;
class _TableElementRow extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.className = '_TableElementRow';
    }
}
exports._TableElementRow = _TableElementRow;
class Table extends framework_1.RenderObjectWidget {
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
exports.Table = Table;
class _TableElement extends framework_1.RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = '_TableElement';
    }
}
exports._TableElement = _TableElement;
class TableCell extends framework_1.ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.verticalAlignment = namedParameters.verticalAlignment;
        this.child = namedParameters.child;
        this.className = 'TableCell';
    }
}
exports.TableCell = TableCell;
