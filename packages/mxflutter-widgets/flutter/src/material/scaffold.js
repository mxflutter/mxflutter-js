"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ScaffoldScope = exports.PersistentBottomSheetController = exports._StandardBottomSheetState = exports._StandardBottomSheet = exports._BottomSheetSuspendedCurve = exports.ScaffoldFeatureController = exports.ScaffoldState = exports.Scaffold = exports._FloatingActionButtonTransitionState = exports._FloatingActionButtonTransition = exports._ScaffoldLayout = exports._BodyBuilder = exports._BodyBoxConstraints = exports._ScaffoldGeometryNotifier = exports.ScaffoldGeometry = exports._TransitionSnapshotFabLocation = exports.ScaffoldPrelayoutGeometry = exports._ScaffoldSlot = void 0;
const curves_1 = require("../animation/curves");
const custom_layout_1 = require("../rendering/custom-layout");
const box_1 = require("../rendering/box");
const framework_1 = require("../widgets/framework");
const change_notifier_1 = require("../foundation/change-notifier");
const floating_action_button_location_1 = require("./floating-action-button-location");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
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
exports._ScaffoldSlot = _ScaffoldSlot;
;
class ScaffoldPrelayoutGeometry extends mxflutter_base_1.MXDartClass {
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
exports.ScaffoldPrelayoutGeometry = ScaffoldPrelayoutGeometry;
class _TransitionSnapshotFabLocation extends floating_action_button_location_1.FloatingActionButtonLocation {
    constructor(begin, end, animator, progress) {
        super();
        this.begin = begin;
        this.end = end;
        this.animator = animator;
        this.progress = progress;
        this.className = '_TransitionSnapshotFabLocation';
    }
}
exports._TransitionSnapshotFabLocation = _TransitionSnapshotFabLocation;
class ScaffoldGeometry extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.bottomNavigationBarTop = namedParameters.bottomNavigationBarTop;
        this.floatingActionButtonArea = namedParameters.floatingActionButtonArea;
        this.className = 'ScaffoldGeometry';
    }
}
exports.ScaffoldGeometry = ScaffoldGeometry;
class _ScaffoldGeometryNotifier extends change_notifier_1.ChangeNotifier {
    constructor(geometry, context) {
        super();
        this.geometry = geometry;
        this.context = context;
        this.className = '_ScaffoldGeometryNotifier';
    }
}
exports._ScaffoldGeometryNotifier = _ScaffoldGeometryNotifier;
class _BodyBoxConstraints extends box_1.BoxConstraints {
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
exports._BodyBoxConstraints = _BodyBoxConstraints;
class _BodyBuilder extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.extendBody = namedParameters.extendBody;
        this.extendBodyBehindAppBar = namedParameters.extendBodyBehindAppBar;
        this.body = namedParameters.body;
        this.className = '_BodyBuilder';
    }
}
exports._BodyBuilder = _BodyBuilder;
class _ScaffoldLayout extends custom_layout_1.MultiChildLayoutDelegate {
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
        this.snackBarWidth = namedParameters.snackBarWidth;
        this.extendBody = namedParameters.extendBody;
        this.extendBodyBehindAppBar = namedParameters.extendBodyBehindAppBar;
        this.className = '_ScaffoldLayout';
    }
}
exports._ScaffoldLayout = _ScaffoldLayout;
class _FloatingActionButtonTransition extends framework_1.StatefulWidget {
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
exports._FloatingActionButtonTransition = _FloatingActionButtonTransition;
class _FloatingActionButtonTransitionState extends framework_1.State {
}
exports._FloatingActionButtonTransitionState = _FloatingActionButtonTransitionState;
class Scaffold extends framework_1.StatefulWidget {
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
exports.Scaffold = Scaffold;
class ScaffoldState extends framework_1.State {
}
exports.ScaffoldState = ScaffoldState;
class ScaffoldFeatureController extends mxflutter_base_1.MXDartClass {
}
exports.ScaffoldFeatureController = ScaffoldFeatureController;
class _BottomSheetSuspendedCurve extends curves_1.ParametricCurve {
    constructor(startingPoint, namedParameters = {}) {
        super();
        this.startingPoint = startingPoint;
        this.curve = namedParameters.curve;
        this.className = '_BottomSheetSuspendedCurve';
    }
}
exports._BottomSheetSuspendedCurve = _BottomSheetSuspendedCurve;
class _StandardBottomSheet extends framework_1.StatefulWidget {
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
exports._StandardBottomSheet = _StandardBottomSheet;
class _StandardBottomSheetState extends framework_1.State {
}
exports._StandardBottomSheetState = _StandardBottomSheetState;
class PersistentBottomSheetController extends ScaffoldFeatureController {
}
exports.PersistentBottomSheetController = PersistentBottomSheetController;
class _ScaffoldScope extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.hasDrawer = namedParameters.hasDrawer;
        this.geometryNotifier = namedParameters.geometryNotifier;
        this.child = namedParameters.child;
        this.className = '_ScaffoldScope';
    }
}
exports._ScaffoldScope = _ScaffoldScope;
