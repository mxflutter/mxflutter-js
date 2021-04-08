import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { HitTestBehavior } from '../rendering/proxy-box';
import { StatelessWidget, StatefulWidget, State, SingleChildRenderObjectWidget } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class GestureRecognizerFactory extends MXDartClass {
}
export { GestureRecognizerFactory };
declare class GestureRecognizerFactoryWithHandlers extends GestureRecognizerFactory {
    mx_constructor: any;
    initializer: any;
    constructor(_constructor?: any, _initializer?: any);
}
export { GestureRecognizerFactoryWithHandlers };
declare class GestureDetector extends StatelessWidget {
    child: MXWidget;
    onTapDown: any;
    onTapUp: any;
    onTap: any;
    onTapCancel: any;
    onSecondaryTap: any;
    onSecondaryTapDown: any;
    onSecondaryTapUp: any;
    onSecondaryTapCancel: any;
    onTertiaryTapDown: any;
    onTertiaryTapUp: any;
    onTertiaryTapCancel: any;
    onDoubleTapDown: any;
    onDoubleTap: any;
    onDoubleTapCancel: any;
    onLongPress: any;
    onLongPressStart: any;
    onLongPressMoveUpdate: any;
    onLongPressUp: any;
    onLongPressEnd: any;
    onSecondaryLongPress: any;
    onSecondaryLongPressStart: any;
    onSecondaryLongPressMoveUpdate: any;
    onSecondaryLongPressUp: any;
    onSecondaryLongPressEnd: any;
    onVerticalDragDown: any;
    onVerticalDragStart: any;
    onVerticalDragUpdate: any;
    onVerticalDragEnd: any;
    onVerticalDragCancel: any;
    onHorizontalDragDown: any;
    onHorizontalDragStart: any;
    onHorizontalDragUpdate: any;
    onHorizontalDragEnd: any;
    onHorizontalDragCancel: any;
    onPanDown: any;
    onPanStart: any;
    onPanUpdate: any;
    onPanEnd: any;
    onPanCancel: any;
    onScaleStart: any;
    onScaleUpdate: any;
    onScaleEnd: any;
    onForcePressStart: any;
    onForcePressPeak: any;
    onForcePressUpdate: any;
    onForcePressEnd: any;
    behavior: HitTestBehavior;
    excludeFromSemantics: boolean;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        onTapDown?: any;
        onTapUp?: any;
        onTap?: any;
        onTapCancel?: any;
        onSecondaryTap?: any;
        onSecondaryTapDown?: any;
        onSecondaryTapUp?: any;
        onSecondaryTapCancel?: any;
        onTertiaryTapDown?: any;
        onTertiaryTapUp?: any;
        onTertiaryTapCancel?: any;
        onDoubleTapDown?: any;
        onDoubleTap?: any;
        onDoubleTapCancel?: any;
        onLongPress?: any;
        onLongPressStart?: any;
        onLongPressMoveUpdate?: any;
        onLongPressUp?: any;
        onLongPressEnd?: any;
        onSecondaryLongPress?: any;
        onSecondaryLongPressStart?: any;
        onSecondaryLongPressMoveUpdate?: any;
        onSecondaryLongPressUp?: any;
        onSecondaryLongPressEnd?: any;
        onVerticalDragDown?: any;
        onVerticalDragStart?: any;
        onVerticalDragUpdate?: any;
        onVerticalDragEnd?: any;
        onVerticalDragCancel?: any;
        onHorizontalDragDown?: any;
        onHorizontalDragStart?: any;
        onHorizontalDragUpdate?: any;
        onHorizontalDragEnd?: any;
        onHorizontalDragCancel?: any;
        onForcePressStart?: any;
        onForcePressPeak?: any;
        onForcePressUpdate?: any;
        onForcePressEnd?: any;
        onPanDown?: any;
        onPanStart?: any;
        onPanUpdate?: any;
        onPanEnd?: any;
        onPanCancel?: any;
        onScaleStart?: any;
        onScaleUpdate?: any;
        onScaleEnd?: any;
        behavior?: HitTestBehavior;
        excludeFromSemantics?: boolean;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { GestureDetector };
declare class RawGestureDetector extends StatefulWidget {
    child: MXWidget;
    gestures: Map<any, any>;
    behavior: HitTestBehavior;
    excludeFromSemantics: boolean;
    semantics: SemanticsGestureDelegate;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        gestures?: Map<any, any>;
        behavior?: HitTestBehavior;
        excludeFromSemantics?: boolean;
        semantics?: SemanticsGestureDelegate;
    });
}
export { RawGestureDetector };
declare class RawGestureDetectorState extends State {
    recognizers: Map<any, any>;
    semantics: SemanticsGestureDelegate;
}
export { RawGestureDetectorState };
declare class _GestureSemantics extends SingleChildRenderObjectWidget {
    assignSemantics: any;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        assignSemantics?: any;
    });
}
export { _GestureSemantics };
declare abstract class SemanticsGestureDelegate extends MXDartClass {
}
export { SemanticsGestureDelegate };
declare class _DefaultSemanticsGestureDelegate extends SemanticsGestureDelegate {
    detectorState: RawGestureDetectorState;
    constructor(detectorState?: RawGestureDetectorState);
}
export { _DefaultSemanticsGestureDelegate };
