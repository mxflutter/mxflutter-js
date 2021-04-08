"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomaticNotchedShape = exports.CircularNotchedRectangle = exports.NotchedShape = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class NotchedShape extends mxflutter_base_1.MXDartClass {
}
exports.NotchedShape = NotchedShape;
class CircularNotchedRectangle extends NotchedShape {
}
exports.CircularNotchedRectangle = CircularNotchedRectangle;
class AutomaticNotchedShape extends NotchedShape {
    constructor(host, guest) {
        super();
        this.host = host;
        this.guest = guest;
        this.className = 'AutomaticNotchedShape';
    }
}
exports.AutomaticNotchedShape = AutomaticNotchedShape;
