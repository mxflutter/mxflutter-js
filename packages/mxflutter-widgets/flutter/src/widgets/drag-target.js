"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DragAvatar = exports._DragEndKind = exports._DragTargetState = exports.DragTarget = exports.DragTargetDetails = exports.DraggableDetails = exports._DraggableState = exports.LongPressDraggable = exports.Draggable = exports.DragAnchor = void 0;
const drag_1 = require("../gestures/drag");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var DragAnchor;
(function (DragAnchor) {
    DragAnchor["child"] = "{ \"_name\": \"DragAnchor.child\", \"index\": 0 }";
    DragAnchor["pointer"] = "{ \"_name\": \"DragAnchor.pointer\", \"index\": 1 }";
})(DragAnchor || (DragAnchor = {}));
exports.DragAnchor = DragAnchor;
;
class Draggable extends framework_1.StatefulWidget {
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
exports.Draggable = Draggable;
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
exports.LongPressDraggable = LongPressDraggable;
class _DraggableState extends framework_1.State {
}
exports._DraggableState = _DraggableState;
class DraggableDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.wasAccepted = namedParameters.wasAccepted;
        this.velocity = namedParameters.velocity;
        this.offset = namedParameters.offset;
        this.className = 'DraggableDetails';
    }
}
exports.DraggableDetails = DraggableDetails;
class DragTargetDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.data = namedParameters.data;
        this.offset = namedParameters.offset;
        this.className = 'DragTargetDetails';
    }
}
exports.DragTargetDetails = DragTargetDetails;
class DragTarget extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.builder = namedParameters.builder;
        this.onWillAccept = namedParameters.onWillAccept;
        this.onAccept = namedParameters.onAccept;
        this.onAcceptWithDetails = namedParameters.onAcceptWithDetails;
        this.onLeave = namedParameters.onLeave;
        this.onMove = namedParameters.onMove;
        this.className = 'DragTarget';
    }
}
exports.DragTarget = DragTarget;
class _DragTargetState extends framework_1.State {
}
exports._DragTargetState = _DragTargetState;
var _DragEndKind;
(function (_DragEndKind) {
    _DragEndKind["dropped"] = "{ \"_name\": \"_DragEndKind.dropped\", \"index\": 0 }";
    _DragEndKind["canceled"] = "{ \"_name\": \"_DragEndKind.canceled\", \"index\": 1 }";
})(_DragEndKind || (_DragEndKind = {}));
exports._DragEndKind = _DragEndKind;
;
class _DragAvatar extends drag_1.Drag {
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
exports._DragAvatar = _DragAvatar;
