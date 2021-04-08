"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestureBinding = exports._Resampler = void 0;
const binding_1 = require("../foundation/binding");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _Resampler extends mxflutter_base_1.MXDartClass {
    constructor(_handlePointerEvent, _handleSampleTimeChanged) {
        super();
        this.handlePointerEvent = _handlePointerEvent;
        this.handleSampleTimeChanged = _handleSampleTimeChanged;
        this.className = '_Resampler';
    }
}
exports._Resampler = _Resampler;
class GestureBinding extends binding_1.BindingBase {
}
exports.GestureBinding = GestureBinding;
