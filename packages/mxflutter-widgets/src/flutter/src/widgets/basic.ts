//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { SemanticsProperties, SemanticsSortKey } from '../semantics/semantics';
import { PointerExitEvent } from '../gestures/events';
import { MouseCursor } from '../rendering/mouse-cursor';
import { AssetBundle } from '../services/asset-bundle';
import { RenderImage } from '../rendering/image';
import { ImageRepeat } from '../painting/decoration-image';
import { TextWidthBasis } from '../painting/text-painter';
import { StrutStyle } from '../painting/strut-style';
import { TextOverflow, RenderParagraph } from '../rendering/paragraph';
import { InlineSpan } from '../painting/inline-span';
import { FlowDelegate, RenderFlow } from '../rendering/flow';
import { WrapAlignment, WrapCrossAlignment, RenderWrap } from '../rendering/wrap';
import { MainAxisAlignment, MainAxisSize, CrossAxisAlignment, RenderFlex, FlexFit } from '../rendering/flex';
import { StackFit, Overflow, RenderStack, RenderIndexedStack, RelativeRect } from '../rendering/stack';
import { RenderListBody } from '../rendering/list-body';
import { RenderSliverPadding } from '../rendering/sliver-padding';
import { Axis, VerticalDirection } from '../painting/basic-types';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { MultiChildLayoutDelegate, RenderCustomMultiChildLayoutBox } from '../rendering/custom-layout';
import { RenderObject, PaintingContext } from '../rendering/object';
import {
  RenderPadding,
  RenderPositionedBox,
  SingleChildLayoutDelegate,
  RenderCustomSingleChildLayoutBox,
  RenderUnconstrainedBox,
  RenderFractionallySizedOverflowBox,
  RenderConstrainedOverflowBox,
  RenderSizedOverflowBox,
  RenderBaseline,
} from '../rendering/shifted-box';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { RenderRotatedBox } from '../rendering/rotated-box';
import { BoxFit } from '../painting/box-fit';
import { LayerLink } from '../rendering/layer';
import { AlignmentGeometry } from '../painting/alignment';
import { Matrix4 } from '../../../vector-math-64';
import { BoxShape } from '../painting/box-border';
import { ShapeBorder } from '../painting/borders';
import { BorderRadius } from '../painting/border-radius';
import { CustomPainter, RenderCustomPaint } from '../rendering/custom-paint';
import {
  RenderOpacity,
  RenderShaderMask,
  RenderBackdropFilter,
  CustomClipper,
  RenderClipRect,
  RenderClipRRect,
  RenderClipOval,
  RenderClipPath,
  RenderPhysicalModel,
  RenderPhysicalShape,
  RenderTransform,
  RenderLeaderLayer,
  RenderFollowerLayer,
  RenderFittedBox,
  RenderFractionalTranslation,
  RenderConstrainedBox,
  RenderLimitedBox,
  RenderOffstage,
  RenderAspectRatio,
  RenderIntrinsicWidth,
  HitTestBehavior,
  RenderPointerListener,
  RenderMouseRegion,
  RenderIgnorePointer,
  RenderAbsorbPointer,
  RenderMetaData,
  RenderSemanticsAnnotations,
  RenderBlockSemantics,
  RenderExcludeSemantics,
  RenderIndexedSemantics,
  RenderProxyBoxWithHitTestBehavior,
} from '../rendering/proxy-box';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import {
  TextDirection,
  BlendMode,
  ImageFilter,
  Size,
  Clip,
  Color,
  Offset,
  TextBaseline,
  Rect,
  TextAlign,
  Locale,
  TextHeightBehavior,
  Image,
  FilterQuality,
} from '../../../mx-dart-sdk';
import {
  InheritedWidget,
  Widget,
  BuildContext$,
  SingleChildRenderObjectWidget,
  ParentDataWidget,
  MultiChildRenderObjectWidget,
  SingleChildRenderObjectElement,
  StatelessWidget$,
  LeafRenderObjectWidget,
  StatefulWidget$,
  State$,
} from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Directionality extends InheritedWidget {
  textDirection: TextDirection;
  public constructor(namedParameters: { key?: Key; textDirection?: TextDirection; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.textDirection = namedParameters.textDirection;
    this.child = namedParameters.child;
    this.className = 'Directionality';
  }
}
export { Directionality };
class Opacity extends SingleChildRenderObjectWidget {
  opacity: number;
  alwaysIncludeSemantics: boolean;
  public constructor(
    namedParameters: { key?: Key; opacity?: number; alwaysIncludeSemantics?: boolean; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.opacity = namedParameters.opacity;
    this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
    this.child = namedParameters.child;
    this.className = 'Opacity';
  }
}
export { Opacity };
class ShaderMask extends SingleChildRenderObjectWidget {
  shaderCallback: any;
  blendMode: BlendMode;
  public constructor(
    namedParameters: { key?: Key; shaderCallback?: any; blendMode?: BlendMode; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.shaderCallback = namedParameters.shaderCallback;
    this.blendMode = namedParameters.blendMode;
    this.child = namedParameters.child;
    this.className = 'ShaderMask';
  }
}
export { ShaderMask };
class BackdropFilter extends SingleChildRenderObjectWidget {
  filter: ImageFilter;
  public constructor(namedParameters: { key?: Key; filter?: ImageFilter; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.filter = namedParameters.filter;
    this.child = namedParameters.child;
    this.className = 'BackdropFilter';
  }
}
export { BackdropFilter };
class CustomPaint extends SingleChildRenderObjectWidget {
  painter: CustomPainter;
  foregroundPainter: CustomPainter;
  size: Size;
  isComplex: boolean;
  willChange: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      painter?: CustomPainter;
      foregroundPainter?: CustomPainter;
      size?: Size;
      isComplex?: boolean;
      willChange?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.painter = namedParameters.painter;
    this.foregroundPainter = namedParameters.foregroundPainter;
    this.size = namedParameters.size;
    this.isComplex = namedParameters.isComplex;
    this.willChange = namedParameters.willChange;
    this.child = namedParameters.child;
    this.className = 'CustomPaint';
  }
}
export { CustomPaint };
class ClipRect extends SingleChildRenderObjectWidget {
  clipper: CustomClipper;
  clipBehavior: Clip;
  public constructor(
    namedParameters: { key?: Key; clipper?: CustomClipper; clipBehavior?: Clip; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.clipper = namedParameters.clipper;
    this.clipBehavior = namedParameters.clipBehavior;
    this.child = namedParameters.child;
    this.className = 'ClipRect';
  }
}
export { ClipRect };
class ClipRRect extends SingleChildRenderObjectWidget {
  borderRadius: BorderRadius;
  clipper: CustomClipper;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      borderRadius?: BorderRadius;
      clipper?: CustomClipper;
      clipBehavior?: Clip;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.borderRadius = namedParameters.borderRadius;
    this.clipper = namedParameters.clipper;
    this.clipBehavior = namedParameters.clipBehavior;
    this.child = namedParameters.child;
    this.className = 'ClipRRect';
  }
}
export { ClipRRect };
class ClipOval extends SingleChildRenderObjectWidget {
  clipper: CustomClipper;
  clipBehavior: Clip;
  public constructor(
    namedParameters: { key?: Key; clipper?: CustomClipper; clipBehavior?: Clip; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.clipper = namedParameters.clipper;
    this.clipBehavior = namedParameters.clipBehavior;
    this.child = namedParameters.child;
    this.className = 'ClipOval';
  }
}
export { ClipOval };
class ClipPath extends SingleChildRenderObjectWidget {
  clipper: CustomClipper;
  clipBehavior: Clip;
  public constructor(
    namedParameters: { key?: Key; clipper?: CustomClipper; clipBehavior?: Clip; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.clipper = namedParameters.clipper;
    this.clipBehavior = namedParameters.clipBehavior;
    this.child = namedParameters.child;
    this.className = 'ClipPath';
  }
}
export { ClipPath };
class PhysicalModel extends SingleChildRenderObjectWidget {
  shape: BoxShape;
  clipBehavior: Clip;
  borderRadius: BorderRadius;
  elevation: number;
  color: Color;
  shadowColor: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      shape?: BoxShape;
      clipBehavior?: Clip;
      borderRadius?: BorderRadius;
      elevation?: number;
      color?: Color;
      shadowColor?: Color;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.borderRadius = namedParameters.borderRadius;
    this.elevation = namedParameters.elevation;
    this.color = namedParameters.color;
    this.shadowColor = namedParameters.shadowColor;
    this.child = namedParameters.child;
    this.className = 'PhysicalModel';
  }
}
export { PhysicalModel };
class PhysicalShape extends SingleChildRenderObjectWidget {
  clipper: CustomClipper;
  clipBehavior: Clip;
  elevation: number;
  color: Color;
  shadowColor: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      clipper?: CustomClipper;
      clipBehavior?: Clip;
      elevation?: number;
      color?: Color;
      shadowColor?: Color;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.clipper = namedParameters.clipper;
    this.clipBehavior = namedParameters.clipBehavior;
    this.elevation = namedParameters.elevation;
    this.color = namedParameters.color;
    this.shadowColor = namedParameters.shadowColor;
    this.child = namedParameters.child;
    this.className = 'PhysicalShape';
  }
}
export { PhysicalShape };
class Transform extends SingleChildRenderObjectWidget {
  transform: Matrix4;
  origin: Offset;
  alignment: AlignmentGeometry;
  transformHitTests: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      transform?: Matrix4;
      origin?: Offset;
      alignment?: AlignmentGeometry;
      transformHitTests?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.transform = namedParameters.transform;
    this.origin = namedParameters.origin;
    this.alignment = namedParameters.alignment;
    this.transformHitTests = namedParameters.transformHitTests;
    this.child = namedParameters.child;
    this.className = 'Transform';
  }
  static rotate(
    namedParameters: {
      key?: Key;
      angle?: number;
      origin?: Offset;
      alignment?: AlignmentGeometry;
      transformHitTests?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    var jsObj = new Transform();
    jsObj.key = namedParameters.key;
    jsObj['angle'] = namedParameters.angle;
    jsObj.origin = namedParameters.origin;
    jsObj.alignment = namedParameters.alignment;
    jsObj.transformHitTests = namedParameters.transformHitTests;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'rotate';
    return jsObj;
  }
  static translate(
    namedParameters: { key?: Key; offset?: Offset; transformHitTests?: boolean; child?: MXWidget } = {},
  ) {
    var jsObj = new Transform();
    jsObj.key = namedParameters.key;
    jsObj['offset'] = namedParameters.offset;
    jsObj.transformHitTests = namedParameters.transformHitTests;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'translate';
    return jsObj;
  }
  static scale(
    namedParameters: {
      key?: Key;
      scale?: number;
      origin?: Offset;
      alignment?: AlignmentGeometry;
      transformHitTests?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    var jsObj = new Transform();
    jsObj.key = namedParameters.key;
    jsObj['scale'] = namedParameters.scale;
    jsObj.origin = namedParameters.origin;
    jsObj.alignment = namedParameters.alignment;
    jsObj.transformHitTests = namedParameters.transformHitTests;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'scale';
    return jsObj;
  }
}
export { Transform };
class CompositedTransformTarget extends SingleChildRenderObjectWidget {
  link: LayerLink;
  public constructor(namedParameters: { key?: Key; link?: LayerLink; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.link = namedParameters.link;
    this.child = namedParameters.child;
    this.className = 'CompositedTransformTarget';
  }
}
export { CompositedTransformTarget };
class CompositedTransformFollower extends SingleChildRenderObjectWidget {
  link: LayerLink;
  showWhenUnlinked: boolean;
  offset: Offset;
  public constructor(
    namedParameters: {
      key?: Key;
      link?: LayerLink;
      showWhenUnlinked?: boolean;
      offset?: Offset;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.link = namedParameters.link;
    this.showWhenUnlinked = namedParameters.showWhenUnlinked;
    this.offset = namedParameters.offset;
    this.child = namedParameters.child;
    this.className = 'CompositedTransformFollower';
  }
}
export { CompositedTransformFollower };
class FittedBox extends SingleChildRenderObjectWidget {
  fit: BoxFit;
  alignment: AlignmentGeometry;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      clipBehavior?: Clip;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.fit = namedParameters.fit;
    this.alignment = namedParameters.alignment;
    this.clipBehavior = namedParameters.clipBehavior;
    this.child = namedParameters.child;
    this.className = 'FittedBox';
  }
}
export { FittedBox };
class FractionalTranslation extends SingleChildRenderObjectWidget {
  translation: Offset;
  transformHitTests: boolean;
  public constructor(
    namedParameters: { key?: Key; translation?: Offset; transformHitTests?: boolean; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.translation = namedParameters.translation;
    this.transformHitTests = namedParameters.transformHitTests;
    this.child = namedParameters.child;
    this.className = 'FractionalTranslation';
  }
}
export { FractionalTranslation };
class RotatedBox extends SingleChildRenderObjectWidget {
  quarterTurns: number;
  public constructor(namedParameters: { key?: Key; quarterTurns?: number; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.quarterTurns = namedParameters.quarterTurns;
    this.child = namedParameters.child;
    this.className = 'RotatedBox';
  }
}
export { RotatedBox };
class Padding extends SingleChildRenderObjectWidget {
  padding: EdgeInsetsGeometry;
  public constructor(namedParameters: { key?: Key; padding?: EdgeInsetsGeometry; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.padding = namedParameters.padding;
    this.child = namedParameters.child;
    this.className = 'Padding';
  }
}
export { Padding };
class Align extends SingleChildRenderObjectWidget {
  alignment: AlignmentGeometry;
  widthFactor: number;
  heightFactor: number;
  public constructor(
    namedParameters: {
      key?: Key;
      alignment?: AlignmentGeometry;
      widthFactor?: number;
      heightFactor?: number;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.alignment = namedParameters.alignment;
    this.widthFactor = namedParameters.widthFactor;
    this.heightFactor = namedParameters.heightFactor;
    this.child = namedParameters.child;
    this.className = 'Align';
  }
}
export { Align };
class Center extends Align {
  public constructor(
    namedParameters: { key?: Key; widthFactor?: number; heightFactor?: number; child?: MXWidget } = {},
  ) {
    super();
    this['key'] = namedParameters.key;
    this['widthFactor'] = namedParameters.widthFactor;
    this['heightFactor'] = namedParameters.heightFactor;
    this['child'] = namedParameters.child;
    this.className = 'Center';
  }
}
export { Center };
class CustomSingleChildLayout extends SingleChildRenderObjectWidget {
  delegate: SingleChildLayoutDelegate;
  public constructor(namedParameters: { key?: Key; delegate?: SingleChildLayoutDelegate; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.delegate = namedParameters.delegate;
    this.child = namedParameters.child;
    this.className = 'CustomSingleChildLayout';
  }
}
export { CustomSingleChildLayout };
class LayoutId extends ParentDataWidget {
  id: any;
  public constructor(namedParameters: { key?: Key; id?: any; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.id = namedParameters.id;
    this.child = namedParameters.child;
    this.className = 'LayoutId';
  }
}
export { LayoutId };
class CustomMultiChildLayout extends MultiChildRenderObjectWidget {
  delegate: MultiChildLayoutDelegate;
  public constructor(namedParameters: { key?: Key; delegate?: MultiChildLayoutDelegate; children?: Array<any> } = {}) {
    super();
    this.key = namedParameters.key;
    this.delegate = namedParameters.delegate;
    this.children = namedParameters.children;
    this.className = 'CustomMultiChildLayout';
  }
}
export { CustomMultiChildLayout };
class SizedBox extends SingleChildRenderObjectWidget {
  width: number;
  height: number;
  public constructor(namedParameters: { key?: Key; width?: number; height?: number; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.child = namedParameters.child;
    this.className = 'SizedBox';
  }
  static expand(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    var jsObj = new SizedBox();
    jsObj.key = namedParameters.key;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'expand';
    return jsObj;
  }
  static shrink(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    var jsObj = new SizedBox();
    jsObj.key = namedParameters.key;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'shrink';
    return jsObj;
  }
  static fromSize(namedParameters: { key?: Key; child?: MXWidget; size?: Size } = {}) {
    var jsObj = new SizedBox();
    jsObj.key = namedParameters.key;
    jsObj.child = namedParameters.child;
    jsObj['size'] = namedParameters.size;
    jsObj['constructorName'] = 'fromSize';
    return jsObj;
  }
}
export { SizedBox };
class ConstrainedBox extends SingleChildRenderObjectWidget {
  constraints: BoxConstraints;
  public constructor(namedParameters: { key?: Key; constraints?: BoxConstraints; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.constraints = namedParameters.constraints;
    this.child = namedParameters.child;
    this.className = 'ConstrainedBox';
  }
}
export { ConstrainedBox };
class UnconstrainedBox extends SingleChildRenderObjectWidget {
  textDirection: TextDirection;
  alignment: AlignmentGeometry;
  constrainedAxis: Axis;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      textDirection?: TextDirection;
      alignment?: AlignmentGeometry;
      constrainedAxis?: Axis;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.textDirection = namedParameters.textDirection;
    this.alignment = namedParameters.alignment;
    this.constrainedAxis = namedParameters.constrainedAxis;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'UnconstrainedBox';
  }
}
export { UnconstrainedBox };
class FractionallySizedBox extends SingleChildRenderObjectWidget {
  widthFactor: number;
  heightFactor: number;
  alignment: AlignmentGeometry;
  public constructor(
    namedParameters: {
      key?: Key;
      alignment?: AlignmentGeometry;
      widthFactor?: number;
      heightFactor?: number;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.alignment = namedParameters.alignment;
    this.widthFactor = namedParameters.widthFactor;
    this.heightFactor = namedParameters.heightFactor;
    this.child = namedParameters.child;
    this.className = 'FractionallySizedBox';
  }
}
export { FractionallySizedBox };
class LimitedBox extends SingleChildRenderObjectWidget {
  maxWidth: number;
  maxHeight: number;
  public constructor(namedParameters: { key?: Key; maxWidth?: number; maxHeight?: number; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.maxWidth = namedParameters.maxWidth;
    this.maxHeight = namedParameters.maxHeight;
    this.child = namedParameters.child;
    this.className = 'LimitedBox';
  }
}
export { LimitedBox };
class OverflowBox extends SingleChildRenderObjectWidget {
  alignment: AlignmentGeometry;
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  public constructor(
    namedParameters: {
      key?: Key;
      alignment?: AlignmentGeometry;
      minWidth?: number;
      maxWidth?: number;
      minHeight?: number;
      maxHeight?: number;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.alignment = namedParameters.alignment;
    this.minWidth = namedParameters.minWidth;
    this.maxWidth = namedParameters.maxWidth;
    this.minHeight = namedParameters.minHeight;
    this.maxHeight = namedParameters.maxHeight;
    this.child = namedParameters.child;
    this.className = 'OverflowBox';
  }
}
export { OverflowBox };
class SizedOverflowBox extends SingleChildRenderObjectWidget {
  alignment: AlignmentGeometry;
  size: Size;
  public constructor(
    namedParameters: { key?: Key; size?: Size; alignment?: AlignmentGeometry; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.size = namedParameters.size;
    this.alignment = namedParameters.alignment;
    this.child = namedParameters.child;
    this.className = 'SizedOverflowBox';
  }
}
export { SizedOverflowBox };
class Offstage extends SingleChildRenderObjectWidget {
  offstage: boolean;
  public constructor(namedParameters: { key?: Key; offstage?: boolean; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.offstage = namedParameters.offstage;
    this.child = namedParameters.child;
    this.className = 'Offstage';
  }
}
export { Offstage };
class _OffstageElement extends SingleChildRenderObjectElement {
  public constructor(widget?: Offstage) {
    super();
    this['widget'] = widget;
    this.className = '_OffstageElement';
  }
}
export { _OffstageElement };
class AspectRatio extends SingleChildRenderObjectWidget {
  aspectRatio: number;
  public constructor(namedParameters: { key?: Key; aspectRatio?: number; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.aspectRatio = namedParameters.aspectRatio;
    this.child = namedParameters.child;
    this.className = 'AspectRatio';
  }
}
export { AspectRatio };
class IntrinsicWidth extends SingleChildRenderObjectWidget {
  stepWidth: number;
  stepHeight: number;
  public constructor(namedParameters: { key?: Key; stepWidth?: number; stepHeight?: number; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.stepWidth = namedParameters.stepWidth;
    this.stepHeight = namedParameters.stepHeight;
    this.child = namedParameters.child;
    this.className = 'IntrinsicWidth';
  }
}
export { IntrinsicWidth };
class IntrinsicHeight extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = 'IntrinsicHeight';
  }
}
export { IntrinsicHeight };
class Baseline extends SingleChildRenderObjectWidget {
  baseline: number;
  baselineType: TextBaseline;
  public constructor(
    namedParameters: { key?: Key; baseline?: number; baselineType?: TextBaseline; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.baseline = namedParameters.baseline;
    this.baselineType = namedParameters.baselineType;
    this.child = namedParameters.child;
    this.className = 'Baseline';
  }
}
export { Baseline };
class SliverToBoxAdapter extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = 'SliverToBoxAdapter';
  }
}
export { SliverToBoxAdapter };
class SliverPadding extends SingleChildRenderObjectWidget {
  padding: EdgeInsetsGeometry;
  public constructor(namedParameters: { key?: Key; padding?: EdgeInsetsGeometry; sliver?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.padding = namedParameters.padding;
    this['sliver'] = namedParameters.sliver;
    this.className = 'SliverPadding';
  }
}
export { SliverPadding };
class ListBody extends MultiChildRenderObjectWidget {
  mainAxis: Axis;
  reverse: boolean;
  public constructor(namedParameters: { key?: Key; mainAxis?: Axis; reverse?: boolean; children?: Array<any> } = {}) {
    super();
    this.key = namedParameters.key;
    this.mainAxis = namedParameters.mainAxis;
    this.reverse = namedParameters.reverse;
    this.children = namedParameters.children;
    this.className = 'ListBody';
  }
}
export { ListBody };
class Stack extends MultiChildRenderObjectWidget {
  alignment: AlignmentGeometry;
  textDirection: TextDirection;
  fit: StackFit;
  overflow: Overflow;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      alignment?: AlignmentGeometry;
      textDirection?: TextDirection;
      fit?: StackFit;
      overflow?: Overflow;
      clipBehavior?: Clip;
      children?: Array<any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this.fit = namedParameters.fit;
    this.overflow = namedParameters.overflow;
    this.clipBehavior = namedParameters.clipBehavior;
    this.children = namedParameters.children;
    this.className = 'Stack';
  }
}
export { Stack };
class IndexedStack extends Stack {
  index: number;
  public constructor(
    namedParameters: {
      key?: Key;
      alignment?: AlignmentGeometry;
      textDirection?: TextDirection;
      sizing?: StackFit;
      index?: number;
      children?: Array<any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this['sizing'] = namedParameters.sizing;
    this.index = namedParameters.index;
    this.children = namedParameters.children;
    this.className = 'IndexedStack';
  }
}
export { IndexedStack };
class Positioned extends ParentDataWidget {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  public constructor(
    namedParameters: {
      key?: Key;
      left?: number;
      top?: number;
      right?: number;
      bottom?: number;
      width?: number;
      height?: number;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.left = namedParameters.left;
    this.top = namedParameters.top;
    this.right = namedParameters.right;
    this.bottom = namedParameters.bottom;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.child = namedParameters.child;
    this.className = 'Positioned';
  }
  static directional(
    namedParameters: {
      key?: Key;
      textDirection?: TextDirection;
      start?: number;
      top?: number;
      end?: number;
      bottom?: number;
      width?: number;
      height?: number;
      child?: MXWidget;
    } = {},
  ) {
    var jsObj = new Positioned();
    jsObj.key = namedParameters.key;
    jsObj['textDirection'] = namedParameters.textDirection;
    jsObj['start'] = namedParameters.start;
    jsObj.top = namedParameters.top;
    jsObj['end'] = namedParameters.end;
    jsObj.bottom = namedParameters.bottom;
    jsObj.width = namedParameters.width;
    jsObj.height = namedParameters.height;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'directional';
    return jsObj;
  }
  static fromRect(namedParameters: { key?: Key; rect?: Rect; child?: MXWidget } = {}) {
    var jsObj = new Positioned();
    jsObj.key = namedParameters.key;
    jsObj['rect'] = namedParameters.rect;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'fromRect';
    return jsObj;
  }
  static fromRelativeRect(namedParameters: { key?: Key; rect?: RelativeRect; child?: MXWidget } = {}) {
    var jsObj = new Positioned();
    jsObj.key = namedParameters.key;
    jsObj['rect'] = namedParameters.rect;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'fromRelativeRect';
    return jsObj;
  }
  static fill(
    namedParameters: { key?: Key; left?: number; top?: number; right?: number; bottom?: number; child?: MXWidget } = {},
  ) {
    var jsObj = new Positioned();
    jsObj.key = namedParameters.key;
    jsObj.left = namedParameters.left;
    jsObj.top = namedParameters.top;
    jsObj.right = namedParameters.right;
    jsObj.bottom = namedParameters.bottom;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'fill';
    return jsObj;
  }
}
export { Positioned };
class PositionedDirectional extends StatelessWidget$ {
  start: number;
  top: number;
  end: number;
  bottom: number;
  width: number;
  height: number;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      start?: number;
      top?: number;
      end?: number;
      bottom?: number;
      width?: number;
      height?: number;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.start = namedParameters.start;
    this.top = namedParameters.top;
    this.end = namedParameters.end;
    this.bottom = namedParameters.bottom;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.child = namedParameters.child;
    this.className = 'PositionedDirectional';
  }
}
export { PositionedDirectional };
class Flex extends MultiChildRenderObjectWidget {
  direction: Axis;
  mainAxisAlignment: MainAxisAlignment;
  mainAxisSize: MainAxisSize;
  crossAxisAlignment: CrossAxisAlignment;
  textDirection: TextDirection;
  verticalDirection: VerticalDirection;
  textBaseline: TextBaseline;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      direction?: Axis;
      mainAxisAlignment?: MainAxisAlignment;
      mainAxisSize?: MainAxisSize;
      crossAxisAlignment?: CrossAxisAlignment;
      textDirection?: TextDirection;
      verticalDirection?: VerticalDirection;
      textBaseline?: TextBaseline;
      clipBehavior?: Clip;
      children?: Array<any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.direction = namedParameters.direction;
    this.mainAxisAlignment = namedParameters.mainAxisAlignment;
    this.mainAxisSize = namedParameters.mainAxisSize;
    this.crossAxisAlignment = namedParameters.crossAxisAlignment;
    this.textDirection = namedParameters.textDirection;
    this.verticalDirection = namedParameters.verticalDirection;
    this.textBaseline = namedParameters.textBaseline;
    this.clipBehavior = namedParameters.clipBehavior;
    this.children = namedParameters.children;
    this.className = 'Flex';
  }
}
export { Flex };
class Row extends Flex {
  public constructor(
    namedParameters: {
      key?: Key;
      mainAxisAlignment?: MainAxisAlignment;
      mainAxisSize?: MainAxisSize;
      crossAxisAlignment?: CrossAxisAlignment;
      textDirection?: TextDirection;
      verticalDirection?: VerticalDirection;
      textBaseline?: TextBaseline;
      children?: Array<any>;
    } = {},
  ) {
    super();
    this['key'] = namedParameters.key;
    this['mainAxisAlignment'] = namedParameters.mainAxisAlignment;
    this['mainAxisSize'] = namedParameters.mainAxisSize;
    this['crossAxisAlignment'] = namedParameters.crossAxisAlignment;
    this['textDirection'] = namedParameters.textDirection;
    this['verticalDirection'] = namedParameters.verticalDirection;
    this['textBaseline'] = namedParameters.textBaseline;
    this['children'] = namedParameters.children;
    this.className = 'Row';
  }
}
export { Row };
class Column extends Flex {
  public constructor(
    namedParameters: {
      key?: Key;
      mainAxisAlignment?: MainAxisAlignment;
      mainAxisSize?: MainAxisSize;
      crossAxisAlignment?: CrossAxisAlignment;
      textDirection?: TextDirection;
      verticalDirection?: VerticalDirection;
      textBaseline?: TextBaseline;
      children?: Array<any>;
    } = {},
  ) {
    super();
    this['key'] = namedParameters.key;
    this['mainAxisAlignment'] = namedParameters.mainAxisAlignment;
    this['mainAxisSize'] = namedParameters.mainAxisSize;
    this['crossAxisAlignment'] = namedParameters.crossAxisAlignment;
    this['textDirection'] = namedParameters.textDirection;
    this['verticalDirection'] = namedParameters.verticalDirection;
    this['textBaseline'] = namedParameters.textBaseline;
    this['children'] = namedParameters.children;
    this.className = 'Column';
  }
}
export { Column };
class Flexible extends ParentDataWidget {
  flex: number;
  fit: FlexFit;
  public constructor(namedParameters: { key?: Key; flex?: number; fit?: FlexFit; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.flex = namedParameters.flex;
    this.fit = namedParameters.fit;
    this.child = namedParameters.child;
    this.className = 'Flexible';
  }
}
export { Flexible };
class Expanded extends Flexible {
  public constructor(namedParameters: { key?: Key; flex?: number; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['flex'] = namedParameters.flex;
    this['child'] = namedParameters.child;
    this.className = 'Expanded';
  }
}
export { Expanded };
class Wrap extends MultiChildRenderObjectWidget {
  direction: Axis;
  alignment: WrapAlignment;
  spacing: number;
  runAlignment: WrapAlignment;
  runSpacing: number;
  crossAxisAlignment: WrapCrossAlignment;
  textDirection: TextDirection;
  verticalDirection: VerticalDirection;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      direction?: Axis;
      alignment?: WrapAlignment;
      spacing?: number;
      runAlignment?: WrapAlignment;
      runSpacing?: number;
      crossAxisAlignment?: WrapCrossAlignment;
      textDirection?: TextDirection;
      verticalDirection?: VerticalDirection;
      clipBehavior?: Clip;
      children?: Array<any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.direction = namedParameters.direction;
    this.alignment = namedParameters.alignment;
    this.spacing = namedParameters.spacing;
    this.runAlignment = namedParameters.runAlignment;
    this.runSpacing = namedParameters.runSpacing;
    this.crossAxisAlignment = namedParameters.crossAxisAlignment;
    this.textDirection = namedParameters.textDirection;
    this.verticalDirection = namedParameters.verticalDirection;
    this.clipBehavior = namedParameters.clipBehavior;
    this.children = namedParameters.children;
    this.className = 'Wrap';
  }
}
export { Wrap };
class Flow extends MultiChildRenderObjectWidget {
  delegate: FlowDelegate;
  public constructor(namedParameters: { key?: Key; delegate?: FlowDelegate; children?: Array<any> } = {}) {
    super();
    this.key = namedParameters.key;
    this.delegate = namedParameters.delegate;
    this.children = namedParameters.children;
    this.className = 'Flow';
  }
  static unwrapped(namedParameters: { key?: Key; delegate?: FlowDelegate; children?: Array<any> } = {}) {
    var jsObj = new Flow();
    jsObj.key = namedParameters.key;
    jsObj.delegate = namedParameters.delegate;
    jsObj.children = namedParameters.children;
    jsObj['constructorName'] = 'unwrapped';
    return jsObj;
  }
}
export { Flow };
class RichText extends MultiChildRenderObjectWidget {
  text: InlineSpan;
  textAlign: TextAlign;
  textDirection: TextDirection;
  softWrap: boolean;
  overflow: TextOverflow;
  textScaleFactor: number;
  maxLines: number;
  locale: Locale;
  strutStyle: StrutStyle;
  textWidthBasis: TextWidthBasis;
  textHeightBehavior: TextHeightBehavior;
  applyTextScaleFactorToWidgetSpan: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      text?: InlineSpan;
      textAlign?: TextAlign;
      textDirection?: TextDirection;
      softWrap?: boolean;
      overflow?: TextOverflow;
      textScaleFactor?: number;
      maxLines?: number;
      locale?: Locale;
      strutStyle?: StrutStyle;
      textWidthBasis?: TextWidthBasis;
      textHeightBehavior?: TextHeightBehavior;
      applyTextScaleFactorToWidgetSpan?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.text = namedParameters.text;
    this.textAlign = namedParameters.textAlign;
    this.textDirection = namedParameters.textDirection;
    this.softWrap = namedParameters.softWrap;
    this.overflow = namedParameters.overflow;
    this.textScaleFactor = namedParameters.textScaleFactor;
    this.maxLines = namedParameters.maxLines;
    this.locale = namedParameters.locale;
    this.strutStyle = namedParameters.strutStyle;
    this.textWidthBasis = namedParameters.textWidthBasis;
    this.textHeightBehavior = namedParameters.textHeightBehavior;
    this.applyTextScaleFactorToWidgetSpan = namedParameters.applyTextScaleFactorToWidgetSpan;
    this.className = 'RichText';
  }
}
export { RichText };
class RawImage extends LeafRenderObjectWidget {
  image: Image;
  debugImageLabel: string;
  width: number;
  height: number;
  scale: number;
  color: Color;
  filterQuality: FilterQuality;
  colorBlendMode: BlendMode;
  fit: BoxFit;
  alignment: AlignmentGeometry;
  repeat: ImageRepeat;
  centerSlice: Rect;
  matchTextDirection: boolean;
  invertColors: boolean;
  isAntiAlias: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      image?: Image;
      debugImageLabel?: string;
      width?: number;
      height?: number;
      scale?: number;
      color?: Color;
      colorBlendMode?: BlendMode;
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      repeat?: ImageRepeat;
      centerSlice?: Rect;
      matchTextDirection?: boolean;
      invertColors?: boolean;
      filterQuality?: FilterQuality;
      isAntiAlias?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.image = namedParameters.image;
    this.debugImageLabel = namedParameters.debugImageLabel;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.scale = namedParameters.scale;
    this.color = namedParameters.color;
    this.colorBlendMode = namedParameters.colorBlendMode;
    this.fit = namedParameters.fit;
    this.alignment = namedParameters.alignment;
    this.repeat = namedParameters.repeat;
    this.centerSlice = namedParameters.centerSlice;
    this.matchTextDirection = namedParameters.matchTextDirection;
    this.invertColors = namedParameters.invertColors;
    this.filterQuality = namedParameters.filterQuality;
    this.isAntiAlias = namedParameters.isAntiAlias;
    this.className = 'RawImage';
  }
}
export { RawImage };
class DefaultAssetBundle extends InheritedWidget {
  bundle: AssetBundle;
  public constructor(namedParameters: { key?: Key; bundle?: AssetBundle; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.bundle = namedParameters.bundle;
    this.child = namedParameters.child;
    this.className = 'DefaultAssetBundle';
  }
}
export { DefaultAssetBundle };
class WidgetToRenderBoxAdapter extends LeafRenderObjectWidget {
  renderBox: RenderBox;
  onBuild: any;
  public constructor(namedParameters: { renderBox?: RenderBox; onBuild?: any } = {}) {
    super();
    this.renderBox = namedParameters.renderBox;
    this.onBuild = namedParameters.onBuild;
    this.className = 'WidgetToRenderBoxAdapter';
  }
}
export { WidgetToRenderBoxAdapter };
class Listener extends StatelessWidget$ {
  onPointerDown: any;
  onPointerMove: any;
  onPointerEnter: any;
  onPointerHover: any;
  onPointerExit: any;
  onPointerUp: any;
  onPointerCancel: any;
  onPointerSignal: any;
  behavior: HitTestBehavior;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      onPointerDown?: any;
      onPointerMove?: any;
      onPointerEnter?: any;
      onPointerExit?: any;
      onPointerHover?: any;
      onPointerUp?: any;
      onPointerCancel?: any;
      onPointerSignal?: any;
      behavior?: HitTestBehavior;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.onPointerDown = namedParameters.onPointerDown;
    this.onPointerMove = namedParameters.onPointerMove;
    this.onPointerEnter = namedParameters.onPointerEnter;
    this.onPointerExit = namedParameters.onPointerExit;
    this.onPointerHover = namedParameters.onPointerHover;
    this.onPointerUp = namedParameters.onPointerUp;
    this.onPointerCancel = namedParameters.onPointerCancel;
    this.onPointerSignal = namedParameters.onPointerSignal;
    this.behavior = namedParameters.behavior;
    this.child = namedParameters.child;
    this.className = 'Listener';
  }
}
export { Listener };
class _PointerListener extends SingleChildRenderObjectWidget {
  onPointerDown: any;
  onPointerMove: any;
  onPointerUp: any;
  onPointerCancel: any;
  onPointerSignal: any;
  behavior: HitTestBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      onPointerDown?: any;
      onPointerMove?: any;
      onPointerUp?: any;
      onPointerCancel?: any;
      onPointerSignal?: any;
      behavior?: HitTestBehavior;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.onPointerDown = namedParameters.onPointerDown;
    this.onPointerMove = namedParameters.onPointerMove;
    this.onPointerUp = namedParameters.onPointerUp;
    this.onPointerCancel = namedParameters.onPointerCancel;
    this.onPointerSignal = namedParameters.onPointerSignal;
    this.behavior = namedParameters.behavior;
    this.child = namedParameters.child;
    this.className = '_PointerListener';
  }
}
export { _PointerListener };
class MouseRegion extends StatefulWidget$ {
  onEnter: any;
  onHover: any;
  onExit: any;
  cursor: MouseCursor;
  opaque: boolean;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      onEnter?: any;
      onExit?: any;
      onHover?: any;
      cursor?: MouseCursor;
      opaque?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.onEnter = namedParameters.onEnter;
    this.onExit = namedParameters.onExit;
    this.onHover = namedParameters.onHover;
    this.cursor = namedParameters.cursor;
    this.opaque = namedParameters.opaque;
    this.child = namedParameters.child;
    this.className = 'MouseRegion';
  }
}
export { MouseRegion };
class _MouseRegionState extends State$ {}
export { _MouseRegionState };
class _RawMouseRegion extends SingleChildRenderObjectWidget {
  owner: _MouseRegionState;
  public constructor(owner?: _MouseRegionState) {
    super();
    this.owner = owner;
    this.className = '_RawMouseRegion';
  }
}
export { _RawMouseRegion };
class RepaintBoundary extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = 'RepaintBoundary';
  }
  static wrap(child?: MXWidget, childIndex?: number) {
    var jsObj = new RepaintBoundary();
    jsObj['child'] = child;
    jsObj['childIndex'] = childIndex;
    jsObj['constructorName'] = 'wrap';
    return jsObj;
  }
}
export { RepaintBoundary };
class IgnorePointer extends SingleChildRenderObjectWidget {
  ignoring: boolean;
  ignoringSemantics: boolean;
  public constructor(
    namedParameters: { key?: Key; ignoring?: boolean; ignoringSemantics?: boolean; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.ignoring = namedParameters.ignoring;
    this.ignoringSemantics = namedParameters.ignoringSemantics;
    this.child = namedParameters.child;
    this.className = 'IgnorePointer';
  }
}
export { IgnorePointer };
class AbsorbPointer extends SingleChildRenderObjectWidget {
  absorbing: boolean;
  ignoringSemantics: boolean;
  public constructor(
    namedParameters: { key?: Key; absorbing?: boolean; child?: MXWidget; ignoringSemantics?: boolean } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.absorbing = namedParameters.absorbing;
    this.child = namedParameters.child;
    this.ignoringSemantics = namedParameters.ignoringSemantics;
    this.className = 'AbsorbPointer';
  }
}
export { AbsorbPointer };
class MetaData extends SingleChildRenderObjectWidget {
  metaData: any;
  behavior: HitTestBehavior;
  public constructor(
    namedParameters: { key?: Key; metaData?: any; behavior?: HitTestBehavior; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.metaData = namedParameters.metaData;
    this.behavior = namedParameters.behavior;
    this.child = namedParameters.child;
    this.className = 'MetaData';
  }
}
export { MetaData };
class Semantics extends SingleChildRenderObjectWidget {
  properties: SemanticsProperties;
  container: boolean;
  explicitChildNodes: boolean;
  excludeSemantics: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      container?: boolean;
      explicitChildNodes?: boolean;
      excludeSemantics?: boolean;
      enabled?: boolean;
      checked?: boolean;
      selected?: boolean;
      toggled?: boolean;
      button?: boolean;
      link?: boolean;
      header?: boolean;
      textField?: boolean;
      readOnly?: boolean;
      focusable?: boolean;
      focused?: boolean;
      inMutuallyExclusiveGroup?: boolean;
      obscured?: boolean;
      multiline?: boolean;
      scopesRoute?: boolean;
      namesRoute?: boolean;
      hidden?: boolean;
      image?: boolean;
      liveRegion?: boolean;
      maxValueLength?: number;
      currentValueLength?: number;
      label?: string;
      value?: string;
      increasedValue?: string;
      decreasedValue?: string;
      hint?: string;
      onTapHint?: string;
      onLongPressHint?: string;
      textDirection?: TextDirection;
      sortKey?: SemanticsSortKey;
      onTap?: any;
      onLongPress?: any;
      onScrollLeft?: any;
      onScrollRight?: any;
      onScrollUp?: any;
      onScrollDown?: any;
      onIncrease?: any;
      onDecrease?: any;
      onCopy?: any;
      onCut?: any;
      onPaste?: any;
      onDismiss?: any;
      onMoveCursorForwardByCharacter?: any;
      onMoveCursorBackwardByCharacter?: any;
      onSetSelection?: any;
      onDidGainAccessibilityFocus?: any;
      onDidLoseAccessibilityFocus?: any;
      customSemanticsActions?: Map<any, any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.container = namedParameters.container;
    this.explicitChildNodes = namedParameters.explicitChildNodes;
    this.excludeSemantics = namedParameters.excludeSemantics;
    this['enabled'] = namedParameters.enabled;
    this['checked'] = namedParameters.checked;
    this['selected'] = namedParameters.selected;
    this['toggled'] = namedParameters.toggled;
    this['button'] = namedParameters.button;
    this['link'] = namedParameters.link;
    this['header'] = namedParameters.header;
    this['textField'] = namedParameters.textField;
    this['readOnly'] = namedParameters.readOnly;
    this['focusable'] = namedParameters.focusable;
    this['focused'] = namedParameters.focused;
    this['inMutuallyExclusiveGroup'] = namedParameters.inMutuallyExclusiveGroup;
    this['obscured'] = namedParameters.obscured;
    this['multiline'] = namedParameters.multiline;
    this['scopesRoute'] = namedParameters.scopesRoute;
    this['namesRoute'] = namedParameters.namesRoute;
    this['hidden'] = namedParameters.hidden;
    this['image'] = namedParameters.image;
    this['liveRegion'] = namedParameters.liveRegion;
    this['maxValueLength'] = namedParameters.maxValueLength;
    this['currentValueLength'] = namedParameters.currentValueLength;
    this['label'] = namedParameters.label;
    this['value'] = namedParameters.value;
    this['increasedValue'] = namedParameters.increasedValue;
    this['decreasedValue'] = namedParameters.decreasedValue;
    this['hint'] = namedParameters.hint;
    this['onTapHint'] = namedParameters.onTapHint;
    this['onLongPressHint'] = namedParameters.onLongPressHint;
    this['textDirection'] = namedParameters.textDirection;
    this['sortKey'] = namedParameters.sortKey;
    this['onTap'] = namedParameters.onTap;
    this['onLongPress'] = namedParameters.onLongPress;
    this['onScrollLeft'] = namedParameters.onScrollLeft;
    this['onScrollRight'] = namedParameters.onScrollRight;
    this['onScrollUp'] = namedParameters.onScrollUp;
    this['onScrollDown'] = namedParameters.onScrollDown;
    this['onIncrease'] = namedParameters.onIncrease;
    this['onDecrease'] = namedParameters.onDecrease;
    this['onCopy'] = namedParameters.onCopy;
    this['onCut'] = namedParameters.onCut;
    this['onPaste'] = namedParameters.onPaste;
    this['onDismiss'] = namedParameters.onDismiss;
    this['onMoveCursorForwardByCharacter'] = namedParameters.onMoveCursorForwardByCharacter;
    this['onMoveCursorBackwardByCharacter'] = namedParameters.onMoveCursorBackwardByCharacter;
    this['onSetSelection'] = namedParameters.onSetSelection;
    this['onDidGainAccessibilityFocus'] = namedParameters.onDidGainAccessibilityFocus;
    this['onDidLoseAccessibilityFocus'] = namedParameters.onDidLoseAccessibilityFocus;
    this['customSemanticsActions'] = namedParameters.customSemanticsActions;
    this.className = 'Semantics';
  }
  static fromProperties(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      container?: boolean;
      explicitChildNodes?: boolean;
      excludeSemantics?: boolean;
      properties?: SemanticsProperties;
    } = {},
  ) {
    var jsObj = new Semantics();
    jsObj.key = namedParameters.key;
    jsObj.child = namedParameters.child;
    jsObj.container = namedParameters.container;
    jsObj.explicitChildNodes = namedParameters.explicitChildNodes;
    jsObj.excludeSemantics = namedParameters.excludeSemantics;
    jsObj.properties = namedParameters.properties;
    jsObj['constructorName'] = 'fromProperties';
    return jsObj;
  }
}
export { Semantics };
class MergeSemantics extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = 'MergeSemantics';
  }
}
export { MergeSemantics };
class BlockSemantics extends SingleChildRenderObjectWidget {
  blocking: boolean;
  public constructor(namedParameters: { key?: Key; blocking?: boolean; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.blocking = namedParameters.blocking;
    this.child = namedParameters.child;
    this.className = 'BlockSemantics';
  }
}
export { BlockSemantics };
class ExcludeSemantics extends SingleChildRenderObjectWidget {
  excluding: boolean;
  public constructor(namedParameters: { key?: Key; excluding?: boolean; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.excluding = namedParameters.excluding;
    this.child = namedParameters.child;
    this.className = 'ExcludeSemantics';
  }
}
export { ExcludeSemantics };
class IndexedSemantics extends SingleChildRenderObjectWidget {
  index: number;
  public constructor(namedParameters: { key?: Key; index?: number; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.index = namedParameters.index;
    this.child = namedParameters.child;
    this.className = 'IndexedSemantics';
  }
}
export { IndexedSemantics };
class KeyedSubtree extends StatelessWidget$ {
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = 'KeyedSubtree';
  }
  static wrap(child?: MXWidget, childIndex?: number) {
    var jsObj = new KeyedSubtree();
    jsObj.child = child;
    jsObj['childIndex'] = childIndex;
    jsObj['constructorName'] = 'wrap';
    return jsObj;
  }
}
export { KeyedSubtree };
class Builder extends StatelessWidget$ {
  builder: any;
  public constructor(namedParameters: { key?: Key; builder?: any } = {}) {
    super();
    this.key = namedParameters.key;
    this.builder = namedParameters.builder;
    this.className = 'Builder';
  }
  // MX modified begin
  public preBuild(buildContext: any) {
    if (this.builder) {
      this['child'] = this.builder(buildContext);
      delete this.builder;
    }
  }
  // MX modified end
}
export { Builder };
class StatefulBuilder extends StatefulWidget$ {
  builder: any;
  public constructor(namedParameters: { key?: Key; builder?: any } = {}) {
    super();
    this.key = namedParameters.key;
    this.builder = namedParameters.builder;
    this.className = 'StatefulBuilder';
  }
}
export { StatefulBuilder };
class _StatefulBuilderState extends State$ {}
export { _StatefulBuilderState };
class ColoredBox extends SingleChildRenderObjectWidget {
  color: Color;
  public constructor(namedParameters: { color?: Color; child?: MXWidget; key?: Key } = {}) {
    super();
    this.color = namedParameters.color;
    this.child = namedParameters.child;
    this.key = namedParameters.key;
    this.className = 'ColoredBox';
  }
}
export { ColoredBox };
class _RenderColoredBox extends RenderProxyBoxWithHitTestBehavior {
  color: Color;
  public constructor(namedParameters: { color?: Color } = {}) {
    super();
    this.color = namedParameters.color;
    this.className = '_RenderColoredBox';
  }
}
export { _RenderColoredBox };
