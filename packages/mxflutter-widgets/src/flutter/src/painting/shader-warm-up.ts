//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Size, Canvas } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class ShaderWarmUp extends MXDartClass {}
export { ShaderWarmUp };
class DefaultShaderWarmUp extends ShaderWarmUp {
  drawCallSpacing: number;
  canvasSize: Size;
  public constructor(namedParameters: { drawCallSpacing?: number; canvasSize?: Size } = {}) {
    super();
    this.drawCallSpacing = namedParameters.drawCallSpacing;
    this.canvasSize = namedParameters.canvasSize;
    this.className = 'DefaultShaderWarmUp';
  }
}
export { DefaultShaderWarmUp };
