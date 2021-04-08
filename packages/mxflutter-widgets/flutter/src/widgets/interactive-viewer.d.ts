import { Matrix4 } from '../../../vector-math-64';
import { ValueNotifier } from '../foundation/change-notifier';
import { Offset } from '../../../mx-dart-sdk';
import { Axis } from '../painting/basic-types';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { Key } from '../foundation/key';
import { EdgeInsets } from '../painting/edge-insets';
import { StatefulWidget, State, GlobalKey } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class InteractiveViewer extends StatefulWidget {
    alignPanAxis: boolean;
    boundaryMargin: EdgeInsets;
    child: MXWidget;
    constrained: boolean;
    panEnabled: boolean;
    scaleEnabled: boolean;
    maxScale: number;
    minScale: number;
    onInteractionEnd: any;
    onInteractionStart: any;
    onInteractionUpdate: any;
    transformationController: TransformationController;
    constructor(namedParameters?: {
        key?: Key;
        alignPanAxis?: boolean;
        boundaryMargin?: EdgeInsets;
        constrained?: boolean;
        maxScale?: number;
        minScale?: number;
        onInteractionEnd?: any;
        onInteractionStart?: any;
        onInteractionUpdate?: any;
        panEnabled?: boolean;
        scaleEnabled?: boolean;
        transformationController?: TransformationController;
        child?: MXWidget;
    });
}
export { InteractiveViewer };
declare class _InteractiveViewerState extends State {
    transformationController: TransformationController;
    childKey: GlobalKey;
    parentKey: GlobalKey;
    animation: Animation;
    controller: AnimationController;
    panAxis: Axis;
    referenceFocalPoint: Offset;
    scaleStart: number;
    rotationStart: number;
    currentRotation: number;
    gestureType: _GestureType;
    rotateEnabled: boolean;
}
export { _InteractiveViewerState };
declare class TransformationController extends ValueNotifier {
    constructor(value?: Matrix4);
}
export { TransformationController };
declare enum _GestureType {
    pan = "{ \"_name\": \"_GestureType.pan\", \"index\": 0 }",
    scale = "{ \"_name\": \"_GestureType.scale\", \"index\": 1 }",
    rotate = "{ \"_name\": \"_GestureType.rotate\", \"index\": 2 }"
}
export { _GestureType };
