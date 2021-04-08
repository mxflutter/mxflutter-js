import { RenderBox } from '../rendering/box';
import { RenderSliver } from '../rendering/sliver';
import { Key } from '../foundation/key';
import { SingleChildRenderObjectWidget, StatefulWidget, State } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class _CupertinoSliverRefresh extends SingleChildRenderObjectWidget {
    refreshIndicatorLayoutExtent: number;
    hasLayoutExtent: boolean;
    constructor(namedParameters?: {
        key?: Key;
        refreshIndicatorLayoutExtent?: number;
        hasLayoutExtent?: boolean;
        child?: MXWidget;
    });
}
export { _CupertinoSliverRefresh };
declare class _RenderCupertinoSliverRefresh extends RenderSliver {
    refreshIndicatorExtent: number;
    hasLayoutExtent: boolean;
    layoutExtentOffsetCompensation: number;
    constructor(namedParameters?: {
        refreshIndicatorExtent?: number;
        hasLayoutExtent?: boolean;
        child?: RenderBox;
    });
}
export { _RenderCupertinoSliverRefresh };
declare enum RefreshIndicatorMode {
    inactive = "{ \"_name\": \"RefreshIndicatorMode.inactive\", \"index\": 0 }",
    drag = "{ \"_name\": \"RefreshIndicatorMode.drag\", \"index\": 1 }",
    armed = "{ \"_name\": \"RefreshIndicatorMode.armed\", \"index\": 2 }",
    refresh = "{ \"_name\": \"RefreshIndicatorMode.refresh\", \"index\": 3 }",
    done = "{ \"_name\": \"RefreshIndicatorMode.done\", \"index\": 4 }"
}
export { RefreshIndicatorMode };
declare class CupertinoSliverRefreshControl extends StatefulWidget {
    refreshTriggerPullDistance: number;
    refreshIndicatorExtent: number;
    builder: any;
    onRefresh: any;
    constructor(namedParameters?: {
        key?: Key;
        refreshTriggerPullDistance?: number;
        refreshIndicatorExtent?: number;
        builder?: any;
        onRefresh?: any;
    });
}
export { CupertinoSliverRefreshControl };
declare class _CupertinoSliverRefreshControlState extends State {
    refreshState: RefreshIndicatorMode;
    refreshTask: any;
    latestIndicatorBoxExtent: number;
    hasSliverLayoutExtent: boolean;
}
export { _CupertinoSliverRefreshControlState };
