import { BoxDecoration } from './box-decoration';
import { ShapeBorder } from './borders';
import { DecorationImage, DecorationImagePainter } from './decoration-image';
import { Gradient } from './gradient';
import { Color, Rect, TextDirection, Path, Paint } from '../../../mx-dart-sdk';
import { Decoration, BoxPainter } from './decoration';
declare class ShapeDecoration extends Decoration {
    color: Color;
    gradient: Gradient;
    image: DecorationImage;
    shadows: Array<any>;
    shape: ShapeBorder;
    constructor(namedParameters?: {
        color?: Color;
        image?: DecorationImage;
        gradient?: Gradient;
        shadows?: Array<any>;
        shape?: ShapeBorder;
    });
    static fromBoxDecoration(source?: BoxDecoration): ShapeDecoration;
}
export { ShapeDecoration };
declare class _ShapeDecorationPainter extends BoxPainter {
    decoration: ShapeDecoration;
    lastRect: Rect;
    lastTextDirection: TextDirection;
    outerPath: Path;
    innerPath: Path;
    interiorPaint: Paint;
    shadowCount: number;
    shadowPaths: Array<any>;
    shadowPaints: Array<any>;
    imagePainter: DecorationImagePainter;
    constructor(_decoration?: ShapeDecoration, onChanged?: any);
}
export { _ShapeDecorationPainter };
