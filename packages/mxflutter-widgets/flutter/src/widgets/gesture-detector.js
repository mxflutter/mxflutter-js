//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$, StatefulWidget$, State$, SingleChildRenderObjectWidget, } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class GestureRecognizerFactory extends MXDartClass {
}
export { GestureRecognizerFactory };
class GestureRecognizerFactoryWithHandlers extends GestureRecognizerFactory {
    constructor(_constructor, _initializer) {
        super();
        this.__mx_constructor = _constructor;
        this.initializer = _initializer;
        this.className = 'GestureRecognizerFactoryWithHandlers';
    }
}
export { GestureRecognizerFactoryWithHandlers };
class GestureDetector extends StatelessWidget$ {
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
        this.onDoubleTap = namedParameters.onDoubleTap;
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
export { GestureDetector };
class RawGestureDetector extends StatefulWidget$ {
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
export { RawGestureDetector };
class RawGestureDetectorState extends State$ {
}
export { RawGestureDetectorState };
class _GestureSemantics extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.assignSemantics = namedParameters.assignSemantics;
        this.className = '_GestureSemantics';
    }
}
export { _GestureSemantics };
class SemanticsGestureDelegate extends MXDartClass {
}
export { SemanticsGestureDelegate };
class _DefaultSemanticsGestureDelegate extends SemanticsGestureDelegate {
    constructor(detectorState) {
        super();
        this.detectorState = detectorState;
        this.className = '_DefaultSemanticsGestureDelegate';
    }
}
export { _DefaultSemanticsGestureDelegate };
