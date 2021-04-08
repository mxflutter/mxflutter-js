// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { PointerEvent } from './events';
import { Duration } from '../../../mx-dart-sdk';
import { GestureArenaTeam } from './team';
import { PointerDeviceKind, Offset } from '../../../mx-dart-sdk';
import { GestureArenaMember } from './arena';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum DragStartBehavior {
  down = '{ "_name": "DragStartBehavior.down", "index": 0 }',
  start = '{ "_name": "DragStartBehavior.start", "index": 1 }',
};

export { DragStartBehavior };
abstract class GestureRecognizer extends GestureArenaMember {
  debugOwner: any;
  kindFilter: PointerDeviceKind;
  pointerToKind: Map<any, any>;
}
export { GestureRecognizer };
abstract class OneSequenceGestureRecognizer extends GestureRecognizer {
  entries: Map<any, any>;
  trackedPointers: Set<any>;
  team: GestureArenaTeam;
}
export { OneSequenceGestureRecognizer };
enum GestureRecognizerState {
  ready = '{ "_name": "GestureRecognizerState.ready", "index": 0 }',
  possible = '{ "_name": "GestureRecognizerState.possible", "index": 1 }',
  defunct = '{ "_name": "GestureRecognizerState.defunct", "index": 2 }',
};

export { GestureRecognizerState };
abstract class PrimaryPointerGestureRecognizer extends OneSequenceGestureRecognizer {
  deadline: Duration;
  preAcceptSlopTolerance: number;
  postAcceptSlopTolerance: number;
  state: GestureRecognizerState;
  primaryPointer: number;
  initialPosition: OffsetPair;
  gestureAccepted: boolean;
  timer: any;
}
export { PrimaryPointerGestureRecognizer };
class OffsetPair extends MXDartClass {
  local: Offset;
  global: Offset;
  public constructor(namedParameters: {local?: Offset, global?: Offset} = {}) {
    super();
    this.local = namedParameters.local;
    this.global = namedParameters.global;
    this.className = 'OffsetPair';
  }
  static get zero() {
    var jsObj = new OffsetPair();
    jsObj['className'] = 'OffsetPair';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static fromEventPosition(event?: PointerEvent) {
    var jsObj = new OffsetPair();
    jsObj['event'] = event;
    jsObj['constructorName'] = 'fromEventPosition';
    return jsObj;
  }
  static fromEventDelta(event?: PointerEvent) {
    var jsObj = new OffsetPair();
    jsObj['event'] = event;
    jsObj['constructorName'] = 'fromEventDelta';
    return jsObj;
  }
}
export { OffsetPair };
