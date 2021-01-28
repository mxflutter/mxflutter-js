//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Drag } from '../gestures/drag';
import { StatefulWidget$, State$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var DragAnchor;
(function (DragAnchor) {
    DragAnchor["child"] = "{ \"_name\": \"DragAnchor.child\", \"index\": 0 }";
    DragAnchor["pointer"] = "{ \"_name\": \"DragAnchor.pointer\", \"index\": 1 }";
})(DragAnchor || (DragAnchor = {}));
export { DragAnchor };
class Draggable extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.feedback = namedParameters.feedback;
        this.data = namedParameters.data;
        this.axis = namedParameters.axis;
        this.childWhenDragging = namedParameters.childWhenDragging;
        this.feedbackOffset = namedParameters.feedbackOffset;
        this.dragAnchor = namedParameters.dragAnchor;
        this.affinity = namedParameters.affinity;
        this.maxSimultaneousDrags = namedParameters.maxSimultaneousDrags;
        this.onDragStarted = namedParameters.onDragStarted;
        this.onDraggableCanceled = namedParameters.onDraggableCanceled;
        this.onDragEnd = namedParameters.onDragEnd;
        this.onDragCompleted = namedParameters.onDragCompleted;
        this.ignoringFeedbackSemantics = namedParameters.ignoringFeedbackSemantics;
        this.className = 'Draggable';
    }
}
export { Draggable };
class LongPressDraggable extends Draggable {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.feedback = namedParameters.feedback;
        this.data = namedParameters.data;
        this.axis = namedParameters.axis;
        this.childWhenDragging = namedParameters.childWhenDragging;
        this.feedbackOffset = namedParameters.feedbackOffset;
        this.dragAnchor = namedParameters.dragAnchor;
        this.maxSimultaneousDrags = namedParameters.maxSimultaneousDrags;
        this.onDragStarted = namedParameters.onDragStarted;
        this.onDraggableCanceled = namedParameters.onDraggableCanceled;
        this.onDragEnd = namedParameters.onDragEnd;
        this.onDragCompleted = namedParameters.onDragCompleted;
        this.hapticFeedbackOnStart = namedParameters.hapticFeedbackOnStart;
        this.ignoringFeedbackSemantics = namedParameters.ignoringFeedbackSemantics;
        this.className = 'LongPressDraggable';
    }
}
export { LongPressDraggable };
class _DraggableState extends State$ {
}
export { _DraggableState };
class DraggableDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.wasAccepted = namedParameters.wasAccepted;
        this.velocity = namedParameters.velocity;
        this.offset = namedParameters.offset;
        this.className = 'DraggableDetails';
    }
}
export { DraggableDetails };
class DragTargetDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.data = namedParameters.data;
        this.offset = namedParameters.offset;
        this.className = 'DragTargetDetails';
    }
}
export { DragTargetDetails };
class DragTarget extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.builder = namedParameters.builder;
        this.onWillAccept = namedParameters.onWillAccept;
        this.onAccept = namedParameters.onAccept;
        this.onAcceptWithDetails = namedParameters.onAcceptWithDetails;
        this.onLeave = namedParameters.onLeave;
        this.className = 'DragTarget';
    }
}
export { DragTarget };
class _DragTargetState extends State$ {
}
export { _DragTargetState };
var _DragEndKind;
(function (_DragEndKind) {
    _DragEndKind["dropped"] = "{ \"_name\": \"_DragEndKind.dropped\", \"index\": 0 }";
    _DragEndKind["canceled"] = "{ \"_name\": \"_DragEndKind.canceled\", \"index\": 1 }";
})(_DragEndKind || (_DragEndKind = {}));
export { _DragEndKind };
class _DragAvatar extends Drag {
    constructor(namedParameters = {}) {
        super();
        this.overlayState = namedParameters.overlayState;
        this.data = namedParameters.data;
        this.axis = namedParameters.axis;
        this['initialPosition'] = namedParameters.initialPosition;
        this.dragStartPoint = namedParameters.dragStartPoint;
        this.feedback = namedParameters.feedback;
        this.feedbackOffset = namedParameters.feedbackOffset;
        this.onDragEnd = namedParameters.onDragEnd;
        this.ignoringFeedbackSemantics = namedParameters.ignoringFeedbackSemantics;
        this.className = '_DragAvatar';
    }
}
export { _DragAvatar };
