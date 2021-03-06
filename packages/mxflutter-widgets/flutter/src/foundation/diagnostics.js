"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DefaultDiagnosticsSerializationDelegate = exports.DiagnosticsSerializationDelegate = exports.DiagnosticableTreeMixin = exports.DiagnosticableTree = exports.DiagnosticPropertiesBuilder = exports.TextTreeRenderer = exports._NoDefaultValue = exports._PrefixedStringBuilder = exports._WordWrapParseMode = exports.TextTreeConfiguration = exports.DiagnosticsTreeStyle = exports.DiagnosticLevel = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var DiagnosticLevel;
(function (DiagnosticLevel) {
    DiagnosticLevel["hidden"] = "{ \"_name\": \"DiagnosticLevel.hidden\", \"index\": 0 }";
    DiagnosticLevel["fine"] = "{ \"_name\": \"DiagnosticLevel.fine\", \"index\": 1 }";
    DiagnosticLevel["debug"] = "{ \"_name\": \"DiagnosticLevel.debug\", \"index\": 2 }";
    DiagnosticLevel["info"] = "{ \"_name\": \"DiagnosticLevel.info\", \"index\": 3 }";
    DiagnosticLevel["warning"] = "{ \"_name\": \"DiagnosticLevel.warning\", \"index\": 4 }";
    DiagnosticLevel["hint"] = "{ \"_name\": \"DiagnosticLevel.hint\", \"index\": 5 }";
    DiagnosticLevel["summary"] = "{ \"_name\": \"DiagnosticLevel.summary\", \"index\": 6 }";
    DiagnosticLevel["error"] = "{ \"_name\": \"DiagnosticLevel.error\", \"index\": 7 }";
    DiagnosticLevel["off"] = "{ \"_name\": \"DiagnosticLevel.off\", \"index\": 8 }";
})(DiagnosticLevel || (DiagnosticLevel = {}));
exports.DiagnosticLevel = DiagnosticLevel;
;
var DiagnosticsTreeStyle;
(function (DiagnosticsTreeStyle) {
    DiagnosticsTreeStyle["none"] = "{ \"_name\": \"DiagnosticsTreeStyle.none\", \"index\": 0 }";
    DiagnosticsTreeStyle["sparse"] = "{ \"_name\": \"DiagnosticsTreeStyle.sparse\", \"index\": 1 }";
    DiagnosticsTreeStyle["offstage"] = "{ \"_name\": \"DiagnosticsTreeStyle.offstage\", \"index\": 2 }";
    DiagnosticsTreeStyle["dense"] = "{ \"_name\": \"DiagnosticsTreeStyle.dense\", \"index\": 3 }";
    DiagnosticsTreeStyle["transition"] = "{ \"_name\": \"DiagnosticsTreeStyle.transition\", \"index\": 4 }";
    DiagnosticsTreeStyle["error"] = "{ \"_name\": \"DiagnosticsTreeStyle.error\", \"index\": 5 }";
    DiagnosticsTreeStyle["whitespace"] = "{ \"_name\": \"DiagnosticsTreeStyle.whitespace\", \"index\": 6 }";
    DiagnosticsTreeStyle["flat"] = "{ \"_name\": \"DiagnosticsTreeStyle.flat\", \"index\": 7 }";
    DiagnosticsTreeStyle["singleLine"] = "{ \"_name\": \"DiagnosticsTreeStyle.singleLine\", \"index\": 8 }";
    DiagnosticsTreeStyle["errorProperty"] = "{ \"_name\": \"DiagnosticsTreeStyle.errorProperty\", \"index\": 9 }";
    DiagnosticsTreeStyle["shallow"] = "{ \"_name\": \"DiagnosticsTreeStyle.shallow\", \"index\": 10 }";
    DiagnosticsTreeStyle["truncateChildren"] = "{ \"_name\": \"DiagnosticsTreeStyle.truncateChildren\", \"index\": 11 }";
})(DiagnosticsTreeStyle || (DiagnosticsTreeStyle = {}));
exports.DiagnosticsTreeStyle = DiagnosticsTreeStyle;
;
class TextTreeConfiguration extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.prefixLineOne = namedParameters.prefixLineOne;
        this.prefixOtherLines = namedParameters.prefixOtherLines;
        this.prefixLastChildLineOne = namedParameters.prefixLastChildLineOne;
        this.prefixOtherLinesRootNode = namedParameters.prefixOtherLinesRootNode;
        this.linkCharacter = namedParameters.linkCharacter;
        this.propertyPrefixIfChildren = namedParameters.propertyPrefixIfChildren;
        this.propertyPrefixNoChildren = namedParameters.propertyPrefixNoChildren;
        this.lineBreak = namedParameters.lineBreak;
        this.lineBreakProperties = namedParameters.lineBreakProperties;
        this.afterName = namedParameters.afterName;
        this.afterDescriptionIfBody = namedParameters.afterDescriptionIfBody;
        this.afterDescription = namedParameters.afterDescription;
        this.beforeProperties = namedParameters.beforeProperties;
        this.afterProperties = namedParameters.afterProperties;
        this.mandatoryAfterProperties = namedParameters.mandatoryAfterProperties;
        this.propertySeparator = namedParameters.propertySeparator;
        this.bodyIndent = namedParameters.bodyIndent;
        this.footer = namedParameters.footer;
        this.showChildren = namedParameters.showChildren;
        this.addBlankLineIfNoChildren = namedParameters.addBlankLineIfNoChildren;
        this.isNameOnOwnLine = namedParameters.isNameOnOwnLine;
        this.isBlankLineBetweenPropertiesAndChildren = namedParameters.isBlankLineBetweenPropertiesAndChildren;
        this.beforeName = namedParameters.beforeName;
        this.suffixLineOne = namedParameters.suffixLineOne;
        this.mandatoryFooter = namedParameters.mandatoryFooter;
        this.className = 'TextTreeConfiguration';
    }
}
exports.TextTreeConfiguration = TextTreeConfiguration;
var _WordWrapParseMode;
(function (_WordWrapParseMode) {
    _WordWrapParseMode["inSpace"] = "{ \"_name\": \"_WordWrapParseMode.inSpace\", \"index\": 0 }";
    _WordWrapParseMode["inWord"] = "{ \"_name\": \"_WordWrapParseMode.inWord\", \"index\": 1 }";
    _WordWrapParseMode["atBreak"] = "{ \"_name\": \"_WordWrapParseMode.atBreak\", \"index\": 2 }";
})(_WordWrapParseMode || (_WordWrapParseMode = {}));
exports._WordWrapParseMode = _WordWrapParseMode;
;
class _PrefixedStringBuilder extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.prefixLineOne = namedParameters.prefixLineOne;
        this.prefixOtherLines = namedParameters.prefixOtherLines;
        this.wrapWidth = namedParameters.wrapWidth;
        this.className = '_PrefixedStringBuilder';
    }
}
exports._PrefixedStringBuilder = _PrefixedStringBuilder;
class _NoDefaultValue extends mxflutter_base_1.MXDartClass {
}
exports._NoDefaultValue = _NoDefaultValue;
class TextTreeRenderer extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.minLevel = namedParameters.minLevel;
        this.wrapWidth = namedParameters.wrapWidth;
        this.wrapWidthProperties = namedParameters.wrapWidthProperties;
        this.maxDescendentsTruncatableNode = namedParameters.maxDescendentsTruncatableNode;
        this.className = 'TextTreeRenderer';
    }
}
exports.TextTreeRenderer = TextTreeRenderer;
class DiagnosticPropertiesBuilder extends mxflutter_base_1.MXDartClass {
    static fromProperties(properties) {
        var jsObj = new DiagnosticPropertiesBuilder();
        jsObj.properties = properties;
        jsObj['constructorName'] = 'fromProperties';
        return jsObj;
    }
}
exports.DiagnosticPropertiesBuilder = DiagnosticPropertiesBuilder;
class DiagnosticableTree extends mxflutter_base_1.MXMirrorWidget {
}
exports.DiagnosticableTree = DiagnosticableTree;
class DiagnosticableTreeMixin extends mxflutter_base_1.MXDartClass {
}
exports.DiagnosticableTreeMixin = DiagnosticableTreeMixin;
class DiagnosticsSerializationDelegate extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['subtreeDepth'] = namedParameters.subtreeDepth;
        this['includeProperties'] = namedParameters.includeProperties;
        this.className = 'DiagnosticsSerializationDelegate';
    }
}
exports.DiagnosticsSerializationDelegate = DiagnosticsSerializationDelegate;
class _DefaultDiagnosticsSerializationDelegate extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.includeProperties = namedParameters.includeProperties;
        this.subtreeDepth = namedParameters.subtreeDepth;
        this.className = '_DefaultDiagnosticsSerializationDelegate';
    }
}
exports._DefaultDiagnosticsSerializationDelegate = _DefaultDiagnosticsSerializationDelegate;
