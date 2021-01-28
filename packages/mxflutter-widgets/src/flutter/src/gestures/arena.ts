//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum GestureDisposition {
  accepted = '{ "_name": "GestureDisposition.accepted", "index": 0 }',
  rejected = '{ "_name": "GestureDisposition.rejected", "index": 1 }',
}

export { GestureDisposition };
abstract class GestureArenaMember extends MXDartClass {}
export { GestureArenaMember };
class GestureArenaEntry extends MXDartClass {
  arena: GestureArenaManager;
  pointer: number;
  member: GestureArenaMember;
}
export { GestureArenaEntry };
class _GestureArena extends MXDartClass {
  members: Array<any>;
  isOpen: boolean;
  isHeld: boolean;
  hasPendingSweep: boolean;
  eagerWinner: GestureArenaMember;
}
export { _GestureArena };
class GestureArenaManager extends MXDartClass {
  arenas: Map<any, any>;
}
export { GestureArenaManager };
