//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DragStartDetails, DragEndDetails } from '../gestures/drag-details';
import { ParametricCurve, Curve } from '../animation/curves';
import { ShapeBorder } from '../painting/borders';
import { DraggableScrollableNotification } from '../widgets/draggable-scrollable-sheet';
import { SnackBar, SnackBarClosedReason } from './snack-bar';
import { ScrollController } from '../widgets/scroll-controller';
import { DragStartBehavior } from '../gestures/recognizer';
import { PreferredSizeWidget } from '../widgets/preferred-size';
import { AnimationController } from '../animation/animation-controller';
import { Animation, AnimationStatus } from '../animation/animation';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { Key } from '../foundation/key';
import { BoxConstraints } from '../rendering/box';
import {
  BuildContext$,
  StatelessWidget$,
  Widget,
  StatefulWidget$,
  State$,
  GlobalKey,
  InheritedWidget,
} from '../widgets/framework';
import { ChangeNotifier } from '../foundation/change-notifier';
import { FloatingActionButtonLocation, FloatingActionButtonAnimator } from './floating-action-button-location';
import { EdgeInsets } from '../painting/edge-insets';
import { Size, TextDirection, Rect, Color, Clip } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _ScaffoldSlot {
  body = '{ "_name": "_ScaffoldSlot.body", "index": 0 }',
  appBar = '{ "_name": "_ScaffoldSlot.appBar", "index": 1 }',
  bodyScrim = '{ "_name": "_ScaffoldSlot.bodyScrim", "index": 2 }',
  bottomSheet = '{ "_name": "_ScaffoldSlot.bottomSheet", "index": 3 }',
  snackBar = '{ "_name": "_ScaffoldSlot.snackBar", "index": 4 }',
  persistentFooter = '{ "_name": "_ScaffoldSlot.persistentFooter", "index": 5 }',
  bottomNavigationBar = '{ "_name": "_ScaffoldSlot.bottomNavigationBar", "index": 6 }',
  floatingActionButton = '{ "_name": "_ScaffoldSlot.floatingActionButton", "index": 7 }',
  drawer = '{ "_name": "_ScaffoldSlot.drawer", "index": 8 }',
  endDrawer = '{ "_name": "_ScaffoldSlot.endDrawer", "index": 9 }',
  statusBar = '{ "_name": "_ScaffoldSlot.statusBar", "index": 10 }',
}

export { _ScaffoldSlot };
class ScaffoldPrelayoutGeometry extends MXDartClass {
  floatingActionButtonSize: Size;
  bottomSheetSize: Size;
  contentBottom: number;
  contentTop: number;
  minInsets: EdgeInsets;
  minViewPadding: EdgeInsets;
  scaffoldSize: Size;
  snackBarSize: Size;
  textDirection: TextDirection;
  public constructor(
    namedParameters: {
      bottomSheetSize?: Size;
      contentBottom?: number;
      contentTop?: number;
      floatingActionButtonSize?: Size;
      minInsets?: EdgeInsets;
      minViewPadding?: EdgeInsets;
      scaffoldSize?: Size;
      snackBarSize?: Size;
      textDirection?: TextDirection;
    } = {},
  ) {
    super();
    this.bottomSheetSize = namedParameters.bottomSheetSize;
    this.contentBottom = namedParameters.contentBottom;
    this.contentTop = namedParameters.contentTop;
    this.floatingActionButtonSize = namedParameters.floatingActionButtonSize;
    this.minInsets = namedParameters.minInsets;
    this.minViewPadding = namedParameters.minViewPadding;
    this.scaffoldSize = namedParameters.scaffoldSize;
    this.snackBarSize = namedParameters.snackBarSize;
    this.textDirection = namedParameters.textDirection;
    this.className = 'ScaffoldPrelayoutGeometry';
  }
}
export { ScaffoldPrelayoutGeometry };
class _TransitionSnapshotFabLocation extends FloatingActionButtonLocation {
  begin: FloatingActionButtonLocation;
  end: FloatingActionButtonLocation;
  animator: FloatingActionButtonAnimator;
  progress: number;
  public constructor(
    begin?: FloatingActionButtonLocation,
    end?: FloatingActionButtonLocation,
    animator?: FloatingActionButtonAnimator,
    progress?: number,
  ) {
    super();
    this.begin = begin;
    this.end = end;
    this.animator = animator;
    this.progress = progress;
    this.className = '_TransitionSnapshotFabLocation';
  }
}
export { _TransitionSnapshotFabLocation };
class ScaffoldGeometry extends MXDartClass {
  bottomNavigationBarTop: number;
  floatingActionButtonArea: Rect;
  public constructor(namedParameters: { bottomNavigationBarTop?: number; floatingActionButtonArea?: Rect } = {}) {
    super();
    this.bottomNavigationBarTop = namedParameters.bottomNavigationBarTop;
    this.floatingActionButtonArea = namedParameters.floatingActionButtonArea;
    this.className = 'ScaffoldGeometry';
  }
}
export { ScaffoldGeometry };
class _ScaffoldGeometryNotifier extends ChangeNotifier {
  context: BuildContext$;
  floatingActionButtonScale: number;
  geometry: ScaffoldGeometry;
  public constructor(geometry?: ScaffoldGeometry, context?: BuildContext$) {
    super();
    this.geometry = geometry;
    this.context = context;
    this.className = '_ScaffoldGeometryNotifier';
  }
}
export { _ScaffoldGeometryNotifier };
class _BodyBoxConstraints extends BoxConstraints {
  bottomWidgetsHeight: number;
  appBarHeight: number;
  public constructor(
    namedParameters: {
      minWidth?: number;
      maxWidth?: number;
      minHeight?: number;
      maxHeight?: number;
      bottomWidgetsHeight?: number;
      appBarHeight?: number;
    } = {},
  ) {
    super();
    this.minWidth = namedParameters.minWidth;
    this.maxWidth = namedParameters.maxWidth;
    this.minHeight = namedParameters.minHeight;
    this.maxHeight = namedParameters.maxHeight;
    this.bottomWidgetsHeight = namedParameters.bottomWidgetsHeight;
    this.appBarHeight = namedParameters.appBarHeight;
    this.className = '_BodyBoxConstraints';
  }
}
export { _BodyBoxConstraints };
class _BodyBuilder extends StatelessWidget$ {
  body: MXWidget;
  extendBody: boolean;
  extendBodyBehindAppBar: boolean;
  public constructor(
    namedParameters: { key?: Key; extendBody?: boolean; extendBodyBehindAppBar?: boolean; body?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.extendBody = namedParameters.extendBody;
    this.extendBodyBehindAppBar = namedParameters.extendBodyBehindAppBar;
    this.body = namedParameters.body;
    this.className = '_BodyBuilder';
  }
}
export { _BodyBuilder };
class _ScaffoldLayout extends MultiChildLayoutDelegate {
  extendBody: boolean;
  extendBodyBehindAppBar: boolean;
  minInsets: EdgeInsets;
  minViewPadding: EdgeInsets;
  textDirection: TextDirection;
  geometryNotifier: _ScaffoldGeometryNotifier;
  previousFloatingActionButtonLocation: FloatingActionButtonLocation;
  currentFloatingActionButtonLocation: FloatingActionButtonLocation;
  floatingActionButtonMoveAnimationProgress: number;
  floatingActionButtonMotionAnimator: FloatingActionButtonAnimator;
  isSnackBarFloating: boolean;
  public constructor(
    namedParameters: {
      minInsets?: EdgeInsets;
      minViewPadding?: EdgeInsets;
      textDirection?: TextDirection;
      geometryNotifier?: _ScaffoldGeometryNotifier;
      previousFloatingActionButtonLocation?: FloatingActionButtonLocation;
      currentFloatingActionButtonLocation?: FloatingActionButtonLocation;
      floatingActionButtonMoveAnimationProgress?: number;
      floatingActionButtonMotionAnimator?: FloatingActionButtonAnimator;
      isSnackBarFloating?: boolean;
      extendBody?: boolean;
      extendBodyBehindAppBar?: boolean;
    } = {},
  ) {
    super();
    this.minInsets = namedParameters.minInsets;
    this.minViewPadding = namedParameters.minViewPadding;
    this.textDirection = namedParameters.textDirection;
    this.geometryNotifier = namedParameters.geometryNotifier;
    this.previousFloatingActionButtonLocation = namedParameters.previousFloatingActionButtonLocation;
    this.currentFloatingActionButtonLocation = namedParameters.currentFloatingActionButtonLocation;
    this.floatingActionButtonMoveAnimationProgress = namedParameters.floatingActionButtonMoveAnimationProgress;
    this.floatingActionButtonMotionAnimator = namedParameters.floatingActionButtonMotionAnimator;
    this.isSnackBarFloating = namedParameters.isSnackBarFloating;
    this.extendBody = namedParameters.extendBody;
    this.extendBodyBehindAppBar = namedParameters.extendBodyBehindAppBar;
    this.className = '_ScaffoldLayout';
  }
}
export { _ScaffoldLayout };
class _FloatingActionButtonTransition extends StatefulWidget$ {
  child: MXWidget;
  fabMoveAnimation: Animation;
  fabMotionAnimator: FloatingActionButtonAnimator;
  geometryNotifier: _ScaffoldGeometryNotifier;
  currentController: AnimationController;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      fabMoveAnimation?: Animation;
      fabMotionAnimator?: FloatingActionButtonAnimator;
      geometryNotifier?: _ScaffoldGeometryNotifier;
      currentController?: AnimationController;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.fabMoveAnimation = namedParameters.fabMoveAnimation;
    this.fabMotionAnimator = namedParameters.fabMotionAnimator;
    this.geometryNotifier = namedParameters.geometryNotifier;
    this.currentController = namedParameters.currentController;
    this.className = '_FloatingActionButtonTransition';
  }
}
export { _FloatingActionButtonTransition };
class _FloatingActionButtonTransitionState extends State$ {
  previousController: AnimationController;
  previousScaleAnimation: Animation;
  previousRotationAnimation: Animation;
  currentScaleAnimation: Animation;
  extendedCurrentScaleAnimation: Animation;
  currentRotationAnimation: Animation;
  previousChild: MXWidget;
}
export { _FloatingActionButtonTransitionState };
class Scaffold extends StatefulWidget$ {
  extendBody: boolean;
  extendBodyBehindAppBar: boolean;
  appBar: PreferredSizeWidget;
  body: MXWidget;
  floatingActionButton: MXWidget;
  floatingActionButtonLocation: FloatingActionButtonLocation;
  floatingActionButtonAnimator: FloatingActionButtonAnimator;
  persistentFooterButtons: Array<any>;
  drawer: MXWidget;
  endDrawer: MXWidget;
  drawerScrimColor: Color;
  backgroundColor: Color;
  bottomNavigationBar: MXWidget;
  bottomSheet: MXWidget;
  resizeToAvoidBottomPadding: boolean;
  resizeToAvoidBottomInset: boolean;
  primary: boolean;
  drawerDragStartBehavior: DragStartBehavior;
  drawerEdgeDragWidth: number;
  drawerEnableOpenDragGesture: boolean;
  endDrawerEnableOpenDragGesture: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      appBar?: PreferredSizeWidget;
      body?: MXWidget;
      floatingActionButton?: MXWidget;
      floatingActionButtonLocation?: FloatingActionButtonLocation;
      floatingActionButtonAnimator?: FloatingActionButtonAnimator;
      persistentFooterButtons?: Array<any>;
      drawer?: MXWidget;
      endDrawer?: MXWidget;
      bottomNavigationBar?: MXWidget;
      bottomSheet?: MXWidget;
      backgroundColor?: Color;
      resizeToAvoidBottomPadding?: boolean;
      resizeToAvoidBottomInset?: boolean;
      primary?: boolean;
      drawerDragStartBehavior?: DragStartBehavior;
      extendBody?: boolean;
      extendBodyBehindAppBar?: boolean;
      drawerScrimColor?: Color;
      drawerEdgeDragWidth?: number;
      drawerEnableOpenDragGesture?: boolean;
      endDrawerEnableOpenDragGesture?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.appBar = namedParameters.appBar;
    this.body = namedParameters.body;
    this.floatingActionButton = namedParameters.floatingActionButton;
    this.floatingActionButtonLocation = namedParameters.floatingActionButtonLocation;
    this.floatingActionButtonAnimator = namedParameters.floatingActionButtonAnimator;
    this.persistentFooterButtons = namedParameters.persistentFooterButtons;
    this.drawer = namedParameters.drawer;
    this.endDrawer = namedParameters.endDrawer;
    this.bottomNavigationBar = namedParameters.bottomNavigationBar;
    this.bottomSheet = namedParameters.bottomSheet;
    this.backgroundColor = namedParameters.backgroundColor;
    this.resizeToAvoidBottomPadding = namedParameters.resizeToAvoidBottomPadding;
    this.resizeToAvoidBottomInset = namedParameters.resizeToAvoidBottomInset;
    this.primary = namedParameters.primary;
    this.drawerDragStartBehavior = namedParameters.drawerDragStartBehavior;
    this.extendBody = namedParameters.extendBody;
    this.extendBodyBehindAppBar = namedParameters.extendBodyBehindAppBar;
    this.drawerScrimColor = namedParameters.drawerScrimColor;
    this.drawerEdgeDragWidth = namedParameters.drawerEdgeDragWidth;
    this.drawerEnableOpenDragGesture = namedParameters.drawerEnableOpenDragGesture;
    this.endDrawerEnableOpenDragGesture = namedParameters.endDrawerEnableOpenDragGesture;
    this.className = 'Scaffold';
  }
}
export { Scaffold };
class ScaffoldState extends State$ {
  drawerKey: GlobalKey;
  endDrawerKey: GlobalKey;
  appBarMaxHeight: number;
  drawerOpened: boolean;
  endDrawerOpened: boolean;
  snackBars: any;
  snackBarController: AnimationController;
  snackBarTimer: any;
  accessibleNavigation: boolean;
  dismissedBottomSheets: Array<any>;
  currentBottomSheet: PersistentBottomSheetController;
  floatingActionButtonMoveController: AnimationController;
  floatingActionButtonAnimator: FloatingActionButtonAnimator;
  previousFloatingActionButtonLocation: FloatingActionButtonLocation;
  floatingActionButtonLocation: FloatingActionButtonLocation;
  floatingActionButtonVisibilityController: AnimationController;
  primaryScrollController: ScrollController;
  geometryNotifier: _ScaffoldGeometryNotifier;
  showBodyScrim: boolean;
  bodyScrimColor: Color;
}
export { ScaffoldState };
class ScaffoldFeatureController extends MXDartClass {
  widget: any;
  completer: any;
  close: any;
  setState: any;
}
export { ScaffoldFeatureController };
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
class _StandardBottomSheet extends StatefulWidget$ {
  animationController: AnimationController;
  enableDrag: boolean;
  onClosing: any;
  onDismissed: any;
  builder: any;
  isPersistent: boolean;
  backgroundColor: Color;
  elevation: number;
  shape: ShapeBorder;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      animationController?: AnimationController;
      enableDrag?: boolean;
      onClosing?: any;
      onDismissed?: any;
      builder?: any;
      isPersistent?: boolean;
      backgroundColor?: Color;
      elevation?: number;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.animationController = namedParameters.animationController;
    this.enableDrag = namedParameters.enableDrag;
    this.onClosing = namedParameters.onClosing;
    this.onDismissed = namedParameters.onDismissed;
    this.builder = namedParameters.builder;
    this.isPersistent = namedParameters.isPersistent;
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = '_StandardBottomSheet';
  }
}
export { _StandardBottomSheet };
class _StandardBottomSheetState extends State$ {
  animationCurve: ParametricCurve;
}
export { _StandardBottomSheetState };
class PersistentBottomSheetController extends ScaffoldFeatureController {
  isLocalHistoryEntry: boolean;
}
export { PersistentBottomSheetController };
class _ScaffoldScope extends InheritedWidget {
  hasDrawer: boolean;
  geometryNotifier: _ScaffoldGeometryNotifier;
  public constructor(
    namedParameters: {
      key?: Key;
      hasDrawer?: boolean;
      geometryNotifier?: _ScaffoldGeometryNotifier;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.hasDrawer = namedParameters.hasDrawer;
    this.geometryNotifier = namedParameters.geometryNotifier;
    this.child = namedParameters.child;
    this.className = '_ScaffoldScope';
  }
}
export { _ScaffoldScope };
