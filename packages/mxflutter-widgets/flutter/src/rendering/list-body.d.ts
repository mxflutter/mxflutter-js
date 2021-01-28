import { AxisDirection } from '../painting/basic-types';
import { ContainerBoxParentData, RenderBox } from './box';
declare class ListBodyParentData extends ContainerBoxParentData {
}
export { ListBodyParentData };
declare class RenderListBody extends RenderBox {
    axisDirection: AxisDirection;
    constructor(namedParameters?: {
        children?: Array<any>;
        axisDirection?: AxisDirection;
    });
}
export { RenderListBody };
