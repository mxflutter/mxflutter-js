//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Offset } from '../../../mx-dart-sdk';
import { Matrix4 } from '../../../vector-math-64';
import { RenderBox, BoxConstraints } from './box';
import { SliverLogicalParentData, RenderSliver, SliverConstraints, SliverHitTestResult } from './sliver';
import { RenderObject, PipelineOwner, PaintingContext } from './object';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class RenderSliverBoxChildManager extends MXDartClass {}
export { RenderSliverBoxChildManager };
abstract class KeepAliveParentDataMixin extends MXDartClass {
  keepAlive: boolean;
}
export { KeepAliveParentDataMixin };
abstract class RenderSliverWithKeepAliveMixin extends MXDartClass {}
export { RenderSliverWithKeepAliveMixin };
class SliverMultiBoxAdaptorParentData extends SliverLogicalParentData {
  index: number;
  keptAlive: boolean;
}
export { SliverMultiBoxAdaptorParentData };
abstract class RenderSliverMultiBoxAdaptor extends RenderSliver {
  childManager: RenderSliverBoxChildManager;
  keepAliveBucket: Map<any, any>;
  debugDanglingKeepAlives: Array<any>;
  debugChildIntegrityEnabled: boolean;
}
export { RenderSliverMultiBoxAdaptor };
