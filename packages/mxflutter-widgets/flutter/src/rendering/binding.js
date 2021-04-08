"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderingFlutterBinding = exports.RendererBinding = void 0;
const binding_1 = require("../foundation/binding");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class RendererBinding extends mxflutter_base_1.MXDartClass {
}
exports.RendererBinding = RendererBinding;
class RenderingFlutterBinding extends binding_1.BindingBase {
    constructor(namedParameters = {}) {
        super();
        this['root'] = namedParameters.root;
        this.className = 'RenderingFlutterBinding';
    }
}
exports.RenderingFlutterBinding = RenderingFlutterBinding;
