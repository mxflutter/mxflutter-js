//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { OneSequenceGestureRecognizer } from './recognizer';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var _ForceState;
(function (_ForceState) {
    _ForceState["ready"] = "{ \"_name\": \"_ForceState.ready\", \"index\": 0 }";
    _ForceState["possible"] = "{ \"_name\": \"_ForceState.possible\", \"index\": 1 }";
    _ForceState["accepted"] = "{ \"_name\": \"_ForceState.accepted\", \"index\": 2 }";
    _ForceState["started"] = "{ \"_name\": \"_ForceState.started\", \"index\": 3 }";
    _ForceState["peaked"] = "{ \"_name\": \"_ForceState.peaked\", \"index\": 4 }";
})(_ForceState || (_ForceState = {}));
export { _ForceState };
class ForcePressDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.pressure = namedParameters.pressure;
        this.className = 'ForcePressDetails';
    }
}
export { ForcePressDetails };
class ForcePressGestureRecognizer extends OneSequenceGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.startPressure = namedParameters.startPressure;
        this.peakPressure = namedParameters.peakPressure;
        this.interpolation = namedParameters.interpolation;
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'ForcePressGestureRecognizer';
    }
}
export { ForcePressGestureRecognizer };
