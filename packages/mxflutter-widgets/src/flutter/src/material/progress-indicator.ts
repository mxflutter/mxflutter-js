//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { Curve } from '../animation/curves';
import { CustomPainter } from '../rendering/custom-paint';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Animation } from '../animation/animation';
import { Color, TextDirection, Canvas, Size } from '../../../mx-dart-sdk';
import { StatefulWidget$, BuildContext$, Widget, State$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class ProgressIndicator extends StatefulWidget$ {
  value: number;
  backgroundColor: Color;
  valueColor: Animation;
  semanticsLabel: string;
  semanticsValue: string;
}
export { ProgressIndicator };
class _LinearProgressIndicatorPainter extends CustomPainter {
  backgroundColor: Color;
  valueColor: Color;
  value: number;
  animationValue: number;
  textDirection: TextDirection;
  public constructor(
    namedParameters: {
      backgroundColor?: Color;
      valueColor?: Color;
      value?: number;
      animationValue?: number;
      textDirection?: TextDirection;
    } = {},
  ) {
    super();
    this.backgroundColor = namedParameters.backgroundColor;
    this.valueColor = namedParameters.valueColor;
    this.value = namedParameters.value;
    this.animationValue = namedParameters.animationValue;
    this.textDirection = namedParameters.textDirection;
    this.className = '_LinearProgressIndicatorPainter';
  }
  static get line1Head() {
    var jsObj = new (class MXCurve extends Curve {})();
    jsObj['className'] = '_LinearProgressIndicatorPainter';
    jsObj['constructorName'] = 'line1Head';
    return jsObj;
  }
  static get line1Tail() {
    var jsObj = new (class MXCurve extends Curve {})();
    jsObj['className'] = '_LinearProgressIndicatorPainter';
    jsObj['constructorName'] = 'line1Tail';
    return jsObj;
  }
  static get line2Head() {
    var jsObj = new (class MXCurve extends Curve {})();
    jsObj['className'] = '_LinearProgressIndicatorPainter';
    jsObj['constructorName'] = 'line2Head';
    return jsObj;
  }
  static get line2Tail() {
    var jsObj = new (class MXCurve extends Curve {})();
    jsObj['className'] = '_LinearProgressIndicatorPainter';
    jsObj['constructorName'] = 'line2Tail';
    return jsObj;
  }
}
export { _LinearProgressIndicatorPainter };
class LinearProgressIndicator extends ProgressIndicator {
  minHeight: number;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: number;
      backgroundColor?: Color;
      valueColor?: Animation;
      minHeight?: number;
      semanticsLabel?: string;
      semanticsValue?: string;
    } = {},
  ) {
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
  controller: AnimationController;
}
export { _LinearProgressIndicatorState };
class _CircularProgressIndicatorPainter extends CustomPainter {
  backgroundColor: Color;
  valueColor: Color;
  value: number;
  headValue: number;
  tailValue: number;
  offsetValue: number;
  rotationValue: number;
  strokeWidth: number;
  arcStart: number;
  arcSweep: number;
  public constructor(
    namedParameters: {
      backgroundColor?: Color;
      valueColor?: Color;
      value?: number;
      headValue?: number;
      tailValue?: number;
      offsetValue?: number;
      rotationValue?: number;
      strokeWidth?: number;
    } = {},
  ) {
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
  strokeWidth: number;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: number;
      backgroundColor?: Color;
      valueColor?: Animation;
      strokeWidth?: number;
      semanticsLabel?: string;
      semanticsValue?: string;
    } = {},
  ) {
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
  controller: AnimationController;
}
export { _CircularProgressIndicatorState };
class _RefreshProgressIndicatorPainter extends _CircularProgressIndicatorPainter {
  arrowheadScale: number;
  public constructor(
    namedParameters: {
      valueColor?: Color;
      value?: number;
      headValue?: number;
      tailValue?: number;
      offsetValue?: number;
      rotationValue?: number;
      strokeWidth?: number;
      arrowheadScale?: number;
    } = {},
  ) {
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
  public constructor(
    namedParameters: {
      key?: Key;
      value?: number;
      backgroundColor?: Color;
      valueColor?: Animation;
      strokeWidth?: number;
      semanticsLabel?: string;
      semanticsValue?: string;
    } = {},
  ) {
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
class _RefreshProgressIndicatorState extends _CircularProgressIndicatorState {}
export { _RefreshProgressIndicatorState };
