"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestureArenaManager = exports._GestureArena = exports.GestureArenaEntry = exports.GestureArenaMember = exports.GestureDisposition = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var GestureDisposition;
(function (GestureDisposition) {
    GestureDisposition["accepted"] = "{ \"_name\": \"GestureDisposition.accepted\", \"index\": 0 }";
    GestureDisposition["rejected"] = "{ \"_name\": \"GestureDisposition.rejected\", \"index\": 1 }";
})(GestureDisposition || (GestureDisposition = {}));
exports.GestureDisposition = GestureDisposition;
;
class GestureArenaMember extends mxflutter_base_1.MXDartClass {
}
exports.GestureArenaMember = GestureArenaMember;
class GestureArenaEntry extends mxflutter_base_1.MXDartClass {
}
exports.GestureArenaEntry = GestureArenaEntry;
class _GestureArena extends mxflutter_base_1.MXDartClass {
}
exports._GestureArena = _GestureArena;
class GestureArenaManager extends mxflutter_base_1.MXDartClass {
}
exports.GestureArenaManager = GestureArenaManager;
