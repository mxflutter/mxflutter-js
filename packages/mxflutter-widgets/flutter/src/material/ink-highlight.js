//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InteractiveInkFeature } from './ink-well';
class InkHighlight extends InteractiveInkFeature {
    constructor(namedParameters = {}) {
        super();
        this['__mx_controller'] = namedParameters.controller;
        this.referenceBox = namedParameters.referenceBox;
        this.color = namedParameters.color;
        this.textDirection = namedParameters.textDirection;
        this.shape = namedParameters.shape;
        this.radius = namedParameters.radius;
        this.borderRadius = namedParameters.borderRadius;
        this.customBorder = namedParameters.customBorder;
        this.rectCallback = namedParameters.rectCallback;
        this.onRemoved = namedParameters.onRemoved;
        this['fadeDuration'] = namedParameters.fadeDuration;
        this.className = 'InkHighlight';
    }
}
export { InkHighlight };
