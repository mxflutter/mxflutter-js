import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { BorderSide } from '../painting/borders';
import { Decoration, BoxPainter } from '../painting/decoration';
declare class UnderlineTabIndicator extends Decoration {
    borderSide: BorderSide;
    insets: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        borderSide?: BorderSide;
        insets?: EdgeInsetsGeometry;
    });
}
export { UnderlineTabIndicator };
declare class _UnderlinePainter extends BoxPainter {
    decoration: UnderlineTabIndicator;
    constructor(decoration?: UnderlineTabIndicator, onChanged?: any);
}
export { _UnderlinePainter };
