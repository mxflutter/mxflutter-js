// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Matrix4 } from '../../../vector-math-64';
import { ValueNotifier } from '../foundation/change-notifier';
import { Offset } from '../../../mx-dart-sdk';
import { Axis } from '../painting/basic-types';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { Key } from '../foundation/key';
import { EdgeInsets } from '../painting/edge-insets';
import { StatefulWidget, Widget, State, GlobalKey } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class InteractiveViewer extends StatefulWidget {
  alignPanAxis: boolean;
  boundaryMargin: EdgeInsets;
  child: MXWidget;
  constrained: boolean;
  panEnabled: boolean;
  scaleEnabled: boolean;
  maxScale: number;
  minScale: number;
  onInteractionEnd: any;
  onInteractionStart: any;
  onInteractionUpdate: any;
  transformationController: TransformationController;
  public constructor(namedParameters: {key?: Key, alignPanAxis?: boolean, boundaryMargin?: EdgeInsets, constrained?: boolean, maxScale?: number, minScale?: number, onInteractionEnd?: any, onInteractionStart?: any, onInteractionUpdate?: any, panEnabled?: boolean, scaleEnabled?: boolean, transformationController?: TransformationController, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.alignPanAxis = namedParameters.alignPanAxis;
    this.boundaryMargin = namedParameters.boundaryMargin;
    this.constrained = namedParameters.constrained;
    this.maxScale = namedParameters.maxScale;
    this.minScale = namedParameters.minScale;
    this.onInteractionEnd = namedParameters.onInteractionEnd;
    this.onInteractionStart = namedParameters.onInteractionStart;
    this.onInteractionUpdate = namedParameters.onInteractionUpdate;
    this.panEnabled = namedParameters.panEnabled;
    this.scaleEnabled = namedParameters.scaleEnabled;
    this.transformationController = namedParameters.transformationController;
    this.child = namedParameters.child;
    this.className = 'InteractiveViewer';
  }
}
export { InteractiveViewer };
class _InteractiveViewerState extends State {
  transformationController: TransformationController;
  childKey: GlobalKey;
  parentKey: GlobalKey;
  animation: Animation;
  controller: AnimationController;
  panAxis: Axis;
  referenceFocalPoint: Offset;
  scaleStart: number;
  rotationStart: number;
  currentRotation: number;
  gestureType: _GestureType;
  rotateEnabled: boolean;
}
export { _InteractiveViewerState };
class TransformationController extends ValueNotifier {
  public constructor(value?: Matrix4) {
    super();
    this['value'] = value;
    this.className = 'TransformationController';
  }
}
export { TransformationController };
enum _GestureType {
  pan = '{ "_name": "_GestureType.pan", "index": 0 }',
  scale = '{ "_name": "_GestureType.scale", "index": 1 }',
  rotate = '{ "_name": "_GestureType.rotate", "index": 2 }',
};

export { _GestureType };
