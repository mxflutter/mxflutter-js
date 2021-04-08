"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DefaultBinaryMessenger = exports.ServicesBinding = void 0;
const binary_messenger_1 = require("./binary-messenger");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ServicesBinding extends mxflutter_base_1.MXDartClass {
}
exports.ServicesBinding = ServicesBinding;
class _DefaultBinaryMessenger extends binary_messenger_1.BinaryMessenger {
}
exports._DefaultBinaryMessenger = _DefaultBinaryMessenger;
