//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PipelineOwner, PaintingContext } from './object';
import { RenderBox, BoxHitTestResult } from './box';
import { RenderProxyBox } from './proxy-box';
import { SemanticsProperties, SemanticsConfiguration, SemanticsNode } from '../semantics/semantics';
import { Matrix4 } from '../../../vector-math-64';
import { Key } from '../foundation/key';
import { Offset, Rect, Size, Canvas } from '../../../mx-dart-sdk';
import { Listenable } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class CustomPainter extends Listenable {
  repaint: Listenable;
}
export { CustomPainter };
class CustomPainterSemantics extends MXDartClass {
  key: Key;
  rect: Rect;
  transform: Matrix4;
  properties: SemanticsProperties;
  tags: Set<any>;
  public constructor(
    namedParameters: {
      key?: Key;
      rect?: Rect;
      properties?: SemanticsProperties;
      transform?: Matrix4;
      tags?: Set<any>;
    } = {},
  ) {
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
  painter: CustomPainter;
  foregroundPainter: CustomPainter;
  preferredSize: Size;
  isComplex: boolean;
  willChange: boolean;
  backgroundSemanticsBuilder: any;
  foregroundSemanticsBuilder: any;
  backgroundSemanticsNodes: Array<any>;
  foregroundSemanticsNodes: Array<any>;
  public constructor(
    namedParameters: {
      painter?: CustomPainter;
      foregroundPainter?: CustomPainter;
      preferredSize?: Size;
      isComplex?: boolean;
      willChange?: boolean;
      child?: RenderBox;
    } = {},
  ) {
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
