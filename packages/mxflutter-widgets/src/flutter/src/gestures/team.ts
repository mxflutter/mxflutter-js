// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { GestureArenaMember, GestureArenaEntry } from './arena';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _CombiningGestureArenaEntry extends MXDartClass {
  combiner: _CombiningGestureArenaMember;
  member: GestureArenaMember;
  public constructor(_combiner?: _CombiningGestureArenaMember, _member?: GestureArenaMember) {
    super();
    this.combiner = _combiner;
    this.member = _member;
    this.className = '_CombiningGestureArenaEntry';
  }
}
export { _CombiningGestureArenaEntry };
class _CombiningGestureArenaMember extends GestureArenaMember {
  owner: GestureArenaTeam;
  members: Array<any>;
  pointer: number;
  resolved: boolean;
  winner: GestureArenaMember;
  entry: GestureArenaEntry;
  public constructor(_owner?: GestureArenaTeam, _pointer?: number) {
    super();
    this.owner = _owner;
    this.pointer = _pointer;
    this.className = '_CombiningGestureArenaMember';
  }
}
export { _CombiningGestureArenaMember };
class GestureArenaTeam extends MXDartClass {
  combiners: Map<any, any>;
  captain: GestureArenaMember;
}
export { GestureArenaTeam };
