import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Duration } from '../../../mx-dart-sdk';
import { Curve } from '../animation/curves';
import { TickerProvider } from '../scheduler/ticker';
import { RenderSliver } from './sliver';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class OverScrollHeaderStretchConfiguration extends MXDartClass {
    stretchTriggerOffset: number;
    onStretchTrigger: any;
    constructor(namedParameters?: {
        stretchTriggerOffset?: number;
        onStretchTrigger?: any;
    });
}
export { OverScrollHeaderStretchConfiguration };
declare class PersistentHeaderShowOnScreenConfiguration extends MXDartClass {
    minShowOnScreenExtent: number;
    maxShowOnScreenExtent: number;
    constructor(namedParameters?: {
        minShowOnScreenExtent?: number;
        maxShowOnScreenExtent?: number;
    });
}
export { PersistentHeaderShowOnScreenConfiguration };
declare abstract class RenderSliverPersistentHeader extends RenderSliver {
    lastStretchOffset: number;
    needsUpdateChild: boolean;
    lastShrinkOffset: number;
    lastOverlapsContent: boolean;
    stretchConfiguration: OverScrollHeaderStretchConfiguration;
}
export { RenderSliverPersistentHeader };
declare abstract class RenderSliverScrollingPersistentHeader extends RenderSliverPersistentHeader {
    childPosition: number;
}
export { RenderSliverScrollingPersistentHeader };
declare abstract class RenderSliverPinnedPersistentHeader extends RenderSliverPersistentHeader {
    showOnScreenConfiguration: PersistentHeaderShowOnScreenConfiguration;
}
export { RenderSliverPinnedPersistentHeader };
declare class FloatingHeaderSnapConfiguration extends MXDartClass {
    vsync: TickerProvider;
    curve: Curve;
    duration: Duration;
    constructor(namedParameters?: {
        vsync?: TickerProvider;
        curve?: Curve;
        duration?: Duration;
    });
}
export { FloatingHeaderSnapConfiguration };
declare abstract class RenderSliverFloatingPersistentHeader extends RenderSliverPersistentHeader {
    controller: AnimationController;
    animation: Animation;
    lastActualScrollOffset: number;
    effectiveScrollOffset: number;
    childPosition: number;
    vsync: TickerProvider;
    snapConfiguration: FloatingHeaderSnapConfiguration;
    showOnScreenConfiguration: PersistentHeaderShowOnScreenConfiguration;
}
export { RenderSliverFloatingPersistentHeader };
declare abstract class RenderSliverFloatingPinnedPersistentHeader extends RenderSliverFloatingPersistentHeader {
}
export { RenderSliverFloatingPinnedPersistentHeader };
