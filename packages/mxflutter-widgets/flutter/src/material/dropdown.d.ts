import { InputDecoration } from './input-decorator';
import { FormField, AutovalidateMode, FormFieldState } from '../widgets/form';
import { Orientation } from '../widgets/media-query';
import { FocusNode, FocusHighlightMode } from '../widgets/focus-manager';
import { RenderProxyBox } from '../rendering/proxy-box';
import { ScrollController } from '../widgets/scroll-controller';
import { TextStyle } from '../painting/text-style';
import { ThemeData } from './theme-data';
import { PopupRoute } from '../widgets/routes';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { CurvedAnimation } from '../animation/animations';
import { Key } from '../foundation/key';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget, State, StatelessWidget, SingleChildRenderObjectWidget, InheritedWidget } from '../widgets/framework';
import { ScrollBehavior } from '../widgets/scroll-configuration';
import { BoxPainter } from '../painting/decoration';
import { Animation } from '../animation/animation';
import { Color, Rect, TextDirection } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _DropdownMenuPainter extends CustomPainter {
    color: Color;
    elevation: number;
    selectedIndex: number;
    resize: Animation;
    getSelectedItemOffset: any;
    painter: BoxPainter;
    constructor(namedParameters?: {
        color?: Color;
        elevation?: number;
        selectedIndex?: number;
        resize?: Animation;
        getSelectedItemOffset?: any;
    });
}
export { _DropdownMenuPainter };
declare class _DropdownScrollBehavior extends ScrollBehavior {
}
export { _DropdownScrollBehavior };
declare class _DropdownMenuItemButton extends StatefulWidget {
    route: _DropdownRoute;
    padding: EdgeInsets;
    buttonRect: Rect;
    constraints: BoxConstraints;
    itemIndex: number;
    constructor(namedParameters?: {
        key?: Key;
        padding?: EdgeInsets;
        route?: _DropdownRoute;
        buttonRect?: Rect;
        constraints?: BoxConstraints;
        itemIndex?: number;
    });
}
export { _DropdownMenuItemButton };
declare class _DropdownMenuItemButtonState extends State {
}
export { _DropdownMenuItemButtonState };
declare class _DropdownMenu extends StatefulWidget {
    route: _DropdownRoute;
    padding: EdgeInsets;
    buttonRect: Rect;
    constraints: BoxConstraints;
    dropdownColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        padding?: EdgeInsets;
        route?: _DropdownRoute;
        buttonRect?: Rect;
        constraints?: BoxConstraints;
        dropdownColor?: Color;
    });
}
export { _DropdownMenu };
declare class _DropdownMenuState extends State {
    fadeOpacity: CurvedAnimation;
    resize: CurvedAnimation;
}
export { _DropdownMenuState };
declare class _DropdownMenuRouteLayout extends SingleChildLayoutDelegate {
    buttonRect: Rect;
    route: _DropdownRoute;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        buttonRect?: Rect;
        route?: _DropdownRoute;
        textDirection?: TextDirection;
    });
}
export { _DropdownMenuRouteLayout };
declare class _DropdownRouteResult extends MXDartClass {
    result: any;
    constructor(result?: any);
}
export { _DropdownRouteResult };
declare class _MenuLimits extends MXDartClass {
    top: number;
    bottom: number;
    height: number;
    scrollOffset: number;
    constructor(top?: number, bottom?: number, height?: number, scrollOffset?: number);
}
export { _MenuLimits };
declare class _DropdownRoute extends PopupRoute {
    items: Array<any>;
    padding: EdgeInsetsGeometry;
    buttonRect: Rect;
    selectedIndex: number;
    elevation: number;
    theme: ThemeData;
    style: TextStyle;
    itemHeight: number;
    dropdownColor: Color;
    itemHeights: Array<any>;
    scrollController: ScrollController;
    barrierLabel: string;
    constructor(namedParameters?: {
        items?: Array<any>;
        padding?: EdgeInsetsGeometry;
        buttonRect?: Rect;
        selectedIndex?: number;
        elevation?: number;
        theme?: ThemeData;
        style?: TextStyle;
        barrierLabel?: string;
        itemHeight?: number;
        dropdownColor?: Color;
    });
}
export { _DropdownRoute };
declare class _DropdownRoutePage extends StatelessWidget {
    route: _DropdownRoute;
    constraints: BoxConstraints;
    items: Array<any>;
    padding: EdgeInsetsGeometry;
    buttonRect: Rect;
    selectedIndex: number;
    elevation: number;
    theme: ThemeData;
    style: TextStyle;
    dropdownColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        route?: _DropdownRoute;
        constraints?: BoxConstraints;
        items?: Array<any>;
        padding?: EdgeInsetsGeometry;
        buttonRect?: Rect;
        selectedIndex?: number;
        elevation?: number;
        theme?: ThemeData;
        style?: TextStyle;
        dropdownColor?: Color;
    });
}
export { _DropdownRoutePage };
declare class _MenuItem extends SingleChildRenderObjectWidget {
    onLayout: any;
    item: DropdownMenuItem;
    constructor(namedParameters?: {
        key?: Key;
        onLayout?: any;
        item?: DropdownMenuItem;
    });
}
export { _MenuItem };
declare class _RenderMenuItem extends RenderProxyBox {
    onLayout: any;
    constructor(onLayout?: any, child?: RenderBox);
}
export { _RenderMenuItem };
declare class _DropdownMenuItemContainer extends StatelessWidget {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { _DropdownMenuItemContainer };
declare class DropdownMenuItem extends _DropdownMenuItemContainer {
    onTap: any;
    value: any;
    constructor(namedParameters?: {
        key?: Key;
        onTap?: any;
        value?: any;
        child?: MXWidget;
    });
}
export { DropdownMenuItem };
declare class DropdownButtonHideUnderline extends InheritedWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { DropdownButtonHideUnderline };
declare class DropdownButton extends StatefulWidget {
    items: Array<any>;
    value: any;
    hint: MXWidget;
    disabledHint: MXWidget;
    onChanged: any;
    onTap: any;
    selectedItemBuilder: any;
    elevation: number;
    style: TextStyle;
    underline: MXWidget;
    icon: MXWidget;
    iconDisabledColor: Color;
    iconEnabledColor: Color;
    iconSize: number;
    isDense: boolean;
    isExpanded: boolean;
    itemHeight: number;
    focusColor: Color;
    focusNode: FocusNode;
    autofocus: boolean;
    dropdownColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        items?: Array<any>;
        selectedItemBuilder?: any;
        value?: any;
        hint?: MXWidget;
        disabledHint?: MXWidget;
        onChanged?: any;
        onTap?: any;
        elevation?: number;
        style?: TextStyle;
        underline?: MXWidget;
        icon?: MXWidget;
        iconDisabledColor?: Color;
        iconEnabledColor?: Color;
        iconSize?: number;
        isDense?: boolean;
        isExpanded?: boolean;
        itemHeight?: number;
        focusColor?: Color;
        focusNode?: FocusNode;
        autofocus?: boolean;
        dropdownColor?: Color;
    });
}
export { DropdownButton };
declare class _DropdownButtonState extends State {
    selectedIndex: number;
    dropdownRoute: _DropdownRoute;
    lastOrientation: Orientation;
    internalNode: FocusNode;
    hasPrimaryFocus: boolean;
    actionMap: Map<any, any>;
    focusHighlightMode: FocusHighlightMode;
}
export { _DropdownButtonState };
declare class DropdownButtonFormField extends FormField {
    onChanged: any;
    decoration: InputDecoration;
    constructor(namedParameters?: {
        key?: Key;
        items?: Array<any>;
        selectedItemBuilder?: any;
        value?: any;
        hint?: MXWidget;
        disabledHint?: MXWidget;
        onChanged?: any;
        onTap?: any;
        elevation?: number;
        style?: TextStyle;
        icon?: MXWidget;
        iconDisabledColor?: Color;
        iconEnabledColor?: Color;
        iconSize?: number;
        isDense?: boolean;
        isExpanded?: boolean;
        itemHeight?: number;
        focusColor?: Color;
        focusNode?: FocusNode;
        autofocus?: boolean;
        dropdownColor?: Color;
        decoration?: InputDecoration;
        onSaved?: any;
        validator?: any;
        autovalidate?: boolean;
        autovalidateMode?: AutovalidateMode;
    });
}
export { DropdownButtonFormField };
declare class _DropdownButtonFormFieldState extends FormFieldState {
}
export { _DropdownButtonFormFieldState };
