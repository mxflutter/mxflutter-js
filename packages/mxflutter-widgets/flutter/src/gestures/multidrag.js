//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { GestureRecognizer } from './recognizer';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class MultiDragPointerState extends MXDartClass {
}
export { MultiDragPointerState };
class MultiDragGestureRecognizer extends GestureRecognizer {
}
export { MultiDragGestureRecognizer };
class _ImmediatePointerState extends MultiDragPointerState {
    constructor(initialPosition) {
        super();
        this['initialPosition'] = initialPosition;
        this.className = '_ImmediatePointerState';
    }
}
export { _ImmediatePointerState };
class ImmediateMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'ImmediateMultiDragGestureRecognizer';
    }
}
export { ImmediateMultiDragGestureRecognizer };
class _HorizontalPointerState extends MultiDragPointerState {
    constructor(initialPosition) {
        super();
        this['initialPosition'] = initialPosition;
        this.className = '_HorizontalPointerState';
    }
}
export { _HorizontalPointerState };
class HorizontalMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'HorizontalMultiDragGestureRecognizer';
    }
}
export { HorizontalMultiDragGestureRecognizer };
class _VerticalPointerState extends MultiDragPointerState {
    constructor(initialPosition) {
        super();
        this['initialPosition'] = initialPosition;
        this.className = '_VerticalPointerState';
    }
}
export { _VerticalPointerState };
class VerticalMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'VerticalMultiDragGestureRecognizer';
    }
}
export { VerticalMultiDragGestureRecognizer };
class _DelayedPointerState extends MultiDragPointerState {
    constructor(initialPosition, delay) {
        super();
        this.initialPosition = initialPosition;
        this['delay'] = delay;
        this.className = '_DelayedPointerState';
    }
}
export { _DelayedPointerState };
class DelayedMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.delay = namedParameters.delay;
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'DelayedMultiDragGestureRecognizer';
    }
}
export { DelayedMultiDragGestureRecognizer };
