//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InteractiveInkFeatureFactory, InteractiveInkFeature } from './ink-well';
class _InkSplashFactory extends InteractiveInkFeatureFactory {
}
export { _InkSplashFactory };
class InkSplash extends InteractiveInkFeature {
    constructor(namedParameters = {}) {
        super();
        this['__mx_controller'] = namedParameters.controller;
        this.referenceBox = namedParameters.referenceBox;
        this.textDirection = namedParameters.textDirection;
        this.position = namedParameters.position;
        this.color = namedParameters.color;
        this['containedInkWell'] = namedParameters.containedInkWell;
        this['rectCallback'] = namedParameters.rectCallback;
        this.borderRadius = namedParameters.borderRadius;
        this.customBorder = namedParameters.customBorder;
        this['__mx_radius'] = namedParameters.radius;
        this.onRemoved = namedParameters.onRemoved;
        this.className = 'InkSplash';
    }
    static get splashFactory() {
        var jsObj = new (class MXInteractiveInkFeatureFactory extends InteractiveInkFeatureFactory {
        })();
        jsObj['className'] = 'InkSplash';
        jsObj['constructorName'] = 'splashFactory';
        return jsObj;
    }
}
export { InkSplash };
