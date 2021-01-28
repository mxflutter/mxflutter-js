//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DragUpdateDetails } from '../gestures/drag-details';
import { PointerDownEvent } from '../gestures/events';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { ForcePressGestureRecognizer } from '../gestures/force-press';
import { ScaleGestureRecognizer } from '../gestures/scale';
import {
  VerticalDragGestureRecognizer,
  HorizontalDragGestureRecognizer,
  PanGestureRecognizer,
} from '../gestures/monodrag';
import { LongPressGestureRecognizer } from '../gestures/long-press';
import { DoubleTapGestureRecognizer } from '../gestures/multitap';
import { TapGestureRecognizer } from '../gestures/tap';
import { Key } from '../foundation/key';
import { DragStartBehavior, GestureRecognizer } from '../gestures/recognizer';
import { HitTestBehavior, RenderSemanticsGestureHandler } from '../rendering/proxy-box';
import {
  StatelessWidget$,
  Widget,
  BuildContext$,
  StatefulWidget$,
  State$,
  SingleChildRenderObjectWidget,
} from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class GestureRecognizerFactory extends MXDartClass {}
export { GestureRecognizerFactory };
class GestureRecognizerFactoryWithHandlers extends GestureRecognizerFactory {
  __mx_constructor: any;
  initializer: any;
  public constructor(_constructor?: any, _initializer?: any) {
    super();
    this.__mx_constructor = _constructor;
    this.initializer = _initializer;
    this.className = 'GestureRecognizerFactoryWithHandlers';
  }
}
export { GestureRecognizerFactoryWithHandlers };
class GestureDetector extends StatelessWidget$ {
  child: MXWidget;
  onTapDown: any;
  onTapUp: any;
  onTap: any;
  onTapCancel: any;
  onSecondaryTap: any;
  onSecondaryTapDown: any;
  onSecondaryTapUp: any;
  onSecondaryTapCancel: any;
  onDoubleTap: any;
  onLongPress: any;
  onLongPressStart: any;
  onLongPressMoveUpdate: any;
  onLongPressUp: any;
  onLongPressEnd: any;
  onSecondaryLongPress: any;
  onSecondaryLongPressStart: any;
  onSecondaryLongPressMoveUpdate: any;
  onSecondaryLongPressUp: any;
  onSecondaryLongPressEnd: any;
  onVerticalDragDown: any;
  onVerticalDragStart: any;
  onVerticalDragUpdate: any;
  onVerticalDragEnd: any;
  onVerticalDragCancel: any;
  onHorizontalDragDown: any;
  onHorizontalDragStart: any;
  onHorizontalDragUpdate: any;
  onHorizontalDragEnd: any;
  onHorizontalDragCancel: any;
  onPanDown: any;
  onPanStart: any;
  onPanUpdate: any;
  onPanEnd: any;
  onPanCancel: any;
  onScaleStart: any;
  onScaleUpdate: any;
  onScaleEnd: any;
  onForcePressStart: any;
  onForcePressPeak: any;
  onForcePressUpdate: any;
  onForcePressEnd: any;
  behavior: HitTestBehavior;
  excludeFromSemantics: boolean;
  dragStartBehavior: DragStartBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      onTapDown?: any;
      onTapUp?: any;
      onTap?: any;
      onTapCancel?: any;
      onSecondaryTap?: any;
      onSecondaryTapDown?: any;
      onSecondaryTapUp?: any;
      onSecondaryTapCancel?: any;
      onDoubleTap?: any;
      onLongPress?: any;
      onLongPressStart?: any;
      onLongPressMoveUpdate?: any;
      onLongPressUp?: any;
      onLongPressEnd?: any;
      onSecondaryLongPress?: any;
      onSecondaryLongPressStart?: any;
      onSecondaryLongPressMoveUpdate?: any;
      onSecondaryLongPressUp?: any;
      onSecondaryLongPressEnd?: any;
      onVerticalDragDown?: any;
      onVerticalDragStart?: any;
      onVerticalDragUpdate?: any;
      onVerticalDragEnd?: any;
      onVerticalDragCancel?: any;
      onHorizontalDragDown?: any;
      onHorizontalDragStart?: any;
      onHorizontalDragUpdate?: any;
      onHorizontalDragEnd?: any;
      onHorizontalDragCancel?: any;
      onForcePressStart?: any;
      onForcePressPeak?: any;
      onForcePressUpdate?: any;
      onForcePressEnd?: any;
      onPanDown?: any;
      onPanStart?: any;
      onPanUpdate?: any;
      onPanEnd?: any;
      onPanCancel?: any;
      onScaleStart?: any;
      onScaleUpdate?: any;
      onScaleEnd?: any;
      behavior?: HitTestBehavior;
      excludeFromSemantics?: boolean;
      dragStartBehavior?: DragStartBehavior;
    } = {},
  ) {
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
  child: MXWidget;
  gestures: Map<any, any>;
  behavior: HitTestBehavior;
  excludeFromSemantics: boolean;
  semantics: SemanticsGestureDelegate;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      gestures?: Map<any, any>;
      behavior?: HitTestBehavior;
      excludeFromSemantics?: boolean;
      semantics?: SemanticsGestureDelegate;
    } = {},
  ) {
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
  recognizers: Map<any, any>;
  semantics: SemanticsGestureDelegate;
}
export { RawGestureDetectorState };
class _GestureSemantics extends SingleChildRenderObjectWidget {
  assignSemantics: any;
  public constructor(namedParameters: { key?: Key; child?: MXWidget; assignSemantics?: any } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.assignSemantics = namedParameters.assignSemantics;
    this.className = '_GestureSemantics';
  }
}
export { _GestureSemantics };
abstract class SemanticsGestureDelegate extends MXDartClass {}
export { SemanticsGestureDelegate };
class _DefaultSemanticsGestureDelegate extends SemanticsGestureDelegate {
  detectorState: RawGestureDetectorState;
  public constructor(detectorState?: RawGestureDetectorState) {
    super();
    this.detectorState = detectorState;
    this.className = '_DefaultSemanticsGestureDelegate';
  }
}
export { _DefaultSemanticsGestureDelegate };
