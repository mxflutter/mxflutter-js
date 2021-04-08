import { RenderBox } from '../rendering/box';
import { FloatingHeaderSnapConfiguration, OverScrollHeaderStretchConfiguration, PersistentHeaderShowOnScreenConfiguration } from '../rendering/sliver-persistent-header';
import { TickerProvider } from '../scheduler/ticker';
import { SliverPersistentHeaderDelegate } from '../widgets/sliver-persistent-header';
import { ScrollPosition } from '../widgets/scroll-position';
import { Key } from '../foundation/key';
import { TextTheme } from './text-theme';
import { IconThemeData } from '../widgets/icon-theme-data';
import { ShapeBorder } from '../painting/borders';
import { Color, Brightness, Size, TextDirection } from '../../../mx-dart-sdk';
import { PreferredSizeWidget } from '../widgets/preferred-size';
import { StatefulWidget, State, SingleChildRenderObjectWidget } from '../widgets/framework';
import { SingleChildLayoutDelegate, RenderAligningShiftedBox } from '../rendering/shifted-box';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class _ToolbarContainerLayout extends SingleChildLayoutDelegate {
    toolbarHeight: number;
    constructor(toolbarHeight?: number);
}
export { _ToolbarContainerLayout };
declare class AppBar extends StatefulWidget {
    leading: MXWidget;
    automaticallyImplyLeading: boolean;
    title: MXWidget;
    actions: Array<any>;
    flexibleSpace: MXWidget;
    bottom: PreferredSizeWidget;
    elevation: number;
    shadowColor: Color;
    shape: ShapeBorder;
    backgroundColor: Color;
    brightness: Brightness;
    iconTheme: IconThemeData;
    actionsIconTheme: IconThemeData;
    textTheme: TextTheme;
    primary: boolean;
    centerTitle: boolean;
    excludeHeaderSemantics: boolean;
    titleSpacing: number;
    toolbarOpacity: number;
    bottomOpacity: number;
    preferredSize: Size;
    toolbarHeight: number;
    leadingWidth: number;
    constructor(namedParameters?: {
        key?: Key;
        leading?: MXWidget;
        automaticallyImplyLeading?: boolean;
        title?: MXWidget;
        actions?: Array<any>;
        flexibleSpace?: MXWidget;
        bottom?: PreferredSizeWidget;
        elevation?: number;
        shadowColor?: Color;
        shape?: ShapeBorder;
        backgroundColor?: Color;
        brightness?: Brightness;
        iconTheme?: IconThemeData;
        actionsIconTheme?: IconThemeData;
        textTheme?: TextTheme;
        primary?: boolean;
        centerTitle?: boolean;
        excludeHeaderSemantics?: boolean;
        titleSpacing?: number;
        toolbarOpacity?: number;
        bottomOpacity?: number;
        toolbarHeight?: number;
        leadingWidth?: number;
    });
}
export { AppBar };
declare class _AppBarState extends State {
}
export { _AppBarState };
declare class _FloatingAppBar extends StatefulWidget {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { _FloatingAppBar };
declare class _FloatingAppBarState extends State {
    position: ScrollPosition;
}
export { _FloatingAppBarState };
declare class _SliverAppBarDelegate extends SliverPersistentHeaderDelegate {
    leading: MXWidget;
    automaticallyImplyLeading: boolean;
    title: MXWidget;
    actions: Array<any>;
    flexibleSpace: MXWidget;
    bottom: PreferredSizeWidget;
    elevation: number;
    shadowColor: Color;
    forceElevated: boolean;
    backgroundColor: Color;
    brightness: Brightness;
    iconTheme: IconThemeData;
    actionsIconTheme: IconThemeData;
    textTheme: TextTheme;
    primary: boolean;
    centerTitle: boolean;
    excludeHeaderSemantics: boolean;
    titleSpacing: number;
    expandedHeight: number;
    collapsedHeight: number;
    topPadding: number;
    floating: boolean;
    pinned: boolean;
    shape: ShapeBorder;
    toolbarHeight: number;
    leadingWidth: number;
    bottomHeight: number;
    vsync: TickerProvider;
    snapConfiguration: FloatingHeaderSnapConfiguration;
    stretchConfiguration: OverScrollHeaderStretchConfiguration;
    showOnScreenConfiguration: PersistentHeaderShowOnScreenConfiguration;
    constructor(namedParameters?: {
        leading?: MXWidget;
        automaticallyImplyLeading?: boolean;
        title?: MXWidget;
        actions?: Array<any>;
        flexibleSpace?: MXWidget;
        bottom?: PreferredSizeWidget;
        elevation?: number;
        shadowColor?: Color;
        forceElevated?: boolean;
        backgroundColor?: Color;
        brightness?: Brightness;
        iconTheme?: IconThemeData;
        actionsIconTheme?: IconThemeData;
        textTheme?: TextTheme;
        primary?: boolean;
        centerTitle?: boolean;
        excludeHeaderSemantics?: boolean;
        titleSpacing?: number;
        expandedHeight?: number;
        collapsedHeight?: number;
        topPadding?: number;
        floating?: boolean;
        pinned?: boolean;
        vsync?: TickerProvider;
        snapConfiguration?: FloatingHeaderSnapConfiguration;
        stretchConfiguration?: OverScrollHeaderStretchConfiguration;
        showOnScreenConfiguration?: PersistentHeaderShowOnScreenConfiguration;
        shape?: ShapeBorder;
        toolbarHeight?: number;
        leadingWidth?: number;
    });
}
export { _SliverAppBarDelegate };
declare class SliverAppBar extends StatefulWidget {
    leading: MXWidget;
    automaticallyImplyLeading: boolean;
    title: MXWidget;
    actions: Array<any>;
    flexibleSpace: MXWidget;
    bottom: PreferredSizeWidget;
    elevation: number;
    shadowColor: Color;
    forceElevated: boolean;
    backgroundColor: Color;
    brightness: Brightness;
    iconTheme: IconThemeData;
    actionsIconTheme: IconThemeData;
    textTheme: TextTheme;
    primary: boolean;
    centerTitle: boolean;
    excludeHeaderSemantics: boolean;
    titleSpacing: number;
    collapsedHeight: number;
    expandedHeight: number;
    floating: boolean;
    pinned: boolean;
    shape: ShapeBorder;
    snap: boolean;
    stretch: boolean;
    stretchTriggerOffset: number;
    onStretchTrigger: any;
    toolbarHeight: number;
    leadingWidth: number;
    constructor(namedParameters?: {
        key?: Key;
        leading?: MXWidget;
        automaticallyImplyLeading?: boolean;
        title?: MXWidget;
        actions?: Array<any>;
        flexibleSpace?: MXWidget;
        bottom?: PreferredSizeWidget;
        elevation?: number;
        shadowColor?: Color;
        forceElevated?: boolean;
        backgroundColor?: Color;
        brightness?: Brightness;
        iconTheme?: IconThemeData;
        actionsIconTheme?: IconThemeData;
        textTheme?: TextTheme;
        primary?: boolean;
        centerTitle?: boolean;
        excludeHeaderSemantics?: boolean;
        titleSpacing?: number;
        collapsedHeight?: number;
        expandedHeight?: number;
        floating?: boolean;
        pinned?: boolean;
        snap?: boolean;
        stretch?: boolean;
        stretchTriggerOffset?: number;
        onStretchTrigger?: any;
        shape?: ShapeBorder;
        toolbarHeight?: number;
        leadingWidth?: number;
    });
}
export { SliverAppBar };
declare class _SliverAppBarState extends State {
    snapConfiguration: FloatingHeaderSnapConfiguration;
    stretchConfiguration: OverScrollHeaderStretchConfiguration;
    showOnScreenConfiguration: PersistentHeaderShowOnScreenConfiguration;
}
export { _SliverAppBarState };
declare class _AppBarTitleBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { _AppBarTitleBox };
declare class _RenderAppBarTitleBox extends RenderAligningShiftedBox {
    constructor(namedParameters?: {
        child?: RenderBox;
        textDirection?: TextDirection;
    });
}
export { _RenderAppBarTitleBox };
