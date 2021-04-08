// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { PointerSignalResolver } from './pointer-signal-resolver';
import { GestureArenaManager } from './arena';
import { PointerRouter } from './pointer-router';
import { BindingBase } from '../foundation/binding';
import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _Resampler extends MXDartClass {
  resamplers: Map<any, any>;
  frameCallbackScheduled: boolean;
  frameTime: Duration;
  lastSampleTime: Duration;
  lastEventTime: Duration;
  handlePointerEvent: any;
  handleSampleTimeChanged: any;
  public constructor(_handlePointerEvent?: any, _handleSampleTimeChanged?: any) {
    super();
    this.handlePointerEvent = _handlePointerEvent;
    this.handleSampleTimeChanged = _handleSampleTimeChanged;
    this.className = '_Resampler';
  }
}
export { _Resampler };
abstract class GestureBinding extends BindingBase {
  pendingPointerEvents: any;
  pointerRouter: PointerRouter;
  gestureArena: GestureArenaManager;
  pointerSignalResolver: PointerSignalResolver;
  hitTests: Map<any, any>;
  resampler: _Resampler;
  resamplingEnabled: boolean;
  samplingOffset: Duration;
}
export { GestureBinding };
