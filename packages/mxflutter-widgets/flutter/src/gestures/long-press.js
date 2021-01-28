//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { PrimaryPointerGestureRecognizer } from './recognizer';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class LongPressStartDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'LongPressStartDetails';
    }
}
export { LongPressStartDetails };
class LongPressMoveUpdateDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.offsetFromOrigin = namedParameters.offsetFromOrigin;
        this.localOffsetFromOrigin = namedParameters.localOffsetFromOrigin;
        this.className = 'LongPressMoveUpdateDetails';
    }
}
export { LongPressMoveUpdateDetails };
class LongPressEndDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.velocity = namedParameters.velocity;
        this.className = 'LongPressEndDetails';
    }
}
export { LongPressEndDetails };
class LongPressGestureRecognizer extends PrimaryPointerGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['duration'] = namedParameters.duration;
        this.postAcceptSlopTolerance = namedParameters.postAcceptSlopTolerance;
        this['kind'] = namedParameters.kind;
        this.debugOwner = namedParameters.debugOwner;
        this.className = 'LongPressGestureRecognizer';
    }
}
export { LongPressGestureRecognizer };
