//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class PointerEvent extends MXDartClass {
}
export { PointerEvent };
class PointerAddedEvent extends PointerEvent {
    constructor(namedParameters = {}) {
        super();
        this['timeStamp'] = namedParameters.timeStamp;
        this['kind'] = namedParameters.kind;
        this['device'] = namedParameters.device;
        this['position'] = namedParameters.position;
        this['localPosition'] = namedParameters.localPosition;
        this['obscured'] = namedParameters.obscured;
        this['pressureMin'] = namedParameters.pressureMin;
        this['pressureMax'] = namedParameters.pressureMax;
        this['distance'] = namedParameters.distance;
        this['distanceMax'] = namedParameters.distanceMax;
        this['radiusMin'] = namedParameters.radiusMin;
        this['radiusMax'] = namedParameters.radiusMax;
        this['orientation'] = namedParameters.orientation;
        this['tilt'] = namedParameters.tilt;
        this['transform'] = namedParameters.transform;
        this['original'] = namedParameters.original;
        this['embedderId'] = namedParameters.embedderId;
        this.className = 'PointerAddedEvent';
    }
}
export { PointerAddedEvent };
class PointerRemovedEvent extends PointerEvent {
    constructor(namedParameters = {}) {
        super();
        this['timeStamp'] = namedParameters.timeStamp;
        this['kind'] = namedParameters.kind;
        this['device'] = namedParameters.device;
        this['position'] = namedParameters.position;
        this['localPosition'] = namedParameters.localPosition;
        this['obscured'] = namedParameters.obscured;
        this['pressureMin'] = namedParameters.pressureMin;
        this['pressureMax'] = namedParameters.pressureMax;
        this['distanceMax'] = namedParameters.distanceMax;
        this['radiusMin'] = namedParameters.radiusMin;
        this['radiusMax'] = namedParameters.radiusMax;
        this['transform'] = namedParameters.transform;
        this['original'] = namedParameters.original;
        this['embedderId'] = namedParameters.embedderId;
        this.className = 'PointerRemovedEvent';
    }
}
export { PointerRemovedEvent };
class PointerHoverEvent extends PointerEvent {
    constructor(namedParameters = {}) {
        super();
        this['timeStamp'] = namedParameters.timeStamp;
        this['kind'] = namedParameters.kind;
        this['device'] = namedParameters.device;
        this['position'] = namedParameters.position;
        this['localPosition'] = namedParameters.localPosition;
        this['delta'] = namedParameters.delta;
        this['localDelta'] = namedParameters.localDelta;
        this['buttons'] = namedParameters.buttons;
        this['obscured'] = namedParameters.obscured;
        this['pressureMin'] = namedParameters.pressureMin;
        this['pressureMax'] = namedParameters.pressureMax;
        this['distance'] = namedParameters.distance;
        this['distanceMax'] = namedParameters.distanceMax;
        this['size'] = namedParameters.size;
        this['radiusMajor'] = namedParameters.radiusMajor;
        this['radiusMinor'] = namedParameters.radiusMinor;
        this['radiusMin'] = namedParameters.radiusMin;
        this['radiusMax'] = namedParameters.radiusMax;
        this['orientation'] = namedParameters.orientation;
        this['tilt'] = namedParameters.tilt;
        this['synthesized'] = namedParameters.synthesized;
        this['transform'] = namedParameters.transform;
        this['original'] = namedParameters.original;
        this['embedderId'] = namedParameters.embedderId;
        this.className = 'PointerHoverEvent';
    }
}
export { PointerHoverEvent };
class PointerEnterEvent extends PointerEvent {
    constructor(namedParameters = {}) {
        super();
        this['timeStamp'] = namedParameters.timeStamp;
        this['kind'] = namedParameters.kind;
        this['device'] = namedParameters.device;
        this['position'] = namedParameters.position;
        this['localPosition'] = namedParameters.localPosition;
        this['delta'] = namedParameters.delta;
        this['localDelta'] = namedParameters.localDelta;
        this['buttons'] = namedParameters.buttons;
        this['obscured'] = namedParameters.obscured;
        this['pressureMin'] = namedParameters.pressureMin;
        this['pressureMax'] = namedParameters.pressureMax;
        this['distance'] = namedParameters.distance;
        this['distanceMax'] = namedParameters.distanceMax;
        this['size'] = namedParameters.size;
        this['radiusMajor'] = namedParameters.radiusMajor;
        this['radiusMinor'] = namedParameters.radiusMinor;
        this['radiusMin'] = namedParameters.radiusMin;
        this['radiusMax'] = namedParameters.radiusMax;
        this['orientation'] = namedParameters.orientation;
        this['tilt'] = namedParameters.tilt;
        this['down'] = namedParameters.down;
        this['synthesized'] = namedParameters.synthesized;
        this['transform'] = namedParameters.transform;
        this['original'] = namedParameters.original;
        this['embedderId'] = namedParameters.embedderId;
        this.className = 'PointerEnterEvent';
    }
    static fromHoverEvent(event) {
        var jsObj = new PointerEnterEvent();
        jsObj['event'] = event;
        jsObj['constructorName'] = 'fromHoverEvent';
        return jsObj;
    }
    static fromMouseEvent(event) {
        var jsObj = new PointerEnterEvent();
        jsObj['event'] = event;
        jsObj['constructorName'] = 'fromMouseEvent';
        return jsObj;
    }
}
export { PointerEnterEvent };
class PointerExitEvent extends PointerEvent {
    constructor(namedParameters = {}) {
        super();
        this['timeStamp'] = namedParameters.timeStamp;
        this['kind'] = namedParameters.kind;
        this['device'] = namedParameters.device;
        this['position'] = namedParameters.position;
        this['localPosition'] = namedParameters.localPosition;
        this['delta'] = namedParameters.delta;
        this['localDelta'] = namedParameters.localDelta;
        this['buttons'] = namedParameters.buttons;
        this['obscured'] = namedParameters.obscured;
        this['pressureMin'] = namedParameters.pressureMin;
        this['pressureMax'] = namedParameters.pressureMax;
        this['distance'] = namedParameters.distance;
        this['distanceMax'] = namedParameters.distanceMax;
        this['size'] = namedParameters.size;
        this['radiusMajor'] = namedParameters.radiusMajor;
        this['radiusMinor'] = namedParameters.radiusMinor;
        this['radiusMin'] = namedParameters.radiusMin;
        this['radiusMax'] = namedParameters.radiusMax;
        this['orientation'] = namedParameters.orientation;
        this['tilt'] = namedParameters.tilt;
        this['down'] = namedParameters.down;
        this['synthesized'] = namedParameters.synthesized;
        this['transform'] = namedParameters.transform;
        this['original'] = namedParameters.original;
        this['embedderId'] = namedParameters.embedderId;
        this.className = 'PointerExitEvent';
    }
    static fromHoverEvent(event) {
        var jsObj = new PointerExitEvent();
        jsObj['event'] = event;
        jsObj['constructorName'] = 'fromHoverEvent';
        return jsObj;
    }
    static fromMouseEvent(event) {
        var jsObj = new PointerExitEvent();
        jsObj['event'] = event;
        jsObj['constructorName'] = 'fromMouseEvent';
        return jsObj;
    }
}
export { PointerExitEvent };
class PointerDownEvent extends PointerEvent {
    constructor(namedParameters = {}) {
        super();
        this['timeStamp'] = namedParameters.timeStamp;
        this['pointer'] = namedParameters.pointer;
        this['kind'] = namedParameters.kind;
        this['device'] = namedParameters.device;
        this['position'] = namedParameters.position;
        this['localPosition'] = namedParameters.localPosition;
        this['buttons'] = namedParameters.buttons;
        this['obscured'] = namedParameters.obscured;
        this['pressure'] = namedParameters.pressure;
        this['pressureMin'] = namedParameters.pressureMin;
        this['pressureMax'] = namedParameters.pressureMax;
        this['distanceMax'] = namedParameters.distanceMax;
        this['size'] = namedParameters.size;
        this['radiusMajor'] = namedParameters.radiusMajor;
        this['radiusMinor'] = namedParameters.radiusMinor;
        this['radiusMin'] = namedParameters.radiusMin;
        this['radiusMax'] = namedParameters.radiusMax;
        this['orientation'] = namedParameters.orientation;
        this['tilt'] = namedParameters.tilt;
        this['transform'] = namedParameters.transform;
        this['original'] = namedParameters.original;
        this['embedderId'] = namedParameters.embedderId;
        this.className = 'PointerDownEvent';
    }
}
export { PointerDownEvent };
class PointerMoveEvent extends PointerEvent {
    constructor(namedParameters = {}) {
        super();
        this['timeStamp'] = namedParameters.timeStamp;
        this['pointer'] = namedParameters.pointer;
        this['kind'] = namedParameters.kind;
        this['device'] = namedParameters.device;
        this['position'] = namedParameters.position;
        this['localPosition'] = namedParameters.localPosition;
        this['delta'] = namedParameters.delta;
        this['localDelta'] = namedParameters.localDelta;
        this['buttons'] = namedParameters.buttons;
        this['obscured'] = namedParameters.obscured;
        this['pressure'] = namedParameters.pressure;
        this['pressureMin'] = namedParameters.pressureMin;
        this['pressureMax'] = namedParameters.pressureMax;
        this['distanceMax'] = namedParameters.distanceMax;
        this['size'] = namedParameters.size;
        this['radiusMajor'] = namedParameters.radiusMajor;
        this['radiusMinor'] = namedParameters.radiusMinor;
        this['radiusMin'] = namedParameters.radiusMin;
        this['radiusMax'] = namedParameters.radiusMax;
        this['orientation'] = namedParameters.orientation;
        this['tilt'] = namedParameters.tilt;
        this['platformData'] = namedParameters.platformData;
        this['synthesized'] = namedParameters.synthesized;
        this['transform'] = namedParameters.transform;
        this['original'] = namedParameters.original;
        this['embedderId'] = namedParameters.embedderId;
        this.className = 'PointerMoveEvent';
    }
}
export { PointerMoveEvent };
class PointerUpEvent extends PointerEvent {
    constructor(namedParameters = {}) {
        super();
        this['timeStamp'] = namedParameters.timeStamp;
        this['pointer'] = namedParameters.pointer;
        this['kind'] = namedParameters.kind;
        this['device'] = namedParameters.device;
        this['position'] = namedParameters.position;
        this['localPosition'] = namedParameters.localPosition;
        this['buttons'] = namedParameters.buttons;
        this['obscured'] = namedParameters.obscured;
        this['pressure'] = namedParameters.pressure;
        this['pressureMin'] = namedParameters.pressureMin;
        this['pressureMax'] = namedParameters.pressureMax;
        this['distance'] = namedParameters.distance;
        this['distanceMax'] = namedParameters.distanceMax;
        this['size'] = namedParameters.size;
        this['radiusMajor'] = namedParameters.radiusMajor;
        this['radiusMinor'] = namedParameters.radiusMinor;
        this['radiusMin'] = namedParameters.radiusMin;
        this['radiusMax'] = namedParameters.radiusMax;
        this['orientation'] = namedParameters.orientation;
        this['tilt'] = namedParameters.tilt;
        this['transform'] = namedParameters.transform;
        this['original'] = namedParameters.original;
        this['embedderId'] = namedParameters.embedderId;
        this.className = 'PointerUpEvent';
    }
}
export { PointerUpEvent };
class PointerSignalEvent extends PointerEvent {
}
export { PointerSignalEvent };
class PointerScrollEvent extends PointerSignalEvent {
    constructor(namedParameters = {}) {
        super();
        this.timeStamp = namedParameters.timeStamp;
        this.kind = namedParameters.kind;
        this.device = namedParameters.device;
        this.position = namedParameters.position;
        this.localPosition = namedParameters.localPosition;
        this.scrollDelta = namedParameters.scrollDelta;
        this.transform = namedParameters.transform;
        this['__mx_original'] = namedParameters.original;
        this.embedderId = namedParameters.embedderId;
        this.className = 'PointerScrollEvent';
    }
}
export { PointerScrollEvent };
class PointerCancelEvent extends PointerEvent {
    constructor(namedParameters = {}) {
        super();
        this['timeStamp'] = namedParameters.timeStamp;
        this['pointer'] = namedParameters.pointer;
        this['kind'] = namedParameters.kind;
        this['device'] = namedParameters.device;
        this['position'] = namedParameters.position;
        this['localPosition'] = namedParameters.localPosition;
        this['buttons'] = namedParameters.buttons;
        this['obscured'] = namedParameters.obscured;
        this['pressureMin'] = namedParameters.pressureMin;
        this['pressureMax'] = namedParameters.pressureMax;
        this['distance'] = namedParameters.distance;
        this['distanceMax'] = namedParameters.distanceMax;
        this['size'] = namedParameters.size;
        this['radiusMajor'] = namedParameters.radiusMajor;
        this['radiusMinor'] = namedParameters.radiusMinor;
        this['radiusMin'] = namedParameters.radiusMin;
        this['radiusMax'] = namedParameters.radiusMax;
        this['orientation'] = namedParameters.orientation;
        this['tilt'] = namedParameters.tilt;
        this['transform'] = namedParameters.transform;
        this['original'] = namedParameters.original;
        this['embedderId'] = namedParameters.embedderId;
        this.className = 'PointerCancelEvent';
    }
}
export { PointerCancelEvent };
