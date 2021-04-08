import { ValueNotifier } from '../foundation/change-notifier';
import { TapGestureRecognizer } from '../gestures/tap';
import { DragStartDetails, DragUpdateDetails } from '../gestures/drag-details';
import { HitTestBehavior } from '../rendering/proxy-box';
import { Offset } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { TextSelection } from '../services/text-editing';
import { Duration } from '../../../mx-dart-sdk';
import { OverlayEntry } from './overlay';
import { AnimationController } from '../animation/animation-controller';
import { DragStartBehavior } from '../gestures/recognizer';
import { TextSelectionDelegate, TextEditingValue } from '../services/text-input';
import { RenderEditable } from '../rendering/editable';
import { LayerLink } from '../rendering/layer';
import { BuildContext, StatefulWidget, State } from './framework';
import { ContainerBoxParentData } from '../rendering/box';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare enum TextSelectionHandleType {
    left = "{ \"_name\": \"TextSelectionHandleType.left\", \"index\": 0 }",
    right = "{ \"_name\": \"TextSelectionHandleType.right\", \"index\": 1 }",
    collapsed = "{ \"_name\": \"TextSelectionHandleType.collapsed\", \"index\": 2 }"
}
export { TextSelectionHandleType };
declare enum _TextSelectionHandlePosition {
    start = "{ \"_name\": \"_TextSelectionHandlePosition.start\", \"index\": 0 }",
    end = "{ \"_name\": \"_TextSelectionHandlePosition.end\", \"index\": 1 }"
}
export { _TextSelectionHandlePosition };
declare class ToolbarItemsParentData extends ContainerBoxParentData {
    shouldPaint: boolean;
}
export { ToolbarItemsParentData };
declare abstract class TextSelectionControls extends MXDartClass {
}
export { TextSelectionControls };
declare class TextSelectionOverlay extends MXDartClass {
    context: BuildContext;
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
    constructor(namedParameters?: {
        value?: TextEditingValue;
        context?: BuildContext;
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
    });
    static get fadeDuration(): Duration;
}
export { TextSelectionOverlay };
declare class _TextSelectionHandleOverlay extends StatefulWidget {
    selection: TextSelection;
    position: _TextSelectionHandlePosition;
    startHandleLayerLink: LayerLink;
    endHandleLayerLink: LayerLink;
    renderObject: RenderEditable;
    onSelectionHandleChanged: any;
    onSelectionHandleTapped: any;
    selectionControls: TextSelectionControls;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
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
    });
}
export { _TextSelectionHandleOverlay };
declare class _TextSelectionHandleOverlayState extends State {
    dragPosition: Offset;
    controller: AnimationController;
}
export { _TextSelectionHandleOverlayState };
declare abstract class TextSelectionGestureDetectorBuilderDelegate extends MXDartClass {
}
export { TextSelectionGestureDetectorBuilderDelegate };
declare class TextSelectionGestureDetectorBuilder extends MXDartClass {
    delegate: TextSelectionGestureDetectorBuilderDelegate;
    shouldShowSelectionToolbar: boolean;
    constructor(namedParameters?: {
        delegate?: TextSelectionGestureDetectorBuilderDelegate;
    });
}
export { TextSelectionGestureDetectorBuilder };
declare class TextSelectionGestureDetector extends StatefulWidget {
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
    constructor(namedParameters?: {
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
    });
}
export { TextSelectionGestureDetector };
declare class _TextSelectionGestureDetectorState extends State {
    doubleTapTimer: any;
    lastTapOffset: Offset;
    isDoubleTap: boolean;
    lastDragStartDetails: DragStartDetails;
    lastDragUpdateDetails: DragUpdateDetails;
    dragUpdateThrottleTimer: any;
}
export { _TextSelectionGestureDetectorState };
declare class _TransparentTapGestureRecognizer extends TapGestureRecognizer {
    constructor(namedParameters?: {
        debugOwner?: any;
    });
}
export { _TransparentTapGestureRecognizer };
declare class ClipboardStatusNotifier extends ValueNotifier {
    disposed: boolean;
    constructor(namedParameters?: {
        value?: ClipboardStatus;
    });
}
export { ClipboardStatusNotifier };
declare enum ClipboardStatus {
    pasteable = "{ \"_name\": \"ClipboardStatus.pasteable\", \"index\": 0 }",
    unknown = "{ \"_name\": \"ClipboardStatus.unknown\", \"index\": 1 }",
    notPasteable = "{ \"_name\": \"ClipboardStatus.notPasteable\", \"index\": 2 }"
}
export { ClipboardStatus };
