"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InkSplash = exports._InkSplashFactory = void 0;
const ink_well_1 = require("./ink-well");
class _InkSplashFactory extends ink_well_1.InteractiveInkFeatureFactory {
}
exports._InkSplashFactory = _InkSplashFactory;
class InkSplash extends ink_well_1.InteractiveInkFeature {
    constructor(namedParameters = {}) {
        super();
        this['mx_controller'] = namedParameters.controller;
        this.referenceBox = namedParameters.referenceBox;
        this.textDirection = namedParameters.textDirection;
        this.position = namedParameters.position;
        this.color = namedParameters.color;
        this['containedInkWell'] = namedParameters.containedInkWell;
        this['rectCallback'] = namedParameters.rectCallback;
        this.borderRadius = namedParameters.borderRadius;
        this.customBorder = namedParameters.customBorder;
        this['mx_radius'] = namedParameters.radius;
        this.onRemoved = namedParameters.onRemoved;
        this.className = 'InkSplash';
    }
    static get splashFactory() {
        var jsObj = new class MXInteractiveInkFeatureFactory extends ink_well_1.InteractiveInkFeatureFactory {
        }();
        jsObj['className'] = 'InkSplash';
        jsObj['constructorName'] = 'splashFactory';
        return jsObj;
    }
}
exports.InkSplash = InkSplash;
