"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = exports.TextInputConnection = exports.TextInputClient = exports.TextSelectionDelegate = exports.TextEditingValue = exports.RawFloatingCursorPoint = exports.FloatingCursorDragState = exports.TextInputConfiguration = exports.TextCapitalization = exports.TextInputAction = exports.TextInputType = exports.SmartQuotesType = exports.SmartDashesType = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var SmartDashesType;
(function (SmartDashesType) {
    SmartDashesType["disabled"] = "{ \"_name\": \"SmartDashesType.disabled\", \"index\": 0 }";
    SmartDashesType["enabled"] = "{ \"_name\": \"SmartDashesType.enabled\", \"index\": 1 }";
})(SmartDashesType || (SmartDashesType = {}));
exports.SmartDashesType = SmartDashesType;
;
var SmartQuotesType;
(function (SmartQuotesType) {
    SmartQuotesType["disabled"] = "{ \"_name\": \"SmartQuotesType.disabled\", \"index\": 0 }";
    SmartQuotesType["enabled"] = "{ \"_name\": \"SmartQuotesType.enabled\", \"index\": 1 }";
})(SmartQuotesType || (SmartQuotesType = {}));
exports.SmartQuotesType = SmartQuotesType;
;
class TextInputType extends mxflutter_base_1.MXDartClass {
    static get text() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'text';
        return jsObj;
    }
    static get multiline() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'multiline';
        return jsObj;
    }
    static get number() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'number';
        return jsObj;
    }
    static get phone() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'phone';
        return jsObj;
    }
    static get datetime() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'datetime';
        return jsObj;
    }
    static get emailAddress() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'emailAddress';
        return jsObj;
    }
    static get url() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'url';
        return jsObj;
    }
    static get visiblePassword() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'visiblePassword';
        return jsObj;
    }
    static get mxName() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'name';
        return jsObj;
    }
    static get streetAddress() {
        var jsObj = new TextInputType();
        jsObj['className'] = 'TextInputType';
        jsObj['constructorName'] = 'streetAddress';
        return jsObj;
    }
    static get values() {
        return [TextInputType.text, TextInputType.multiline, TextInputType.number, TextInputType.phone, TextInputType.datetime, TextInputType.emailAddress, TextInputType.url, TextInputType.visiblePassword, TextInputType.name, TextInputType.streetAddress];
    }
    static numberWithOptions(namedParameters = {}) {
        var jsObj = new TextInputType();
        jsObj.signed = namedParameters.signed;
        jsObj.decimal = namedParameters.decimal;
        jsObj['constructorName'] = 'numberWithOptions';
        return jsObj;
    }
}
exports.TextInputType = TextInputType;
var TextInputAction;
(function (TextInputAction) {
    TextInputAction["none"] = "{ \"_name\": \"TextInputAction.none\", \"index\": 0 }";
    TextInputAction["unspecified"] = "{ \"_name\": \"TextInputAction.unspecified\", \"index\": 1 }";
    TextInputAction["done"] = "{ \"_name\": \"TextInputAction.done\", \"index\": 2 }";
    TextInputAction["go"] = "{ \"_name\": \"TextInputAction.go\", \"index\": 3 }";
    TextInputAction["search"] = "{ \"_name\": \"TextInputAction.search\", \"index\": 4 }";
    TextInputAction["send"] = "{ \"_name\": \"TextInputAction.send\", \"index\": 5 }";
    TextInputAction["next"] = "{ \"_name\": \"TextInputAction.next\", \"index\": 6 }";
    TextInputAction["previous"] = "{ \"_name\": \"TextInputAction.previous\", \"index\": 7 }";
    TextInputAction["continueAction"] = "{ \"_name\": \"TextInputAction.continueAction\", \"index\": 8 }";
    TextInputAction["join"] = "{ \"_name\": \"TextInputAction.join\", \"index\": 9 }";
    TextInputAction["route"] = "{ \"_name\": \"TextInputAction.route\", \"index\": 10 }";
    TextInputAction["emergencyCall"] = "{ \"_name\": \"TextInputAction.emergencyCall\", \"index\": 11 }";
    TextInputAction["newline"] = "{ \"_name\": \"TextInputAction.newline\", \"index\": 12 }";
})(TextInputAction || (TextInputAction = {}));
exports.TextInputAction = TextInputAction;
;
var TextCapitalization;
(function (TextCapitalization) {
    TextCapitalization["words"] = "{ \"_name\": \"TextCapitalization.words\", \"index\": 0 }";
    TextCapitalization["sentences"] = "{ \"_name\": \"TextCapitalization.sentences\", \"index\": 1 }";
    TextCapitalization["characters"] = "{ \"_name\": \"TextCapitalization.characters\", \"index\": 2 }";
    TextCapitalization["none"] = "{ \"_name\": \"TextCapitalization.none\", \"index\": 3 }";
})(TextCapitalization || (TextCapitalization = {}));
exports.TextCapitalization = TextCapitalization;
;
class TextInputConfiguration extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.inputType = namedParameters.inputType;
        this.readOnly = namedParameters.readOnly;
        this.obscureText = namedParameters.obscureText;
        this.autocorrect = namedParameters.autocorrect;
        this.smartDashesType = namedParameters.smartDashesType;
        this.smartQuotesType = namedParameters.smartQuotesType;
        this.enableSuggestions = namedParameters.enableSuggestions;
        this.actionLabel = namedParameters.actionLabel;
        this.inputAction = namedParameters.inputAction;
        this.keyboardAppearance = namedParameters.keyboardAppearance;
        this.textCapitalization = namedParameters.textCapitalization;
        this.autofillConfiguration = namedParameters.autofillConfiguration;
        this.className = 'TextInputConfiguration';
    }
}
exports.TextInputConfiguration = TextInputConfiguration;
var FloatingCursorDragState;
(function (FloatingCursorDragState) {
    FloatingCursorDragState["Start"] = "{ \"_name\": \"FloatingCursorDragState.Start\", \"index\": 0 }";
    FloatingCursorDragState["Update"] = "{ \"_name\": \"FloatingCursorDragState.Update\", \"index\": 1 }";
    FloatingCursorDragState["End"] = "{ \"_name\": \"FloatingCursorDragState.End\", \"index\": 2 }";
})(FloatingCursorDragState || (FloatingCursorDragState = {}));
exports.FloatingCursorDragState = FloatingCursorDragState;
;
class RawFloatingCursorPoint extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.offset = namedParameters.offset;
        this.state = namedParameters.state;
        this.className = 'RawFloatingCursorPoint';
    }
}
exports.RawFloatingCursorPoint = RawFloatingCursorPoint;
class TextEditingValue extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.text = namedParameters.text;
        this.selection = namedParameters.selection;
        this.composing = namedParameters.composing;
        this.className = 'TextEditingValue';
    }
    static get empty() {
        var jsObj = new TextEditingValue();
        jsObj['className'] = 'TextEditingValue';
        jsObj['constructorName'] = 'empty';
        return jsObj;
    }
    static fromJSON(encoded) {
        var jsObj = new TextEditingValue();
        jsObj['encoded'] = encoded;
        jsObj['constructorName'] = 'fromJSON';
        return jsObj;
    }
}
exports.TextEditingValue = TextEditingValue;
class TextSelectionDelegate extends mxflutter_base_1.MXDartClass {
}
exports.TextSelectionDelegate = TextSelectionDelegate;
class TextInputClient extends mxflutter_base_1.MXDartClass {
}
exports.TextInputClient = TextInputClient;
class TextInputConnection extends mxflutter_base_1.MXDartClass {
    static debugResetId(namedParameters = {}) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['to'] = namedParameters.to;
        jsObj.className = 'TextInputConnection';
        jsObj['constructorName'] = 'debugResetId';
        return jsObj;
    }
}
exports.TextInputConnection = TextInputConnection;
class TextInput extends mxflutter_base_1.MXDartClass {
    static setChannel(newChannel) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['newChannel'] = newChannel;
        jsObj.className = 'TextInput';
        jsObj['constructorName'] = 'setChannel';
        return jsObj;
    }
    static finishAutofillContext(namedParameters = {}) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['shouldSave'] = namedParameters.shouldSave;
        jsObj.className = 'TextInput';
        jsObj['constructorName'] = 'finishAutofillContext';
        return jsObj;
    }
}
exports.TextInput = TextInput;
