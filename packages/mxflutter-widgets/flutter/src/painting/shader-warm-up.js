//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ShaderWarmUp extends MXDartClass {
}
export { ShaderWarmUp };
class DefaultShaderWarmUp extends ShaderWarmUp {
    constructor(namedParameters = {}) {
        super();
        this.drawCallSpacing = namedParameters.drawCallSpacing;
        this.canvasSize = namedParameters.canvasSize;
        this.className = 'DefaultShaderWarmUp';
    }
}
export { DefaultShaderWarmUp };
