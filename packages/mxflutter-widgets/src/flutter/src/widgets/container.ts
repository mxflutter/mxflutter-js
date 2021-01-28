//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Matrix4 } from '../../../vector-math-64';
import { BoxConstraints } from '../rendering/box';
import { Color, Clip, TextDirection, Size } from '../../../mx-dart-sdk';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { AlignmentGeometry } from '../painting/alignment';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { DecorationPosition, RenderDecoratedBox, CustomClipper } from '../rendering/proxy-box';
import { Decoration } from '../painting/decoration';
import { SingleChildRenderObjectWidget, Widget, BuildContext$, StatelessWidget$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DecoratedBox extends SingleChildRenderObjectWidget {
  decoration: Decoration;
  position: DecorationPosition;
  public constructor(
    namedParameters: { key?: Key; decoration?: Decoration; position?: DecorationPosition; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.decoration = namedParameters.decoration;
    this.position = namedParameters.position;
    this.child = namedParameters.child;
    this.className = 'DecoratedBox';
  }
}
export { DecoratedBox };
class Container extends StatelessWidget$ {
  child: MXWidget;
  alignment: AlignmentGeometry;
  padding: EdgeInsetsGeometry;
  color: Color;
  decoration: Decoration;
  foregroundDecoration: Decoration;
  constraints: BoxConstraints;
  margin: EdgeInsetsGeometry;
  transform: Matrix4;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      alignment?: AlignmentGeometry;
      padding?: EdgeInsetsGeometry;
      color?: Color;
      decoration?: Decoration;
      foregroundDecoration?: Decoration;
      width?: number;
      height?: number;
      constraints?: BoxConstraints;
      margin?: EdgeInsetsGeometry;
      transform?: Matrix4;
      child?: MXWidget;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.alignment = namedParameters.alignment;
    this.padding = namedParameters.padding;
    this.color = namedParameters.color;
    this.decoration = namedParameters.decoration;
    this.foregroundDecoration = namedParameters.foregroundDecoration;
    this['width'] = namedParameters.width;
    this['height'] = namedParameters.height;
    this.constraints = namedParameters.constraints;
    this.margin = namedParameters.margin;
    this.transform = namedParameters.transform;
    this.child = namedParameters.child;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'Container';
  }
}
export { Container };
class _DecorationClipper extends CustomClipper {
  textDirection: TextDirection;
  decoration: Decoration;
  public constructor(namedParameters: { textDirection?: TextDirection; decoration?: Decoration } = {}) {
    super();
    this.textDirection = namedParameters.textDirection;
    this.decoration = namedParameters.decoration;
    this.className = '_DecorationClipper';
  }
}
export { _DecorationClipper };
