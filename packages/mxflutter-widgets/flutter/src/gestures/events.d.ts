import { Matrix4 } from '../../../vector-math-64';
import { PointerDeviceKind, Offset } from '../../../mx-dart-sdk';
import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class PointerEvent extends MXDartClass {
    embedderId: number;
    timeStamp: Duration;
    pointer: number;
    kind: PointerDeviceKind;
    device: number;
    position: Offset;
    localPosition: Offset;
    delta: Offset;
    localDelta: Offset;
    buttons: number;
    down: boolean;
    obscured: boolean;
    pressure: number;
    pressureMin: number;
    pressureMax: number;
    distance: number;
    distanceMax: number;
    size: number;
    radiusMajor: number;
    radiusMinor: number;
    radiusMin: number;
    radiusMax: number;
    orientation: number;
    tilt: number;
    platformData: number;
    synthesized: boolean;
    transform: Matrix4;
    original: PointerEvent;
}
export { PointerEvent };
declare class PointerAddedEvent extends PointerEvent {
    constructor(namedParameters?: {
        timeStamp?: Duration;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        obscured?: boolean;
        pressureMin?: number;
        pressureMax?: number;
        distance?: number;
        distanceMax?: number;
        radiusMin?: number;
        radiusMax?: number;
        orientation?: number;
        tilt?: number;
        transform?: Matrix4;
        original?: PointerAddedEvent;
        embedderId?: number;
    });
}
export { PointerAddedEvent };
declare class PointerRemovedEvent extends PointerEvent {
    constructor(namedParameters?: {
        timeStamp?: Duration;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        obscured?: boolean;
        pressureMin?: number;
        pressureMax?: number;
        distanceMax?: number;
        radiusMin?: number;
        radiusMax?: number;
        transform?: Matrix4;
        original?: PointerRemovedEvent;
        embedderId?: number;
    });
}
export { PointerRemovedEvent };
declare class PointerHoverEvent extends PointerEvent {
    constructor(namedParameters?: {
        timeStamp?: Duration;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        delta?: Offset;
        localDelta?: Offset;
        buttons?: number;
        obscured?: boolean;
        pressureMin?: number;
        pressureMax?: number;
        distance?: number;
        distanceMax?: number;
        size?: number;
        radiusMajor?: number;
        radiusMinor?: number;
        radiusMin?: number;
        radiusMax?: number;
        orientation?: number;
        tilt?: number;
        synthesized?: boolean;
        transform?: Matrix4;
        original?: PointerHoverEvent;
        embedderId?: number;
    });
}
export { PointerHoverEvent };
declare class PointerEnterEvent extends PointerEvent {
    constructor(namedParameters?: {
        timeStamp?: Duration;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        delta?: Offset;
        localDelta?: Offset;
        buttons?: number;
        obscured?: boolean;
        pressureMin?: number;
        pressureMax?: number;
        distance?: number;
        distanceMax?: number;
        size?: number;
        radiusMajor?: number;
        radiusMinor?: number;
        radiusMin?: number;
        radiusMax?: number;
        orientation?: number;
        tilt?: number;
        down?: boolean;
        synthesized?: boolean;
        transform?: Matrix4;
        original?: PointerEnterEvent;
        embedderId?: number;
    });
    static fromHoverEvent(event?: PointerHoverEvent): PointerEnterEvent;
    static fromMouseEvent(event?: PointerEvent): PointerEnterEvent;
}
export { PointerEnterEvent };
declare class PointerExitEvent extends PointerEvent {
    constructor(namedParameters?: {
        timeStamp?: Duration;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        delta?: Offset;
        localDelta?: Offset;
        buttons?: number;
        obscured?: boolean;
        pressureMin?: number;
        pressureMax?: number;
        distance?: number;
        distanceMax?: number;
        size?: number;
        radiusMajor?: number;
        radiusMinor?: number;
        radiusMin?: number;
        radiusMax?: number;
        orientation?: number;
        tilt?: number;
        down?: boolean;
        synthesized?: boolean;
        transform?: Matrix4;
        original?: PointerExitEvent;
        embedderId?: number;
    });
    static fromHoverEvent(event?: PointerHoverEvent): PointerExitEvent;
    static fromMouseEvent(event?: PointerEvent): PointerExitEvent;
}
export { PointerExitEvent };
declare class PointerDownEvent extends PointerEvent {
    constructor(namedParameters?: {
        timeStamp?: Duration;
        pointer?: number;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        buttons?: number;
        obscured?: boolean;
        pressure?: number;
        pressureMin?: number;
        pressureMax?: number;
        distanceMax?: number;
        size?: number;
        radiusMajor?: number;
        radiusMinor?: number;
        radiusMin?: number;
        radiusMax?: number;
        orientation?: number;
        tilt?: number;
        transform?: Matrix4;
        original?: PointerDownEvent;
        embedderId?: number;
    });
}
export { PointerDownEvent };
declare class PointerMoveEvent extends PointerEvent {
    constructor(namedParameters?: {
        timeStamp?: Duration;
        pointer?: number;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        delta?: Offset;
        localDelta?: Offset;
        buttons?: number;
        obscured?: boolean;
        pressure?: number;
        pressureMin?: number;
        pressureMax?: number;
        distanceMax?: number;
        size?: number;
        radiusMajor?: number;
        radiusMinor?: number;
        radiusMin?: number;
        radiusMax?: number;
        orientation?: number;
        tilt?: number;
        platformData?: number;
        synthesized?: boolean;
        transform?: Matrix4;
        original?: PointerMoveEvent;
        embedderId?: number;
    });
}
export { PointerMoveEvent };
declare class PointerUpEvent extends PointerEvent {
    constructor(namedParameters?: {
        timeStamp?: Duration;
        pointer?: number;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        buttons?: number;
        obscured?: boolean;
        pressure?: number;
        pressureMin?: number;
        pressureMax?: number;
        distance?: number;
        distanceMax?: number;
        size?: number;
        radiusMajor?: number;
        radiusMinor?: number;
        radiusMin?: number;
        radiusMax?: number;
        orientation?: number;
        tilt?: number;
        transform?: Matrix4;
        original?: PointerUpEvent;
        embedderId?: number;
    });
}
export { PointerUpEvent };
declare abstract class PointerSignalEvent extends PointerEvent {
}
export { PointerSignalEvent };
declare class PointerScrollEvent extends PointerSignalEvent {
    scrollDelta: Offset;
    constructor(namedParameters?: {
        timeStamp?: Duration;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        scrollDelta?: Offset;
        transform?: Matrix4;
        original?: PointerScrollEvent;
        embedderId?: number;
    });
}
export { PointerScrollEvent };
declare class PointerCancelEvent extends PointerEvent {
    constructor(namedParameters?: {
        timeStamp?: Duration;
        pointer?: number;
        kind?: PointerDeviceKind;
        device?: number;
        position?: Offset;
        localPosition?: Offset;
        buttons?: number;
        obscured?: boolean;
        pressureMin?: number;
        pressureMax?: number;
        distance?: number;
        distanceMax?: number;
        size?: number;
        radiusMajor?: number;
        radiusMinor?: number;
        radiusMin?: number;
        radiusMax?: number;
        orientation?: number;
        tilt?: number;
        transform?: Matrix4;
        original?: PointerCancelEvent;
        embedderId?: number;
    });
}
export { PointerCancelEvent };
