import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, State$, InheritedWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum CollapseMode {
    parallax = "{ \"_name\": \"CollapseMode.parallax\", \"index\": 0 }",
    pin = "{ \"_name\": \"CollapseMode.pin\", \"index\": 1 }",
    none = "{ \"_name\": \"CollapseMode.none\", \"index\": 2 }"
}
export { CollapseMode };
declare enum StretchMode {
    zoomBackground = "{ \"_name\": \"StretchMode.zoomBackground\", \"index\": 0 }",
    blurBackground = "{ \"_name\": \"StretchMode.blurBackground\", \"index\": 1 }",
    fadeTitle = "{ \"_name\": \"StretchMode.fadeTitle\", \"index\": 2 }"
}
export { StretchMode };
declare class FlexibleSpaceBar extends StatefulWidget$ {
    title: MXWidget;
    background: MXWidget;
    centerTitle: boolean;
    collapseMode: CollapseMode;
    stretchModes: Array<any>;
    titlePadding: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        key?: Key;
        title?: MXWidget;
        background?: MXWidget;
        centerTitle?: boolean;
        titlePadding?: EdgeInsetsGeometry;
        collapseMode?: CollapseMode;
        stretchModes?: Array<any>;
    });
}
export { FlexibleSpaceBar };
declare class _FlexibleSpaceBarState extends State$ {
}
export { _FlexibleSpaceBarState };
declare class FlexibleSpaceBarSettings extends InheritedWidget {
    toolbarOpacity: number;
    minExtent: number;
    maxExtent: number;
    currentExtent: number;
    constructor(namedParameters?: {
        key?: Key;
        toolbarOpacity?: number;
        minExtent?: number;
        maxExtent?: number;
        currentExtent?: number;
        child?: MXWidget;
    });
}
export { FlexibleSpaceBarSettings };
