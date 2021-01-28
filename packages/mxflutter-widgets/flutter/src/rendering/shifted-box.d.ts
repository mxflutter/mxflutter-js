import { Listenable } from '../foundation/change-notifier';
import { Axis } from '../painting/basic-types';
import { Alignment, AlignmentGeometry } from '../painting/alignment';
import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { TextBaseline, TextDirection, Rect, Clip, Size } from '../../../mx-dart-sdk';
import { RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class RenderShiftedBox extends RenderBox {
}
export { RenderShiftedBox };
declare class RenderPadding extends RenderShiftedBox {
    resolvedPadding: EdgeInsets;
    padding: EdgeInsetsGeometry;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        padding?: EdgeInsetsGeometry;
        textDirection?: TextDirection;
        child?: RenderBox;
    });
}
export { RenderPadding };
declare abstract class RenderAligningShiftedBox extends RenderShiftedBox {
    resolvedAlignment: Alignment;
    alignment: AlignmentGeometry;
    textDirection: TextDirection;
}
export { RenderAligningShiftedBox };
declare class RenderPositionedBox extends RenderAligningShiftedBox {
    widthFactor: number;
    heightFactor: number;
    constructor(namedParameters?: {
        child?: RenderBox;
        widthFactor?: number;
        heightFactor?: number;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
    });
}
export { RenderPositionedBox };
declare class RenderConstrainedOverflowBox extends RenderAligningShiftedBox {
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    constructor(namedParameters?: {
        child?: RenderBox;
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
    });
}
export { RenderConstrainedOverflowBox };
declare class RenderUnconstrainedBox extends RenderAligningShiftedBox {
    constrainedAxis: Axis;
    overflowContainerRect: Rect;
    overflowChildRect: Rect;
    isOverflowing: boolean;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
        constrainedAxis?: Axis;
        child?: RenderBox;
        clipBehavior?: Clip;
    });
}
export { RenderUnconstrainedBox };
declare class RenderSizedOverflowBox extends RenderAligningShiftedBox {
    requestedSize: Size;
    constructor(namedParameters?: {
        child?: RenderBox;
        requestedSize?: Size;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
    });
}
export { RenderSizedOverflowBox };
declare class RenderFractionallySizedOverflowBox extends RenderAligningShiftedBox {
    widthFactor: number;
    heightFactor: number;
    constructor(namedParameters?: {
        child?: RenderBox;
        widthFactor?: number;
        heightFactor?: number;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
    });
}
export { RenderFractionallySizedOverflowBox };
declare abstract class SingleChildLayoutDelegate extends MXDartClass {
    relayout: Listenable;
}
export { SingleChildLayoutDelegate };
declare class RenderCustomSingleChildLayoutBox extends RenderShiftedBox {
    delegate: SingleChildLayoutDelegate;
    constructor(namedParameters?: {
        child?: RenderBox;
        delegate?: SingleChildLayoutDelegate;
    });
}
export { RenderCustomSingleChildLayoutBox };
declare class RenderBaseline extends RenderShiftedBox {
    baseline: number;
    baselineType: TextBaseline;
    constructor(namedParameters?: {
        child?: RenderBox;
        baseline?: number;
        baselineType?: TextBaseline;
    });
}
export { RenderBaseline };
