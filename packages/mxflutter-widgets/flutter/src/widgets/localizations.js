"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._LocalizationsState = exports.Localizations = exports._LocalizationsScope = exports.DefaultWidgetsLocalizations = exports._WidgetsLocalizationsDelegate = exports.WidgetsLocalizations = exports.LocalizationsDelegate = exports._Pending = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _Pending extends mxflutter_base_1.MXDartClass {
    constructor(delegate, futureValue) {
        super();
        this.delegate = delegate;
        this.futureValue = futureValue;
        this.className = '_Pending';
    }
}
exports._Pending = _Pending;
class LocalizationsDelegate extends mxflutter_base_1.MXDartClass {
}
exports.LocalizationsDelegate = LocalizationsDelegate;
class WidgetsLocalizations extends mxflutter_base_1.MXDartClass {
}
exports.WidgetsLocalizations = WidgetsLocalizations;
class _WidgetsLocalizationsDelegate extends LocalizationsDelegate {
}
exports._WidgetsLocalizationsDelegate = _WidgetsLocalizationsDelegate;
class DefaultWidgetsLocalizations extends mxflutter_base_1.MXDartClass {
    static get delegate() {
        var jsObj = new class MXLocalizationsDelegate extends LocalizationsDelegate {
        }();
        jsObj['className'] = 'DefaultWidgetsLocalizations';
        jsObj['constructorName'] = 'delegate';
        return jsObj;
    }
}
exports.DefaultWidgetsLocalizations = DefaultWidgetsLocalizations;
class _LocalizationsScope extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.locale = namedParameters.locale;
        this.localizationsState = namedParameters.localizationsState;
        this.typeToResources = namedParameters.typeToResources;
        this.child = namedParameters.child;
        this.className = '_LocalizationsScope';
    }
}
exports._LocalizationsScope = _LocalizationsScope;
class Localizations extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.locale = namedParameters.locale;
        this.delegates = namedParameters.delegates;
        this.child = namedParameters.child;
        this.className = 'Localizations';
    }
    static override(namedParameters = {}) {
        var jsObj = new Localizations();
        jsObj.key = namedParameters.key;
        jsObj['context'] = namedParameters.context;
        jsObj.locale = namedParameters.locale;
        jsObj.delegates = namedParameters.delegates;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'override';
        return jsObj;
    }
}
exports.Localizations = Localizations;
class _LocalizationsState extends framework_1.State {
}
exports._LocalizationsState = _LocalizationsState;
