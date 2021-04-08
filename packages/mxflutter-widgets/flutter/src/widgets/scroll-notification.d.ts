import { ScrollDirection } from '../rendering/viewport-offset';
import { DragStartDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { BuildContext } from './framework';
import { ScrollMetrics } from './scroll-metrics';
import { Notification, LayoutChangedNotification } from './notification-listener';
declare abstract class ViewportNotificationMixin extends Notification {
    depth: number;
}
export { ViewportNotificationMixin };
declare abstract class ScrollNotification extends LayoutChangedNotification {
    metrics: ScrollMetrics;
    context: BuildContext;
}
export { ScrollNotification };
declare class ScrollStartNotification extends ScrollNotification {
    dragDetails: DragStartDetails;
    constructor(namedParameters?: {
        metrics?: ScrollMetrics;
        context?: BuildContext;
        dragDetails?: DragStartDetails;
    });
}
export { ScrollStartNotification };
declare class ScrollUpdateNotification extends ScrollNotification {
    dragDetails: DragUpdateDetails;
    scrollDelta: number;
    constructor(namedParameters?: {
        metrics?: ScrollMetrics;
        context?: BuildContext;
        dragDetails?: DragUpdateDetails;
        scrollDelta?: number;
    });
}
export { ScrollUpdateNotification };
declare class OverscrollNotification extends ScrollNotification {
    dragDetails: DragUpdateDetails;
    overscroll: number;
    velocity: number;
    constructor(namedParameters?: {
        metrics?: ScrollMetrics;
        context?: BuildContext;
        dragDetails?: DragUpdateDetails;
        overscroll?: number;
        velocity?: number;
    });
}
export { OverscrollNotification };
declare class ScrollEndNotification extends ScrollNotification {
    dragDetails: DragEndDetails;
    constructor(namedParameters?: {
        metrics?: ScrollMetrics;
        context?: BuildContext;
        dragDetails?: DragEndDetails;
    });
}
export { ScrollEndNotification };
declare class UserScrollNotification extends ScrollNotification {
    direction: ScrollDirection;
    constructor(namedParameters?: {
        metrics?: ScrollMetrics;
        context?: BuildContext;
        direction?: ScrollDirection;
    });
}
export { UserScrollNotification };
