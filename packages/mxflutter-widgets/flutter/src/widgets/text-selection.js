//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ValueNotifier } from '../foundation/change-notifier';
import { TapGestureRecognizer } from '../gestures/tap';
import { Duration } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$ } from './framework';
import { ContainerBoxParentData } from '../rendering/box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var TextSelectionHandleType;
(function (TextSelectionHandleType) {
    TextSelectionHandleType["left"] = "{ \"_name\": \"TextSelectionHandleType.left\", \"index\": 0 }";
    TextSelectionHandleType["right"] = "{ \"_name\": \"TextSelectionHandleType.right\", \"index\": 1 }";
    TextSelectionHandleType["collapsed"] = "{ \"_name\": \"TextSelectionHandleType.collapsed\", \"index\": 2 }";
})(TextSelectionHandleType || (TextSelectionHandleType = {}));
export { TextSelectionHandleType };
var _TextSelectionHandlePosition;
(function (_TextSelectionHandlePosition) {
    _TextSelectionHandlePosition["start"] = "{ \"_name\": \"_TextSelectionHandlePosition.start\", \"index\": 0 }";
    _TextSelectionHandlePosition["end"] = "{ \"_name\": \"_TextSelectionHandlePosition.end\", \"index\": 1 }";
})(_TextSelectionHandlePosition || (_TextSelectionHandlePosition = {}));
export { _TextSelectionHandlePosition };
class ToolbarItemsParentData extends ContainerBoxParentData {
}
export { ToolbarItemsParentData };
class TextSelectionControls extends MXDartClass {
}
export { TextSelectionControls };
class TextSelectionOverlay extends MXDartClass {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
}
export { _TextSelectionHandleOverlayState };
class TextSelectionGestureDetectorBuilderDelegate extends MXDartClass {
}
export { TextSelectionGestureDetectorBuilderDelegate };
class TextSelectionGestureDetectorBuilder extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.delegate = namedParameters.delegate;
        this.className = 'TextSelectionGestureDetectorBuilder';
    }
}
export { TextSelectionGestureDetectorBuilder };
class TextSelectionGestureDetector extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
}
export { _TextSelectionGestureDetectorState };
class _TransparentTapGestureRecognizer extends TapGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this.className = '_TransparentTapGestureRecognizer';
    }
}
export { _TransparentTapGestureRecognizer };
class ClipboardStatusNotifier extends ValueNotifier {
    constructor(namedParameters = {}) {
        super();
        this['__mx_value'] = namedParameters.value;
        this.className = 'ClipboardStatusNotifier';
    }
}
export { ClipboardStatusNotifier };
var ClipboardStatus;
(function (ClipboardStatus) {
    ClipboardStatus["pasteable"] = "{ \"_name\": \"ClipboardStatus.pasteable\", \"index\": 0 }";
    ClipboardStatus["unknown"] = "{ \"_name\": \"ClipboardStatus.unknown\", \"index\": 1 }";
    ClipboardStatus["notPasteable"] = "{ \"_name\": \"ClipboardStatus.notPasteable\", \"index\": 2 }";
})(ClipboardStatus || (ClipboardStatus = {}));
export { ClipboardStatus };
