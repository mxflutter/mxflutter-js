//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class LicenseParagraph extends MXDartClass {
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
export { LicenseParagraph };
class LicenseEntry extends MXDartClass {
}
export { LicenseEntry };
var _LicenseEntryWithLineBreaksParserState;
(function (_LicenseEntryWithLineBreaksParserState) {
    _LicenseEntryWithLineBreaksParserState["beforeParagraph"] = "{ \"_name\": \"_LicenseEntryWithLineBreaksParserState.beforeParagraph\", \"index\": 0 }";
    _LicenseEntryWithLineBreaksParserState["inParagraph"] = "{ \"_name\": \"_LicenseEntryWithLineBreaksParserState.inParagraph\", \"index\": 1 }";
})(_LicenseEntryWithLineBreaksParserState || (_LicenseEntryWithLineBreaksParserState = {}));
export { _LicenseEntryWithLineBreaksParserState };
class LicenseEntryWithLineBreaks extends LicenseEntry {
    constructor(packages, text) {
        super();
        this.packages = packages;
        this.text = text;
        this.className = 'LicenseEntryWithLineBreaks';
    }
}
export { LicenseEntryWithLineBreaks };
class LicenseRegistry extends MXDartClass {
    static addLicense(collector) {
        var jsObj = new MXDartClass();
        jsObj['collector'] = collector;
        jsObj.className = 'LicenseRegistry';
        jsObj['constructorName'] = 'addLicense';
        return jsObj;
    }
    static reset() {
        var jsObj = new MXDartClass();
        jsObj.className = 'LicenseRegistry';
        jsObj['constructorName'] = 'reset';
        return jsObj;
    }
}
export { LicenseRegistry };
