//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PipelineOwner, PaintingContext } from './object';
import { Offset, Size } from '../../../mx-dart-sdk';
import { Listenable } from '../foundation/change-notifier';
import { ContainerBoxParentData, BoxConstraints, RenderBox, BoxHitTestResult } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class MultiChildLayoutParentData extends ContainerBoxParentData {
  id: any;
}
export { MultiChildLayoutParentData };
abstract class MultiChildLayoutDelegate extends MXDartClass {
  relayout: Listenable;
  idToChild: Map<any, any>;
  debugChildrenNeedingLayout: Set<any>;
}
export { MultiChildLayoutDelegate };
class RenderCustomMultiChildLayoutBox extends RenderBox {
  delegate: MultiChildLayoutDelegate;
  public constructor(namedParameters: { children?: Array<any>; delegate?: MultiChildLayoutDelegate } = {}) {
    super();
    this['children'] = namedParameters.children;
    this.delegate = namedParameters.delegate;
    this.className = 'RenderCustomMultiChildLayoutBox';
  }
}
export { RenderCustomMultiChildLayoutBox };
