//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class PlatformViewsRegistry extends MXDartClass {
}
export { PlatformViewsRegistry };
class PlatformViewsService extends MXDartClass {
}
export { PlatformViewsService };
class AndroidPointerProperties extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.id = namedParameters.id;
        this.toolType = namedParameters.toolType;
        this.className = 'AndroidPointerProperties';
    }
    static get kToolTypeUnknown() {
        return 0;
    }
    static get kToolTypeFinger() {
        return 1;
    }
    static get kToolTypeStylus() {
        return 2;
    }
    static get kToolTypeMouse() {
        return 3;
    }
    static get kToolTypeEraser() {
        return 4;
    }
}
export { AndroidPointerProperties };
class AndroidPointerCoords extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.orientation = namedParameters.orientation;
        this.pressure = namedParameters.pressure;
        this.size = namedParameters.size;
        this.toolMajor = namedParameters.toolMajor;
        this.toolMinor = namedParameters.toolMinor;
        this.touchMajor = namedParameters.touchMajor;
        this.touchMinor = namedParameters.touchMinor;
        this.x = namedParameters.x;
        this.y = namedParameters.y;
        this.className = 'AndroidPointerCoords';
    }
}
export { AndroidPointerCoords };
class AndroidMotionEvent extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.downTime = namedParameters.downTime;
        this.eventTime = namedParameters.eventTime;
        this.action = namedParameters.action;
        this.pointerCount = namedParameters.pointerCount;
        this.pointerProperties = namedParameters.pointerProperties;
        this.pointerCoords = namedParameters.pointerCoords;
        this.metaState = namedParameters.metaState;
        this.buttonState = namedParameters.buttonState;
        this.xPrecision = namedParameters.xPrecision;
        this.yPrecision = namedParameters.yPrecision;
        this.deviceId = namedParameters.deviceId;
        this.edgeFlags = namedParameters.edgeFlags;
        this.source = namedParameters.source;
        this.flags = namedParameters.flags;
        this.motionEventId = namedParameters.motionEventId;
        this.className = 'AndroidMotionEvent';
    }
}
export { AndroidMotionEvent };
var _AndroidViewState;
(function (_AndroidViewState) {
    _AndroidViewState["waitingForSize"] = "{ \"_name\": \"_AndroidViewState.waitingForSize\", \"index\": 0 }";
    _AndroidViewState["creating"] = "{ \"_name\": \"_AndroidViewState.creating\", \"index\": 1 }";
    _AndroidViewState["created"] = "{ \"_name\": \"_AndroidViewState.created\", \"index\": 2 }";
    _AndroidViewState["disposed"] = "{ \"_name\": \"_AndroidViewState.disposed\", \"index\": 3 }";
})(_AndroidViewState || (_AndroidViewState = {}));
export { _AndroidViewState };
class _AndroidMotionEventConverter extends MXDartClass {
}
export { _AndroidMotionEventConverter };
class PlatformViewController extends MXDartClass {
}
export { PlatformViewController };
class AndroidViewController extends PlatformViewController {
    static get kActionDown() {
        return 0;
    }
    static get kActionUp() {
        return 1;
    }
    static get kActionMove() {
        return 2;
    }
    static get kActionCancel() {
        return 3;
    }
    static get kActionPointerDown() {
        return 5;
    }
    static get kActionPointerUp() {
        return 6;
    }
    static get kAndroidLayoutDirectionLtr() {
        return 0;
    }
    static get kAndroidLayoutDirectionRtl() {
        return 1;
    }
}
export { AndroidViewController };
class SurfaceAndroidViewController extends AndroidViewController {
}
export { SurfaceAndroidViewController };
class TextureAndroidViewController extends AndroidViewController {
}
export { TextureAndroidViewController };
class UiKitViewController extends MXDartClass {
}
export { UiKitViewController };
