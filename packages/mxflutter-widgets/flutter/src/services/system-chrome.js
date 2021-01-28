//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
// MX Modified begin
import { MXLifecycleWidgetBase, MXMirrorObjMethodCall, invokeMirrorObjMethod } from '@mxflutter/mxflutter-base';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var DeviceOrientation;
(function (DeviceOrientation) {
    DeviceOrientation["portraitUp"] = "{ \"_name\": \"DeviceOrientation.portraitUp\", \"index\": 0 }";
    DeviceOrientation["landscapeLeft"] = "{ \"_name\": \"DeviceOrientation.landscapeLeft\", \"index\": 1 }";
    DeviceOrientation["portraitDown"] = "{ \"_name\": \"DeviceOrientation.portraitDown\", \"index\": 2 }";
    DeviceOrientation["landscapeRight"] = "{ \"_name\": \"DeviceOrientation.landscapeRight\", \"index\": 3 }";
})(DeviceOrientation || (DeviceOrientation = {}));
export { DeviceOrientation };
class ApplicationSwitcherDescription extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.label = namedParameters.label;
        this.primaryColor = namedParameters.primaryColor;
        this.className = 'ApplicationSwitcherDescription';
    }
}
export { ApplicationSwitcherDescription };
var SystemUiOverlay;
(function (SystemUiOverlay) {
    SystemUiOverlay["top"] = "{ \"_name\": \"SystemUiOverlay.top\", \"index\": 0 }";
    SystemUiOverlay["bottom"] = "{ \"_name\": \"SystemUiOverlay.bottom\", \"index\": 1 }";
})(SystemUiOverlay || (SystemUiOverlay = {}));
export { SystemUiOverlay };
class SystemUiOverlayStyle extends MXDartClass {
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
export { SystemUiOverlayStyle };
// MX Modified begin
class SystemChrome extends MXLifecycleWidgetBase {
    static setSystemUIOverlayStyle(style) {
        const argument = new MXMirrorObjMethodCall({
            funcName: 'SystemChrome.setSystemUIOverlayStyle',
            args: {
                style,
            },
        });
        invokeMirrorObjMethod(argument);
    }
}
// MX Modified end
export { SystemChrome };
