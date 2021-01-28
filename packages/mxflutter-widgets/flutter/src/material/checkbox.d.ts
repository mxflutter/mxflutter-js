import { RenderToggleable } from './toggleable';
import { BoxConstraints } from '../rendering/box';
import { TickerProvider } from '../scheduler/ticker';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MaterialTapTargetSize, VisualDensity } from './theme-data';
import { Color } from '../../../mx-dart-sdk';
import { MouseCursor } from '../rendering/mouse-cursor';
import { StatefulWidget$, State$, LeafRenderObjectWidget } from '../widgets/framework';
declare class Checkbox extends StatefulWidget$ {
    value: boolean;
    onChanged: any;
    mouseCursor: MouseCursor;
    activeColor: Color;
    checkColor: Color;
    tristate: boolean;
    materialTapTargetSize: MaterialTapTargetSize;
    visualDensity: VisualDensity;
    focusColor: Color;
    hoverColor: Color;
    focusNode: FocusNode;
    autofocus: boolean;
    constructor(namedParameters?: {
        key?: Key;
        value?: boolean;
        tristate?: boolean;
        onChanged?: any;
        mouseCursor?: MouseCursor;
        activeColor?: Color;
        checkColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        materialTapTargetSize?: MaterialTapTargetSize;
        visualDensity?: VisualDensity;
        focusNode?: FocusNode;
        autofocus?: boolean;
    });
    static get width(): number;
}
export { Checkbox };
declare class _CheckboxState extends State$ {
    actionMap: Map<any, any>;
    focused: boolean;
    hovering: boolean;
}
export { _CheckboxState };
declare class _CheckboxRenderObjectWidget extends LeafRenderObjectWidget {
    value: boolean;
    tristate: boolean;
    hasFocus: boolean;
    hovering: boolean;
    activeColor: Color;
    checkColor: Color;
    inactiveColor: Color;
    focusColor: Color;
    hoverColor: Color;
    onChanged: any;
    vsync: TickerProvider;
    additionalConstraints: BoxConstraints;
    constructor(namedParameters?: {
        key?: Key;
        value?: boolean;
        tristate?: boolean;
        activeColor?: Color;
        checkColor?: Color;
        inactiveColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        onChanged?: any;
        vsync?: TickerProvider;
        additionalConstraints?: BoxConstraints;
        hasFocus?: boolean;
        hovering?: boolean;
    });
}
export { _CheckboxRenderObjectWidget };
declare class _RenderCheckbox extends RenderToggleable {
    oldValue: boolean;
    checkColor: Color;
    constructor(namedParameters?: {
        value?: boolean;
        tristate?: boolean;
        activeColor?: Color;
        checkColor?: Color;
        inactiveColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        additionalConstraints?: BoxConstraints;
        onChanged?: any;
        hasFocus?: boolean;
        hovering?: boolean;
        vsync?: TickerProvider;
    });
}
export { _RenderCheckbox };
