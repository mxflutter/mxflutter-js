"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._TypeLiteral = exports.ValueKey = exports.LocalKey = exports.Key = void 0;
// MX Modified begin
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
// MX Modified end
const mxflutter_base_2 = require("@mxflutter/mxflutter-base");
//MX modified begin del abstract
class Key extends mxflutter_base_1.MXBaseKey {
    constructor(value) {
        super();
        this['value'] = value;
        this.className = 'Key';
    }
    // MX modified begin
    // mx特殊逻辑，Key只能是String类型
    toString() {
        return `Key:${this['value']}`;
    }
}
exports.Key = Key;
class LocalKey extends Key {
}
exports.LocalKey = LocalKey;
class ValueKey extends LocalKey {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'ValueKey';
    }
}
exports.ValueKey = ValueKey;
class _TypeLiteral extends mxflutter_base_2.MXDartClass {
}
exports._TypeLiteral = _TypeLiteral;
