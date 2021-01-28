//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderObject } from './object';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ViewConfiguration extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.size = namedParameters.size;
        this.devicePixelRatio = namedParameters.devicePixelRatio;
        this.className = 'ViewConfiguration';
    }
}
export { ViewConfiguration };
class RenderView extends RenderObject {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.configuration = namedParameters.configuration;
        this.window = namedParameters.window;
        this.className = 'RenderView';
    }
}
export { RenderView };
