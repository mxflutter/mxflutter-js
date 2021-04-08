"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickerCanceled = exports.TickerFuture = exports.Ticker = exports.TickerProvider = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
// MX modified
class TickerProvider extends mxflutter_base_1.MXDartClass {
    constructor() {
        super();
        this.className = 'TickerProvider';
    }
}
exports.TickerProvider = TickerProvider;
class Ticker extends mxflutter_base_1.MXDartClass {
    constructor(_onTick, namedParameters = {}) {
        super();
        this.onTick = _onTick;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'Ticker';
    }
}
exports.Ticker = Ticker;
class TickerFuture extends mxflutter_base_1.MXDartClass {
    static complete() {
        var jsObj = new TickerFuture();
        jsObj['constructorName'] = 'complete';
        return jsObj;
    }
}
exports.TickerFuture = TickerFuture;
class TickerCanceled extends mxflutter_base_1.MXDartClass {
    constructor(ticker) {
        super();
        this.ticker = ticker;
        this.className = 'TickerCanceled';
    }
}
exports.TickerCanceled = TickerCanceled;
