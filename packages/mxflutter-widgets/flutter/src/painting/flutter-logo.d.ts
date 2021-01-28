import { TextPainter } from './text-painter';
import { EdgeInsets } from './edge-insets';
import { Color, Rect } from '../../../mx-dart-sdk';
import { Decoration, BoxPainter } from './decoration';
declare enum FlutterLogoStyle {
    markOnly = "{ \"_name\": \"FlutterLogoStyle.markOnly\", \"index\": 0 }",
    horizontal = "{ \"_name\": \"FlutterLogoStyle.horizontal\", \"index\": 1 }",
    stacked = "{ \"_name\": \"FlutterLogoStyle.stacked\", \"index\": 2 }"
}
export { FlutterLogoStyle };
declare class FlutterLogoDecoration extends Decoration {
    lightColor: Color;
    darkColor: Color;
    textColor: Color;
    style: FlutterLogoStyle;
    margin: EdgeInsets;
    position: number;
    opacity: number;
    constructor(namedParameters?: {
        lightColor?: Color;
        darkColor?: Color;
        textColor?: Color;
        style?: FlutterLogoStyle;
        margin?: EdgeInsets;
    });
}
export { FlutterLogoDecoration };
declare class _FlutterLogoPainter extends BoxPainter {
    config: FlutterLogoDecoration;
    textPainter: TextPainter;
    textBoundingRect: Rect;
    constructor(_config?: FlutterLogoDecoration);
}
export { _FlutterLogoPainter };
