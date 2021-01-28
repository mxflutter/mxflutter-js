//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { OneSequenceGestureRecognizer } from './recognizer';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var _ScaleState;
(function (_ScaleState) {
    _ScaleState["ready"] = "{ \"_name\": \"_ScaleState.ready\", \"index\": 0 }";
    _ScaleState["possible"] = "{ \"_name\": \"_ScaleState.possible\", \"index\": 1 }";
    _ScaleState["accepted"] = "{ \"_name\": \"_ScaleState.accepted\", \"index\": 2 }";
    _ScaleState["started"] = "{ \"_name\": \"_ScaleState.started\", \"index\": 3 }";
})(_ScaleState || (_ScaleState = {}));
export { _ScaleState };
class ScaleStartDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.focalPoint = namedParameters.focalPoint;
        this.localFocalPoint = namedParameters.localFocalPoint;
        this.className = 'ScaleStartDetails';
    }
}
export { ScaleStartDetails };
class ScaleUpdateDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.focalPoint = namedParameters.focalPoint;
        this.localFocalPoint = namedParameters.localFocalPoint;
        this.scale = namedParameters.scale;
        this.horizontalScale = namedParameters.horizontalScale;
        this.verticalScale = namedParameters.verticalScale;
        this.rotation = namedParameters.rotation;
        this.className = 'ScaleUpdateDetails';
    }
}
export { ScaleUpdateDetails };
class ScaleEndDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.velocity = namedParameters.velocity;
        this.className = 'ScaleEndDetails';
    }
}
export { ScaleEndDetails };
class _LineBetweenPointers extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.pointerStartLocation = namedParameters.pointerStartLocation;
        this.pointerStartId = namedParameters.pointerStartId;
        this.pointerEndLocation = namedParameters.pointerEndLocation;
        this.pointerEndId = namedParameters.pointerEndId;
        this.className = '_LineBetweenPointers';
    }
}
export { _LineBetweenPointers };
class ScaleGestureRecognizer extends OneSequenceGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'ScaleGestureRecognizer';
    }
}
export { ScaleGestureRecognizer };
