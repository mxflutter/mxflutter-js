"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseRegistry = exports.LicenseEntryWithLineBreaks = exports._LicenseEntryWithLineBreaksParserState = exports.LicenseEntry = exports.LicenseParagraph = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class LicenseParagraph extends mxflutter_base_1.MXDartClass {
    constructor(text, indent) {
        super();
        this.text = text;
        this.indent = indent;
        this.className = 'LicenseParagraph';
    }
    static get centeredIndent() {
        return -1;
    }
}
exports.LicenseParagraph = LicenseParagraph;
class LicenseEntry extends mxflutter_base_1.MXDartClass {
}
exports.LicenseEntry = LicenseEntry;
var _LicenseEntryWithLineBreaksParserState;
(function (_LicenseEntryWithLineBreaksParserState) {
    _LicenseEntryWithLineBreaksParserState["beforeParagraph"] = "{ \"_name\": \"_LicenseEntryWithLineBreaksParserState.beforeParagraph\", \"index\": 0 }";
    _LicenseEntryWithLineBreaksParserState["inParagraph"] = "{ \"_name\": \"_LicenseEntryWithLineBreaksParserState.inParagraph\", \"index\": 1 }";
})(_LicenseEntryWithLineBreaksParserState || (_LicenseEntryWithLineBreaksParserState = {}));
exports._LicenseEntryWithLineBreaksParserState = _LicenseEntryWithLineBreaksParserState;
;
class LicenseEntryWithLineBreaks extends LicenseEntry {
    constructor(packages, text) {
        super();
        this.packages = packages;
        this.text = text;
        this.className = 'LicenseEntryWithLineBreaks';
    }
}
exports.LicenseEntryWithLineBreaks = LicenseEntryWithLineBreaks;
class LicenseRegistry extends mxflutter_base_1.MXDartClass {
    static addLicense(collector) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['collector'] = collector;
        jsObj.className = 'LicenseRegistry';
        jsObj['constructorName'] = 'addLicense';
        return jsObj;
    }
    static reset() {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj.className = 'LicenseRegistry';
        jsObj['constructorName'] = 'reset';
        return jsObj;
    }
}
exports.LicenseRegistry = LicenseRegistry;
