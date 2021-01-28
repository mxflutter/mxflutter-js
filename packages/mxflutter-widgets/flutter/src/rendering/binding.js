//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { BindingBase } from '../foundation/binding';
import { MXDartClass } from '@mxflutter/mxflutter-base';
const performReassemble = Symbol('performReassemble');
class RendererBinding extends MXDartClass {
}
export { RendererBinding };
class RenderingFlutterBinding extends BindingBase {
    constructor(namedParameters = {}) {
        super();
        this['root'] = namedParameters.root;
        this.className = 'RenderingFlutterBinding';
    }
}
export { RenderingFlutterBinding };
