import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { PopupMenuThemeData } from './popup-menu-theme';
import { ShapeBorder } from '../painting/borders';
import { ThemeData } from './theme-data';
import { PopupRoute } from '../widgets/routes';
import { RelativeRect } from '../rendering/stack';
import { TextDirection, Color, Offset } from '../../../mx-dart-sdk';
import { AnimationController } from '../animation/animation-controller';
import { MouseCursor } from '../rendering/mouse-cursor';
import { TextStyle } from '../painting/text-style';
import { RenderBox } from '../rendering/box';
import { RenderShiftedBox, SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { StatefulWidget$, State$, BuildContext$, SingleChildRenderObjectWidget, StatelessWidget$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class PopupMenuEntry extends StatefulWidget$ {
}
export { PopupMenuEntry };
declare class PopupMenuDivider extends PopupMenuEntry {
    height: number;
    constructor(namedParameters?: {
        key?: Key;
        height?: number;
    });
}
export { PopupMenuDivider };
declare class _PopupMenuDividerState extends State$ {
}
export { _PopupMenuDividerState };
declare class _MenuItem extends SingleChildRenderObjectWidget {
    onLayout: any;
    constructor(namedParameters?: {
        key?: Key;
        onLayout?: any;
        child?: MXWidget;
    });
}
export { _MenuItem };
declare class _RenderMenuItem extends RenderShiftedBox {
    onLayout: any;
    constructor(onLayout?: any, child?: RenderBox);
}
export { _RenderMenuItem };
declare class PopupMenuItem extends PopupMenuEntry {
    value: any;
    enabled: boolean;
    height: number;
    textStyle: TextStyle;
    mouseCursor: MouseCursor;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        value?: any;
        enabled?: boolean;
        height?: number;
        textStyle?: TextStyle;
        mouseCursor?: MouseCursor;
        child?: MXWidget;
    });
}
export { PopupMenuItem };
declare class PopupMenuItemState extends State$ {
}
export { PopupMenuItemState };
declare class CheckedPopupMenuItem extends PopupMenuItem {
    checked: boolean;
    constructor(namedParameters?: {
        key?: Key;
        value?: any;
        checked?: boolean;
        enabled?: boolean;
        child?: MXWidget;
    });
}
export { CheckedPopupMenuItem };
declare class _CheckedPopupMenuItemState extends PopupMenuItemState {
    controller: AnimationController;
}
export { _CheckedPopupMenuItemState };
declare class _PopupMenu extends StatelessWidget$ {
    route: _PopupMenuRoute;
    semanticLabel: string;
    constructor(namedParameters?: {
        key?: Key;
        route?: _PopupMenuRoute;
        semanticLabel?: string;
    });
}
export { _PopupMenu };
declare class _PopupMenuRouteLayout extends SingleChildLayoutDelegate {
    position: RelativeRect;
    itemSizes: Array<any>;
    selectedItemIndex: number;
    textDirection: TextDirection;
    constructor(position?: RelativeRect, itemSizes?: Array<any>, selectedItemIndex?: number, textDirection?: TextDirection);
}
export { _PopupMenuRouteLayout };
declare class _PopupMenuRoute extends PopupRoute {
    position: RelativeRect;
    items: Array<any>;
    itemSizes: Array<any>;
    initialValue: any;
    elevation: number;
    theme: ThemeData;
    semanticLabel: string;
    shape: ShapeBorder;
    color: Color;
    popupMenuTheme: PopupMenuThemeData;
    showMenuContext: BuildContext$;
    captureInheritedThemes: boolean;
    barrierLabel: string;
    constructor(namedParameters?: {
        position?: RelativeRect;
        items?: Array<any>;
        initialValue?: any;
        elevation?: number;
        theme?: ThemeData;
        popupMenuTheme?: PopupMenuThemeData;
        barrierLabel?: string;
        semanticLabel?: string;
        shape?: ShapeBorder;
        color?: Color;
        showMenuContext?: BuildContext$;
        captureInheritedThemes?: boolean;
    });
}
export { _PopupMenuRoute };
declare class PopupMenuButton extends StatefulWidget$ {
    itemBuilder: any;
    initialValue: any;
    onSelected: any;
    onCanceled: any;
    tooltip: string;
    elevation: number;
    padding: EdgeInsetsGeometry;
    child: MXWidget;
    icon: MXWidget;
    offset: Offset;
    enabled: boolean;
    shape: ShapeBorder;
    color: Color;
    captureInheritedThemes: boolean;
    constructor(namedParameters?: {
        key?: Key;
        itemBuilder?: any;
        initialValue?: any;
        onSelected?: any;
        onCanceled?: any;
        tooltip?: string;
        elevation?: number;
        padding?: EdgeInsetsGeometry;
        child?: MXWidget;
        icon?: MXWidget;
        offset?: Offset;
        enabled?: boolean;
        shape?: ShapeBorder;
        color?: Color;
        captureInheritedThemes?: boolean;
    });
    preBuild(buildContext: any): void;
}
export { PopupMenuButton };
declare class PopupMenuButtonState extends State$ {
}
export { PopupMenuButtonState };
