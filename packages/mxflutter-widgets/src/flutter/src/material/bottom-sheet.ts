//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Animation } from '../animation/animation';
import { RouteSettings } from '../widgets/navigator';
import { ThemeData } from './theme-data';
import { PopupRoute } from '../widgets/routes';
import { MaterialLocalizations } from './material-localizations';
import { ParametricCurve, Curve } from '../animation/curves';
import { BoxConstraints } from '../rendering/box';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { DraggableScrollableNotification } from '../widgets/draggable-scrollable-sheet';
import { DragStartDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { TickerProvider } from '../scheduler/ticker';
import { Key } from '../foundation/key';
import { ShapeBorder } from '../painting/borders';
import { Color, Clip, Size } from '../../../mx-dart-sdk';
import { AnimationController } from '../animation/animation-controller';
import { StatefulWidget$, State$, GlobalKey, BuildContext$, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BottomSheet extends StatefulWidget$ {
  animationController: AnimationController;
  onClosing: any;
  builder: any;
  enableDrag: boolean;
  onDragStart: any;
  onDragEnd: any;
  backgroundColor: Color;
  elevation: number;
  shape: ShapeBorder;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      animationController?: AnimationController;
      enableDrag?: boolean;
      onDragStart?: any;
      onDragEnd?: any;
      backgroundColor?: Color;
      elevation?: number;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      onClosing?: any;
      builder?: any;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.animationController = namedParameters.animationController;
    this.enableDrag = namedParameters.enableDrag;
    this.onDragStart = namedParameters.onDragStart;
    this.onDragEnd = namedParameters.onDragEnd;
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.onClosing = namedParameters.onClosing;
    this.builder = namedParameters.builder;
    this.className = 'BottomSheet';
  }
}
export { BottomSheet };
class _BottomSheetState extends State$ {
  childKey: GlobalKey;
}
export { _BottomSheetState };
class _ModalBottomSheetLayout extends SingleChildLayoutDelegate {
  progress: number;
  isScrollControlled: boolean;
  public constructor(progress?: number, isScrollControlled?: boolean) {
    super();
    this.progress = progress;
    this.isScrollControlled = isScrollControlled;
    this.className = '_ModalBottomSheetLayout';
  }
}
export { _ModalBottomSheetLayout };
class _ModalBottomSheet extends StatefulWidget$ {
  route: _ModalBottomSheetRoute;
  isScrollControlled: boolean;
  backgroundColor: Color;
  elevation: number;
  shape: ShapeBorder;
  clipBehavior: Clip;
  enableDrag: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      route?: _ModalBottomSheetRoute;
      backgroundColor?: Color;
      elevation?: number;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      isScrollControlled?: boolean;
      enableDrag?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.route = namedParameters.route;
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.isScrollControlled = namedParameters.isScrollControlled;
    this.enableDrag = namedParameters.enableDrag;
    this.className = '_ModalBottomSheet';
  }
}
export { _ModalBottomSheet };
class _ModalBottomSheetState extends State$ {
  animationCurve: ParametricCurve;
}
export { _ModalBottomSheetState };
class _ModalBottomSheetRoute extends PopupRoute {
  builder: any;
  theme: ThemeData;
  isScrollControlled: boolean;
  backgroundColor: Color;
  elevation: number;
  shape: ShapeBorder;
  clipBehavior: Clip;
  modalBarrierColor: Color;
  isDismissible: boolean;
  enableDrag: boolean;
  barrierLabel: string;
  animationController: AnimationController;
  public constructor(
    namedParameters: {
      builder?: any;
      theme?: ThemeData;
      barrierLabel?: string;
      backgroundColor?: Color;
      elevation?: number;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      modalBarrierColor?: Color;
      isDismissible?: boolean;
      enableDrag?: boolean;
      isScrollControlled?: boolean;
      settings?: RouteSettings;
    } = {},
  ) {
    super();
    this.builder = namedParameters.builder;
    this.theme = namedParameters.theme;
    this.barrierLabel = namedParameters.barrierLabel;
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.modalBarrierColor = namedParameters.modalBarrierColor;
    this.isDismissible = namedParameters.isDismissible;
    this.enableDrag = namedParameters.enableDrag;
    this.isScrollControlled = namedParameters.isScrollControlled;
    this.settings = namedParameters.settings;
    this.className = '_ModalBottomSheetRoute';
  }
}
export { _ModalBottomSheetRoute };
class _BottomSheetSuspendedCurve extends ParametricCurve {
  startingPoint: number;
  curve: Curve;
  public constructor(startingPoint?: number, namedParameters: { curve?: Curve } = {}) {
    super();
    this.startingPoint = startingPoint;
    this.curve = namedParameters.curve;
    this.className = '_BottomSheetSuspendedCurve';
  }
}
export { _BottomSheetSuspendedCurve };
