// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Animation } from '../animation/animation';
import { Duration } from '../../../mx-dart-sdk';
import { SnackBarBehavior } from './snack-bar-theme';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget, State, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum SnackBarClosedReason {
  action = '{ "_name": "SnackBarClosedReason.action", "index": 0 }',
  dismiss = '{ "_name": "SnackBarClosedReason.dismiss", "index": 1 }',
  swipe = '{ "_name": "SnackBarClosedReason.swipe", "index": 2 }',
  hide = '{ "_name": "SnackBarClosedReason.hide", "index": 3 }',
  remove = '{ "_name": "SnackBarClosedReason.remove", "index": 4 }',
  timeout = '{ "_name": "SnackBarClosedReason.timeout", "index": 5 }',
};

export { SnackBarClosedReason };
class SnackBarAction extends StatefulWidget {
  textColor: Color;
  disabledTextColor: Color;
  label: string;
  onPressed: any;
  public constructor(namedParameters: {key?: Key, textColor?: Color, disabledTextColor?: Color, label?: string, onPressed?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.textColor = namedParameters.textColor;
    this.disabledTextColor = namedParameters.disabledTextColor;
    this.label = namedParameters.label;
    this.onPressed = namedParameters.onPressed;
    this.className = 'SnackBarAction';
  }
}
export { SnackBarAction };
class _SnackBarActionState extends State {
  haveTriggeredAction: boolean;
}
export { _SnackBarActionState };
class SnackBar extends StatefulWidget {
  content: MXWidget;
  backgroundColor: Color;
  elevation: number;
  margin: EdgeInsetsGeometry;
  padding: EdgeInsetsGeometry;
  width: number;
  shape: ShapeBorder;
  behavior: SnackBarBehavior;
  action: SnackBarAction;
  duration: Duration;
  animation: Animation;
  onVisible: any;
  public constructor(namedParameters: {key?: Key, content?: MXWidget, backgroundColor?: Color, elevation?: number, margin?: EdgeInsetsGeometry, padding?: EdgeInsetsGeometry, width?: number, shape?: ShapeBorder, behavior?: SnackBarBehavior, action?: SnackBarAction, duration?: Duration, animation?: Animation, onVisible?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.content = namedParameters.content;
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.margin = namedParameters.margin;
    this.padding = namedParameters.padding;
    this.width = namedParameters.width;
    this.shape = namedParameters.shape;
    this.behavior = namedParameters.behavior;
    this.action = namedParameters.action;
    this.duration = namedParameters.duration;
    this.animation = namedParameters.animation;
    this.onVisible = namedParameters.onVisible;
    this.className = 'SnackBar';
  }
}
export { SnackBar };
class _SnackBarState extends State {
  wasVisible: boolean;
}
export { _SnackBarState };
