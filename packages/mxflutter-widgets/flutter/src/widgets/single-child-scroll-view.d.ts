import { RenderBox } from '../rendering/box';
import { ViewportOffset } from '../rendering/viewport-offset';
import { Key } from '../foundation/key';
import { Clip } from '../../../mx-dart-sdk';
import { DragStartBehavior } from '../gestures/recognizer';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Axis, AxisDirection } from '../painting/basic-types';
import { StatelessWidget, SingleChildRenderObjectWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class SingleChildScrollView extends StatelessWidget {
    scrollDirection: Axis;
    reverse: boolean;
    padding: EdgeInsetsGeometry;
    controller: ScrollController;
    primary: boolean;
    physics: ScrollPhysics;
    child: MXWidget;
    dragStartBehavior: DragStartBehavior;
    clipBehavior: Clip;
    restorationId: string;
    constructor(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        padding?: EdgeInsetsGeometry;
        primary?: boolean;
        physics?: ScrollPhysics;
        controller?: ScrollController;
        child?: MXWidget;
        dragStartBehavior?: DragStartBehavior;
        clipBehavior?: Clip;
        restorationId?: string;
    });
}
export { SingleChildScrollView };
declare class _SingleChildViewport extends SingleChildRenderObjectWidget {
    axisDirection: AxisDirection;
    offset: ViewportOffset;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        axisDirection?: AxisDirection;
        offset?: ViewportOffset;
        child?: MXWidget;
        clipBehavior?: Clip;
    });
}
export { _SingleChildViewport };
declare class _RenderSingleChildViewport extends RenderBox {
    axisDirection: AxisDirection;
    offset: ViewportOffset;
    cacheExtent: number;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        axisDirection?: AxisDirection;
        offset?: ViewportOffset;
        cacheExtent?: number;
        child?: RenderBox;
        clipBehavior?: Clip;
    });
}
export { _RenderSingleChildViewport };
