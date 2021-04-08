"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InkRipple = exports._InkRippleFactory = void 0;
const ink_well_1 = require("./ink-well");
class _InkRippleFactory extends ink_well_1.InteractiveInkFeatureFactory {
}
exports._InkRippleFactory = _InkRippleFactory;
class InkRipple extends ink_well_1.InteractiveInkFeature {
    constructor(namedParameters = {}) {
        super();
        this['mx_controller'] = namedParameters.controller;
        this.referenceBox = namedParameters.referenceBox;
        this.position = namedParameters.position;
        this.color = namedParameters.color;
        this.textDirection = namedParameters.textDirection;
        this['containedInkWell'] = namedParameters.containedInkWell;
        this['rectCallback'] = namedParameters.rectCallback;
        this.borderRadius = namedParameters.borderRadius;
        this.customBorder = namedParameters.customBorder;
        this['mx_radius'] = namedParameters.radius;
        this.onRemoved = namedParameters.onRemoved;
        this.className = 'InkRipple';
    }
    static get splashFactory() {
        var jsObj = new class MXInteractiveInkFeatureFactory extends ink_well_1.InteractiveInkFeatureFactory {
        }();
        jsObj['className'] = 'InkRipple';
        jsObj['constructorName'] = 'splashFactory';
        return jsObj;
    }
}
exports.InkRipple = InkRipple;
