"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AnimationSwap = exports._ScalingFabMotionAnimator = exports.FloatingActionButtonAnimator = exports._MiniEndDockedFabLocation = exports._EndDockedFabLocation = exports._MiniCenterDockedFabLocation = exports._CenterDockedFabLocation = exports._MiniStartDockedFabLocation = exports._StartDockedFabLocation = exports._MiniEndFloatFabLocation = exports._EndFloatFabLocation = exports._MiniCenterFloatFabLocation = exports._CenterFloatFabLocation = exports._MiniStartFloatFabLocation = exports._StartFloatFabLocation = exports._MiniEndTopFabLocation = exports._EndTopFabLocation = exports._MiniCenterTopFabLocation = exports._CenterTopFabLocation = exports._MiniStartTopFabLocation = exports._StartTopFabLocation = exports.FabMiniOffsetAdjustment = exports.FabEndOffsetX = exports.FabCenterOffsetX = exports.FabStartOffsetX = exports.FabDockedOffsetY = exports.FabFloatOffsetY = exports.FabTopOffsetY = exports.StandardFabLocation = exports.FloatingActionButtonLocation = void 0;
const animations_1 = require("../animation/animations");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class FloatingActionButtonLocation extends mxflutter_base_1.MXDartClass {
    static get startTop() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'startTop';
        return jsObj;
    }
    static get miniStartTop() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'miniStartTop';
        return jsObj;
    }
    static get centerTop() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'centerTop';
        return jsObj;
    }
    static get miniCenterTop() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'miniCenterTop';
        return jsObj;
    }
    static get endTop() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'endTop';
        return jsObj;
    }
    static get miniEndTop() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'miniEndTop';
        return jsObj;
    }
    static get startFloat() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'startFloat';
        return jsObj;
    }
    static get miniStartFloat() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'miniStartFloat';
        return jsObj;
    }
    static get centerFloat() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'centerFloat';
        return jsObj;
    }
    static get miniCenterFloat() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'miniCenterFloat';
        return jsObj;
    }
    static get endFloat() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'endFloat';
        return jsObj;
    }
    static get miniEndFloat() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'miniEndFloat';
        return jsObj;
    }
    static get startDocked() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'startDocked';
        return jsObj;
    }
    static get miniStartDocked() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'miniStartDocked';
        return jsObj;
    }
    static get centerDocked() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'centerDocked';
        return jsObj;
    }
    static get miniCenterDocked() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'miniCenterDocked';
        return jsObj;
    }
    static get endDocked() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'endDocked';
        return jsObj;
    }
    static get miniEndDocked() {
        var jsObj = new class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {
        }();
        jsObj['className'] = 'FloatingActionButtonLocation';
        jsObj['constructorName'] = 'miniEndDocked';
        return jsObj;
    }
}
exports.FloatingActionButtonLocation = FloatingActionButtonLocation;
class StandardFabLocation extends FloatingActionButtonLocation {
}
exports.StandardFabLocation = StandardFabLocation;
class FabTopOffsetY extends StandardFabLocation {
}
exports.FabTopOffsetY = FabTopOffsetY;
class FabFloatOffsetY extends StandardFabLocation {
}
exports.FabFloatOffsetY = FabFloatOffsetY;
class FabDockedOffsetY extends StandardFabLocation {
}
exports.FabDockedOffsetY = FabDockedOffsetY;
class FabStartOffsetX extends StandardFabLocation {
}
exports.FabStartOffsetX = FabStartOffsetX;
class FabCenterOffsetX extends StandardFabLocation {
}
exports.FabCenterOffsetX = FabCenterOffsetX;
class FabEndOffsetX extends StandardFabLocation {
}
exports.FabEndOffsetX = FabEndOffsetX;
class FabMiniOffsetAdjustment extends StandardFabLocation {
}
exports.FabMiniOffsetAdjustment = FabMiniOffsetAdjustment;
class _StartTopFabLocation extends StandardFabLocation {
}
exports._StartTopFabLocation = _StartTopFabLocation;
class _MiniStartTopFabLocation extends StandardFabLocation {
}
exports._MiniStartTopFabLocation = _MiniStartTopFabLocation;
class _CenterTopFabLocation extends StandardFabLocation {
}
exports._CenterTopFabLocation = _CenterTopFabLocation;
class _MiniCenterTopFabLocation extends StandardFabLocation {
}
exports._MiniCenterTopFabLocation = _MiniCenterTopFabLocation;
class _EndTopFabLocation extends StandardFabLocation {
}
exports._EndTopFabLocation = _EndTopFabLocation;
class _MiniEndTopFabLocation extends StandardFabLocation {
}
exports._MiniEndTopFabLocation = _MiniEndTopFabLocation;
class _StartFloatFabLocation extends StandardFabLocation {
}
exports._StartFloatFabLocation = _StartFloatFabLocation;
class _MiniStartFloatFabLocation extends StandardFabLocation {
}
exports._MiniStartFloatFabLocation = _MiniStartFloatFabLocation;
class _CenterFloatFabLocation extends StandardFabLocation {
}
exports._CenterFloatFabLocation = _CenterFloatFabLocation;
class _MiniCenterFloatFabLocation extends StandardFabLocation {
}
exports._MiniCenterFloatFabLocation = _MiniCenterFloatFabLocation;
class _EndFloatFabLocation extends StandardFabLocation {
}
exports._EndFloatFabLocation = _EndFloatFabLocation;
class _MiniEndFloatFabLocation extends StandardFabLocation {
}
exports._MiniEndFloatFabLocation = _MiniEndFloatFabLocation;
class _StartDockedFabLocation extends StandardFabLocation {
}
exports._StartDockedFabLocation = _StartDockedFabLocation;
class _MiniStartDockedFabLocation extends StandardFabLocation {
}
exports._MiniStartDockedFabLocation = _MiniStartDockedFabLocation;
class _CenterDockedFabLocation extends StandardFabLocation {
}
exports._CenterDockedFabLocation = _CenterDockedFabLocation;
class _MiniCenterDockedFabLocation extends StandardFabLocation {
}
exports._MiniCenterDockedFabLocation = _MiniCenterDockedFabLocation;
class _EndDockedFabLocation extends StandardFabLocation {
}
exports._EndDockedFabLocation = _EndDockedFabLocation;
class _MiniEndDockedFabLocation extends StandardFabLocation {
}
exports._MiniEndDockedFabLocation = _MiniEndDockedFabLocation;
class FloatingActionButtonAnimator extends mxflutter_base_1.MXDartClass {
    static get scaling() {
        var jsObj = new class MXFloatingActionButtonAnimator extends FloatingActionButtonAnimator {
        }();
        jsObj['className'] = 'FloatingActionButtonAnimator';
        jsObj['constructorName'] = 'scaling';
        return jsObj;
    }
}
exports.FloatingActionButtonAnimator = FloatingActionButtonAnimator;
class _ScalingFabMotionAnimator extends FloatingActionButtonAnimator {
}
exports._ScalingFabMotionAnimator = _ScalingFabMotionAnimator;
class _AnimationSwap extends animations_1.CompoundAnimation {
    constructor(first, next, parent, swapThreshold) {
        super();
        this.first = first;
        this.next = next;
        this.parent = parent;
        this.swapThreshold = swapThreshold;
        this.className = '_AnimationSwap';
    }
}
exports._AnimationSwap = _AnimationSwap;
