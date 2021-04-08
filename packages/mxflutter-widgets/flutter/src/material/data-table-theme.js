"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableTheme = exports._LerpProperties = exports.DataTableThemeData = void 0;
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class DataTableThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.dataRowColor = namedParameters.dataRowColor;
        this.dataRowHeight = namedParameters.dataRowHeight;
        this.dataTextStyle = namedParameters.dataTextStyle;
        this.headingRowColor = namedParameters.headingRowColor;
        this.headingRowHeight = namedParameters.headingRowHeight;
        this.headingTextStyle = namedParameters.headingTextStyle;
        this.horizontalMargin = namedParameters.horizontalMargin;
        this.columnSpacing = namedParameters.columnSpacing;
        this.dividerThickness = namedParameters.dividerThickness;
        this.className = 'DataTableThemeData';
    }
}
exports.DataTableThemeData = DataTableThemeData;
class _LerpProperties extends mxflutter_base_1.MXDartClass {
    constructor(a, b, t, lerpFunction) {
        super();
        this.a = a;
        this.b = b;
        this.t = t;
        this.lerpFunction = lerpFunction;
        this.className = '_LerpProperties';
    }
}
exports._LerpProperties = _LerpProperties;
class DataTableTheme extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'DataTableTheme';
    }
}
exports.DataTableTheme = DataTableTheme;
