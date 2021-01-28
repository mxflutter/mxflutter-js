import { CompoundAnimation } from '../animation/animations';
import { RouteSettings } from '../widgets/navigator';
import { Animatable, Tween } from '../animation/tween';
import { Orientation } from '../widgets/media-query';
import { PopupRoute } from '../widgets/routes';
import { Animation } from '../animation/animation';
import { OverlayEntry } from '../widgets/overlay';
import { Rect, ImageFilter, Offset } from '../../../mx-dart-sdk';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { StatefulWidget$, State$, GlobalKey, StatelessWidget$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum _ContextMenuLocation {
    center = "{ \"_name\": \"_ContextMenuLocation.center\", \"index\": 0 }",
    left = "{ \"_name\": \"_ContextMenuLocation.left\", \"index\": 1 }",
    right = "{ \"_name\": \"_ContextMenuLocation.right\", \"index\": 2 }"
}
export { _ContextMenuLocation };
declare class CupertinoContextMenu extends StatefulWidget$ {
    child: MXWidget;
    actions: Array<any>;
    previewBuilder: any;
    constructor(namedParameters?: {
        key?: Key;
        actions?: Array<any>;
        child?: MXWidget;
        previewBuilder?: any;
    });
}
export { CupertinoContextMenu };
declare class _CupertinoContextMenuState extends State$ {
    childGlobalKey: GlobalKey;
    childHidden: boolean;
    openController: AnimationController;
    decoyChildEndRect: Rect;
    lastOverlayEntry: OverlayEntry;
    route: _ContextMenuRoute;
}
export { _CupertinoContextMenuState };
declare class _DecoyChild extends StatefulWidget$ {
    beginRect: Rect;
    controller: AnimationController;
    endRect: Rect;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        beginRect?: Rect;
        controller?: AnimationController;
        endRect?: Rect;
        child?: MXWidget;
    });
}
export { _DecoyChild };
declare class _DecoyChildState extends State$ {
    childGlobalKey: GlobalKey;
    mask: Animation;
    rect: Animation;
}
export { _DecoyChildState };
declare class _ContextMenuRoute extends PopupRoute {
    actions: Array<any>;
    builder: any;
    childGlobalKey: GlobalKey;
    contextMenuLocation: _ContextMenuLocation;
    externalOffstage: boolean;
    internalOffstage: boolean;
    lastOrientation: Orientation;
    previousChildRect: Rect;
    scale: number;
    sheetGlobalKey: GlobalKey;
    sheetRectAnimatable: Animatable;
    sheetRectAnimatableReverse: Animatable;
    opacityTween: Tween;
    sheetOpacity: Animation;
    barrierLabel: string;
    constructor(namedParameters?: {
        actions?: Array<any>;
        contextMenuLocation?: _ContextMenuLocation;
        barrierLabel?: string;
        builder?: any;
        filter?: ImageFilter;
        previousChildRect?: Rect;
        settings?: RouteSettings;
    });
}
export { _ContextMenuRoute };
declare class _ContextMenuRouteStatic extends StatefulWidget$ {
    actions: Array<any>;
    child: MXWidget;
    childGlobalKey: GlobalKey;
    contextMenuLocation: _ContextMenuLocation;
    onDismiss: any;
    orientation: Orientation;
    sheetGlobalKey: GlobalKey;
    constructor(namedParameters?: {
        key?: Key;
        actions?: Array<any>;
        child?: MXWidget;
        childGlobalKey?: GlobalKey;
        contextMenuLocation?: _ContextMenuLocation;
        onDismiss?: any;
        orientation?: Orientation;
        sheetGlobalKey?: GlobalKey;
    });
}
export { _ContextMenuRouteStatic };
declare class _ContextMenuRouteStaticState extends State$ {
    dragOffset: Offset;
    lastScale: number;
    moveController: AnimationController;
    sheetController: AnimationController;
    moveAnimation: Animation;
    sheetScaleAnimation: Animation;
    sheetOpacityAnimation: Animation;
}
export { _ContextMenuRouteStaticState };
declare class _ContextMenuSheet extends StatelessWidget$ {
    actions: Array<any>;
    contextMenuLocation: _ContextMenuLocation;
    orientation: Orientation;
    constructor(namedParameters?: {
        key?: Key;
        actions?: Array<any>;
        contextMenuLocation?: _ContextMenuLocation;
        orientation?: Orientation;
    });
}
export { _ContextMenuSheet };
declare class _OnOffAnimation extends CompoundAnimation {
    offValue: any;
    constructor(namedParameters?: {
        controller?: AnimationController;
        onValue?: any;
        offValue?: any;
        intervalOn?: number;
        intervalOff?: number;
    });
}
export { _OnOffAnimation };
