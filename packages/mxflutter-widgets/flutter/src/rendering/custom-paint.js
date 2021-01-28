//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderProxyBox } from './proxy-box';
import { Listenable } from '../foundation/change-notifier';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class CustomPainter extends Listenable {
}
export { CustomPainter };
class CustomPainterSemantics extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.rect = namedParameters.rect;
        this.properties = namedParameters.properties;
        this.transform = namedParameters.transform;
        this.tags = namedParameters.tags;
        this.className = 'CustomPainterSemantics';
    }
}
export { CustomPainterSemantics };
class RenderCustomPaint extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.painter = namedParameters.painter;
        this.foregroundPainter = namedParameters.foregroundPainter;
        this.preferredSize = namedParameters.preferredSize;
        this.isComplex = namedParameters.isComplex;
        this.willChange = namedParameters.willChange;
        this['child'] = namedParameters.child;
        this.className = 'RenderCustomPaint';
    }
}
export { RenderCustomPaint };
