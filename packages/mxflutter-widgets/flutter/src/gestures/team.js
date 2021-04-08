"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestureArenaTeam = exports._CombiningGestureArenaMember = exports._CombiningGestureArenaEntry = void 0;
const arena_1 = require("./arena");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _CombiningGestureArenaEntry extends mxflutter_base_1.MXDartClass {
    constructor(_combiner, _member) {
        super();
        this.combiner = _combiner;
        this.member = _member;
        this.className = '_CombiningGestureArenaEntry';
    }
}
exports._CombiningGestureArenaEntry = _CombiningGestureArenaEntry;
class _CombiningGestureArenaMember extends arena_1.GestureArenaMember {
    constructor(_owner, _pointer) {
        super();
        this.owner = _owner;
        this.pointer = _pointer;
        this.className = '_CombiningGestureArenaMember';
    }
}
exports._CombiningGestureArenaMember = _CombiningGestureArenaMember;
class GestureArenaTeam extends mxflutter_base_1.MXDartClass {
}
exports.GestureArenaTeam = GestureArenaTeam;
