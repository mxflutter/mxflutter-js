// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Offset } from '../../../mx-dart-sdk';
import { Matrix4 } from '../../../vector-math-64';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class HitTestable extends MXDartClass {}
export { HitTestable };
abstract class HitTestDispatcher extends MXDartClass {}
export { HitTestDispatcher };
abstract class HitTestTarget extends MXDartClass {}
export { HitTestTarget };
class HitTestEntry extends MXDartClass {
  target: HitTestTarget;
  transform: Matrix4;
  public constructor(target?: HitTestTarget) {
    super();
    this.target = target;
    this.className = 'HitTestEntry';
  }
}
export { HitTestEntry };
abstract class _TransformPart extends MXDartClass {}
export { _TransformPart };
class _MatrixTransformPart extends _TransformPart {
  matrix: Matrix4;
  public constructor(matrix?: Matrix4) {
    super();
    this.matrix = matrix;
    this.className = '_MatrixTransformPart';
  }
}
export { _MatrixTransformPart };
class _OffsetTransformPart extends _TransformPart {
  offset: Offset;
  public constructor(offset?: Offset) {
    super();
    this.offset = offset;
    this.className = '_OffsetTransformPart';
  }
}
export { _OffsetTransformPart };
class HitTestResult extends MXDartClass {
  path: Array<any>;
  transforms: Array<any>;
  localTransforms: Array<any>;
  static wrap(result?: HitTestResult) {
    var jsObj = new HitTestResult();
    jsObj['result'] = result;
    jsObj['constructorName'] = 'wrap';
    return jsObj;
  }
}
export { HitTestResult };
