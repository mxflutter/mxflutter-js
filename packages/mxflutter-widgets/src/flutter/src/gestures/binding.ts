//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { HitTestResult, HitTestEntry } from './hit-test';
import { PointerEvent } from './events';
import { PointerDataPacket, Offset } from '../../../mx-dart-sdk';
import { PointerSignalResolver } from './pointer-signal-resolver';
import { GestureArenaManager } from './arena';
import { PointerRouter } from './pointer-router';
import { BindingBase } from '../foundation/binding';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class GestureBinding extends BindingBase {
  pendingPointerEvents: any;
  pointerRouter: PointerRouter;
  gestureArena: GestureArenaManager;
  pointerSignalResolver: PointerSignalResolver;
  hitTests: Map<any, any>;
}
export { GestureBinding };
