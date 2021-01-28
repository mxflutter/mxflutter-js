//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { CompoundAnimation } from '../animation/animations';
import { Animation } from '../animation/animation';
import { Offset } from '../../../mx-dart-sdk';
import { ScaffoldPrelayoutGeometry } from './scaffold';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class FloatingActionButtonLocation extends MXDartClass {
  static get startTop() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'startTop';
    return jsObj;
  }
  static get miniStartTop() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'miniStartTop';
    return jsObj;
  }
  static get centerTop() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'centerTop';
    return jsObj;
  }
  static get miniCenterTop() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'miniCenterTop';
    return jsObj;
  }
  static get endTop() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'endTop';
    return jsObj;
  }
  static get miniEndTop() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'miniEndTop';
    return jsObj;
  }
  static get startFloat() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'startFloat';
    return jsObj;
  }
  static get miniStartFloat() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'miniStartFloat';
    return jsObj;
  }
  static get centerFloat() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'centerFloat';
    return jsObj;
  }
  static get miniCenterFloat() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'miniCenterFloat';
    return jsObj;
  }
  static get endFloat() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'endFloat';
    return jsObj;
  }
  static get miniEndFloat() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'miniEndFloat';
    return jsObj;
  }
  static get startDocked() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'startDocked';
    return jsObj;
  }
  static get miniStartDocked() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'miniStartDocked';
    return jsObj;
  }
  static get centerDocked() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'centerDocked';
    return jsObj;
  }
  static get miniCenterDocked() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'miniCenterDocked';
    return jsObj;
  }
  static get endDocked() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'endDocked';
    return jsObj;
  }
  static get miniEndDocked() {
    var jsObj = new (class MXFloatingActionButtonLocation extends FloatingActionButtonLocation {})();
    jsObj['className'] = 'FloatingActionButtonLocation';
    jsObj['constructorName'] = 'miniEndDocked';
    return jsObj;
  }
}
export { FloatingActionButtonLocation };
abstract class StandardFabLocation extends FloatingActionButtonLocation {}
export { StandardFabLocation };
abstract class FabTopOffsetY extends StandardFabLocation {}
export { FabTopOffsetY };
abstract class FabFloatOffsetY extends StandardFabLocation {}
export { FabFloatOffsetY };
abstract class FabDockedOffsetY extends StandardFabLocation {}
export { FabDockedOffsetY };
abstract class FabStartOffsetX extends StandardFabLocation {}
export { FabStartOffsetX };
abstract class FabCenterOffsetX extends StandardFabLocation {}
export { FabCenterOffsetX };
abstract class FabEndOffsetX extends StandardFabLocation {}
export { FabEndOffsetX };
abstract class FabMiniOffsetAdjustment extends StandardFabLocation {}
export { FabMiniOffsetAdjustment };
class _StartTopFabLocation extends StandardFabLocation {}
export { _StartTopFabLocation };
class _MiniStartTopFabLocation extends StandardFabLocation {}
export { _MiniStartTopFabLocation };
class _CenterTopFabLocation extends StandardFabLocation {}
export { _CenterTopFabLocation };
class _MiniCenterTopFabLocation extends StandardFabLocation {}
export { _MiniCenterTopFabLocation };
class _EndTopFabLocation extends StandardFabLocation {}
export { _EndTopFabLocation };
class _MiniEndTopFabLocation extends StandardFabLocation {}
export { _MiniEndTopFabLocation };
class _StartFloatFabLocation extends StandardFabLocation {}
export { _StartFloatFabLocation };
class _MiniStartFloatFabLocation extends StandardFabLocation {}
export { _MiniStartFloatFabLocation };
class _CenterFloatFabLocation extends StandardFabLocation {}
export { _CenterFloatFabLocation };
class _MiniCenterFloatFabLocation extends StandardFabLocation {}
export { _MiniCenterFloatFabLocation };
class _EndFloatFabLocation extends StandardFabLocation {}
export { _EndFloatFabLocation };
class _MiniEndFloatFabLocation extends StandardFabLocation {}
export { _MiniEndFloatFabLocation };
class _StartDockedFabLocation extends StandardFabLocation {}
export { _StartDockedFabLocation };
class _MiniStartDockedFabLocation extends StandardFabLocation {}
export { _MiniStartDockedFabLocation };
class _CenterDockedFabLocation extends StandardFabLocation {}
export { _CenterDockedFabLocation };
class _MiniCenterDockedFabLocation extends StandardFabLocation {}
export { _MiniCenterDockedFabLocation };
class _EndDockedFabLocation extends StandardFabLocation {}
export { _EndDockedFabLocation };
class _MiniEndDockedFabLocation extends StandardFabLocation {}
export { _MiniEndDockedFabLocation };
abstract class FloatingActionButtonAnimator extends MXDartClass {
  static get scaling() {
    var jsObj = new (class MXFloatingActionButtonAnimator extends FloatingActionButtonAnimator {})();
    jsObj['className'] = 'FloatingActionButtonAnimator';
    jsObj['constructorName'] = 'scaling';
    return jsObj;
  }
}
export { FloatingActionButtonAnimator };
class _ScalingFabMotionAnimator extends FloatingActionButtonAnimator {}
export { _ScalingFabMotionAnimator };
class _AnimationSwap extends CompoundAnimation {
  parent: Animation;
  swapThreshold: number;
  public constructor(first?: Animation, next?: Animation, parent?: Animation, swapThreshold?: number) {
    super();
    this.first = first;
    this.next = next;
    this.parent = parent;
    this.swapThreshold = swapThreshold;
    this.className = '_AnimationSwap';
  }
}
export { _AnimationSwap };
