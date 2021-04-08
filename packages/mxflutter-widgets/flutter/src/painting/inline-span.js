"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineSpan = exports.InlineSpanSemanticsInformation = exports.Accumulator = void 0;
const diagnostics_1 = require("../foundation/diagnostics");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Accumulator extends mxflutter_base_1.MXDartClass {
    constructor(_value) {
        super();
        this.value = _value;
        this.className = 'Accumulator';
    }
}
exports.Accumulator = Accumulator;
class InlineSpanSemanticsInformation extends mxflutter_base_1.MXDartClass {
    constructor(text, namedParameters = {}) {
        super();
        this.text = text;
        this.isPlaceholder = namedParameters.isPlaceholder;
        this.semanticsLabel = namedParameters.semanticsLabel;
        this.recognizer = namedParameters.recognizer;
        this.className = 'InlineSpanSemanticsInformation';
    }
    static get placeholder() {
        var jsObj = new InlineSpanSemanticsInformation();
        jsObj['className'] = 'InlineSpanSemanticsInformation';
        jsObj['constructorName'] = 'placeholder';
        return jsObj;
    }
}
exports.InlineSpanSemanticsInformation = InlineSpanSemanticsInformation;
class InlineSpan extends diagnostics_1.DiagnosticableTree {
}
exports.InlineSpan = InlineSpan;
