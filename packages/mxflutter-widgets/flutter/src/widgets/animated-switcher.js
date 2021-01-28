//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _ChildEntry extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.controller = namedParameters.controller;
        this.animation = namedParameters.animation;
        this.transition = namedParameters.transition;
        this.widgetChild = namedParameters.widgetChild;
        this.className = '_ChildEntry';
    }
}
export { _ChildEntry };
class AnimatedSwitcher extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.duration = namedParameters.duration;
        this.reverseDuration = namedParameters.reverseDuration;
        this.switchInCurve = namedParameters.switchInCurve;
        this.switchOutCurve = namedParameters.switchOutCurve;
        this.transitionBuilder = namedParameters.transitionBuilder;
        this.layoutBuilder = namedParameters.layoutBuilder;
        this.className = 'AnimatedSwitcher';
    }
}
export { AnimatedSwitcher };
class _AnimatedSwitcherState extends State$ {
}
export { _AnimatedSwitcherState };
