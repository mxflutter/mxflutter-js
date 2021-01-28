//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ParametricCurve extends MXDartClass {
}
export { ParametricCurve };
class Curve extends ParametricCurve {
}
export { Curve };
class _Linear extends Curve {
}
export { _Linear };
class SawTooth extends Curve {
    constructor(count) {
        super();
        this.count = count;
        this.className = 'SawTooth';
    }
}
export { SawTooth };
class Interval extends Curve {
    constructor(begin, end, namedParameters = {}) {
        super();
        this.begin = begin;
        this.end = end;
        this.curve = namedParameters.curve;
        this.className = 'Interval';
    }
}
export { Interval };
class Threshold extends Curve {
    constructor(threshold) {
        super();
        this.threshold = threshold;
        this.className = 'Threshold';
    }
}
export { Threshold };
class Cubic extends Curve {
    constructor(a, b, c, d) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.className = 'Cubic';
    }
    // MX modified begin
    transformInternal(t) {
        let start = 0.0;
        let end = 1.0;
        while (true) {
            const midpoint = (start + end) / 2;
            const estimate = this.evaluateCubic(this.a, this.c, midpoint);
            if (Math.abs(t - estimate) < 0.001)
                return this.evaluateCubic(this.b, this.d, midpoint);
            if (estimate < t)
                start = midpoint;
            else
                end = midpoint;
        }
    }
    evaluateCubic(a, b, m) {
        return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
    }
}
export { Cubic };
class Curve2D extends ParametricCurve {
}
export { Curve2D };
class Curve2DSample extends MXDartClass {
    constructor(t, value) {
        super();
        this.t = t;
        this.value = value;
        this.className = 'Curve2DSample';
    }
}
export { Curve2DSample };
class CatmullRomSpline extends Curve2D {
    constructor(controlPoints, namedParameters = {}) {
        super();
        this.controlPoints = controlPoints;
        this.tension = namedParameters.tension;
        this.startHandle = namedParameters.startHandle;
        this.endHandle = namedParameters.endHandle;
        this.className = 'CatmullRomSpline';
    }
    static precompute(controlPoints, namedParameters = {}) {
        var jsObj = new CatmullRomSpline();
        jsObj.controlPoints = controlPoints;
        jsObj.tension = namedParameters.tension;
        jsObj.startHandle = namedParameters.startHandle;
        jsObj.endHandle = namedParameters.endHandle;
        jsObj['constructorName'] = 'precompute';
        return jsObj;
    }
}
export { CatmullRomSpline };
class CatmullRomCurve extends Curve {
    constructor(controlPoints, namedParameters = {}) {
        super();
        this.controlPoints = controlPoints;
        this.tension = namedParameters.tension;
        this.className = 'CatmullRomCurve';
    }
    static precompute(controlPoints, namedParameters = {}) {
        var jsObj = new CatmullRomCurve();
        jsObj.controlPoints = controlPoints;
        jsObj.tension = namedParameters.tension;
        jsObj['constructorName'] = 'precompute';
        return jsObj;
    }
}
export { CatmullRomCurve };
class FlippedCurve extends Curve {
    constructor(curve) {
        super();
        this.curve = curve;
        this.className = 'FlippedCurve';
    }
}
export { FlippedCurve };
class _DecelerateCurve extends Curve {
}
export { _DecelerateCurve };
class _BounceInCurve extends Curve {
}
export { _BounceInCurve };
class _BounceOutCurve extends Curve {
}
export { _BounceOutCurve };
class _BounceInOutCurve extends Curve {
}
export { _BounceInOutCurve };
class ElasticInCurve extends Curve {
    constructor(period) {
        super();
        this.period = period;
        this.className = 'ElasticInCurve';
    }
}
export { ElasticInCurve };
class ElasticOutCurve extends Curve {
    constructor(period) {
        super();
        this.period = period;
        this.className = 'ElasticOutCurve';
    }
}
export { ElasticOutCurve };
class ElasticInOutCurve extends Curve {
    constructor(period) {
        super();
        this.period = period;
        this.className = 'ElasticInOutCurve';
    }
}
export { ElasticInOutCurve };
class Curves extends MXDartClass {
    static get linear() {
        var jsObj = new (class MXCurve extends Curve {
        })();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'linear';
        return jsObj;
    }
    static get decelerate() {
        var jsObj = new (class MXCurve extends Curve {
        })();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'decelerate';
        return jsObj;
    }
    static get fastLinearToSlowEaseIn() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'fastLinearToSlowEaseIn';
        return jsObj;
    }
    static get ease() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'ease';
        return jsObj;
    }
    static get easeIn() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeIn';
        return jsObj;
    }
    static get easeInToLinear() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInToLinear';
        return jsObj;
    }
    static get easeInSine() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInSine';
        return jsObj;
    }
    static get easeInQuad() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInQuad';
        return jsObj;
    }
    static get easeInCubic() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInCubic';
        return jsObj;
    }
    static get easeInQuart() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInQuart';
        return jsObj;
    }
    static get easeInQuint() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInQuint';
        return jsObj;
    }
    static get easeInExpo() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInExpo';
        return jsObj;
    }
    static get easeInCirc() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInCirc';
        return jsObj;
    }
    static get easeInBack() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInBack';
        return jsObj;
    }
    static get easeOut() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeOut';
        return jsObj;
    }
    static get linearToEaseOut() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'linearToEaseOut';
        return jsObj;
    }
    static get easeOutSine() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeOutSine';
        return jsObj;
    }
    static get easeOutQuad() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeOutQuad';
        return jsObj;
    }
    static get easeOutCubic() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeOutCubic';
        return jsObj;
    }
    static get easeOutQuart() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeOutQuart';
        return jsObj;
    }
    static get easeOutQuint() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeOutQuint';
        return jsObj;
    }
    static get easeOutExpo() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeOutExpo';
        return jsObj;
    }
    static get easeOutCirc() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeOutCirc';
        return jsObj;
    }
    static get easeOutBack() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeOutBack';
        return jsObj;
    }
    static get easeInOut() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInOut';
        return jsObj;
    }
    static get easeInOutSine() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInOutSine';
        return jsObj;
    }
    static get easeInOutQuad() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInOutQuad';
        return jsObj;
    }
    static get easeInOutCubic() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInOutCubic';
        return jsObj;
    }
    static get easeInOutQuart() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInOutQuart';
        return jsObj;
    }
    static get easeInOutQuint() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInOutQuint';
        return jsObj;
    }
    static get easeInOutExpo() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInOutExpo';
        return jsObj;
    }
    static get easeInOutCirc() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInOutCirc';
        return jsObj;
    }
    static get easeInOutBack() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'easeInOutBack';
        return jsObj;
    }
    static get fastOutSlowIn() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'fastOutSlowIn';
        return jsObj;
    }
    static get slowMiddle() {
        var jsObj = new Cubic();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'slowMiddle';
        return jsObj;
    }
    static get bounceIn() {
        var jsObj = new (class MXCurve extends Curve {
        })();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'bounceIn';
        return jsObj;
    }
    static get bounceOut() {
        var jsObj = new (class MXCurve extends Curve {
        })();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'bounceOut';
        return jsObj;
    }
    static get bounceInOut() {
        var jsObj = new (class MXCurve extends Curve {
        })();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'bounceInOut';
        return jsObj;
    }
    static get elasticIn() {
        var jsObj = new ElasticInCurve();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'elasticIn';
        return jsObj;
    }
    static get elasticOut() {
        var jsObj = new ElasticOutCurve();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'elasticOut';
        return jsObj;
    }
    static get elasticInOut() {
        var jsObj = new ElasticInOutCurve();
        jsObj['className'] = 'Curves';
        jsObj['constructorName'] = 'elasticInOut';
        return jsObj;
    }
}
export { Curves };
