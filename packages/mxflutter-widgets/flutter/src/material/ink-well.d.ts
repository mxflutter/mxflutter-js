import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MaterialStateProperty } from './material-state';
import { BoxShape } from '../painting/box-border';
import { MouseCursor } from '../rendering/mouse-cursor';
import { InheritedWidget, StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
import { BorderRadius } from '../painting/border-radius';
import { ShapeBorder } from '../painting/borders';
import { Color } from '../../../mx-dart-sdk';
import { InkFeature } from './material';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class InteractiveInkFeature extends InkFeature {
    color: Color;
}
export { InteractiveInkFeature };
declare abstract class InteractiveInkFeatureFactory extends MXDartClass {
}
export { InteractiveInkFeatureFactory };
declare abstract class _ParentInkResponseState extends MXDartClass {
}
export { _ParentInkResponseState };
declare class _ParentInkResponseProvider extends InheritedWidget {
    state: _ParentInkResponseState;
    constructor(namedParameters?: {
        state?: _ParentInkResponseState;
        child?: MXWidget;
    });
}
export { _ParentInkResponseProvider };
declare class InkResponse extends StatelessWidget$ {
    child: MXWidget;
    onTap: any;
    onTapDown: any;
    onTapCancel: any;
    onDoubleTap: any;
    onLongPress: any;
    onHighlightChanged: any;
    onHover: any;
    mouseCursor: MouseCursor;
    containedInkWell: boolean;
    highlightShape: BoxShape;
    radius: number;
    borderRadius: BorderRadius;
    customBorder: ShapeBorder;
    focusColor: Color;
    hoverColor: Color;
    highlightColor: Color;
    overlayColor: MaterialStateProperty;
    splashColor: Color;
    splashFactory: InteractiveInkFeatureFactory;
    enableFeedback: boolean;
    excludeFromSemantics: boolean;
    onFocusChange: any;
    autofocus: boolean;
    focusNode: FocusNode;
    canRequestFocus: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        onTap?: any;
        onTapDown?: any;
        onTapCancel?: any;
        onDoubleTap?: any;
        onLongPress?: any;
        onHighlightChanged?: any;
        onHover?: any;
        mouseCursor?: MouseCursor;
        containedInkWell?: boolean;
        highlightShape?: BoxShape;
        radius?: number;
        borderRadius?: BorderRadius;
        customBorder?: ShapeBorder;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        overlayColor?: MaterialStateProperty;
        splashColor?: Color;
        splashFactory?: InteractiveInkFeatureFactory;
        enableFeedback?: boolean;
        excludeFromSemantics?: boolean;
        focusNode?: FocusNode;
        canRequestFocus?: boolean;
        onFocusChange?: any;
        autofocus?: boolean;
    });
}
export { InkResponse };
declare class _InkResponseStateWidget extends StatefulWidget$ {
    child: MXWidget;
    onTap: any;
    onTapDown: any;
    onTapCancel: any;
    onDoubleTap: any;
    onLongPress: any;
    onHighlightChanged: any;
    onHover: any;
    mouseCursor: MouseCursor;
    containedInkWell: boolean;
    highlightShape: BoxShape;
    radius: number;
    borderRadius: BorderRadius;
    customBorder: ShapeBorder;
    focusColor: Color;
    hoverColor: Color;
    highlightColor: Color;
    overlayColor: MaterialStateProperty;
    splashColor: Color;
    splashFactory: InteractiveInkFeatureFactory;
    enableFeedback: boolean;
    excludeFromSemantics: boolean;
    onFocusChange: any;
    autofocus: boolean;
    focusNode: FocusNode;
    canRequestFocus: boolean;
    parentState: _ParentInkResponseState;
    getRectCallback: any;
    debugCheckContext: any;
    constructor(namedParameters?: {
        child?: MXWidget;
        onTap?: any;
        onTapDown?: any;
        onTapCancel?: any;
        onDoubleTap?: any;
        onLongPress?: any;
        onHighlightChanged?: any;
        onHover?: any;
        mouseCursor?: MouseCursor;
        containedInkWell?: boolean;
        highlightShape?: BoxShape;
        radius?: number;
        borderRadius?: BorderRadius;
        customBorder?: ShapeBorder;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        overlayColor?: MaterialStateProperty;
        splashColor?: Color;
        splashFactory?: InteractiveInkFeatureFactory;
        enableFeedback?: boolean;
        excludeFromSemantics?: boolean;
        focusNode?: FocusNode;
        canRequestFocus?: boolean;
        onFocusChange?: any;
        autofocus?: boolean;
        parentState?: _ParentInkResponseState;
        getRectCallback?: any;
        debugCheckContext?: any;
    });
}
export { _InkResponseStateWidget };
declare enum _HighlightType {
    pressed = "{ \"_name\": \"_HighlightType.pressed\", \"index\": 0 }",
    hover = "{ \"_name\": \"_HighlightType.hover\", \"index\": 1 }",
    focus = "{ \"_name\": \"_HighlightType.focus\", \"index\": 2 }"
}
export { _HighlightType };
declare class _InkResponseState extends State$ {
    splashes: Set<any>;
    currentSplash: InteractiveInkFeature;
    hovering: boolean;
    highlights: Map<any, any>;
    actionMap: Map<any, any>;
    activeChildren: any;
    hasFocus: boolean;
}
export { _InkResponseState };
declare class InkWell extends InkResponse {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        onTap?: any;
        onDoubleTap?: any;
        onLongPress?: any;
        onTapDown?: any;
        onTapCancel?: any;
        onHighlightChanged?: any;
        onHover?: any;
        mouseCursor?: MouseCursor;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        overlayColor?: MaterialStateProperty;
        splashColor?: Color;
        splashFactory?: InteractiveInkFeatureFactory;
        radius?: number;
        borderRadius?: BorderRadius;
        customBorder?: ShapeBorder;
        enableFeedback?: boolean;
        excludeFromSemantics?: boolean;
        focusNode?: FocusNode;
        canRequestFocus?: boolean;
        onFocusChange?: any;
        autofocus?: boolean;
    });
}
export { InkWell };
