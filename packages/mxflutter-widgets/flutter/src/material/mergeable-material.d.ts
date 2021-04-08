import { RenderListBody } from '../rendering/list-body';
import { ListBody } from '../widgets/basic';
import { CurvedAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { Color } from '../../../mx-dart-sdk';
import { Axis, AxisDirection } from '../painting/basic-types';
import { StatefulWidget, State, GlobalKey } from '../widgets/framework';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class MergeableMaterialItem extends MXDartClass {
    key: LocalKey;
}
export { MergeableMaterialItem };
declare class MaterialSlice extends MergeableMaterialItem {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: LocalKey;
        child?: MXWidget;
    });
}
export { MaterialSlice };
declare class MaterialGap extends MergeableMaterialItem {
    size: number;
    constructor(namedParameters?: {
        key?: LocalKey;
        size?: number;
    });
}
export { MaterialGap };
declare class MergeableMaterial extends StatefulWidget {
    children: Array<any>;
    mainAxis: Axis;
    elevation: number;
    hasDividers: boolean;
    dividerColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        mainAxis?: Axis;
        elevation?: number;
        hasDividers?: boolean;
        children?: Array<any>;
        dividerColor?: Color;
    });
}
export { MergeableMaterial };
declare class _AnimationTuple extends MXDartClass {
    controller: AnimationController;
    startAnimation: CurvedAnimation;
    endAnimation: CurvedAnimation;
    gapAnimation: CurvedAnimation;
    gapStart: number;
    constructor(namedParameters?: {
        controller?: AnimationController;
        startAnimation?: CurvedAnimation;
        endAnimation?: CurvedAnimation;
        gapAnimation?: CurvedAnimation;
        gapStart?: number;
    });
}
export { _AnimationTuple };
declare class _MergeableMaterialState extends State {
    children: Array<any>;
    animationTuples: Map<any, any>;
}
export { _MergeableMaterialState };
declare class _MergeableMaterialSliceKey extends GlobalKey {
    value: LocalKey;
    constructor(value?: LocalKey);
}
export { _MergeableMaterialSliceKey };
declare class _MergeableMaterialListBody extends ListBody {
    items: Array<any>;
    boxShadows: Array<any>;
    constructor(namedParameters?: {
        children?: Array<any>;
        mainAxis?: Axis;
        items?: Array<any>;
        boxShadows?: Array<any>;
    });
}
export { _MergeableMaterialListBody };
declare class _RenderMergeableMaterialListBody extends RenderListBody {
    boxShadows: Array<any>;
    constructor(namedParameters?: {
        children?: Array<any>;
        axisDirection?: AxisDirection;
        boxShadows?: Array<any>;
    });
}
export { _RenderMergeableMaterialListBody };
