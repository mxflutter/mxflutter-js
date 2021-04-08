// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Listenable } from '../foundation/change-notifier';
import { Axis } from '../painting/basic-types';
import { Alignment, AlignmentGeometry } from '../painting/alignment';
import { TextDirection, Rect, Clip, Size, TextBaseline } from '../../../mx-dart-sdk';
import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class RenderShiftedBox extends RenderBox {}
export { RenderShiftedBox };
class RenderPadding extends RenderShiftedBox {
  resolvedPadding: EdgeInsets;
  padding: EdgeInsetsGeometry;
  textDirection: TextDirection;
  public constructor(namedParameters: {padding?: EdgeInsetsGeometry, textDirection?: TextDirection, child?: RenderBox} = {}) {
    super();
    this.padding = namedParameters.padding;
    this.textDirection = namedParameters.textDirection;
    this['child'] = namedParameters.child;
    this.className = 'RenderPadding';
  }
}
export { RenderPadding };
abstract class RenderAligningShiftedBox extends RenderShiftedBox {
  resolvedAlignment: Alignment;
  alignment: AlignmentGeometry;
  textDirection: TextDirection;
}
export { RenderAligningShiftedBox };
class RenderPositionedBox extends RenderAligningShiftedBox {
  widthFactor: number;
  heightFactor: number;
  public constructor(namedParameters: {child?: RenderBox, widthFactor?: number, heightFactor?: number, alignment?: AlignmentGeometry, textDirection?: TextDirection} = {}) {
    super();
    this['child'] = namedParameters.child;
    this.widthFactor = namedParameters.widthFactor;
    this.heightFactor = namedParameters.heightFactor;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this.className = 'RenderPositionedBox';
  }
}
export { RenderPositionedBox };
class RenderConstrainedOverflowBox extends RenderAligningShiftedBox {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  public constructor(namedParameters: {child?: RenderBox, minWidth?: number, maxWidth?: number, minHeight?: number, maxHeight?: number, alignment?: AlignmentGeometry, textDirection?: TextDirection} = {}) {
    super();
    this['child'] = namedParameters.child;
    this.minWidth = namedParameters.minWidth;
    this.maxWidth = namedParameters.maxWidth;
    this.minHeight = namedParameters.minHeight;
    this.maxHeight = namedParameters.maxHeight;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this.className = 'RenderConstrainedOverflowBox';
  }
}
export { RenderConstrainedOverflowBox };
class RenderUnconstrainedBox extends RenderAligningShiftedBox {
  constrainedAxis: Axis;
  overflowContainerRect: Rect;
  overflowChildRect: Rect;
  isOverflowing: boolean;
  clipBehavior: Clip;
  public constructor(namedParameters: {alignment?: AlignmentGeometry, textDirection?: TextDirection, constrainedAxis?: Axis, child?: RenderBox, clipBehavior?: Clip} = {}) {
    super();
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this.constrainedAxis = namedParameters.constrainedAxis;
    this['child'] = namedParameters.child;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'RenderUnconstrainedBox';
  }
}
export { RenderUnconstrainedBox };
class RenderSizedOverflowBox extends RenderAligningShiftedBox {
  requestedSize: Size;
  public constructor(namedParameters: {child?: RenderBox, requestedSize?: Size, alignment?: AlignmentGeometry, textDirection?: TextDirection} = {}) {
    super();
    this['child'] = namedParameters.child;
    this.requestedSize = namedParameters.requestedSize;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this.className = 'RenderSizedOverflowBox';
  }
}
export { RenderSizedOverflowBox };
class RenderFractionallySizedOverflowBox extends RenderAligningShiftedBox {
  widthFactor: number;
  heightFactor: number;
  public constructor(namedParameters: {child?: RenderBox, widthFactor?: number, heightFactor?: number, alignment?: AlignmentGeometry, textDirection?: TextDirection} = {}) {
    super();
    this['child'] = namedParameters.child;
    this.widthFactor = namedParameters.widthFactor;
    this.heightFactor = namedParameters.heightFactor;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this.className = 'RenderFractionallySizedOverflowBox';
  }
}
export { RenderFractionallySizedOverflowBox };
abstract class SingleChildLayoutDelegate extends MXDartClass {
  relayout: Listenable;
}
export { SingleChildLayoutDelegate };
class RenderCustomSingleChildLayoutBox extends RenderShiftedBox {
  delegate: SingleChildLayoutDelegate;
  public constructor(namedParameters: {child?: RenderBox, delegate?: SingleChildLayoutDelegate} = {}) {
    super();
    this['child'] = namedParameters.child;
    this.delegate = namedParameters.delegate;
    this.className = 'RenderCustomSingleChildLayoutBox';
  }
}
export { RenderCustomSingleChildLayoutBox };
class RenderBaseline extends RenderShiftedBox {
  baseline: number;
  baselineType: TextBaseline;
  public constructor(namedParameters: {child?: RenderBox, baseline?: number, baselineType?: TextBaseline} = {}) {
    super();
    this['child'] = namedParameters.child;
    this.baseline = namedParameters.baseline;
    this.baselineType = namedParameters.baselineType;
    this.className = 'RenderBaseline';
  }
}
export { RenderBaseline };
