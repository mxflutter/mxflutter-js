"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MXJSLog = void 0;
const flutter_environment_1 = require("./platform/flutter-environment");
// 日志等级
const LOG_LEVEL = {
    DEBUG: 0,
    INFO: 1,
    ERROR: 2,
};
// 日志模块
const MXJSLog = {
    logLev: LOG_LEVEL.DEBUG,
    setLogLev: (lev) => {
        MXJSLog.logLev = lev;
    },
    debug: (msg) => {
        if (MXJSLog.logLev <= LOG_LEVEL.DEBUG) {
            globalThis.MXJSAPI.nativePrint(`MXJSFlutter:[JS]:${msg}`);
        }
    },
    log: (msg) => {
        if (MXJSLog.logLev <= LOG_LEVEL.INFO) {
            globalThis.MXJSAPI.nativePrint(`MXJSFlutter:[JS]:${msg}`);
        }
    },
    error: (msg) => {
        if (MXJSLog.logLev <= LOG_LEVEL.ERROR) {
            globalThis.MXJSAPI.nativePrint(`MXJSFlutter:[JS]-[Error]:${msg}`);
        }
    },
};
exports.MXJSLog = MXJSLog;
if (flutter_environment_1.MXKReleaseMode) {
    MXJSLog.logLev = LOG_LEVEL.INFO;
}
MXJSLog.log(`MXJSLog: MXJSLog.logLev : ${MXJSLog.logLev} MXKReleaseMode:${flutter_environment_1.MXKReleaseMode} MXKDebugMode:${flutter_environment_1.MXKDebugMode} `);
