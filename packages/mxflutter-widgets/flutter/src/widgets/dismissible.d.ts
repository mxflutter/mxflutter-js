import { AnimationController } from '../animation/animation-controller';
import { Size } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { Axis } from '../painting/basic-types';
import { CustomClipper } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { Duration } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum DismissDirection {
    vertical = "{ \"_name\": \"DismissDirection.vertical\", \"index\": 0 }",
    horizontal = "{ \"_name\": \"DismissDirection.horizontal\", \"index\": 1 }",
    endToStart = "{ \"_name\": \"DismissDirection.endToStart\", \"index\": 2 }",
    startToEnd = "{ \"_name\": \"DismissDirection.startToEnd\", \"index\": 3 }",
    up = "{ \"_name\": \"DismissDirection.up\", \"index\": 4 }",
    down = "{ \"_name\": \"DismissDirection.down\", \"index\": 5 }"
}
export { DismissDirection };
declare class Dismissible extends StatefulWidget$ {
    child: MXWidget;
    background: MXWidget;
    secondaryBackground: MXWidget;
    confirmDismiss: any;
    onResize: any;
    onDismissed: any;
    direction: DismissDirection;
    resizeDuration: Duration;
    dismissThresholds: Map<any, any>;
    movementDuration: Duration;
    crossAxisEndOffset: number;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        background?: MXWidget;
        secondaryBackground?: MXWidget;
        confirmDismiss?: any;
        onResize?: any;
        onDismissed?: any;
        direction?: DismissDirection;
        resizeDuration?: Duration;
        dismissThresholds?: Map<any, any>;
        movementDuration?: Duration;
        crossAxisEndOffset?: number;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { Dismissible };
declare class _DismissibleClipper extends CustomClipper {
    axis: Axis;
    moveAnimation: Animation;
    constructor(namedParameters?: {
        axis?: Axis;
        moveAnimation?: Animation;
    });
}
export { _DismissibleClipper };
declare enum _FlingGestureKind {
    none = "{ \"_name\": \"_FlingGestureKind.none\", \"index\": 0 }",
    forward = "{ \"_name\": \"_FlingGestureKind.forward\", \"index\": 1 }",
    reverse = "{ \"_name\": \"_FlingGestureKind.reverse\", \"index\": 2 }"
}
export { _FlingGestureKind };
declare class _DismissibleState extends State$ {
    moveController: AnimationController;
    moveAnimation: Animation;
    resizeController: AnimationController;
    resizeAnimation: Animation;
    dragExtent: number;
    dragUnderway: boolean;
    sizePriorToCollapse: Size;
}
export { _DismissibleState };
