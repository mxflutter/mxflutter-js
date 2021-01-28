//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from './framework';
var CrossFadeState;
(function (CrossFadeState) {
    CrossFadeState["showFirst"] = "{ \"_name\": \"CrossFadeState.showFirst\", \"index\": 0 }";
    CrossFadeState["showSecond"] = "{ \"_name\": \"CrossFadeState.showSecond\", \"index\": 1 }";
})(CrossFadeState || (CrossFadeState = {}));
export { CrossFadeState };
class AnimatedCrossFade extends StatefulWidget$ {
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
export { AnimatedCrossFade };
class _AnimatedCrossFadeState extends State$ {
}
export { _AnimatedCrossFadeState };
