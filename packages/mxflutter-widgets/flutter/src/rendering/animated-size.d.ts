import { RenderBox } from './box';
import { TextDirection } from '../../../mx-dart-sdk';
import { AlignmentGeometry } from '../painting/alignment';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { SizeTween } from '../animation/tween';
import { CurvedAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { RenderAligningShiftedBox } from './shifted-box';
declare enum RenderAnimatedSizeState {
    start = "{ \"_name\": \"RenderAnimatedSizeState.start\", \"index\": 0 }",
    stable = "{ \"_name\": \"RenderAnimatedSizeState.stable\", \"index\": 1 }",
    changed = "{ \"_name\": \"RenderAnimatedSizeState.changed\", \"index\": 2 }",
    unstable = "{ \"_name\": \"RenderAnimatedSizeState.unstable\", \"index\": 3 }"
}
export { RenderAnimatedSizeState };
declare class RenderAnimatedSize extends RenderAligningShiftedBox {
    controller: AnimationController;
    animation: CurvedAnimation;
    sizeTween: SizeTween;
    hasVisualOverflow: boolean;
    lastValue: number;
    state: RenderAnimatedSizeState;
    vsync: any;
    constructor(namedParameters?: {
        vsync?: any;
        duration?: Duration;
        reverseDuration?: Duration;
        curve?: Curve;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
        child?: RenderBox;
    });
}
export { RenderAnimatedSize };
