import { OverlayState, OverlayEntry } from './overlay';
import { Drag } from '../gestures/drag';
import { Velocity } from '../gestures/velocity-tracker';
import { GestureRecognizer } from '../gestures/recognizer';
import { Key } from '../foundation/key';
import { Offset } from '../../../mx-dart-sdk';
import { Axis } from '../painting/basic-types';
import { StatefulWidget$, State$ } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare enum DragAnchor {
    child = "{ \"_name\": \"DragAnchor.child\", \"index\": 0 }",
    pointer = "{ \"_name\": \"DragAnchor.pointer\", \"index\": 1 }"
}
export { DragAnchor };
declare class Draggable extends StatefulWidget$ {
    data: any;
    axis: Axis;
    child: MXWidget;
    childWhenDragging: MXWidget;
    feedback: MXWidget;
    feedbackOffset: Offset;
    dragAnchor: DragAnchor;
    ignoringFeedbackSemantics: boolean;
    affinity: Axis;
    maxSimultaneousDrags: number;
    onDragStarted: any;
    onDraggableCanceled: any;
    onDragCompleted: any;
    onDragEnd: any;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        feedback?: MXWidget;
        data?: any;
        axis?: Axis;
        childWhenDragging?: MXWidget;
        feedbackOffset?: Offset;
        dragAnchor?: DragAnchor;
        affinity?: Axis;
        maxSimultaneousDrags?: number;
        onDragStarted?: any;
        onDraggableCanceled?: any;
        onDragEnd?: any;
        onDragCompleted?: any;
        ignoringFeedbackSemantics?: boolean;
    });
}
export { Draggable };
declare class LongPressDraggable extends Draggable {
    hapticFeedbackOnStart: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        feedback?: MXWidget;
        data?: any;
        axis?: Axis;
        childWhenDragging?: MXWidget;
        feedbackOffset?: Offset;
        dragAnchor?: DragAnchor;
        maxSimultaneousDrags?: number;
        onDragStarted?: any;
        onDraggableCanceled?: any;
        onDragEnd?: any;
        onDragCompleted?: any;
        hapticFeedbackOnStart?: boolean;
        ignoringFeedbackSemantics?: boolean;
    });
}
export { LongPressDraggable };
declare class _DraggableState extends State$ {
    recognizer: GestureRecognizer;
    activeCount: number;
}
export { _DraggableState };
declare class DraggableDetails extends MXDartClass {
    wasAccepted: boolean;
    velocity: Velocity;
    offset: Offset;
    constructor(namedParameters?: {
        wasAccepted?: boolean;
        velocity?: Velocity;
        offset?: Offset;
    });
}
export { DraggableDetails };
declare class DragTargetDetails extends MXDartClass {
    data: any;
    offset: Offset;
    constructor(namedParameters?: {
        data?: any;
        offset?: Offset;
    });
}
export { DragTargetDetails };
declare class DragTarget extends StatefulWidget$ {
    builder: any;
    onWillAccept: any;
    onAccept: any;
    onAcceptWithDetails: any;
    onLeave: any;
    constructor(namedParameters?: {
        key?: Key;
        builder?: any;
        onWillAccept?: any;
        onAccept?: any;
        onAcceptWithDetails?: any;
        onLeave?: any;
    });
}
export { DragTarget };
declare class _DragTargetState extends State$ {
    candidateAvatars: Array<any>;
    rejectedAvatars: Array<any>;
}
export { _DragTargetState };
declare enum _DragEndKind {
    dropped = "{ \"_name\": \"_DragEndKind.dropped\", \"index\": 0 }",
    canceled = "{ \"_name\": \"_DragEndKind.canceled\", \"index\": 1 }"
}
export { _DragEndKind };
declare class _DragAvatar extends Drag {
    data: any;
    axis: Axis;
    dragStartPoint: Offset;
    feedback: MXWidget;
    feedbackOffset: Offset;
    onDragEnd: any;
    overlayState: OverlayState;
    ignoringFeedbackSemantics: boolean;
    activeTarget: _DragTargetState;
    enteredTargets: Array<any>;
    position: Offset;
    lastOffset: Offset;
    entry: OverlayEntry;
    constructor(namedParameters?: {
        overlayState?: OverlayState;
        data?: any;
        axis?: Axis;
        initialPosition?: Offset;
        dragStartPoint?: Offset;
        feedback?: MXWidget;
        feedbackOffset?: Offset;
        onDragEnd?: any;
        ignoringFeedbackSemantics?: boolean;
    });
}
export { _DragAvatar };
