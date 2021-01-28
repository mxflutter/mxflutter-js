import { EdgeInsets } from '../painting/edge-insets';
import { SliverConstraints } from '../rendering/sliver';
import { RenderSliverEdgeInsetsPadding } from '../rendering/sliver-padding';
import { Key } from '../foundation/key';
import { SliverChildDelegate, SliverMultiBoxAdaptorWidget } from './sliver';
import { StatelessWidget$, SingleChildRenderObjectWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class SliverFillViewport extends StatelessWidget$ {
    viewportFraction: number;
    padEnds: boolean;
    delegate: SliverChildDelegate;
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverChildDelegate;
        viewportFraction?: number;
        padEnds?: boolean;
    });
}
export { SliverFillViewport };
declare class _SliverFillViewportRenderObjectWidget extends SliverMultiBoxAdaptorWidget {
    viewportFraction: number;
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverChildDelegate;
        viewportFraction?: number;
    });
}
export { _SliverFillViewportRenderObjectWidget };
declare class _SliverFractionalPadding extends SingleChildRenderObjectWidget {
    viewportFraction: number;
    constructor(namedParameters?: {
        viewportFraction?: number;
        sliver?: MXWidget;
    });
}
export { _SliverFractionalPadding };
declare class _RenderSliverFractionalPadding extends RenderSliverEdgeInsetsPadding {
    lastResolvedConstraints: SliverConstraints;
    viewportFraction: number;
    resolvedPadding: EdgeInsets;
    constructor(namedParameters?: {
        viewportFraction?: number;
    });
}
export { _RenderSliverFractionalPadding };
declare class SliverFillRemaining extends StatelessWidget$ {
    child: MXWidget;
    hasScrollBody: boolean;
    fillOverscroll: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        hasScrollBody?: boolean;
        fillOverscroll?: boolean;
    });
}
export { SliverFillRemaining };
declare class _SliverFillRemainingWithScrollable extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { _SliverFillRemainingWithScrollable };
declare class _SliverFillRemainingWithoutScrollable extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { _SliverFillRemainingWithoutScrollable };
declare class _SliverFillRemainingAndOverscroll extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { _SliverFillRemainingAndOverscroll };
