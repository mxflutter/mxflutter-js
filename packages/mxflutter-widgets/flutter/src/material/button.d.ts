import { RenderShiftedBox } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { Duration } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { VisualDensity, MaterialTapTargetSize } from './theme-data';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, Clip, Size } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { MouseCursor } from '../rendering/mouse-cursor';
import { StatefulWidget$, State$, SingleChildRenderObjectWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class RawMaterialButton extends StatefulWidget$ {
    onPressed: any;
    onLongPress: any;
    onHighlightChanged: any;
    mouseCursor: MouseCursor;
    textStyle: TextStyle;
    fillColor: Color;
    focusColor: Color;
    hoverColor: Color;
    highlightColor: Color;
    splashColor: Color;
    elevation: number;
    hoverElevation: number;
    focusElevation: number;
    highlightElevation: number;
    disabledElevation: number;
    padding: EdgeInsetsGeometry;
    visualDensity: VisualDensity;
    constraints: BoxConstraints;
    shape: ShapeBorder;
    animationDuration: Duration;
    child: MXWidget;
    materialTapTargetSize: MaterialTapTargetSize;
    focusNode: FocusNode;
    autofocus: boolean;
    clipBehavior: Clip;
    enableFeedback: boolean;
    constructor(namedParameters?: {
        key?: Key;
        onPressed?: any;
        onLongPress?: any;
        onHighlightChanged?: any;
        mouseCursor?: MouseCursor;
        textStyle?: TextStyle;
        fillColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        elevation?: number;
        focusElevation?: number;
        hoverElevation?: number;
        highlightElevation?: number;
        disabledElevation?: number;
        padding?: EdgeInsetsGeometry;
        visualDensity?: VisualDensity;
        constraints?: BoxConstraints;
        shape?: ShapeBorder;
        animationDuration?: Duration;
        clipBehavior?: Clip;
        focusNode?: FocusNode;
        autofocus?: boolean;
        materialTapTargetSize?: MaterialTapTargetSize;
        child?: MXWidget;
        enableFeedback?: boolean;
    });
}
export { RawMaterialButton };
declare class _RawMaterialButtonState extends State$ {
    states: Set<any>;
}
export { _RawMaterialButtonState };
declare class _InputPadding extends SingleChildRenderObjectWidget {
    minSize: Size;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        minSize?: Size;
    });
}
export { _InputPadding };
declare class _RenderInputPadding extends RenderShiftedBox {
    minSize: Size;
    constructor(_minSize?: Size, child?: RenderBox);
}
export { _RenderInputPadding };
