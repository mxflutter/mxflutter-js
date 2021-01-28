//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { GestureRecognizer } from './recognizer';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _CountdownZoned extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['duration'] = namedParameters.duration;
        this.className = '_CountdownZoned';
    }
}
export { _CountdownZoned };
class _TapTracker extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['event'] = namedParameters.event;
        this.entry = namedParameters.entry;
        this['doubleTapMinTime'] = namedParameters.doubleTapMinTime;
        this.className = '_TapTracker';
    }
}
export { _TapTracker };
class DoubleTapGestureRecognizer extends GestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'DoubleTapGestureRecognizer';
    }
}
export { DoubleTapGestureRecognizer };
class _TapGesture extends _TapTracker {
    constructor(namedParameters = {}) {
        super();
        this.gestureRecognizer = namedParameters.gestureRecognizer;
        this['event'] = namedParameters.event;
        this['longTapDelay'] = namedParameters.longTapDelay;
        this.className = '_TapGesture';
    }
}
export { _TapGesture };
class MultiTapGestureRecognizer extends GestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.longTapDelay = namedParameters.longTapDelay;
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'MultiTapGestureRecognizer';
    }
}
export { MultiTapGestureRecognizer };
