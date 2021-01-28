//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Matrix4 } from '../../../vector-math-64';
import { InkFeature, MaterialInkController } from './material';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { ImageRepeat } from '../painting/decoration-image';
import { AlignmentGeometry } from '../painting/alignment';
import { BoxFit } from '../painting/box-fit';
import { ImageProvider, ImageConfiguration } from '../painting/image-provider';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Color, ColorFilter, Rect, Canvas } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { Decoration, BoxPainter } from '../painting/decoration';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, Widget, State$, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Ink extends StatefulWidget$ {
  child: MXWidget;
  padding: EdgeInsetsGeometry;
  decoration: Decoration;
  width: number;
  height: number;
  public constructor(
    namedParameters: {
      key?: Key;
      padding?: EdgeInsetsGeometry;
      color?: Color;
      decoration?: Decoration;
      width?: number;
      height?: number;
      child?: MXWidget;
    } = {},
  ) {
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
  static image(
    namedParameters: {
      key?: Key;
      padding?: EdgeInsetsGeometry;
      image?: ImageProvider;
      onImageError?: any;
      colorFilter?: ColorFilter;
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      centerSlice?: Rect;
      repeat?: ImageRepeat;
      matchTextDirection?: boolean;
      width?: number;
      height?: number;
      child?: MXWidget;
    } = {},
  ) {
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
  ink: InkDecoration;
}
export { _InkState };
class InkDecoration extends InkFeature {
  painter: BoxPainter;
  decoration: Decoration;
  configuration: ImageConfiguration;
  public constructor(
    namedParameters: {
      decoration?: Decoration;
      configuration?: ImageConfiguration;
      controller?: MaterialInkController;
      referenceBox?: RenderBox;
      onRemoved?: any;
    } = {},
  ) {
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
