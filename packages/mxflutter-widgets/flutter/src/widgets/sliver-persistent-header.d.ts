import { TickerProvider } from '../scheduler/ticker';
import { RenderBox } from '../rendering/box';
import { RenderSliverPersistentHeader, RenderSliverScrollingPersistentHeader, OverScrollHeaderStretchConfiguration, RenderSliverPinnedPersistentHeader, PersistentHeaderShowOnScreenConfiguration, RenderSliverFloatingPinnedPersistentHeader, FloatingHeaderSnapConfiguration, RenderSliverFloatingPersistentHeader } from '../rendering/sliver-persistent-header';
import { Key } from '../foundation/key';
import { StatelessWidget, RenderObjectElement, Element, RenderObjectWidget } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class SliverPersistentHeaderDelegate extends MXDartClass {
}
export { SliverPersistentHeaderDelegate };
declare class SliverPersistentHeader extends StatelessWidget {
    delegate: SliverPersistentHeaderDelegate;
    pinned: boolean;
    floating: boolean;
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverPersistentHeaderDelegate;
        pinned?: boolean;
        floating?: boolean;
    });
}
export { SliverPersistentHeader };
declare class _SliverPersistentHeaderElement extends RenderObjectElement {
    child: Element;
    constructor(widget?: _SliverPersistentHeaderRenderObjectWidget);
}
export { _SliverPersistentHeaderElement };
declare abstract class _SliverPersistentHeaderRenderObjectWidget extends RenderObjectWidget {
    delegate: SliverPersistentHeaderDelegate;
}
export { _SliverPersistentHeaderRenderObjectWidget };
declare abstract class _RenderSliverPersistentHeaderForWidgetsMixin extends RenderSliverPersistentHeader {
    element: _SliverPersistentHeaderElement;
}
export { _RenderSliverPersistentHeaderForWidgetsMixin };
declare class _SliverScrollingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverPersistentHeaderDelegate;
    });
}
export { _SliverScrollingPersistentHeader };
declare class _RenderSliverScrollingPersistentHeaderForWidgets extends RenderSliverScrollingPersistentHeader {
    constructor(namedParameters?: {
        child?: RenderBox;
        stretchConfiguration?: OverScrollHeaderStretchConfiguration;
    });
}
export { _RenderSliverScrollingPersistentHeaderForWidgets };
declare class _SliverPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverPersistentHeaderDelegate;
    });
}
export { _SliverPinnedPersistentHeader };
declare class _RenderSliverPinnedPersistentHeaderForWidgets extends RenderSliverPinnedPersistentHeader {
    constructor(namedParameters?: {
        child?: RenderBox;
        stretchConfiguration?: OverScrollHeaderStretchConfiguration;
        showOnScreenConfiguration?: PersistentHeaderShowOnScreenConfiguration;
    });
}
export { _RenderSliverPinnedPersistentHeaderForWidgets };
declare class _SliverFloatingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverPersistentHeaderDelegate;
    });
}
export { _SliverFloatingPersistentHeader };
declare class _RenderSliverFloatingPinnedPersistentHeaderForWidgets extends RenderSliverFloatingPinnedPersistentHeader {
    constructor(namedParameters?: {
        child?: RenderBox;
        vsync?: TickerProvider;
        snapConfiguration?: FloatingHeaderSnapConfiguration;
        stretchConfiguration?: OverScrollHeaderStretchConfiguration;
        showOnScreenConfiguration?: PersistentHeaderShowOnScreenConfiguration;
    });
}
export { _RenderSliverFloatingPinnedPersistentHeaderForWidgets };
declare class _SliverFloatingPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverPersistentHeaderDelegate;
    });
}
export { _SliverFloatingPinnedPersistentHeader };
declare class _RenderSliverFloatingPersistentHeaderForWidgets extends RenderSliverFloatingPersistentHeader {
    constructor(namedParameters?: {
        child?: RenderBox;
        vsync?: TickerProvider;
        snapConfiguration?: FloatingHeaderSnapConfiguration;
        stretchConfiguration?: OverScrollHeaderStretchConfiguration;
        showOnScreenConfiguration?: PersistentHeaderShowOnScreenConfiguration;
    });
}
export { _RenderSliverFloatingPersistentHeaderForWidgets };
