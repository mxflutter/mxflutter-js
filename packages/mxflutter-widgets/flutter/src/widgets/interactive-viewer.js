//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ValueNotifier } from '../foundation/change-notifier';
import { StatefulWidget$, State$ } from './framework';
class InteractiveViewer extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignPanAxis = namedParameters.alignPanAxis;
        this.boundaryMargin = namedParameters.boundaryMargin;
        this.constrained = namedParameters.constrained;
        this.maxScale = namedParameters.maxScale;
        this.minScale = namedParameters.minScale;
        this.onInteractionEnd = namedParameters.onInteractionEnd;
        this.onInteractionStart = namedParameters.onInteractionStart;
        this.onInteractionUpdate = namedParameters.onInteractionUpdate;
        this.panEnabled = namedParameters.panEnabled;
        this.scaleEnabled = namedParameters.scaleEnabled;
        this.transformationController = namedParameters.transformationController;
        this.child = namedParameters.child;
        this.className = 'InteractiveViewer';
    }
}
export { InteractiveViewer };
class _InteractiveViewerState extends State$ {
}
export { _InteractiveViewerState };
class TransformationController extends ValueNotifier {
    constructor(value) {
        super();
        this['value'] = value;
        this.className = 'TransformationController';
    }
}
export { TransformationController };
var _GestureType;
(function (_GestureType) {
    _GestureType["pan"] = "{ \"_name\": \"_GestureType.pan\", \"index\": 0 }";
    _GestureType["scale"] = "{ \"_name\": \"_GestureType.scale\", \"index\": 1 }";
    _GestureType["rotate"] = "{ \"_name\": \"_GestureType.rotate\", \"index\": 2 }";
})(_GestureType || (_GestureType = {}));
export { _GestureType };
