import { AxisDirection } from '../painting/basic-types';
import { ScrollMetrics } from './scroll-metrics';
import { EdgeInsets } from '../painting/edge-insets';
import { Animation } from '../animation/animation';
import { Color, TextDirection, Radius, Rect } from '../../../mx-dart-sdk';
import { ChangeNotifier } from '../foundation/change-notifier';
declare class ScrollbarPainter extends ChangeNotifier {
    color: Color;
    textDirection: TextDirection;
    thickness: number;
    fadeoutOpacityAnimation: Animation;
    mainAxisMargin: number;
    crossAxisMargin: number;
    radius: Radius;
    padding: EdgeInsets;
    minLength: number;
    minOverscrollLength: number;
    lastMetrics: ScrollMetrics;
    lastAxisDirection: AxisDirection;
    thumbRect: Rect;
    constructor(namedParameters?: {
        color?: Color;
        textDirection?: TextDirection;
        thickness?: number;
        fadeoutOpacityAnimation?: Animation;
        padding?: EdgeInsets;
        mainAxisMargin?: number;
        crossAxisMargin?: number;
        radius?: Radius;
        minLength?: number;
        minOverscrollLength?: number;
    });
}
export { ScrollbarPainter };
