import { InkFeature, MaterialInkController } from './material';
import { RenderBox } from '../rendering/box';
import { ImageRepeat } from '../painting/decoration-image';
import { AlignmentGeometry } from '../painting/alignment';
import { BoxFit } from '../painting/box-fit';
import { ImageProvider, ImageConfiguration } from '../painting/image-provider';
import { Color, ColorFilter, Rect } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { Decoration, BoxPainter } from '../painting/decoration';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Ink extends StatefulWidget$ {
    child: MXWidget;
    padding: EdgeInsetsGeometry;
    decoration: Decoration;
    width: number;
    height: number;
    constructor(namedParameters?: {
        key?: Key;
        padding?: EdgeInsetsGeometry;
        color?: Color;
        decoration?: Decoration;
        width?: number;
        height?: number;
        child?: MXWidget;
    });
    static image(namedParameters?: {
        key?: Key;
        padding?: EdgeInsetsGeometry;
        image?: ImageProvider;
        onImageError?: any;
        colorFilter?: ColorFilter;
        fit?: BoxFit;
        alignment?: AlignmentGeometry;
        centerSlice?: Rect;
        repeat?: ImageRepeat;
        matchTextDirection?: boolean;
        width?: number;
        height?: number;
        child?: MXWidget;
    }): Ink;
}
export { Ink };
declare class _InkState extends State$ {
    ink: InkDecoration;
}
export { _InkState };
declare class InkDecoration extends InkFeature {
    painter: BoxPainter;
    decoration: Decoration;
    configuration: ImageConfiguration;
    constructor(namedParameters?: {
        decoration?: Decoration;
        configuration?: ImageConfiguration;
        controller?: MaterialInkController;
        referenceBox?: RenderBox;
        onRemoved?: any;
    });
}
export { InkDecoration };
