import { InheritedNotifier } from './inherited-notifier';
import { ScrollPositionWithSingleContext } from './scroll-position-with-single-context';
import { ScrollPosition } from './scroll-position';
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { ValueNotifier, ChangeNotifier } from '../foundation/change-notifier';
import { Notification } from './notification-listener';
import { Key } from '../foundation/key';
import { StatefulWidget$, BuildContext$, State$, StatelessWidget$ } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class DraggableScrollableSheet extends StatefulWidget$ {
    initialChildSize: number;
    minChildSize: number;
    maxChildSize: number;
    expand: boolean;
    builder: any;
    constructor(namedParameters?: {
        key?: Key;
        initialChildSize?: number;
        minChildSize?: number;
        maxChildSize?: number;
        expand?: boolean;
        builder?: any;
    });
}
export { DraggableScrollableSheet };
declare class DraggableScrollableNotification extends Notification {
    extent: number;
    minExtent: number;
    maxExtent: number;
    initialExtent: number;
    context: BuildContext$;
    constructor(namedParameters?: {
        extent?: number;
        minExtent?: number;
        maxExtent?: number;
        initialExtent?: number;
        context?: BuildContext$;
    });
}
export { DraggableScrollableNotification };
declare class _DraggableSheetExtent extends MXDartClass {
    minExtent: number;
    maxExtent: number;
    initialExtent: number;
    currentExtent: ValueNotifier;
    availablePixels: number;
    constructor(namedParameters?: {
        minExtent?: number;
        maxExtent?: number;
        initialExtent?: number;
        listener?: any;
    });
}
export { _DraggableSheetExtent };
declare class _DraggableScrollableSheetState extends State$ {
    scrollController: _DraggableScrollableSheetScrollController;
    extent: _DraggableSheetExtent;
}
export { _DraggableScrollableSheetState };
declare class _DraggableScrollableSheetScrollController extends ScrollController {
    extent: _DraggableSheetExtent;
    constructor(namedParameters?: {
        initialScrollOffset?: number;
        debugLabel?: string;
        extent?: _DraggableSheetExtent;
    });
}
export { _DraggableScrollableSheetScrollController };
declare class _DraggableScrollableSheetScrollPosition extends ScrollPositionWithSingleContext {
    dragCancelCallback: any;
    extent: _DraggableSheetExtent;
    constructor(namedParameters?: {
        physics?: ScrollPhysics;
        context?: ScrollContext;
        initialPixels?: number;
        keepScrollOffset?: boolean;
        oldPosition?: ScrollPosition;
        debugLabel?: string;
        extent?: _DraggableSheetExtent;
    });
}
export { _DraggableScrollableSheetScrollPosition };
declare class DraggableScrollableActuator extends StatelessWidget$ {
    child: MXWidget;
    notifier: _ResetNotifier;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { DraggableScrollableActuator };
declare class _ResetNotifier extends ChangeNotifier {
    wasCalled: boolean;
}
export { _ResetNotifier };
declare class _InheritedResetNotifier extends InheritedNotifier {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        notifier?: _ResetNotifier;
    });
}
export { _InheritedResetNotifier };
