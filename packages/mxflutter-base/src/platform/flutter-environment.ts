//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

const MXKReleaseMode = globalThis.MXJSAPI.mx_flutterAppEnvironmentInfo?.kReleaseMode;
const MXKProfileMode = globalThis.MXJSAPI.mx_flutterAppEnvironmentInfo?.kProfileMode;
const MXKDebugMode = globalThis.MXJSAPI.mx_flutterAppEnvironmentInfo?.kDebugMode;

export { MXKReleaseMode, MXKProfileMode, MXKDebugMode };
