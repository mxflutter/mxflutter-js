import { TextDirection, Size } from '../../../mx-dart-sdk';
import { MessageCodec } from './message-codec';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class PlatformViewsRegistry extends MXDartClass {
    nextPlatformViewId: number;
}
export { PlatformViewsRegistry };
declare class PlatformViewsService extends MXDartClass {
    focusCallbacks: Map<any, any>;
}
export { PlatformViewsService };
declare class AndroidPointerProperties extends MXDartClass {
    id: number;
    toolType: number;
    constructor(namedParameters?: {
        id?: number;
        toolType?: number;
    });
    static get kToolTypeUnknown(): number;
    static get kToolTypeFinger(): number;
    static get kToolTypeStylus(): number;
    static get kToolTypeMouse(): number;
    static get kToolTypeEraser(): number;
}
export { AndroidPointerProperties };
declare class AndroidPointerCoords extends MXDartClass {
    orientation: number;
    pressure: number;
    size: number;
    toolMajor: number;
    toolMinor: number;
    touchMajor: number;
    touchMinor: number;
    x: number;
    y: number;
    constructor(namedParameters?: {
        orientation?: number;
        pressure?: number;
        size?: number;
        toolMajor?: number;
        toolMinor?: number;
        touchMajor?: number;
        touchMinor?: number;
        x?: number;
        y?: number;
    });
}
export { AndroidPointerCoords };
declare class AndroidMotionEvent extends MXDartClass {
    downTime: number;
    eventTime: number;
    action: number;
    pointerCount: number;
    pointerProperties: Array<any>;
    pointerCoords: Array<any>;
    metaState: number;
    buttonState: number;
    xPrecision: number;
    yPrecision: number;
    deviceId: number;
    edgeFlags: number;
    source: number;
    flags: number;
    motionEventId: number;
    constructor(namedParameters?: {
        downTime?: number;
        eventTime?: number;
        action?: number;
        pointerCount?: number;
        pointerProperties?: Array<any>;
        pointerCoords?: Array<any>;
        metaState?: number;
        buttonState?: number;
        xPrecision?: number;
        yPrecision?: number;
        deviceId?: number;
        edgeFlags?: number;
        source?: number;
        flags?: number;
        motionEventId?: number;
    });
}
export { AndroidMotionEvent };
declare enum _AndroidViewState {
    waitingForSize = "{ \"_name\": \"_AndroidViewState.waitingForSize\", \"index\": 0 }",
    creating = "{ \"_name\": \"_AndroidViewState.creating\", \"index\": 1 }",
    created = "{ \"_name\": \"_AndroidViewState.created\", \"index\": 2 }",
    disposed = "{ \"_name\": \"_AndroidViewState.disposed\", \"index\": 3 }"
}
export { _AndroidViewState };
declare class _AndroidMotionEventConverter extends MXDartClass {
    pointerPositions: Map<any, any>;
    pointerProperties: Map<any, any>;
    pointTransformer: any;
    nextPointerId: number;
    downTimeMillis: number;
}
export { _AndroidMotionEventConverter };
declare abstract class PlatformViewController extends MXDartClass {
}
export { PlatformViewController };
declare abstract class AndroidViewController extends PlatformViewController {
    viewId: number;
    viewType: string;
    motionEventConverter: _AndroidMotionEventConverter;
    layoutDirection: TextDirection;
    state: _AndroidViewState;
    creationParams: any;
    creationParamsCodec: MessageCodec;
    platformViewCreatedCallbacks: Array<any>;
    static get kActionDown(): number;
    static get kActionUp(): number;
    static get kActionMove(): number;
    static get kActionCancel(): number;
    static get kActionPointerDown(): number;
    static get kActionPointerUp(): number;
    static get kAndroidLayoutDirectionLtr(): number;
    static get kAndroidLayoutDirectionRtl(): number;
}
export { AndroidViewController };
declare class SurfaceAndroidViewController extends AndroidViewController {
}
export { SurfaceAndroidViewController };
declare class TextureAndroidViewController extends AndroidViewController {
    textureId: number;
    size: Size;
}
export { TextureAndroidViewController };
declare class UiKitViewController extends MXDartClass {
    id: number;
    debugDisposed: boolean;
    layoutDirection: TextDirection;
}
export { UiKitViewController };
