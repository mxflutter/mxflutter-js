//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Curve } from '../animation/curves';
import { CustomPainter } from '../rendering/custom-paint';
import { StatefulWidget$, State$ } from '../widgets/framework';
class ProgressIndicator extends StatefulWidget$ {
}
export { ProgressIndicator };
class _LinearProgressIndicatorPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.valueColor = namedParameters.valueColor;
        this.value = namedParameters.value;
        this.animationValue = namedParameters.animationValue;
        this.textDirection = namedParameters.textDirection;
        this.className = '_LinearProgressIndicatorPainter';
    }
    static get line1Head() {
        var jsObj = new (class MXCurve extends Curve {
        })();
        jsObj['className'] = '_LinearProgressIndicatorPainter';
        jsObj['constructorName'] = 'line1Head';
        return jsObj;
    }
    static get line1Tail() {
        var jsObj = new (class MXCurve extends Curve {
        })();
        jsObj['className'] = '_LinearProgressIndicatorPainter';
        jsObj['constructorName'] = 'line1Tail';
        return jsObj;
    }
    static get line2Head() {
        var jsObj = new (class MXCurve extends Curve {
        })();
        jsObj['className'] = '_LinearProgressIndicatorPainter';
        jsObj['constructorName'] = 'line2Head';
        return jsObj;
    }
    static get line2Tail() {
        var jsObj = new (class MXCurve extends Curve {
        })();
        jsObj['className'] = '_LinearProgressIndicatorPainter';
        jsObj['constructorName'] = 'line2Tail';
        return jsObj;
    }
}
export { _LinearProgressIndicatorPainter };
class LinearProgressIndicator extends ProgressIndicator {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.backgroundColor = namedParameters.backgroundColor;
        this.valueColor = namedParameters.valueColor;
        this.minHeight = namedParameters.minHeight;
        this.semanticsLabel = namedParameters.semanticsLabel;
        this.semanticsValue = namedParameters.semanticsValue;
        this.className = 'LinearProgressIndicator';
    }
}
export { LinearProgressIndicator };
class _LinearProgressIndicatorState extends State$ {
}
export { _LinearProgressIndicatorState };
class _CircularProgressIndicatorPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.valueColor = namedParameters.valueColor;
        this.value = namedParameters.value;
        this.headValue = namedParameters.headValue;
        this.tailValue = namedParameters.tailValue;
        this.offsetValue = namedParameters.offsetValue;
        this.rotationValue = namedParameters.rotationValue;
        this.strokeWidth = namedParameters.strokeWidth;
        this.className = '_CircularProgressIndicatorPainter';
    }
}
export { _CircularProgressIndicatorPainter };
class CircularProgressIndicator extends ProgressIndicator {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.backgroundColor = namedParameters.backgroundColor;
        this.valueColor = namedParameters.valueColor;
        this.strokeWidth = namedParameters.strokeWidth;
        this.semanticsLabel = namedParameters.semanticsLabel;
        this.semanticsValue = namedParameters.semanticsValue;
        this.className = 'CircularProgressIndicator';
    }
}
export { CircularProgressIndicator };
class _CircularProgressIndicatorState extends State$ {
}
export { _CircularProgressIndicatorState };
class _RefreshProgressIndicatorPainter extends _CircularProgressIndicatorPainter {
    constructor(namedParameters = {}) {
        super();
        this.valueColor = namedParameters.valueColor;
        this.value = namedParameters.value;
        this.headValue = namedParameters.headValue;
        this.tailValue = namedParameters.tailValue;
        this.offsetValue = namedParameters.offsetValue;
        this.rotationValue = namedParameters.rotationValue;
        this.strokeWidth = namedParameters.strokeWidth;
        this.arrowheadScale = namedParameters.arrowheadScale;
        this.className = '_RefreshProgressIndicatorPainter';
    }
}
export { _RefreshProgressIndicatorPainter };
class RefreshProgressIndicator extends CircularProgressIndicator {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['value'] = namedParameters.value;
        this['backgroundColor'] = namedParameters.backgroundColor;
        this['valueColor'] = namedParameters.valueColor;
        this['strokeWidth'] = namedParameters.strokeWidth;
        this['semanticsLabel'] = namedParameters.semanticsLabel;
        this['semanticsValue'] = namedParameters.semanticsValue;
        this.className = 'RefreshProgressIndicator';
    }
}
export { RefreshProgressIndicator };
class _RefreshProgressIndicatorState extends _CircularProgressIndicatorState {
}
export { _RefreshProgressIndicatorState };
