//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomPainter } from '../rendering/custom-paint';
import { ImplicitlyAnimatedWidget, AnimatedWidgetBaseState } from '../widgets/implicit-animations';
import { Tween } from '../animation/tween';
import { RenderProxyBox } from '../rendering/proxy-box';
import { StatefulWidget$, State$, SingleChildRenderObjectWidget, StatelessWidget$, } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var MaterialType;
(function (MaterialType) {
    MaterialType["canvas"] = "{ \"_name\": \"MaterialType.canvas\", \"index\": 0 }";
    MaterialType["card"] = "{ \"_name\": \"MaterialType.card\", \"index\": 1 }";
    MaterialType["circle"] = "{ \"_name\": \"MaterialType.circle\", \"index\": 2 }";
    MaterialType["button"] = "{ \"_name\": \"MaterialType.button\", \"index\": 3 }";
    MaterialType["transparency"] = "{ \"_name\": \"MaterialType.transparency\", \"index\": 4 }";
})(MaterialType || (MaterialType = {}));
export { MaterialType };
class MaterialInkController extends MXDartClass {
}
export { MaterialInkController };
class Material extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.type = namedParameters.type;
        this.elevation = namedParameters.elevation;
        this.color = namedParameters.color;
        this.shadowColor = namedParameters.shadowColor;
        this.textStyle = namedParameters.textStyle;
        this.borderRadius = namedParameters.borderRadius;
        this.shape = namedParameters.shape;
        this.borderOnForeground = namedParameters.borderOnForeground;
        this.clipBehavior = namedParameters.clipBehavior;
        this.animationDuration = namedParameters.animationDuration;
        this.child = namedParameters.child;
        this.className = 'Material';
    }
    static get defaultSplashRadius() {
        return 35.0;
    }
}
export { Material };
class _MaterialState extends State$ {
}
export { _MaterialState };
class _RenderInkFeatures extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.color = namedParameters.color;
        this.className = '_RenderInkFeatures';
    }
}
export { _RenderInkFeatures };
class _InkFeatures extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.child = namedParameters.child;
        this.className = '_InkFeatures';
    }
}
export { _InkFeatures };
class InkFeature extends MXDartClass {
}
export { InkFeature };
class ShapeBorderTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'ShapeBorderTween';
    }
}
export { ShapeBorderTween };
class _MaterialInterior extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.shape = namedParameters.shape;
        this.borderOnForeground = namedParameters.borderOnForeground;
        this.clipBehavior = namedParameters.clipBehavior;
        this.elevation = namedParameters.elevation;
        this.color = namedParameters.color;
        this.shadowColor = namedParameters.shadowColor;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.className = '_MaterialInterior';
    }
}
export { _MaterialInterior };
class _MaterialInteriorState extends AnimatedWidgetBaseState {
}
export { _MaterialInteriorState };
class _ShapeBorderPaint extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.shape = namedParameters.shape;
        this.borderOnForeground = namedParameters.borderOnForeground;
        this.className = '_ShapeBorderPaint';
    }
}
export { _ShapeBorderPaint };
class _ShapeBorderPainter extends CustomPainter {
    constructor(border, textDirection) {
        super();
        this.border = border;
        this.textDirection = textDirection;
        this.className = '_ShapeBorderPainter';
    }
}
export { _ShapeBorderPainter };
