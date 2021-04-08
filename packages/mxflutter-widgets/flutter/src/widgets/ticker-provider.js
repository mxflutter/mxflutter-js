"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._WidgetTicker = exports.TickerProviderStateMixin = exports.SingleTickerProviderStateMixin = exports._EffectiveTickerMode = exports.TickerMode = void 0;
const ticker_1 = require("../scheduler/ticker");
const framework_1 = require("./framework");
class TickerMode extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.enabled = namedParameters.enabled;
        this.child = namedParameters.child;
        this.className = 'TickerMode';
    }
}
exports.TickerMode = TickerMode;
class _EffectiveTickerMode extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.enabled = namedParameters.enabled;
        this.child = namedParameters.child;
        this.className = '_EffectiveTickerMode';
    }
}
exports._EffectiveTickerMode = _EffectiveTickerMode;
class SingleTickerProviderStateMixin extends framework_1.State {
}
exports.SingleTickerProviderStateMixin = SingleTickerProviderStateMixin;
class TickerProviderStateMixin extends framework_1.State {
}
exports.TickerProviderStateMixin = TickerProviderStateMixin;
class _WidgetTicker extends ticker_1.Ticker {
    constructor(onTick, _creator, namedParameters = {}) {
        super();
        this.onTick = onTick;
        this.creator = _creator;
        this.debugLabel = namedParameters.debugLabel;
        this.className = '_WidgetTicker';
    }
}
exports._WidgetTicker = _WidgetTicker;
