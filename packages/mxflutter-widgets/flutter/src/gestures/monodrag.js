//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { OneSequenceGestureRecognizer } from './recognizer';
var _DragState;
(function (_DragState) {
    _DragState["ready"] = "{ \"_name\": \"_DragState.ready\", \"index\": 0 }";
    _DragState["possible"] = "{ \"_name\": \"_DragState.possible\", \"index\": 1 }";
    _DragState["accepted"] = "{ \"_name\": \"_DragState.accepted\", \"index\": 2 }";
})(_DragState || (_DragState = {}));
export { _DragState };
class DragGestureRecognizer extends OneSequenceGestureRecognizer {
}
export { DragGestureRecognizer };
class VerticalDragGestureRecognizer extends DragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'VerticalDragGestureRecognizer';
    }
}
export { VerticalDragGestureRecognizer };
class HorizontalDragGestureRecognizer extends DragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'HorizontalDragGestureRecognizer';
    }
}
export { HorizontalDragGestureRecognizer };
class PanGestureRecognizer extends DragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this.className = 'PanGestureRecognizer';
    }
}
export { PanGestureRecognizer };
