//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RenderBox } from './box';
import { BindingBase } from '../foundation/binding';
import { HitTestResult } from '../gestures/hit-test';
import { Duration } from '../../../mx-dart-sdk';
import { SemanticsAction, Offset } from '../../../mx-dart-sdk';
import { RenderView } from './view';
import { PipelineOwner, SemanticsHandle, RenderObject } from './object';
import { MouseTracker } from './mouse-tracking';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
const performReassemble = Symbol('performReassemble');
abstract class RendererBinding extends MXDartClass {
  mouseTracker: MouseTracker;
  pipelineOwner: PipelineOwner;
  semanticsHandle: SemanticsHandle;
  firstFrameDeferredCount: number;
  firstFrameSent: boolean;
}
export { RendererBinding };
class RenderingFlutterBinding extends BindingBase {
  public constructor(namedParameters: { root?: RenderBox } = {}) {
    super();
    this['root'] = namedParameters.root;
    this.className = 'RenderingFlutterBinding';
  }
}
export { RenderingFlutterBinding };
