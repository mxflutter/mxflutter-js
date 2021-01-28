import { TextDirection } from '../../../mx-dart-sdk';
import { Alignment } from '../painting/alignment';
import { RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { GlobalKey, StatefulWidget$, State$, MultiChildRenderObjectWidget, MultiChildRenderObjectElement } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class OverlayEntry extends MXDartClass {
    builder: any;
    opaque: boolean;
    maintainState: boolean;
    overlay: OverlayState;
    key: GlobalKey;
    constructor(namedParameters?: {
        builder?: any;
        opaque?: boolean;
        maintainState?: boolean;
    });
}
export { OverlayEntry };
declare class _OverlayEntryWidget extends StatefulWidget$ {
    entry: OverlayEntry;
    tickerEnabled: boolean;
    constructor(namedParameters?: {
        key?: Key;
        entry?: OverlayEntry;
        tickerEnabled?: boolean;
    });
}
export { _OverlayEntryWidget };
declare class _OverlayEntryWidgetState extends State$ {
}
export { _OverlayEntryWidgetState };
declare class Overlay extends StatefulWidget$ {
    initialEntries: Array<any>;
    constructor(namedParameters?: {
        key?: Key;
        initialEntries?: Array<any>;
    });
}
export { Overlay };
declare class OverlayState extends State$ {
    entries: Array<any>;
}
export { OverlayState };
declare class _Theatre extends MultiChildRenderObjectWidget {
    skipCount: number;
    constructor(namedParameters?: {
        key?: Key;
        skipCount?: number;
        children?: Array<any>;
    });
}
export { _Theatre };
declare class _TheatreElement extends MultiChildRenderObjectElement {
    constructor(widget?: _Theatre);
}
export { _TheatreElement };
declare class _RenderTheatre extends RenderBox {
    hasVisualOverflow: boolean;
    resolvedAlignment: Alignment;
    textDirection: TextDirection;
    skipCount: number;
    constructor(namedParameters?: {
        children?: Array<any>;
        textDirection?: TextDirection;
        skipCount?: number;
    });
}
export { _RenderTheatre };
