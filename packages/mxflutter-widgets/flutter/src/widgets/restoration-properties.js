"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestorableTextEditingController = exports.RestorableListenable = exports.RestorableBool = exports.RestorableString = exports.RestorableInt = exports.RestorableDouble = exports.RestorableNum = exports._RestorablePrimitiveValue = exports.RestorableValue = void 0;
const restoration_1 = require("./restoration");
class RestorableValue extends restoration_1.RestorableProperty {
}
exports.RestorableValue = RestorableValue;
class _RestorablePrimitiveValue extends RestorableValue {
    constructor(_defaultValue) {
        super();
        this.defaultValue = _defaultValue;
        this.className = '_RestorablePrimitiveValue';
    }
}
exports._RestorablePrimitiveValue = _RestorablePrimitiveValue;
class RestorableNum extends _RestorablePrimitiveValue {
    constructor(defaultValue) {
        super();
        this['defaultValue'] = defaultValue;
        this.className = 'RestorableNum';
    }
}
exports.RestorableNum = RestorableNum;
class RestorableDouble extends RestorableNum {
    constructor(defaultValue) {
        super();
        this['defaultValue'] = defaultValue;
        this.className = 'RestorableDouble';
    }
}
exports.RestorableDouble = RestorableDouble;
class RestorableInt extends RestorableNum {
    constructor(defaultValue) {
        super();
        this['defaultValue'] = defaultValue;
        this.className = 'RestorableInt';
    }
}
exports.RestorableInt = RestorableInt;
class RestorableString extends _RestorablePrimitiveValue {
    constructor(defaultValue) {
        super();
        this['defaultValue'] = defaultValue;
        this.className = 'RestorableString';
    }
}
exports.RestorableString = RestorableString;
class RestorableBool extends _RestorablePrimitiveValue {
    constructor(defaultValue) {
        super();
        this['defaultValue'] = defaultValue;
        this.className = 'RestorableBool';
    }
}
exports.RestorableBool = RestorableBool;
class RestorableListenable extends restoration_1.RestorableProperty {
}
exports.RestorableListenable = RestorableListenable;
class RestorableTextEditingController extends RestorableListenable {
    constructor(namedParameters = {}) {
        super();
        this['text'] = namedParameters.text;
        this.className = 'RestorableTextEditingController';
    }
    static fromValue(value) {
        var jsObj = new RestorableTextEditingController();
        jsObj['mx_value'] = value;
        jsObj['constructorName'] = 'fromValue';
        return jsObj;
    }
}
exports.RestorableTextEditingController = RestorableTextEditingController;
