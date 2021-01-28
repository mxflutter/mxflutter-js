import { Key } from '../foundation/key';
import { TickerProvider } from '../scheduler/ticker';
import { Duration } from '../../../mx-dart-sdk';
import { Curve } from '../animation/curves';
import { AlignmentGeometry } from '../painting/alignment';
import { SingleChildRenderObjectWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class AnimatedSize extends SingleChildRenderObjectWidget {
    alignment: AlignmentGeometry;
    curve: Curve;
    duration: Duration;
    reverseDuration: Duration;
    vsync: TickerProvider;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        alignment?: AlignmentGeometry;
        curve?: Curve;
        duration?: Duration;
        reverseDuration?: Duration;
        vsync?: TickerProvider;
    });
}
export { AnimatedSize };
