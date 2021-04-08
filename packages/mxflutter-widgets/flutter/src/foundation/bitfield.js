"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitField = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class BitField extends mxflutter_base_1.MXDartClass {
    constructor(length) {
        super();
        this['length'] = length;
        this.className = 'BitField';
    }
    static filled(length, value) {
        var jsObj = new class MXBitField extends BitField {
        }();
        jsObj['length'] = length;
        jsObj['value'] = value;
        jsObj['constructorName'] = 'filled';
        return jsObj;
    }
}
exports.BitField = BitField;
