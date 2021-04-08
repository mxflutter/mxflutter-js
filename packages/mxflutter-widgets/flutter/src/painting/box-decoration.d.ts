import { Gradient } from './gradient';
import { BorderRadiusGeometry } from './border-radius';
import { BoxBorder, BoxShape } from './box-border';
import { DecorationImage, DecorationImagePainter } from './decoration-image';
import { Color, BlendMode, Paint, Rect } from '../../../mx-dart-sdk';
import { Decoration, BoxPainter } from './decoration';
declare class BoxDecoration extends Decoration {
    color: Color;
    image: DecorationImage;
    border: BoxBorder;
    borderRadius: BorderRadiusGeometry;
    boxShadow: Array<any>;
    gradient: Gradient;
    backgroundBlendMode: BlendMode;
    shape: BoxShape;
    constructor(namedParameters?: {
        color?: Color;
        image?: DecorationImage;
        border?: BoxBorder;
        borderRadius?: BorderRadiusGeometry;
        boxShadow?: Array<any>;
        gradient?: Gradient;
        backgroundBlendMode?: BlendMode;
        shape?: BoxShape;
    });
}
export { BoxDecoration };
declare class _BoxDecorationPainter extends BoxPainter {
    decoration: BoxDecoration;
    cachedBackgroundPaint: Paint;
    rectForCachedBackgroundPaint: Rect;
    imagePainter: DecorationImagePainter;
    constructor(_decoration?: BoxDecoration, onChanged?: any);
}
export { _BoxDecorationPainter };
