import { RenderBox } from './box';
import { RenderProxyBox } from './proxy-box';
import { SemanticsProperties } from '../semantics/semantics';
import { Matrix4 } from '../../../vector-math-64';
import { Rect, Size } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { Listenable } from '../foundation/change-notifier';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class CustomPainter extends Listenable {
    repaint: Listenable;
}
export { CustomPainter };
declare class CustomPainterSemantics extends MXDartClass {
    key: Key;
    rect: Rect;
    transform: Matrix4;
    properties: SemanticsProperties;
    tags: Set<any>;
    constructor(namedParameters?: {
        key?: Key;
        rect?: Rect;
        properties?: SemanticsProperties;
        transform?: Matrix4;
        tags?: Set<any>;
    });
}
export { CustomPainterSemantics };
declare class RenderCustomPaint extends RenderProxyBox {
    painter: CustomPainter;
    foregroundPainter: CustomPainter;
    preferredSize: Size;
    isComplex: boolean;
    willChange: boolean;
    backgroundSemanticsBuilder: any;
    foregroundSemanticsBuilder: any;
    backgroundSemanticsNodes: Array<any>;
    foregroundSemanticsNodes: Array<any>;
    constructor(namedParameters?: {
        painter?: CustomPainter;
        foregroundPainter?: CustomPainter;
        preferredSize?: Size;
        isComplex?: boolean;
        willChange?: boolean;
        child?: RenderBox;
    });
}
export { RenderCustomPaint };
