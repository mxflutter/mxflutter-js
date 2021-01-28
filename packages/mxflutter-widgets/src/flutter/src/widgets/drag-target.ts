//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { OverlayState, OverlayEntry } from './overlay';
import { Drag } from '../gestures/drag';
import { Velocity } from '../gestures/velocity-tracker';
import { PointerDownEvent } from '../gestures/events';
import { GestureRecognizer } from '../gestures/recognizer';
import { Key } from '../foundation/key';
import { Offset } from '../../../mx-dart-sdk';
import { Axis } from '../painting/basic-types';
import { StatefulWidget$, Widget, State$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum DragAnchor {
  child = '{ "_name": "DragAnchor.child", "index": 0 }',
  pointer = '{ "_name": "DragAnchor.pointer", "index": 1 }',
}

export { DragAnchor };
class Draggable extends StatefulWidget$ {
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
  public constructor(
    namedParameters: {
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
    } = {},
  ) {
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
  hapticFeedbackOnStart: boolean;
  public constructor(
    namedParameters: {
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
    } = {},
  ) {
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
  recognizer: GestureRecognizer;
  activeCount: number;
}
export { _DraggableState };
class DraggableDetails extends MXDartClass {
  wasAccepted: boolean;
  velocity: Velocity;
  offset: Offset;
  public constructor(namedParameters: { wasAccepted?: boolean; velocity?: Velocity; offset?: Offset } = {}) {
    super();
    this.wasAccepted = namedParameters.wasAccepted;
    this.velocity = namedParameters.velocity;
    this.offset = namedParameters.offset;
    this.className = 'DraggableDetails';
  }
}
export { DraggableDetails };
class DragTargetDetails extends MXDartClass {
  data: any;
  offset: Offset;
  public constructor(namedParameters: { data?: any; offset?: Offset } = {}) {
    super();
    this.data = namedParameters.data;
    this.offset = namedParameters.offset;
    this.className = 'DragTargetDetails';
  }
}
export { DragTargetDetails };
class DragTarget extends StatefulWidget$ {
  builder: any;
  onWillAccept: any;
  onAccept: any;
  onAcceptWithDetails: any;
  onLeave: any;
  public constructor(
    namedParameters: {
      key?: Key;
      builder?: any;
      onWillAccept?: any;
      onAccept?: any;
      onAcceptWithDetails?: any;
      onLeave?: any;
    } = {},
  ) {
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
  candidateAvatars: Array<any>;
  rejectedAvatars: Array<any>;
}
export { _DragTargetState };
enum _DragEndKind {
  dropped = '{ "_name": "_DragEndKind.dropped", "index": 0 }',
  canceled = '{ "_name": "_DragEndKind.canceled", "index": 1 }',
}

export { _DragEndKind };
class _DragAvatar extends Drag {
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
  public constructor(
    namedParameters: {
      overlayState?: OverlayState;
      data?: any;
      axis?: Axis;
      initialPosition?: Offset;
      dragStartPoint?: Offset;
      feedback?: MXWidget;
      feedbackOffset?: Offset;
      onDragEnd?: any;
      ignoringFeedbackSemantics?: boolean;
    } = {},
  ) {
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
