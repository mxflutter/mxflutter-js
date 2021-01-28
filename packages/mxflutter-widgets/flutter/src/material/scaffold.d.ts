import { ParametricCurve, Curve } from '../animation/curves';
import { ShapeBorder } from '../painting/borders';
import { ScrollController } from '../widgets/scroll-controller';
import { DragStartBehavior } from '../gestures/recognizer';
import { PreferredSizeWidget } from '../widgets/preferred-size';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { Key } from '../foundation/key';
import { BoxConstraints } from '../rendering/box';
import { BuildContext$, StatelessWidget$, StatefulWidget$, State$, GlobalKey, InheritedWidget } from '../widgets/framework';
import { ChangeNotifier } from '../foundation/change-notifier';
import { FloatingActionButtonLocation, FloatingActionButtonAnimator } from './floating-action-button-location';
import { EdgeInsets } from '../painting/edge-insets';
import { Size, TextDirection, Rect, Color, Clip } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare enum _ScaffoldSlot {
    body = "{ \"_name\": \"_ScaffoldSlot.body\", \"index\": 0 }",
    appBar = "{ \"_name\": \"_ScaffoldSlot.appBar\", \"index\": 1 }",
    bodyScrim = "{ \"_name\": \"_ScaffoldSlot.bodyScrim\", \"index\": 2 }",
    bottomSheet = "{ \"_name\": \"_ScaffoldSlot.bottomSheet\", \"index\": 3 }",
    snackBar = "{ \"_name\": \"_ScaffoldSlot.snackBar\", \"index\": 4 }",
    persistentFooter = "{ \"_name\": \"_ScaffoldSlot.persistentFooter\", \"index\": 5 }",
    bottomNavigationBar = "{ \"_name\": \"_ScaffoldSlot.bottomNavigationBar\", \"index\": 6 }",
    floatingActionButton = "{ \"_name\": \"_ScaffoldSlot.floatingActionButton\", \"index\": 7 }",
    drawer = "{ \"_name\": \"_ScaffoldSlot.drawer\", \"index\": 8 }",
    endDrawer = "{ \"_name\": \"_ScaffoldSlot.endDrawer\", \"index\": 9 }",
    statusBar = "{ \"_name\": \"_ScaffoldSlot.statusBar\", \"index\": 10 }"
}
export { _ScaffoldSlot };
declare class ScaffoldPrelayoutGeometry extends MXDartClass {
    floatingActionButtonSize: Size;
    bottomSheetSize: Size;
    contentBottom: number;
    contentTop: number;
    minInsets: EdgeInsets;
    minViewPadding: EdgeInsets;
    scaffoldSize: Size;
    snackBarSize: Size;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        bottomSheetSize?: Size;
        contentBottom?: number;
        contentTop?: number;
        floatingActionButtonSize?: Size;
        minInsets?: EdgeInsets;
        minViewPadding?: EdgeInsets;
        scaffoldSize?: Size;
        snackBarSize?: Size;
        textDirection?: TextDirection;
    });
}
export { ScaffoldPrelayoutGeometry };
declare class _TransitionSnapshotFabLocation extends FloatingActionButtonLocation {
    begin: FloatingActionButtonLocation;
    end: FloatingActionButtonLocation;
    animator: FloatingActionButtonAnimator;
    progress: number;
    constructor(begin?: FloatingActionButtonLocation, end?: FloatingActionButtonLocation, animator?: FloatingActionButtonAnimator, progress?: number);
}
export { _TransitionSnapshotFabLocation };
declare class ScaffoldGeometry extends MXDartClass {
    bottomNavigationBarTop: number;
    floatingActionButtonArea: Rect;
    constructor(namedParameters?: {
        bottomNavigationBarTop?: number;
        floatingActionButtonArea?: Rect;
    });
}
export { ScaffoldGeometry };
declare class _ScaffoldGeometryNotifier extends ChangeNotifier {
    context: BuildContext$;
    floatingActionButtonScale: number;
    geometry: ScaffoldGeometry;
    constructor(geometry?: ScaffoldGeometry, context?: BuildContext$);
}
export { _ScaffoldGeometryNotifier };
declare class _BodyBoxConstraints extends BoxConstraints {
    bottomWidgetsHeight: number;
    appBarHeight: number;
    constructor(namedParameters?: {
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        bottomWidgetsHeight?: number;
        appBarHeight?: number;
    });
}
export { _BodyBoxConstraints };
declare class _BodyBuilder extends StatelessWidget$ {
    body: MXWidget;
    extendBody: boolean;
    extendBodyBehindAppBar: boolean;
    constructor(namedParameters?: {
        key?: Key;
        extendBody?: boolean;
        extendBodyBehindAppBar?: boolean;
        body?: MXWidget;
    });
}
export { _BodyBuilder };
declare class _ScaffoldLayout extends MultiChildLayoutDelegate {
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
    constructor(namedParameters?: {
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
    });
}
export { _ScaffoldLayout };
declare class _FloatingActionButtonTransition extends StatefulWidget$ {
    child: MXWidget;
    fabMoveAnimation: Animation;
    fabMotionAnimator: FloatingActionButtonAnimator;
    geometryNotifier: _ScaffoldGeometryNotifier;
    currentController: AnimationController;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        fabMoveAnimation?: Animation;
        fabMotionAnimator?: FloatingActionButtonAnimator;
        geometryNotifier?: _ScaffoldGeometryNotifier;
        currentController?: AnimationController;
    });
}
export { _FloatingActionButtonTransition };
declare class _FloatingActionButtonTransitionState extends State$ {
    previousController: AnimationController;
    previousScaleAnimation: Animation;
    previousRotationAnimation: Animation;
    currentScaleAnimation: Animation;
    extendedCurrentScaleAnimation: Animation;
    currentRotationAnimation: Animation;
    previousChild: MXWidget;
}
export { _FloatingActionButtonTransitionState };
declare class Scaffold extends StatefulWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { Scaffold };
declare class ScaffoldState extends State$ {
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
declare class ScaffoldFeatureController extends MXDartClass {
    widget: any;
    completer: any;
    close: any;
    setState: any;
}
export { ScaffoldFeatureController };
declare class _BottomSheetSuspendedCurve extends ParametricCurve {
    startingPoint: number;
    curve: Curve;
    constructor(startingPoint?: number, namedParameters?: {
        curve?: Curve;
    });
}
export { _BottomSheetSuspendedCurve };
declare class _StandardBottomSheet extends StatefulWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { _StandardBottomSheet };
declare class _StandardBottomSheetState extends State$ {
    animationCurve: ParametricCurve;
}
export { _StandardBottomSheetState };
declare class PersistentBottomSheetController extends ScaffoldFeatureController {
    isLocalHistoryEntry: boolean;
}
export { PersistentBottomSheetController };
declare class _ScaffoldScope extends InheritedWidget {
    hasDrawer: boolean;
    geometryNotifier: _ScaffoldGeometryNotifier;
    constructor(namedParameters?: {
        key?: Key;
        hasDrawer?: boolean;
        geometryNotifier?: _ScaffoldGeometryNotifier;
        child?: MXWidget;
    });
}
export { _ScaffoldScope };
