"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemSound = exports.SystemSoundType = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var SystemSoundType;
(function (SystemSoundType) {
    SystemSoundType["click"] = "{ \"_name\": \"SystemSoundType.click\", \"index\": 0 }";
    SystemSoundType["alert"] = "{ \"_name\": \"SystemSoundType.alert\", \"index\": 1 }";
})(SystemSoundType || (SystemSoundType = {}));
exports.SystemSoundType = SystemSoundType;
;
class SystemSound extends mxflutter_base_1.MXDartClass {
}
exports.SystemSound = SystemSound;
