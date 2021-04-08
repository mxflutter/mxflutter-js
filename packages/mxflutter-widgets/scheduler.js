"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickerCanceled = exports.TickerFuture = exports.Ticker = exports.TickerProvider = exports.Priority = exports.AppLifecycleState = exports.FrameTiming = exports.SchedulerBinding = exports.SchedulerPhase = void 0;
const ticker_1 = require("./flutter/src/scheduler/ticker");
Object.defineProperty(exports, "TickerProvider", { enumerable: true, get: function () { return ticker_1.TickerProvider; } });
Object.defineProperty(exports, "Ticker", { enumerable: true, get: function () { return ticker_1.Ticker; } });
Object.defineProperty(exports, "TickerFuture", { enumerable: true, get: function () { return ticker_1.TickerFuture; } });
Object.defineProperty(exports, "TickerCanceled", { enumerable: true, get: function () { return ticker_1.TickerCanceled; } });
const priority_1 = require("./flutter/src/scheduler/priority");
Object.defineProperty(exports, "Priority", { enumerable: true, get: function () { return priority_1.Priority; } });
const mx_dart_sdk_1 = require("./mx-dart-sdk");
Object.defineProperty(exports, "FrameTiming", { enumerable: true, get: function () { return mx_dart_sdk_1.FrameTiming; } });
Object.defineProperty(exports, "AppLifecycleState", { enumerable: true, get: function () { return mx_dart_sdk_1.AppLifecycleState; } });
const binding_1 = require("./flutter/src/scheduler/binding");
Object.defineProperty(exports, "SchedulerPhase", { enumerable: true, get: function () { return binding_1.SchedulerPhase; } });
Object.defineProperty(exports, "SchedulerBinding", { enumerable: true, get: function () { return binding_1.SchedulerBinding; } });
