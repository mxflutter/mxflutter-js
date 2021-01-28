import { BaseMouseTracker } from './mouse-tracking';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class MouseTrackerCursorMixin extends BaseMouseTracker {
    lastSession: Map<any, any>;
}
export { MouseTrackerCursorMixin };
declare abstract class MouseCursorSession extends MXDartClass {
    cursor: MouseCursor;
    device: number;
}
export { MouseCursorSession };
declare abstract class MouseCursor extends MXDartClass {
    static get defer(): {
        className: string;
        mirrorID: string;
    };
    static get uncontrolled(): {
        className: string;
        mirrorID: string;
    };
}
export { MouseCursor };
declare class _DeferringMouseCursor extends MouseCursor {
}
export { _DeferringMouseCursor };
declare class _NoopMouseCursorSession extends MouseCursorSession {
    constructor(cursor?: _NoopMouseCursor, device?: number);
}
export { _NoopMouseCursorSession };
declare class _NoopMouseCursor extends MouseCursor {
}
export { _NoopMouseCursor };
declare class _SystemMouseCursorSession extends MouseCursorSession {
    constructor(cursor?: SystemMouseCursor, device?: number);
}
export { _SystemMouseCursorSession };
declare class SystemMouseCursor extends MouseCursor {
    kind: string;
}
export { SystemMouseCursor };
declare class SystemMouseCursors extends MXDartClass {
    static get none(): SystemMouseCursor;
    static get basic(): SystemMouseCursor;
    static get click(): SystemMouseCursor;
    static get text(): SystemMouseCursor;
    static get forbidden(): SystemMouseCursor;
    static get grab(): SystemMouseCursor;
    static get grabbing(): SystemMouseCursor;
    static get horizontalDoubleArrow(): SystemMouseCursor;
    static get verticalDoubleArrow(): SystemMouseCursor;
}
export { SystemMouseCursors };
