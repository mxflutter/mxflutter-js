"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unicode = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Unicode extends mxflutter_base_1.MXDartClass {
    static get LRE() {
        return '‪';
    }
    static get RLE() {
        return '‫';
    }
    static get PDF() {
        return '‬';
    }
    static get LRO() {
        return '‭';
    }
    static get RLO() {
        return '‮';
    }
    static get LRI() {
        return '⁦';
    }
    static get RLI() {
        return '⁧';
    }
    static get FSI() {
        return '⁨';
    }
    static get PDI() {
        return '⁩';
    }
    static get LRM() {
        return '‎';
    }
    static get RLM() {
        return '‏';
    }
    static get ALM() {
        return '؜';
    }
}
exports.Unicode = Unicode;
