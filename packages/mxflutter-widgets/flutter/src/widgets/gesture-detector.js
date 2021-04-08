"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DefaultSemanticsGestureDelegate = exports.SemanticsGestureDelegate = exports._GestureSemantics = exports.RawGestureDetectorState = exports.RawGestureDetector = exports.GestureDetector = exports.GestureRecognizerFactoryWithHandlers = exports.GestureRecognizerFactory = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class GestureRecognizerFactory extends mxflutter_base_1.MXDartClass {
}
exports.GestureRecognizerFactory = GestureRecognizerFactory;
class GestureRecognizerFactoryWithHandlers extends GestureRecognizerFactory {
    constructor(_constructor, _initializer) {
        super();
        this.mx_constructor = _constructor;
        this.initializer = _initializer;
        this.className = 'GestureRecognizerFactoryWithHandlers';
    }
}
exports.GestureRecognizerFactoryWithHandlers = GestureRecognizerFactoryWithHandlers;
class GestureDetector extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.onTapDown = namedParameters.onTapDown;
        this.onTapUp = namedParameters.onTapUp;
        this.onTap = namedParameters.onTap;
        this.onTapCancel = namedParameters.onTapCancel;
        this.onSecondaryTap = namedParameters.onSecondaryTap;
        this.onSecondaryTapDown = namedParameters.onSecondaryTapDown;
        this.onSecondaryTapUp = namedParameters.onSecondaryTapUp;
        this.onSecondaryTapCancel = namedParameters.onSecondaryTapCancel;
        this.onTertiaryTapDown = namedParameters.onTertiaryTapDown;
        this.onTertiaryTapUp = namedParameters.onTertiaryTapUp;
        this.onTertiaryTapCancel = namedParameters.onTertiaryTapCancel;
        this.onDoubleTapDown = namedParameters.onDoubleTapDown;
        this.onDoubleTap = namedParameters.onDoubleTap;
        this.onDoubleTapCancel = namedParameters.onDoubleTapCancel;
        this.onLongPress = namedParameters.onLongPress;
        this.onLongPressStart = namedParameters.onLongPressStart;
        this.onLongPressMoveUpdate = namedParameters.onLongPressMoveUpdate;
        this.onLongPressUp = namedParameters.onLongPressUp;
        this.onLongPressEnd = namedParameters.onLongPressEnd;
        this.onSecondaryLongPress = namedParameters.onSecondaryLongPress;
        this.onSecondaryLongPressStart = namedParameters.onSecondaryLongPressStart;
        this.onSecondaryLongPressMoveUpdate = namedParameters.onSecondaryLongPressMoveUpdate;
        this.onSecondaryLongPressUp = namedParameters.onSecondaryLongPressUp;
        this.onSecondaryLongPressEnd = namedParameters.onSecondaryLongPressEnd;
        this.onVerticalDragDown = namedParameters.onVerticalDragDown;
        this.onVerticalDragStart = namedParameters.onVerticalDragStart;
        this.onVerticalDragUpdate = namedParameters.onVerticalDragUpdate;
        this.onVerticalDragEnd = namedParameters.onVerticalDragEnd;
        this.onVerticalDragCancel = namedParameters.onVerticalDragCancel;
        this.onHorizontalDragDown = namedParameters.onHorizontalDragDown;
        this.onHorizontalDragStart = namedParameters.onHorizontalDragStart;
        this.onHorizontalDragUpdate = namedParameters.onHorizontalDragUpdate;
        this.onHorizontalDragEnd = namedParameters.onHorizontalDragEnd;
        this.onHorizontalDragCancel = namedParameters.onHorizontalDragCancel;
        this.onForcePressStart = namedParameters.onForcePressStart;
        this.onForcePressPeak = namedParameters.onForcePressPeak;
        this.onForcePressUpdate = namedParameters.onForcePressUpdate;
        this.onForcePressEnd = namedParameters.onForcePressEnd;
        this.onPanDown = namedParameters.onPanDown;
        this.onPanStart = namedParameters.onPanStart;
        this.onPanUpdate = namedParameters.onPanUpdate;
        this.onPanEnd = namedParameters.onPanEnd;
        this.onPanCancel = namedParameters.onPanCancel;
        this.onScaleStart = namedParameters.onScaleStart;
        this.onScaleUpdate = namedParameters.onScaleUpdate;
        this.onScaleEnd = namedParameters.onScaleEnd;
        this.behavior = namedParameters.behavior;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.className = 'GestureDetector';
    }
}
exports.GestureDetector = GestureDetector;
class RawGestureDetector extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.gestures = namedParameters.gestures;
        this.behavior = namedParameters.behavior;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.semantics = namedParameters.semantics;
        this.className = 'RawGestureDetector';
    }
}
exports.RawGestureDetector = RawGestureDetector;
class RawGestureDetectorState extends framework_1.State {
}
exports.RawGestureDetectorState = RawGestureDetectorState;
class _GestureSemantics extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.assignSemantics = namedParameters.assignSemantics;
        this.className = '_GestureSemantics';
    }
}
exports._GestureSemantics = _GestureSemantics;
class SemanticsGestureDelegate extends mxflutter_base_1.MXDartClass {
}
exports.SemanticsGestureDelegate = SemanticsGestureDelegate;
class _DefaultSemanticsGestureDelegate extends SemanticsGestureDelegate {
    constructor(detectorState) {
        super();
        this.detectorState = detectorState;
        this.className = '_DefaultSemanticsGestureDelegate';
    }
}
exports._DefaultSemanticsGestureDelegate = _DefaultSemanticsGestureDelegate;
