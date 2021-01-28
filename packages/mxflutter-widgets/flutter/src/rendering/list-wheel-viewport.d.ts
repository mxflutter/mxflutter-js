import { Clip } from '../../../mx-dart-sdk';
import { ViewportOffset } from './viewport-offset';
import { ContainerBoxParentData, RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class ListWheelChildManager extends MXDartClass {
}
export { ListWheelChildManager };
declare class ListWheelParentData extends ContainerBoxParentData {
    index: number;
}
export { ListWheelParentData };
declare class RenderListWheelViewport extends RenderBox {
    childManager: ListWheelChildManager;
    offset: ViewportOffset;
    diameterRatio: number;
    perspective: number;
    offAxisFraction: number;
    useMagnifier: boolean;
    magnification: number;
    overAndUnderCenterOpacity: number;
    itemExtent: number;
    squeeze: number;
    renderChildrenOutsideViewport: boolean;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        childManager?: ListWheelChildManager;
        offset?: ViewportOffset;
        diameterRatio?: number;
        perspective?: number;
        offAxisFraction?: number;
        useMagnifier?: boolean;
        magnification?: number;
        overAndUnderCenterOpacity?: number;
        itemExtent?: number;
        squeeze?: number;
        renderChildrenOutsideViewport?: boolean;
        clipBehavior?: Clip;
        children?: Array<any>;
    });
    static get defaultDiameterRatio(): number;
    static get defaultPerspective(): number;
    static get diameterRatioZeroMessage(): string;
    static get perspectiveTooHighMessage(): string;
    static get clipBehaviorAndRenderChildrenOutsideViewportConflict(): string;
}
export { RenderListWheelViewport };
