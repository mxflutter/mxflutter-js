//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { GestureArenaMember } from './arena';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var DragStartBehavior;
(function (DragStartBehavior) {
    DragStartBehavior["down"] = "{ \"_name\": \"DragStartBehavior.down\", \"index\": 0 }";
    DragStartBehavior["start"] = "{ \"_name\": \"DragStartBehavior.start\", \"index\": 1 }";
})(DragStartBehavior || (DragStartBehavior = {}));
export { DragStartBehavior };
class GestureRecognizer extends GestureArenaMember {
}
export { GestureRecognizer };
class OneSequenceGestureRecognizer extends GestureRecognizer {
}
export { OneSequenceGestureRecognizer };
var GestureRecognizerState;
(function (GestureRecognizerState) {
    GestureRecognizerState["ready"] = "{ \"_name\": \"GestureRecognizerState.ready\", \"index\": 0 }";
    GestureRecognizerState["possible"] = "{ \"_name\": \"GestureRecognizerState.possible\", \"index\": 1 }";
    GestureRecognizerState["defunct"] = "{ \"_name\": \"GestureRecognizerState.defunct\", \"index\": 2 }";
})(GestureRecognizerState || (GestureRecognizerState = {}));
export { GestureRecognizerState };
class PrimaryPointerGestureRecognizer extends OneSequenceGestureRecognizer {
}
export { PrimaryPointerGestureRecognizer };
class OffsetPair extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.local = namedParameters.local;
        this.global = namedParameters.global;
        this.className = 'OffsetPair';
    }
    static get zero() {
        var jsObj = new OffsetPair();
        jsObj['className'] = 'OffsetPair';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static fromEventPosition(event) {
        var jsObj = new OffsetPair();
        jsObj['event'] = event;
        jsObj['constructorName'] = 'fromEventPosition';
        return jsObj;
    }
    static fromEventDelta(event) {
        var jsObj = new OffsetPair();
        jsObj['event'] = event;
        jsObj['constructorName'] = 'fromEventDelta';
        return jsObj;
    }
}
export { OffsetPair };
