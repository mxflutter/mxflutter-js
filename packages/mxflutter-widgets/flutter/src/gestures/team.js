//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { GestureArenaMember } from './arena';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _CombiningGestureArenaEntry extends MXDartClass {
    constructor(_combiner, _member) {
        super();
        this.combiner = _combiner;
        this.member = _member;
        this.className = '_CombiningGestureArenaEntry';
    }
}
export { _CombiningGestureArenaEntry };
class _CombiningGestureArenaMember extends GestureArenaMember {
    constructor(_owner, _pointer) {
        super();
        this.owner = _owner;
        this.pointer = _pointer;
        this.className = '_CombiningGestureArenaMember';
    }
}
export { _CombiningGestureArenaMember };
class GestureArenaTeam extends MXDartClass {
}
export { GestureArenaTeam };
