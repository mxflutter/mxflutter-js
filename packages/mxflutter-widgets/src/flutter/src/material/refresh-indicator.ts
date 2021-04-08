// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget, Widget, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _RefreshIndicatorMode {
  drag = '{ "_name": "_RefreshIndicatorMode.drag", "index": 0 }',
  armed = '{ "_name": "_RefreshIndicatorMode.armed", "index": 1 }',
  snap = '{ "_name": "_RefreshIndicatorMode.snap", "index": 2 }',
  refresh = '{ "_name": "_RefreshIndicatorMode.refresh", "index": 3 }',
  done = '{ "_name": "_RefreshIndicatorMode.done", "index": 4 }',
  canceled = '{ "_name": "_RefreshIndicatorMode.canceled", "index": 5 }',
};

export { _RefreshIndicatorMode };
class RefreshIndicator extends StatefulWidget {
  child: MXWidget;
  displacement: number;
  onRefresh: any;
  color: Color;
  backgroundColor: Color;
  notificationPredicate: any;
  semanticsLabel: string;
  semanticsValue: string;
  strokeWidth: number;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, displacement?: number, onRefresh?: any, color?: Color, backgroundColor?: Color, notificationPredicate?: any, semanticsLabel?: string, semanticsValue?: string, strokeWidth?: number} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.displacement = namedParameters.displacement;
    this.onRefresh = namedParameters.onRefresh;
    this.color = namedParameters.color;
    this.backgroundColor = namedParameters.backgroundColor;
    this.notificationPredicate = namedParameters.notificationPredicate;
    this.semanticsLabel = namedParameters.semanticsLabel;
    this.semanticsValue = namedParameters.semanticsValue;
    this.strokeWidth = namedParameters.strokeWidth;
    this.className = 'RefreshIndicator';
  }
}
export { RefreshIndicator };
class RefreshIndicatorState extends State {
  positionController: AnimationController;
  scaleController: AnimationController;
  positionFactor: Animation;
  scaleFactor: Animation;
  value: Animation;
  valueColor: Animation;
  mode: _RefreshIndicatorMode;
  pendingRefreshFuture: any;
  isIndicatorAtTop: boolean;
  dragOffset: number;
}
export { RefreshIndicatorState };
