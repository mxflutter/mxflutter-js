import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class TickerProvider extends MXDartClass {
}
export { TickerProvider };
declare class Ticker extends MXDartClass {
    future: TickerFuture;
    muted: boolean;
    startTime: Duration;
    onTick: any;
    animationId: number;
    debugLabel: string;
    debugCreationStack: any;
    constructor(_onTick?: any, namedParameters?: {
        debugLabel?: string;
    });
}
export { Ticker };
declare class TickerFuture extends MXDartClass {
    primaryCompleter: any;
    secondaryCompleter: any;
    completed: boolean;
    static complete(): TickerFuture;
}
export { TickerFuture };
declare class TickerCanceled extends MXDartClass {
    ticker: Ticker;
    constructor(ticker?: Ticker);
}
export { TickerCanceled };
