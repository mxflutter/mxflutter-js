"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AnimatedCrossFadeState = exports.AnimatedCrossFade = exports.CrossFadeState = void 0;
const framework_1 = require("./framework");
var CrossFadeState;
(function (CrossFadeState) {
    CrossFadeState["showFirst"] = "{ \"_name\": \"CrossFadeState.showFirst\", \"index\": 0 }";
    CrossFadeState["showSecond"] = "{ \"_name\": \"CrossFadeState.showSecond\", \"index\": 1 }";
})(CrossFadeState || (CrossFadeState = {}));
exports.CrossFadeState = CrossFadeState;
;
class AnimatedCrossFade extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.firstChild = namedParameters.firstChild;
        this.secondChild = namedParameters.secondChild;
        this.firstCurve = namedParameters.firstCurve;
        this.secondCurve = namedParameters.secondCurve;
        this.sizeCurve = namedParameters.sizeCurve;
        this.alignment = namedParameters.alignment;
        this.crossFadeState = namedParameters.crossFadeState;
        this.duration = namedParameters.duration;
        this.reverseDuration = namedParameters.reverseDuration;
        this.layoutBuilder = namedParameters.layoutBuilder;
        this.className = 'AnimatedCrossFade';
    }
}
exports.AnimatedCrossFade = AnimatedCrossFade;
class _AnimatedCrossFadeState extends framework_1.State {
}
exports._AnimatedCrossFadeState = _AnimatedCrossFadeState;
