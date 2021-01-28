//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ClipboardData } from '../services/clipboard';
import { ValueNotifier } from '../foundation/change-notifier';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { HitTestBehavior } from '../rendering/proxy-box';
import {
  LongPressStartDetails,
  LongPressMoveUpdateDetails,
  LongPressEndDetails,
  LongPressGestureRecognizer,
} from '../gestures/long-press';
import { ForcePressDetails, ForcePressGestureRecognizer } from '../gestures/force-press';
import { TapDownDetails, TapUpDetails, TapGestureRecognizer } from '../gestures/tap';
import { DragStartDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { Offset, TextDirection, AppLifecycleState } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { TextSelection } from '../services/text-editing';
import { Duration } from '../../../mx-dart-sdk';
import { OverlayEntry } from './overlay';
import { AnimationController } from '../animation/animation-controller';
import { DragStartBehavior } from '../gestures/recognizer';
import { RenderEditable } from '../rendering/editable';
import { LayerLink } from '../rendering/layer';
import { BuildContext$, Widget, StatefulWidget$, State$ } from './framework';
import { TextSelectionDelegate, TextEditingValue } from '../services/text-input';
import { ContainerBoxParentData } from '../rendering/box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum TextSelectionHandleType {
  left = '{ "_name": "TextSelectionHandleType.left", "index": 0 }',
  right = '{ "_name": "TextSelectionHandleType.right", "index": 1 }',
  collapsed = '{ "_name": "TextSelectionHandleType.collapsed", "index": 2 }',
}

export { TextSelectionHandleType };
enum _TextSelectionHandlePosition {
  start = '{ "_name": "_TextSelectionHandlePosition.start", "index": 0 }',
  end = '{ "_name": "_TextSelectionHandlePosition.end", "index": 1 }',
}

export { _TextSelectionHandlePosition };
class ToolbarItemsParentData extends ContainerBoxParentData {
  shouldPaint: boolean;
}
export { ToolbarItemsParentData };
abstract class TextSelectionControls extends MXDartClass {}
export { TextSelectionControls };
class TextSelectionOverlay extends MXDartClass {
  context: BuildContext$;
  debugRequiredFor: MXWidget;
  toolbarLayerLink: LayerLink;
  startHandleLayerLink: LayerLink;
  endHandleLayerLink: LayerLink;
  renderObject: RenderEditable;
  selectionControls: TextSelectionControls;
  selectionDelegate: TextSelectionDelegate;
  dragStartBehavior: DragStartBehavior;
  onSelectionHandleTapped: any;
  clipboardStatus: ClipboardStatusNotifier;
  toolbarController: AnimationController;
  value: TextEditingValue;
  handles: Array<any>;
  toolbar: OverlayEntry;
  handlesVisible: boolean;
  public constructor(
    namedParameters: {
      value?: TextEditingValue;
      context?: BuildContext$;
      debugRequiredFor?: MXWidget;
      toolbarLayerLink?: LayerLink;
      startHandleLayerLink?: LayerLink;
      endHandleLayerLink?: LayerLink;
      renderObject?: RenderEditable;
      selectionControls?: TextSelectionControls;
      handlesVisible?: boolean;
      selectionDelegate?: TextSelectionDelegate;
      dragStartBehavior?: DragStartBehavior;
      onSelectionHandleTapped?: any;
      clipboardStatus?: ClipboardStatusNotifier;
    } = {},
  ) {
    super();
    this.value = namedParameters.value;
    this.context = namedParameters.context;
    this.debugRequiredFor = namedParameters.debugRequiredFor;
    this.toolbarLayerLink = namedParameters.toolbarLayerLink;
    this.startHandleLayerLink = namedParameters.startHandleLayerLink;
    this.endHandleLayerLink = namedParameters.endHandleLayerLink;
    this.renderObject = namedParameters.renderObject;
    this.selectionControls = namedParameters.selectionControls;
    this.handlesVisible = namedParameters.handlesVisible;
    this.selectionDelegate = namedParameters.selectionDelegate;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.onSelectionHandleTapped = namedParameters.onSelectionHandleTapped;
    this.clipboardStatus = namedParameters.clipboardStatus;
    this.className = 'TextSelectionOverlay';
  }
  static get fadeDuration() {
    var jsObj = new Duration();
    jsObj['className'] = 'TextSelectionOverlay';
    jsObj['constructorName'] = 'fadeDuration';
    return jsObj;
  }
}
export { TextSelectionOverlay };
class _TextSelectionHandleOverlay extends StatefulWidget$ {
  selection: TextSelection;
  position: _TextSelectionHandlePosition;
  startHandleLayerLink: LayerLink;
  endHandleLayerLink: LayerLink;
  renderObject: RenderEditable;
  onSelectionHandleChanged: any;
  onSelectionHandleTapped: any;
  selectionControls: TextSelectionControls;
  dragStartBehavior: DragStartBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      selection?: TextSelection;
      position?: _TextSelectionHandlePosition;
      startHandleLayerLink?: LayerLink;
      endHandleLayerLink?: LayerLink;
      renderObject?: RenderEditable;
      onSelectionHandleChanged?: any;
      onSelectionHandleTapped?: any;
      selectionControls?: TextSelectionControls;
      dragStartBehavior?: DragStartBehavior;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.selection = namedParameters.selection;
    this.position = namedParameters.position;
    this.startHandleLayerLink = namedParameters.startHandleLayerLink;
    this.endHandleLayerLink = namedParameters.endHandleLayerLink;
    this.renderObject = namedParameters.renderObject;
    this.onSelectionHandleChanged = namedParameters.onSelectionHandleChanged;
    this.onSelectionHandleTapped = namedParameters.onSelectionHandleTapped;
    this.selectionControls = namedParameters.selectionControls;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = '_TextSelectionHandleOverlay';
  }
}
export { _TextSelectionHandleOverlay };
class _TextSelectionHandleOverlayState extends State$ {
  dragPosition: Offset;
  controller: AnimationController;
}
export { _TextSelectionHandleOverlayState };
abstract class TextSelectionGestureDetectorBuilderDelegate extends MXDartClass {}
export { TextSelectionGestureDetectorBuilderDelegate };
class TextSelectionGestureDetectorBuilder extends MXDartClass {
  delegate: TextSelectionGestureDetectorBuilderDelegate;
  shouldShowSelectionToolbar: boolean;
  public constructor(namedParameters: { delegate?: TextSelectionGestureDetectorBuilderDelegate } = {}) {
    super();
    this.delegate = namedParameters.delegate;
    this.className = 'TextSelectionGestureDetectorBuilder';
  }
}
export { TextSelectionGestureDetectorBuilder };
class TextSelectionGestureDetector extends StatefulWidget$ {
  onTapDown: any;
  onForcePressStart: any;
  onForcePressEnd: any;
  onSingleTapUp: any;
  onSingleTapCancel: any;
  onSingleLongTapStart: any;
  onSingleLongTapMoveUpdate: any;
  onSingleLongTapEnd: any;
  onDoubleTapDown: any;
  onDragSelectionStart: any;
  onDragSelectionUpdate: any;
  onDragSelectionEnd: any;
  behavior: HitTestBehavior;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      onTapDown?: any;
      onForcePressStart?: any;
      onForcePressEnd?: any;
      onSingleTapUp?: any;
      onSingleTapCancel?: any;
      onSingleLongTapStart?: any;
      onSingleLongTapMoveUpdate?: any;
      onSingleLongTapEnd?: any;
      onDoubleTapDown?: any;
      onDragSelectionStart?: any;
      onDragSelectionUpdate?: any;
      onDragSelectionEnd?: any;
      behavior?: HitTestBehavior;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.onTapDown = namedParameters.onTapDown;
    this.onForcePressStart = namedParameters.onForcePressStart;
    this.onForcePressEnd = namedParameters.onForcePressEnd;
    this.onSingleTapUp = namedParameters.onSingleTapUp;
    this.onSingleTapCancel = namedParameters.onSingleTapCancel;
    this.onSingleLongTapStart = namedParameters.onSingleLongTapStart;
    this.onSingleLongTapMoveUpdate = namedParameters.onSingleLongTapMoveUpdate;
    this.onSingleLongTapEnd = namedParameters.onSingleLongTapEnd;
    this.onDoubleTapDown = namedParameters.onDoubleTapDown;
    this.onDragSelectionStart = namedParameters.onDragSelectionStart;
    this.onDragSelectionUpdate = namedParameters.onDragSelectionUpdate;
    this.onDragSelectionEnd = namedParameters.onDragSelectionEnd;
    this.behavior = namedParameters.behavior;
    this.child = namedParameters.child;
    this.className = 'TextSelectionGestureDetector';
  }
}
export { TextSelectionGestureDetector };
class _TextSelectionGestureDetectorState extends State$ {
  doubleTapTimer: any;
  lastTapOffset: Offset;
  isDoubleTap: boolean;
  lastDragStartDetails: DragStartDetails;
  lastDragUpdateDetails: DragUpdateDetails;
  dragUpdateThrottleTimer: any;
}
export { _TextSelectionGestureDetectorState };
class _TransparentTapGestureRecognizer extends TapGestureRecognizer {
  public constructor(namedParameters: { debugOwner?: any } = {}) {
    super();
    this['debugOwner'] = namedParameters.debugOwner;
    this.className = '_TransparentTapGestureRecognizer';
  }
}
export { _TransparentTapGestureRecognizer };
class ClipboardStatusNotifier extends ValueNotifier {
  disposed: boolean;
  public constructor(namedParameters: { value?: ClipboardStatus } = {}) {
    super();
    this['__mx_value'] = namedParameters.value;
    this.className = 'ClipboardStatusNotifier';
  }
}
export { ClipboardStatusNotifier };
enum ClipboardStatus {
  pasteable = '{ "_name": "ClipboardStatus.pasteable", "index": 0 }',
  unknown = '{ "_name": "ClipboardStatus.unknown", "index": 1 }',
  notPasteable = '{ "_name": "ClipboardStatus.notPasteable", "index": 2 }',
}

export { ClipboardStatus };
