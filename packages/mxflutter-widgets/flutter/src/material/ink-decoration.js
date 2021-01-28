//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InkFeature } from './material';
import { StatefulWidget$, State$ } from '../widgets/framework';
class Ink extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.padding = namedParameters.padding;
        this['color'] = namedParameters.color;
        this.decoration = namedParameters.decoration;
        this.width = namedParameters.width;
        this.height = namedParameters.height;
        this.child = namedParameters.child;
        this.className = 'Ink';
    }
    static image(namedParameters = {}) {
        var jsObj = new Ink();
        jsObj.key = namedParameters.key;
        jsObj.padding = namedParameters.padding;
        jsObj['image'] = namedParameters.image;
        jsObj['onImageError'] = namedParameters.onImageError;
        jsObj['colorFilter'] = namedParameters.colorFilter;
        jsObj['fit'] = namedParameters.fit;
        jsObj['alignment'] = namedParameters.alignment;
        jsObj['centerSlice'] = namedParameters.centerSlice;
        jsObj['repeat'] = namedParameters.repeat;
        jsObj['matchTextDirection'] = namedParameters.matchTextDirection;
        jsObj.width = namedParameters.width;
        jsObj.height = namedParameters.height;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'image';
        return jsObj;
    }
}
export { Ink };
class _InkState extends State$ {
}
export { _InkState };
class InkDecoration extends InkFeature {
    constructor(namedParameters = {}) {
        super();
        this.decoration = namedParameters.decoration;
        this.configuration = namedParameters.configuration;
        this['__mx_controller'] = namedParameters.controller;
        this.referenceBox = namedParameters.referenceBox;
        this.onRemoved = namedParameters.onRemoved;
        this.className = 'InkDecoration';
    }
}
export { InkDecoration };
