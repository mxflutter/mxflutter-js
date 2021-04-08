"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MXKDebugMode = exports.MXKProfileMode = exports.MXKReleaseMode = void 0;
const MXKReleaseMode = (_a = globalThis.MXJSAPI.mx_flutterAppEnvironmentInfo) === null || _a === void 0 ? void 0 : _a.kReleaseMode;
exports.MXKReleaseMode = MXKReleaseMode;
const MXKProfileMode = (_b = globalThis.MXJSAPI.mx_flutterAppEnvironmentInfo) === null || _b === void 0 ? void 0 : _b.kProfileMode;
exports.MXKProfileMode = MXKProfileMode;
const MXKDebugMode = (_c = globalThis.MXJSAPI.mx_flutterAppEnvironmentInfo) === null || _c === void 0 ? void 0 : _c.kDebugMode;
exports.MXKDebugMode = MXKDebugMode;
