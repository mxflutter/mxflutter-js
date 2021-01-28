//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PointerEvent } from './events';
import { OneSequenceGestureRecognizer, OffsetPair } from './recognizer';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _ForceState {
  ready = '{ "_name": "_ForceState.ready", "index": 0 }',
  possible = '{ "_name": "_ForceState.possible", "index": 1 }',
  accepted = '{ "_name": "_ForceState.accepted", "index": 2 }',
  started = '{ "_name": "_ForceState.started", "index": 3 }',
  peaked = '{ "_name": "_ForceState.peaked", "index": 4 }',
}

export { _ForceState };
class ForcePressDetails extends MXDartClass {
  globalPosition: Offset;
  localPosition: Offset;
  pressure: number;
  public constructor(namedParameters: { globalPosition?: Offset; localPosition?: Offset; pressure?: number } = {}) {
    super();
    this.globalPosition = namedParameters.globalPosition;
    this.localPosition = namedParameters.localPosition;
    this.pressure = namedParameters.pressure;
    this.className = 'ForcePressDetails';
  }
}
export { ForcePressDetails };
class ForcePressGestureRecognizer extends OneSequenceGestureRecognizer {
  onStart: any;
  onUpdate: any;
  onPeak: any;
  onEnd: any;
  startPressure: number;
  peakPressure: number;
  interpolation: any;
  lastPosition: OffsetPair;
  lastPressure: number;
  state: _ForceState;
  public constructor(
    namedParameters: {
      startPressure?: number;
      peakPressure?: number;
      interpolation?: any;
      debugOwner?: any;
      kind?: PointerDeviceKind;
    } = {},
  ) {
    super();
    this.startPressure = namedParameters.startPressure;
    this.peakPressure = namedParameters.peakPressure;
    this.interpolation = namedParameters.interpolation;
    this.debugOwner = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'ForcePressGestureRecognizer';
  }
}
export { ForcePressGestureRecognizer };
