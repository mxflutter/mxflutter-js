//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ParametricCurve } from '../animation/curves';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { BoxConstraints } from '../rendering/box';
import { StatelessWidget$, StatefulWidget$, State$, InheritedWidget, } from '../widgets/framework';
import { ChangeNotifier } from '../foundation/change-notifier';
import { FloatingActionButtonLocation } from './floating-action-button-location';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var _ScaffoldSlot;
(function (_ScaffoldSlot) {
    _ScaffoldSlot["body"] = "{ \"_name\": \"_ScaffoldSlot.body\", \"index\": 0 }";
    _ScaffoldSlot["appBar"] = "{ \"_name\": \"_ScaffoldSlot.appBar\", \"index\": 1 }";
    _ScaffoldSlot["bodyScrim"] = "{ \"_name\": \"_ScaffoldSlot.bodyScrim\", \"index\": 2 }";
    _ScaffoldSlot["bottomSheet"] = "{ \"_name\": \"_ScaffoldSlot.bottomSheet\", \"index\": 3 }";
    _ScaffoldSlot["snackBar"] = "{ \"_name\": \"_ScaffoldSlot.snackBar\", \"index\": 4 }";
    _ScaffoldSlot["persistentFooter"] = "{ \"_name\": \"_ScaffoldSlot.persistentFooter\", \"index\": 5 }";
    _ScaffoldSlot["bottomNavigationBar"] = "{ \"_name\": \"_ScaffoldSlot.bottomNavigationBar\", \"index\": 6 }";
    _ScaffoldSlot["floatingActionButton"] = "{ \"_name\": \"_ScaffoldSlot.floatingActionButton\", \"index\": 7 }";
    _ScaffoldSlot["drawer"] = "{ \"_name\": \"_ScaffoldSlot.drawer\", \"index\": 8 }";
    _ScaffoldSlot["endDrawer"] = "{ \"_name\": \"_ScaffoldSlot.endDrawer\", \"index\": 9 }";
    _ScaffoldSlot["statusBar"] = "{ \"_name\": \"_ScaffoldSlot.statusBar\", \"index\": 10 }";
})(_ScaffoldSlot || (_ScaffoldSlot = {}));
export { _ScaffoldSlot };
class ScaffoldPrelayoutGeometry extends MXDartClass {
    constructor(namedParameters = {}) {
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
    constructor(begin, end, animator, progress) {
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
    constructor(namedParameters = {}) {
        super();
        this.bottomNavigationBarTop = namedParameters.bottomNavigationBarTop;
        this.floatingActionButtonArea = namedParameters.floatingActionButtonArea;
        this.className = 'ScaffoldGeometry';
    }
}
export { ScaffoldGeometry };
class _ScaffoldGeometryNotifier extends ChangeNotifier {
    constructor(geometry, context) {
        super();
        this.geometry = geometry;
        this.context = context;
        this.className = '_ScaffoldGeometryNotifier';
    }
}
export { _ScaffoldGeometryNotifier };
class _BodyBoxConstraints extends BoxConstraints {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
}
export { _FloatingActionButtonTransitionState };
class Scaffold extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
}
export { ScaffoldState };
class ScaffoldFeatureController extends MXDartClass {
}
export { ScaffoldFeatureController };
class _BottomSheetSuspendedCurve extends ParametricCurve {
    constructor(startingPoint, namedParameters = {}) {
        super();
        this.startingPoint = startingPoint;
        this.curve = namedParameters.curve;
        this.className = '_BottomSheetSuspendedCurve';
    }
}
export { _BottomSheetSuspendedCurve };
class _StandardBottomSheet extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
}
export { _StandardBottomSheetState };
class PersistentBottomSheetController extends ScaffoldFeatureController {
}
export { PersistentBottomSheetController };
class _ScaffoldScope extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.hasDrawer = namedParameters.hasDrawer;
        this.geometryNotifier = namedParameters.geometryNotifier;
        this.child = namedParameters.child;
        this.className = '_ScaffoldScope';
    }
}
export { _ScaffoldScope };
