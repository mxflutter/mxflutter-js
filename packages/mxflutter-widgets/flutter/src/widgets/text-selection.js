"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardStatus = exports.ClipboardStatusNotifier = exports._TransparentTapGestureRecognizer = exports._TextSelectionGestureDetectorState = exports.TextSelectionGestureDetector = exports.TextSelectionGestureDetectorBuilder = exports.TextSelectionGestureDetectorBuilderDelegate = exports._TextSelectionHandleOverlayState = exports._TextSelectionHandleOverlay = exports.TextSelectionOverlay = exports.TextSelectionControls = exports.ToolbarItemsParentData = exports._TextSelectionHandlePosition = exports.TextSelectionHandleType = void 0;
const change_notifier_1 = require("../foundation/change-notifier");
const tap_1 = require("../gestures/tap");
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const framework_1 = require("./framework");
const box_1 = require("../rendering/box");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var TextSelectionHandleType;
(function (TextSelectionHandleType) {
    TextSelectionHandleType["left"] = "{ \"_name\": \"TextSelectionHandleType.left\", \"index\": 0 }";
    TextSelectionHandleType["right"] = "{ \"_name\": \"TextSelectionHandleType.right\", \"index\": 1 }";
    TextSelectionHandleType["collapsed"] = "{ \"_name\": \"TextSelectionHandleType.collapsed\", \"index\": 2 }";
})(TextSelectionHandleType || (TextSelectionHandleType = {}));
exports.TextSelectionHandleType = TextSelectionHandleType;
;
var _TextSelectionHandlePosition;
(function (_TextSelectionHandlePosition) {
    _TextSelectionHandlePosition["start"] = "{ \"_name\": \"_TextSelectionHandlePosition.start\", \"index\": 0 }";
    _TextSelectionHandlePosition["end"] = "{ \"_name\": \"_TextSelectionHandlePosition.end\", \"index\": 1 }";
})(_TextSelectionHandlePosition || (_TextSelectionHandlePosition = {}));
exports._TextSelectionHandlePosition = _TextSelectionHandlePosition;
;
class ToolbarItemsParentData extends box_1.ContainerBoxParentData {
}
exports.ToolbarItemsParentData = ToolbarItemsParentData;
class TextSelectionControls extends mxflutter_base_1.MXDartClass {
}
exports.TextSelectionControls = TextSelectionControls;
class TextSelectionOverlay extends mxflutter_base_1.MXDartClass {
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
        var jsObj = new mx_dart_sdk_1.Duration();
        jsObj['className'] = 'TextSelectionOverlay';
        jsObj['constructorName'] = 'fadeDuration';
        return jsObj;
    }
}
exports.TextSelectionOverlay = TextSelectionOverlay;
class _TextSelectionHandleOverlay extends framework_1.StatefulWidget {
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
exports._TextSelectionHandleOverlay = _TextSelectionHandleOverlay;
class _TextSelectionHandleOverlayState extends framework_1.State {
}
exports._TextSelectionHandleOverlayState = _TextSelectionHandleOverlayState;
class TextSelectionGestureDetectorBuilderDelegate extends mxflutter_base_1.MXDartClass {
}
exports.TextSelectionGestureDetectorBuilderDelegate = TextSelectionGestureDetectorBuilderDelegate;
class TextSelectionGestureDetectorBuilder extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.delegate = namedParameters.delegate;
        this.className = 'TextSelectionGestureDetectorBuilder';
    }
}
exports.TextSelectionGestureDetectorBuilder = TextSelectionGestureDetectorBuilder;
class TextSelectionGestureDetector extends framework_1.StatefulWidget {
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
exports.TextSelectionGestureDetector = TextSelectionGestureDetector;
class _TextSelectionGestureDetectorState extends framework_1.State {
}
exports._TextSelectionGestureDetectorState = _TextSelectionGestureDetectorState;
class _TransparentTapGestureRecognizer extends tap_1.TapGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this.className = '_TransparentTapGestureRecognizer';
    }
}
exports._TransparentTapGestureRecognizer = _TransparentTapGestureRecognizer;
class ClipboardStatusNotifier extends change_notifier_1.ValueNotifier {
    constructor(namedParameters = {}) {
        super();
        this['mx_value'] = namedParameters.value;
        this.className = 'ClipboardStatusNotifier';
    }
}
exports.ClipboardStatusNotifier = ClipboardStatusNotifier;
var ClipboardStatus;
(function (ClipboardStatus) {
    ClipboardStatus["pasteable"] = "{ \"_name\": \"ClipboardStatus.pasteable\", \"index\": 0 }";
    ClipboardStatus["unknown"] = "{ \"_name\": \"ClipboardStatus.unknown\", \"index\": 1 }";
    ClipboardStatus["notPasteable"] = "{ \"_name\": \"ClipboardStatus.notPasteable\", \"index\": 2 }";
})(ClipboardStatus || (ClipboardStatus = {}));
exports.ClipboardStatus = ClipboardStatus;
;
