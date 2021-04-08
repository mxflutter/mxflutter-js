import { StrutStyle } from '../painting/strut-style';
import { InlineSpan } from '../painting/inline-span';
import { Shader, TextAlign, TextDirection, Locale, TextHeightBehavior } from '../../../mx-dart-sdk';
import { TextPainter, TextWidthBasis } from '../painting/text-painter';
import { ContainerBoxParentData, RenderBox } from './box';
declare enum TextOverflow {
    clip = "{ \"_name\": \"TextOverflow.clip\", \"index\": 0 }",
    fade = "{ \"_name\": \"TextOverflow.fade\", \"index\": 1 }",
    ellipsis = "{ \"_name\": \"TextOverflow.ellipsis\", \"index\": 2 }",
    visible = "{ \"_name\": \"TextOverflow.visible\", \"index\": 3 }"
}
export { TextOverflow };
declare class TextParentData extends ContainerBoxParentData {
    scale: number;
}
export { TextParentData };
declare class RenderParagraph extends RenderBox {
    textPainter: TextPainter;
    placeholderSpans: Array<any>;
    softWrap: boolean;
    overflow: TextOverflow;
    needsClipping: boolean;
    overflowShader: Shader;
    placeholderDimensions: Array<any>;
    semanticsInfo: Array<any>;
    cachedChildNodes: any;
    constructor(text?: InlineSpan, namedParameters?: {
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        softWrap?: boolean;
        overflow?: TextOverflow;
        textScaleFactor?: number;
        maxLines?: number;
        locale?: Locale;
        strutStyle?: StrutStyle;
        textWidthBasis?: TextWidthBasis;
        textHeightBehavior?: TextHeightBehavior;
        children?: Array<any>;
    });
}
export { RenderParagraph };
