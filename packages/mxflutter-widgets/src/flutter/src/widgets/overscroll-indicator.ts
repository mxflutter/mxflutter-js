// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Notification } from './notification-listener';
import { CustomPainter } from '../rendering/custom-paint';
import { Duration } from '../../../mx-dart-sdk';
import { Ticker, TickerProvider } from '../scheduler/ticker';
import { Animation } from '../animation/animation';
import { Tween } from '../animation/tween';
import { AnimationController } from '../animation/animation-controller';
import { Listenable, ChangeNotifier } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { AxisDirection, Axis } from '../painting/basic-types';
import { StatefulWidget, Widget, State } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class GlowingOverscrollIndicator extends StatefulWidget {
  showLeading: boolean;
  showTrailing: boolean;
  axisDirection: AxisDirection;
  color: Color;
  notificationPredicate: any;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, showLeading?: boolean, showTrailing?: boolean, axisDirection?: AxisDirection, color?: Color, notificationPredicate?: any, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.showLeading = namedParameters.showLeading;
    this.showTrailing = namedParameters.showTrailing;
    this.axisDirection = namedParameters.axisDirection;
    this.color = namedParameters.color;
    this.notificationPredicate = namedParameters.notificationPredicate;
    this.child = namedParameters.child;
    this.className = 'GlowingOverscrollIndicator';
  }
}
export { GlowingOverscrollIndicator };
class _GlowingOverscrollIndicatorState extends State {
  leadingController: _GlowController;
  trailingController: _GlowController;
  leadingAndTrailingListener: Listenable;
  lastNotificationType: any;
  accepted: Map<any, any>;
}
export { _GlowingOverscrollIndicatorState };
enum _GlowState {
  idle = '{ "_name": "_GlowState.idle", "index": 0 }',
  absorb = '{ "_name": "_GlowState.absorb", "index": 1 }',
  pull = '{ "_name": "_GlowState.pull", "index": 2 }',
  recede = '{ "_name": "_GlowState.recede", "index": 3 }',
};

export { _GlowState };
class _GlowController extends ChangeNotifier {
  state: _GlowState;
  glowController: AnimationController;
  pullRecedeTimer: any;
  paintOffset: number;
  paintOffsetScrollPixels: number;
  glowOpacityTween: Tween;
  glowOpacity: Animation;
  glowSizeTween: Tween;
  glowSize: Animation;
  displacementTicker: Ticker;
  displacementTickerLastElapsed: Duration;
  displacementTarget: number;
  displacement: number;
  pullDistance: number;
  color: Color;
  axis: Axis;
  public constructor(namedParameters: {vsync?: TickerProvider, color?: Color, axis?: Axis} = {}) {
    super();
    this.color = namedParameters.color;
    this.axis = namedParameters.axis;
    this.className = '_GlowController';
  }
}
export { _GlowController };
class _GlowingOverscrollIndicatorPainter extends CustomPainter {
  leadingController: _GlowController;
  trailingController: _GlowController;
  axisDirection: AxisDirection;
  public constructor(namedParameters: {leadingController?: _GlowController, trailingController?: _GlowController, axisDirection?: AxisDirection, repaint?: Listenable} = {}) {
    super();
    this.leadingController = namedParameters.leadingController;
    this.trailingController = namedParameters.trailingController;
    this.axisDirection = namedParameters.axisDirection;
    this.repaint = namedParameters.repaint;
    this.className = '_GlowingOverscrollIndicatorPainter';
  }
  static get piOver2() {
    return 1.5707963267948966;
  }
}
export { _GlowingOverscrollIndicatorPainter };
class OverscrollIndicatorNotification extends Notification {
  leading: boolean;
  paintOffset: number;
  accepted: boolean;
  public constructor(namedParameters: {leading?: boolean} = {}) {
    super();
    this.leading = namedParameters.leading;
    this.className = 'OverscrollIndicatorNotification';
  }
}
export { OverscrollIndicatorNotification };
