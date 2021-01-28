//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { CustomPainter } from '../rendering/custom-paint';
import { Curve } from '../animation/curves';
import { ImplicitlyAnimatedWidget, AnimatedWidgetBaseState } from '../widgets/implicit-animations';
import { Tween, ColorTween } from '../animation/tween';
import { PaintingContext } from '../rendering/object';
import { RenderBox } from '../rendering/box';
import { TickerProvider } from '../scheduler/ticker';
import { RenderProxyBox } from '../rendering/proxy-box';
import { LayoutChangedNotification } from '../widgets/notification-listener';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { BorderRadiusGeometry } from '../painting/border-radius';
import { Duration } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { TextStyle } from '../painting/text-style';
import { Color, Clip, Offset, Canvas, TextDirection, Size } from '../../../mx-dart-sdk';
import {
  StatefulWidget$,
  Widget,
  BuildContext$,
  State$,
  GlobalKey,
  SingleChildRenderObjectWidget,
  StatelessWidget$,
} from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum MaterialType {
  canvas = '{ "_name": "MaterialType.canvas", "index": 0 }',
  card = '{ "_name": "MaterialType.card", "index": 1 }',
  circle = '{ "_name": "MaterialType.circle", "index": 2 }',
  button = '{ "_name": "MaterialType.button", "index": 3 }',
  transparency = '{ "_name": "MaterialType.transparency", "index": 4 }',
}

export { MaterialType };
abstract class MaterialInkController extends MXDartClass {}
export { MaterialInkController };
class Material extends StatefulWidget$ {
  child: MXWidget;
  type: MaterialType;
  elevation: number;
  color: Color;
  shadowColor: Color;
  textStyle: TextStyle;
  shape: ShapeBorder;
  borderOnForeground: boolean;
  clipBehavior: Clip;
  animationDuration: Duration;
  borderRadius: BorderRadiusGeometry;
  public constructor(
    namedParameters: {
      key?: Key;
      type?: MaterialType;
      elevation?: number;
      color?: Color;
      shadowColor?: Color;
      textStyle?: TextStyle;
      borderRadius?: BorderRadiusGeometry;
      shape?: ShapeBorder;
      borderOnForeground?: boolean;
      clipBehavior?: Clip;
      animationDuration?: Duration;
      child?: MXWidget;
    } = {},
  ) {
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
  inkFeatureRenderer: GlobalKey;
}
export { _MaterialState };
class _RenderInkFeatures extends RenderProxyBox {
  vsync: TickerProvider;
  color: Color;
  inkFeatures: Array<any>;
  public constructor(namedParameters: { child?: RenderBox; vsync?: TickerProvider; color?: Color } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.color = namedParameters.color;
    this.className = '_RenderInkFeatures';
  }
}
export { _RenderInkFeatures };
class _InkFeatures extends SingleChildRenderObjectWidget {
  color: Color;
  vsync: TickerProvider;
  public constructor(namedParameters: { key?: Key; color?: Color; vsync?: TickerProvider; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.color = namedParameters.color;
    this.child = namedParameters.child;
    this.className = '_InkFeatures';
  }
}
export { _InkFeatures };
abstract class InkFeature extends MXDartClass {
  controller: _RenderInkFeatures;
  referenceBox: RenderBox;
  onRemoved: any;
  debugDisposed: boolean;
}
export { InkFeature };
class ShapeBorderTween extends Tween {
  public constructor(namedParameters: { begin?: ShapeBorder; end?: ShapeBorder } = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'ShapeBorderTween';
  }
}
export { ShapeBorderTween };
class _MaterialInterior extends ImplicitlyAnimatedWidget {
  child: MXWidget;
  shape: ShapeBorder;
  borderOnForeground: boolean;
  clipBehavior: Clip;
  elevation: number;
  color: Color;
  shadowColor: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      shape?: ShapeBorder;
      borderOnForeground?: boolean;
      clipBehavior?: Clip;
      elevation?: number;
      color?: Color;
      shadowColor?: Color;
      curve?: Curve;
      duration?: Duration;
    } = {},
  ) {
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
  elevation: Tween;
  shadowColor: ColorTween;
  border: ShapeBorderTween;
}
export { _MaterialInteriorState };
class _ShapeBorderPaint extends StatelessWidget$ {
  child: MXWidget;
  shape: ShapeBorder;
  borderOnForeground: boolean;
  public constructor(namedParameters: { child?: MXWidget; shape?: ShapeBorder; borderOnForeground?: boolean } = {}) {
    super();
    this.child = namedParameters.child;
    this.shape = namedParameters.shape;
    this.borderOnForeground = namedParameters.borderOnForeground;
    this.className = '_ShapeBorderPaint';
  }
}
export { _ShapeBorderPaint };
class _ShapeBorderPainter extends CustomPainter {
  border: ShapeBorder;
  textDirection: TextDirection;
  public constructor(border?: ShapeBorder, textDirection?: TextDirection) {
    super();
    this.border = border;
    this.textDirection = textDirection;
    this.className = '_ShapeBorderPainter';
  }
}
export { _ShapeBorderPainter };
