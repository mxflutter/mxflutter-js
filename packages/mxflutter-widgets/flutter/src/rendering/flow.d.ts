import { Offset } from '../../../mx-dart-sdk';
import { PaintingContext } from './object';
import { Matrix4 } from '../../../vector-math-64';
import { ContainerBoxParentData, RenderBox } from './box';
import { Listenable } from '../foundation/change-notifier';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class FlowPaintingContext extends MXDartClass {
}
export { FlowPaintingContext };
declare abstract class FlowDelegate extends MXDartClass {
    repaint: Listenable;
}
export { FlowDelegate };
declare class FlowParentData extends ContainerBoxParentData {
    transform: Matrix4;
}
export { FlowParentData };
declare class RenderFlow extends RenderBox {
    delegate: FlowDelegate;
    randomAccessChildren: Array<any>;
    lastPaintOrder: Array<any>;
    paintingContext: PaintingContext;
    paintingOffset: Offset;
    constructor(namedParameters?: {
        children?: Array<any>;
        delegate?: FlowDelegate;
    });
}
export { RenderFlow };
