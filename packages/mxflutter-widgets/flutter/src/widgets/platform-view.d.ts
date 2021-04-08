import { FocusNode } from './focus-manager';
import { PlatformViewController, AndroidViewController, UiKitViewController } from '../services/platform-views';
import { Key } from '../foundation/key';
import { MessageCodec } from '../services/message-codec';
import { TextDirection } from '../../../mx-dart-sdk';
import { PlatformViewHitTestBehavior } from '../rendering/platform-view';
import { StatefulWidget, StatelessWidget, State, LeafRenderObjectWidget } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class AndroidView extends StatefulWidget {
    viewType: string;
    onPlatformViewCreated: any;
    hitTestBehavior: PlatformViewHitTestBehavior;
    layoutDirection: TextDirection;
    gestureRecognizers: Set<any>;
    creationParams: any;
    creationParamsCodec: MessageCodec;
    constructor(namedParameters?: {
        key?: Key;
        viewType?: string;
        onPlatformViewCreated?: any;
        hitTestBehavior?: PlatformViewHitTestBehavior;
        layoutDirection?: TextDirection;
        gestureRecognizers?: Set<any>;
        creationParams?: any;
        creationParamsCodec?: MessageCodec;
    });
}
export { AndroidView };
declare class UiKitView extends StatefulWidget {
    viewType: string;
    onPlatformViewCreated: any;
    hitTestBehavior: PlatformViewHitTestBehavior;
    layoutDirection: TextDirection;
    creationParams: any;
    creationParamsCodec: MessageCodec;
    gestureRecognizers: Set<any>;
    constructor(namedParameters?: {
        key?: Key;
        viewType?: string;
        onPlatformViewCreated?: any;
        hitTestBehavior?: PlatformViewHitTestBehavior;
        layoutDirection?: TextDirection;
        creationParams?: any;
        creationParamsCodec?: MessageCodec;
        gestureRecognizers?: Set<any>;
    });
}
export { UiKitView };
declare class HtmlElementView extends StatelessWidget {
    viewType: string;
    constructor(namedParameters?: {
        key?: Key;
        viewType?: string;
    });
}
export { HtmlElementView };
declare class _HtmlElementViewController extends PlatformViewController {
    viewId: number;
    viewType: string;
    initialized: boolean;
    constructor(viewId?: number, viewType?: string);
}
export { _HtmlElementViewController };
declare class _AndroidViewState extends State {
    id: number;
    controller: AndroidViewController;
    layoutDirection: TextDirection;
    initialized: boolean;
    focusNode: FocusNode;
}
export { _AndroidViewState };
declare class _UiKitViewState extends State {
    controller: UiKitViewController;
    layoutDirection: TextDirection;
    initialized: boolean;
}
export { _UiKitViewState };
declare class _AndroidPlatformView extends LeafRenderObjectWidget {
    controller: AndroidViewController;
    hitTestBehavior: PlatformViewHitTestBehavior;
    gestureRecognizers: Set<any>;
    constructor(namedParameters?: {
        key?: Key;
        controller?: AndroidViewController;
        hitTestBehavior?: PlatformViewHitTestBehavior;
        gestureRecognizers?: Set<any>;
    });
}
export { _AndroidPlatformView };
declare class _UiKitPlatformView extends LeafRenderObjectWidget {
    controller: UiKitViewController;
    hitTestBehavior: PlatformViewHitTestBehavior;
    gestureRecognizers: Set<any>;
    constructor(namedParameters?: {
        key?: Key;
        controller?: UiKitViewController;
        hitTestBehavior?: PlatformViewHitTestBehavior;
        gestureRecognizers?: Set<any>;
    });
}
export { _UiKitPlatformView };
declare class PlatformViewCreationParams extends MXDartClass {
    id: number;
    viewType: string;
    onPlatformViewCreated: any;
    onFocusChanged: any;
}
export { PlatformViewCreationParams };
declare class PlatformViewLink extends StatefulWidget {
    surfaceFactory: any;
    onCreatePlatformView: any;
    viewType: string;
    constructor(namedParameters?: {
        key?: Key;
        surfaceFactory?: any;
        onCreatePlatformView?: any;
        viewType?: string;
    });
}
export { PlatformViewLink };
declare class _PlatformViewLinkState extends State {
    id: number;
    controller: PlatformViewController;
    platformViewCreated: boolean;
    surface: MXWidget;
    focusNode: FocusNode;
}
export { _PlatformViewLinkState };
declare class PlatformViewSurface extends LeafRenderObjectWidget {
    controller: PlatformViewController;
    gestureRecognizers: Set<any>;
    hitTestBehavior: PlatformViewHitTestBehavior;
    constructor(namedParameters?: {
        key?: Key;
        controller?: PlatformViewController;
        hitTestBehavior?: PlatformViewHitTestBehavior;
        gestureRecognizers?: Set<any>;
    });
}
export { PlatformViewSurface };
declare class AndroidViewSurface extends PlatformViewSurface {
    constructor(namedParameters?: {
        key?: Key;
        controller?: AndroidViewController;
        hitTestBehavior?: PlatformViewHitTestBehavior;
        gestureRecognizers?: Set<any>;
    });
}
export { AndroidViewSurface };
