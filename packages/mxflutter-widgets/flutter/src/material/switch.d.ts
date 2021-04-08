import { BoxPainter } from '../painting/decoration';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { RenderToggleable } from './toggleable';
import { BoxConstraints } from '../rendering/box';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MouseCursor } from '../rendering/mouse-cursor';
import { DragStartBehavior } from '../gestures/recognizer';
import { MaterialTapTargetSize } from './theme-data';
import { ImageProvider, ImageConfiguration } from '../painting/image-provider';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, State, LeafRenderObjectWidget } from '../widgets/framework';
declare enum _SwitchType {
    material = "{ \"_name\": \"_SwitchType.material\", \"index\": 0 }",
    adaptive = "{ \"_name\": \"_SwitchType.adaptive\", \"index\": 1 }"
}
export { _SwitchType };
declare class Switch extends StatefulWidget {
    value: boolean;
    onChanged: any;
    activeColor: Color;
    activeTrackColor: Color;
    inactiveThumbColor: Color;
    inactiveTrackColor: Color;
    activeThumbImage: ImageProvider;
    onActiveThumbImageError: any;
    inactiveThumbImage: ImageProvider;
    onInactiveThumbImageError: any;
    materialTapTargetSize: MaterialTapTargetSize;
    switchType: _SwitchType;
    dragStartBehavior: DragStartBehavior;
    mouseCursor: MouseCursor;
    focusColor: Color;
    hoverColor: Color;
    focusNode: FocusNode;
    autofocus: boolean;
    constructor(namedParameters?: {
        key?: Key;
        value?: boolean;
        onChanged?: any;
        activeColor?: Color;
        activeTrackColor?: Color;
        inactiveThumbColor?: Color;
        inactiveTrackColor?: Color;
        activeThumbImage?: ImageProvider;
        onActiveThumbImageError?: any;
        inactiveThumbImage?: ImageProvider;
        onInactiveThumbImageError?: any;
        materialTapTargetSize?: MaterialTapTargetSize;
        dragStartBehavior?: DragStartBehavior;
        mouseCursor?: MouseCursor;
        focusColor?: Color;
        hoverColor?: Color;
        focusNode?: FocusNode;
        autofocus?: boolean;
    });
    static adaptive(namedParameters?: {
        key?: Key;
        value?: boolean;
        onChanged?: any;
        activeColor?: Color;
        activeTrackColor?: Color;
        inactiveThumbColor?: Color;
        inactiveTrackColor?: Color;
        activeThumbImage?: ImageProvider;
        onActiveThumbImageError?: any;
        inactiveThumbImage?: ImageProvider;
        onInactiveThumbImageError?: any;
        materialTapTargetSize?: MaterialTapTargetSize;
        dragStartBehavior?: DragStartBehavior;
        mouseCursor?: MouseCursor;
        focusColor?: Color;
        hoverColor?: Color;
        focusNode?: FocusNode;
        autofocus?: boolean;
    }): Switch;
}
export { Switch };
declare class _SwitchState extends State {
    actionMap: Map<any, any>;
    focused: boolean;
    hovering: boolean;
}
export { _SwitchState };
declare class _SwitchRenderObjectWidget extends LeafRenderObjectWidget {
    value: boolean;
    activeColor: Color;
    inactiveColor: Color;
    hoverColor: Color;
    focusColor: Color;
    activeThumbImage: ImageProvider;
    onActiveThumbImageError: any;
    inactiveThumbImage: ImageProvider;
    onInactiveThumbImageError: any;
    activeTrackColor: Color;
    inactiveTrackColor: Color;
    configuration: ImageConfiguration;
    onChanged: any;
    additionalConstraints: BoxConstraints;
    dragStartBehavior: DragStartBehavior;
    hasFocus: boolean;
    hovering: boolean;
    state: _SwitchState;
    constructor(namedParameters?: {
        key?: Key;
        value?: boolean;
        activeColor?: Color;
        inactiveColor?: Color;
        hoverColor?: Color;
        focusColor?: Color;
        activeThumbImage?: ImageProvider;
        onActiveThumbImageError?: any;
        inactiveThumbImage?: ImageProvider;
        onInactiveThumbImageError?: any;
        activeTrackColor?: Color;
        inactiveTrackColor?: Color;
        configuration?: ImageConfiguration;
        onChanged?: any;
        additionalConstraints?: BoxConstraints;
        dragStartBehavior?: DragStartBehavior;
        hasFocus?: boolean;
        hovering?: boolean;
        state?: _SwitchState;
    });
}
export { _SwitchRenderObjectWidget };
declare class _RenderSwitch extends RenderToggleable {
    activeThumbImage: ImageProvider;
    onActiveThumbImageError: any;
    inactiveThumbImage: ImageProvider;
    onInactiveThumbImageError: any;
    activeTrackColor: Color;
    inactiveTrackColor: Color;
    configuration: ImageConfiguration;
    textDirection: TextDirection;
    state: _SwitchState;
    drag: HorizontalDragGestureRecognizer;
    needsPositionAnimation: boolean;
    cachedThumbColor: Color;
    cachedThumbImage: ImageProvider;
    cachedThumbErrorListener: any;
    cachedThumbPainter: BoxPainter;
    isPainting: boolean;
    constructor(namedParameters?: {
        value?: boolean;
        activeColor?: Color;
        inactiveColor?: Color;
        hoverColor?: Color;
        focusColor?: Color;
        activeThumbImage?: ImageProvider;
        onActiveThumbImageError?: any;
        inactiveThumbImage?: ImageProvider;
        onInactiveThumbImageError?: any;
        activeTrackColor?: Color;
        inactiveTrackColor?: Color;
        configuration?: ImageConfiguration;
        additionalConstraints?: BoxConstraints;
        textDirection?: TextDirection;
        onChanged?: any;
        dragStartBehavior?: DragStartBehavior;
        hasFocus?: boolean;
        hovering?: boolean;
        state?: _SwitchState;
    });
}
export { _RenderSwitch };
