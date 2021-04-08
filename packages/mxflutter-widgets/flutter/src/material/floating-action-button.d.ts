import { RenderAligningShiftedBox } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { MaterialTapTargetSize } from './theme-data';
import { FocusNode } from '../widgets/focus-manager';
import { ShapeBorder } from '../painting/borders';
import { MouseCursor } from '../rendering/mouse-cursor';
import { Color, Clip, TextDirection } from '../../../mx-dart-sdk';
import { StatelessWidget, SingleChildRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _DefaultHeroTag extends MXDartClass {
}
export { _DefaultHeroTag };
declare class FloatingActionButton extends StatelessWidget {
    child: MXWidget;
    tooltip: string;
    foregroundColor: Color;
    backgroundColor: Color;
    focusColor: Color;
    hoverColor: Color;
    splashColor: Color;
    heroTag: any;
    onPressed: any;
    mouseCursor: MouseCursor;
    elevation: number;
    focusElevation: number;
    hoverElevation: number;
    highlightElevation: number;
    disabledElevation: number;
    mini: boolean;
    shape: ShapeBorder;
    clipBehavior: Clip;
    isExtended: boolean;
    focusNode: FocusNode;
    autofocus: boolean;
    materialTapTargetSize: MaterialTapTargetSize;
    sizeConstraints: BoxConstraints;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        tooltip?: string;
        foregroundColor?: Color;
        backgroundColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        splashColor?: Color;
        heroTag?: any;
        elevation?: number;
        focusElevation?: number;
        hoverElevation?: number;
        highlightElevation?: number;
        disabledElevation?: number;
        onPressed?: any;
        mouseCursor?: MouseCursor;
        mini?: boolean;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        focusNode?: FocusNode;
        autofocus?: boolean;
        materialTapTargetSize?: MaterialTapTargetSize;
        isExtended?: boolean;
    });
    static extended(namedParameters?: {
        key?: Key;
        tooltip?: string;
        foregroundColor?: Color;
        backgroundColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        heroTag?: any;
        elevation?: number;
        focusElevation?: number;
        hoverElevation?: number;
        splashColor?: Color;
        highlightElevation?: number;
        disabledElevation?: number;
        onPressed?: any;
        mouseCursor?: MouseCursor;
        shape?: ShapeBorder;
        isExtended?: boolean;
        materialTapTargetSize?: MaterialTapTargetSize;
        clipBehavior?: Clip;
        focusNode?: FocusNode;
        autofocus?: boolean;
        icon?: MXWidget;
        label?: MXWidget;
    }): FloatingActionButton;
}
export { FloatingActionButton };
declare class _ChildOverflowBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { _ChildOverflowBox };
declare class _RenderChildOverflowBox extends RenderAligningShiftedBox {
    constructor(namedParameters?: {
        child?: RenderBox;
        textDirection?: TextDirection;
    });
}
export { _RenderChildOverflowBox };
