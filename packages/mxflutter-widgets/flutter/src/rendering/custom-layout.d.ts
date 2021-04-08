import { Listenable } from '../foundation/change-notifier';
import { ContainerBoxParentData, RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class MultiChildLayoutParentData extends ContainerBoxParentData {
    id: any;
}
export { MultiChildLayoutParentData };
declare abstract class MultiChildLayoutDelegate extends MXDartClass {
    relayout: Listenable;
    idToChild: Map<any, any>;
    debugChildrenNeedingLayout: Set<any>;
}
export { MultiChildLayoutDelegate };
declare class RenderCustomMultiChildLayoutBox extends RenderBox {
    delegate: MultiChildLayoutDelegate;
    constructor(namedParameters?: {
        children?: Array<any>;
        delegate?: MultiChildLayoutDelegate;
    });
}
export { RenderCustomMultiChildLayoutBox };
