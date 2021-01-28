import { ScrollPosition } from './scroll-position';
import { ChangeNotifier } from '../foundation/change-notifier';
declare class ScrollController extends ChangeNotifier {
    initialScrollOffset: number;
    keepScrollOffset: boolean;
    debugLabel: string;
    positions: Array<any>;
    constructor(namedParameters?: {
        initialScrollOffset?: number;
        keepScrollOffset?: boolean;
        debugLabel?: string;
    });
    animateTo(offset: any, namedParameters?: {
        duration?: any;
        curve?: any;
    }): void;
    jumpTo(value: any): void;
}
export { ScrollController };
declare class TrackingScrollController extends ScrollController {
    positionToListener: Map<any, any>;
    lastUpdated: ScrollPosition;
    lastUpdatedOffset: number;
    constructor(namedParameters?: {
        initialScrollOffset?: number;
        keepScrollOffset?: boolean;
        debugLabel?: string;
    });
}
export { TrackingScrollController };
