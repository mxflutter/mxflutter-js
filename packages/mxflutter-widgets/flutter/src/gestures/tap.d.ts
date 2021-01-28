import { PointerDownEvent, PointerUpEvent } from './events';
import { PrimaryPointerGestureRecognizer } from './recognizer';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class TapDownDetails extends MXDartClass {
    globalPosition: Offset;
    kind: PointerDeviceKind;
    localPosition: Offset;
    constructor(namedParameters?: {
        globalPosition?: Offset;
        localPosition?: Offset;
        kind?: PointerDeviceKind;
    });
}
export { TapDownDetails };
declare class TapUpDetails extends MXDartClass {
    globalPosition: Offset;
    localPosition: Offset;
    constructor(namedParameters?: {
        globalPosition?: Offset;
        localPosition?: Offset;
    });
}
export { TapUpDetails };
declare abstract class BaseTapGestureRecognizer extends PrimaryPointerGestureRecognizer {
    sentTapDown: boolean;
    wonArenaForPrimaryPointer: boolean;
    down: PointerDownEvent;
    up: PointerUpEvent;
}
export { BaseTapGestureRecognizer };
declare class TapGestureRecognizer extends BaseTapGestureRecognizer {
    onTapDown: any;
    onTapUp: any;
    onTap: any;
    onTapCancel: any;
    onSecondaryTap: any;
    onSecondaryTapDown: any;
    onSecondaryTapUp: any;
    onSecondaryTapCancel: any;
    constructor(namedParameters?: {
        debugOwner?: any;
    });
}
export { TapGestureRecognizer };
