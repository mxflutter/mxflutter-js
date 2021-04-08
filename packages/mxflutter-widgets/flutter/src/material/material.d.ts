import { CustomPainter } from '../rendering/custom-paint';
import { Curve } from '../animation/curves';
import { ImplicitlyAnimatedWidget, AnimatedWidgetBaseState } from '../widgets/implicit-animations';
import { Tween, ColorTween } from '../animation/tween';
import { RenderBox } from '../rendering/box';
import { TickerProvider } from '../scheduler/ticker';
import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { BorderRadiusGeometry } from '../painting/border-radius';
import { Duration } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { TextStyle } from '../painting/text-style';
import { Color, Clip, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, State, GlobalKey, SingleChildRenderObjectWidget, StatelessWidget } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare enum MaterialType {
    canvas = "{ \"_name\": \"MaterialType.canvas\", \"index\": 0 }",
    card = "{ \"_name\": \"MaterialType.card\", \"index\": 1 }",
    circle = "{ \"_name\": \"MaterialType.circle\", \"index\": 2 }",
    button = "{ \"_name\": \"MaterialType.button\", \"index\": 3 }",
    transparency = "{ \"_name\": \"MaterialType.transparency\", \"index\": 4 }"
}
export { MaterialType };
declare abstract class MaterialInkController extends MXDartClass {
}
export { MaterialInkController };
declare class Material extends StatefulWidget {
    child: MXWidget;
    type: MaterialType;
    elevation: number;
    color: Color;
    shadowColor: Color;
    textStyle: TextStyle;
    shape: ShapeBorder;
    borderOnForeground: boolean;
    clipBehavior: Clip;
    animationDuration: Duration;
    borderRadius: BorderRadiusGeometry;
    constructor(namedParameters?: {
        key?: Key;
        type?: MaterialType;
        elevation?: number;
        color?: Color;
        shadowColor?: Color;
        textStyle?: TextStyle;
        borderRadius?: BorderRadiusGeometry;
        shape?: ShapeBorder;
        borderOnForeground?: boolean;
        clipBehavior?: Clip;
        animationDuration?: Duration;
        child?: MXWidget;
    });
    static get defaultSplashRadius(): number;
}
export { Material };
declare class _MaterialState extends State {
    inkFeatureRenderer: GlobalKey;
}
export { _MaterialState };
declare class _RenderInkFeatures extends RenderProxyBox {
    vsync: TickerProvider;
    color: Color;
    absorbHitTest: boolean;
    inkFeatures: Array<any>;
    constructor(namedParameters?: {
        child?: RenderBox;
        vsync?: TickerProvider;
        absorbHitTest?: boolean;
        color?: Color;
    });
}
export { _RenderInkFeatures };
declare class _InkFeatures extends SingleChildRenderObjectWidget {
    color: Color;
    vsync: TickerProvider;
    absorbHitTest: boolean;
    constructor(namedParameters?: {
        key?: Key;
        color?: Color;
        vsync?: TickerProvider;
        absorbHitTest?: boolean;
        child?: MXWidget;
    });
}
export { _InkFeatures };
declare abstract class InkFeature extends MXDartClass {
    controller: _RenderInkFeatures;
    referenceBox: RenderBox;
    onRemoved: any;
    debugDisposed: boolean;
}
export { InkFeature };
declare class ShapeBorderTween extends Tween {
    constructor(namedParameters?: {
        begin?: ShapeBorder;
        end?: ShapeBorder;
    });
}
export { ShapeBorderTween };
declare class _MaterialInterior extends ImplicitlyAnimatedWidget {
    child: MXWidget;
    shape: ShapeBorder;
    borderOnForeground: boolean;
    clipBehavior: Clip;
    elevation: number;
    color: Color;
    shadowColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        shape?: ShapeBorder;
        borderOnForeground?: boolean;
        clipBehavior?: Clip;
        elevation?: number;
        color?: Color;
        shadowColor?: Color;
        curve?: Curve;
        duration?: Duration;
    });
}
export { _MaterialInterior };
declare class _MaterialInteriorState extends AnimatedWidgetBaseState {
    elevation: Tween;
    shadowColor: ColorTween;
    border: ShapeBorderTween;
}
export { _MaterialInteriorState };
declare class _ShapeBorderPaint extends StatelessWidget {
    child: MXWidget;
    shape: ShapeBorder;
    borderOnForeground: boolean;
    constructor(namedParameters?: {
        child?: MXWidget;
        shape?: ShapeBorder;
        borderOnForeground?: boolean;
    });
}
export { _ShapeBorderPaint };
declare class _ShapeBorderPainter extends CustomPainter {
    border: ShapeBorder;
    textDirection: TextDirection;
    constructor(border?: ShapeBorder, textDirection?: TextDirection);
}
export { _ShapeBorderPainter };
