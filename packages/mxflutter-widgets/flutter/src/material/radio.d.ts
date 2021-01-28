import { RenderToggleable } from './toggleable';
import { BoxConstraints } from '../rendering/box';
import { TickerProvider } from '../scheduler/ticker';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MaterialTapTargetSize, VisualDensity } from './theme-data';
import { Color } from '../../../mx-dart-sdk';
import { MouseCursor } from '../rendering/mouse-cursor';
import { StatefulWidget$, State$, LeafRenderObjectWidget } from '../widgets/framework';
declare class Radio extends StatefulWidget$ {
    value: any;
    groupValue: any;
    onChanged: any;
    mouseCursor: MouseCursor;
    toggleable: boolean;
    activeColor: Color;
    materialTapTargetSize: MaterialTapTargetSize;
    visualDensity: VisualDensity;
    focusColor: Color;
    hoverColor: Color;
    focusNode: FocusNode;
    autofocus: boolean;
    constructor(namedParameters?: {
        key?: Key;
        value?: any;
        groupValue?: any;
        onChanged?: any;
        mouseCursor?: MouseCursor;
        toggleable?: boolean;
        activeColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        materialTapTargetSize?: MaterialTapTargetSize;
        visualDensity?: VisualDensity;
        focusNode?: FocusNode;
        autofocus?: boolean;
    });
}
export { Radio };
declare class _RadioState extends State$ {
    actionMap: Map<any, any>;
    focused: boolean;
    hovering: boolean;
}
export { _RadioState };
declare class _RadioRenderObjectWidget extends LeafRenderObjectWidget {
    selected: boolean;
    hasFocus: boolean;
    hovering: boolean;
    inactiveColor: Color;
    activeColor: Color;
    focusColor: Color;
    hoverColor: Color;
    onChanged: any;
    toggleable: boolean;
    vsync: TickerProvider;
    additionalConstraints: BoxConstraints;
    constructor(namedParameters?: {
        key?: Key;
        selected?: boolean;
        activeColor?: Color;
        inactiveColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        additionalConstraints?: BoxConstraints;
        onChanged?: any;
        toggleable?: boolean;
        vsync?: TickerProvider;
        hasFocus?: boolean;
        hovering?: boolean;
    });
}
export { _RadioRenderObjectWidget };
declare class _RenderRadio extends RenderToggleable {
    constructor(namedParameters?: {
        value?: boolean;
        activeColor?: Color;
        inactiveColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        onChanged?: any;
        tristate?: boolean;
        additionalConstraints?: BoxConstraints;
        vsync?: TickerProvider;
        hasFocus?: boolean;
        hovering?: boolean;
    });
}
export { _RenderRadio };
