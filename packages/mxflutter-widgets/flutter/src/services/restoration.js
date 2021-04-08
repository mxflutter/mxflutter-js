"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestorationBucket = exports.RestorationManager = void 0;
const change_notifier_1 = require("../foundation/change-notifier");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class RestorationManager extends change_notifier_1.ChangeNotifier {
}
exports.RestorationManager = RestorationManager;
class RestorationBucket extends mxflutter_base_1.MXDartClass {
    static empty(namedParameters = {}) {
        var jsObj = new RestorationBucket();
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.debugOwner = namedParameters.debugOwner;
        jsObj['constructorName'] = 'empty';
        return jsObj;
    }
    static root(namedParameters = {}) {
        var jsObj = new RestorationBucket();
        jsObj.manager = namedParameters.manager;
        jsObj.rawData = namedParameters.rawData;
        jsObj['constructorName'] = 'root';
        return jsObj;
    }
    static child(namedParameters = {}) {
        var jsObj = new RestorationBucket();
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.parent = namedParameters.parent;
        jsObj.debugOwner = namedParameters.debugOwner;
        jsObj['constructorName'] = 'child';
        return jsObj;
    }
}
exports.RestorationBucket = RestorationBucket;
