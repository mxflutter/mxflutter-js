//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Offset } from '../../../mx-dart-sdk';
import { PaintingContext, PipelineOwner } from './object';
import { Matrix4 } from '../../../vector-math-64';
import { BoxConstraints, ContainerBoxParentData, RenderBox, BoxHitTestResult } from './box';
import { Listenable } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class FlowPaintingContext extends MXDartClass {}
export { FlowPaintingContext };
abstract class FlowDelegate extends MXDartClass {
  repaint: Listenable;
}
export { FlowDelegate };
class FlowParentData extends ContainerBoxParentData {
  transform: Matrix4;
}
export { FlowParentData };
class RenderFlow extends RenderBox {
  delegate: FlowDelegate;
  randomAccessChildren: Array<any>;
  lastPaintOrder: Array<any>;
  paintingContext: PaintingContext;
  paintingOffset: Offset;
  public constructor(namedParameters: { children?: Array<any>; delegate?: FlowDelegate } = {}) {
    super();
    this['children'] = namedParameters.children;
    this.delegate = namedParameters.delegate;
    this.className = 'RenderFlow';
  }
}
export { RenderFlow };
