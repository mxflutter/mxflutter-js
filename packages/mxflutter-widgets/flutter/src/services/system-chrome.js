"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemChrome = exports.SystemUiOverlayStyle = exports.SystemUiOverlay = exports.ApplicationSwitcherDescription = exports.DeviceOrientation = void 0;
// MX Modified begin
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
const mxflutter_base_2 = require("@mxflutter/mxflutter-base");
var DeviceOrientation;
(function (DeviceOrientation) {
    DeviceOrientation["portraitUp"] = "{ \"_name\": \"DeviceOrientation.portraitUp\", \"index\": 0 }";
    DeviceOrientation["landscapeLeft"] = "{ \"_name\": \"DeviceOrientation.landscapeLeft\", \"index\": 1 }";
    DeviceOrientation["portraitDown"] = "{ \"_name\": \"DeviceOrientation.portraitDown\", \"index\": 2 }";
    DeviceOrientation["landscapeRight"] = "{ \"_name\": \"DeviceOrientation.landscapeRight\", \"index\": 3 }";
})(DeviceOrientation || (DeviceOrientation = {}));
exports.DeviceOrientation = DeviceOrientation;
;
class ApplicationSwitcherDescription extends mxflutter_base_2.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.label = namedParameters.label;
        this.primaryColor = namedParameters.primaryColor;
        this.className = 'ApplicationSwitcherDescription';
    }
}
exports.ApplicationSwitcherDescription = ApplicationSwitcherDescription;
var SystemUiOverlay;
(function (SystemUiOverlay) {
    SystemUiOverlay["top"] = "{ \"_name\": \"SystemUiOverlay.top\", \"index\": 0 }";
    SystemUiOverlay["bottom"] = "{ \"_name\": \"SystemUiOverlay.bottom\", \"index\": 1 }";
})(SystemUiOverlay || (SystemUiOverlay = {}));
exports.SystemUiOverlay = SystemUiOverlay;
;
class SystemUiOverlayStyle extends mxflutter_base_2.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.systemNavigationBarColor = namedParameters.systemNavigationBarColor;
        this.systemNavigationBarDividerColor = namedParameters.systemNavigationBarDividerColor;
        this.systemNavigationBarIconBrightness = namedParameters.systemNavigationBarIconBrightness;
        this.statusBarColor = namedParameters.statusBarColor;
        this.statusBarBrightness = namedParameters.statusBarBrightness;
        this.statusBarIconBrightness = namedParameters.statusBarIconBrightness;
        this.className = 'SystemUiOverlayStyle';
    }
    static get light() {
        var jsObj = new SystemUiOverlayStyle();
        jsObj['className'] = 'SystemUiOverlayStyle';
        jsObj['constructorName'] = 'light';
        return jsObj;
    }
    static get dark() {
        var jsObj = new SystemUiOverlayStyle();
        jsObj['className'] = 'SystemUiOverlayStyle';
        jsObj['constructorName'] = 'dark';
        return jsObj;
    }
}
exports.SystemUiOverlayStyle = SystemUiOverlayStyle;
// MX Modified begin
class SystemChrome extends mxflutter_base_1.MXLifecycleWidgetBase {
    static setSystemUIOverlayStyle(style) {
        const argument = new mxflutter_base_1.MXMirrorObjMethodCall({
            funcName: 'SystemChrome.setSystemUIOverlayStyle',
            args: {
                style,
            },
        });
        mxflutter_base_1.invokeMirrorObjMethod(argument);
    }
}
exports.SystemChrome = SystemChrome;
