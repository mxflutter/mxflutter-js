import { Ticker } from '../scheduler/ticker';
import { Key } from '../foundation/key';
import { StatelessWidget$, InheritedWidget, State$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class TickerMode extends StatelessWidget$ {
    enabled: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        enabled?: boolean;
        child?: MXWidget;
    });
}
export { TickerMode };
declare class _EffectiveTickerMode extends InheritedWidget {
    enabled: boolean;
    constructor(namedParameters?: {
        key?: Key;
        enabled?: boolean;
        child?: MXWidget;
    });
}
export { _EffectiveTickerMode };
declare abstract class SingleTickerProviderStateMixin extends State$ {
    ticker: Ticker;
}
export { SingleTickerProviderStateMixin };
declare abstract class TickerProviderStateMixin extends State$ {
    tickers: Set<any>;
}
export { TickerProviderStateMixin };
declare class _WidgetTicker extends Ticker {
    creator: TickerProviderStateMixin;
    constructor(onTick?: any, _creator?: TickerProviderStateMixin, namedParameters?: {
        debugLabel?: string;
    });
}
export { _WidgetTicker };
