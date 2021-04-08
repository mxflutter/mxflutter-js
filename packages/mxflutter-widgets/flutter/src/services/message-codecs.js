"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardMethodCodec = exports.StandardMessageCodec = exports.JSONMethodCodec = exports.JSONMessageCodec = exports.StringCodec = exports.BinaryCodec = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class BinaryCodec extends mxflutter_base_1.MXDartClass {
}
exports.BinaryCodec = BinaryCodec;
class StringCodec extends mxflutter_base_1.MXDartClass {
}
exports.StringCodec = StringCodec;
class JSONMessageCodec extends mxflutter_base_1.MXDartClass {
}
exports.JSONMessageCodec = JSONMessageCodec;
class JSONMethodCodec extends mxflutter_base_1.MXDartClass {
}
exports.JSONMethodCodec = JSONMethodCodec;
class StandardMessageCodec extends mxflutter_base_1.MXDartClass {
}
exports.StandardMessageCodec = StandardMessageCodec;
class StandardMethodCodec extends mxflutter_base_1.MXDartClass {
    constructor(messageCodec) {
        super();
        this.messageCodec = messageCodec;
        this.className = 'StandardMethodCodec';
    }
}
exports.StandardMethodCodec = StandardMethodCodec;
