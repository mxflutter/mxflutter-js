"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultMaterialLocalizations = exports._MaterialLocalizationsDelegate = exports.MaterialLocalizations = void 0;
const localizations_1 = require("../widgets/localizations");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class MaterialLocalizations extends mxflutter_base_1.MXDartClass {
}
exports.MaterialLocalizations = MaterialLocalizations;
class _MaterialLocalizationsDelegate extends localizations_1.LocalizationsDelegate {
}
exports._MaterialLocalizationsDelegate = _MaterialLocalizationsDelegate;
class DefaultMaterialLocalizations extends mxflutter_base_1.MXDartClass {
    static get delegate() {
        var jsObj = new class MXLocalizationsDelegate extends localizations_1.LocalizationsDelegate {
        }();
        jsObj['className'] = 'DefaultMaterialLocalizations';
        jsObj['constructorName'] = 'delegate';
        return jsObj;
    }
}
exports.DefaultMaterialLocalizations = DefaultMaterialLocalizations;
