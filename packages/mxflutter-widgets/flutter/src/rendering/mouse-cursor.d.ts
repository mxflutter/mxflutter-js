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
    static get forbidden(): SystemMouseCursor;
    static get wait(): SystemMouseCursor;
    static get progress(): SystemMouseCursor;
    static get contextMenu(): SystemMouseCursor;
    static get help(): SystemMouseCursor;
    static get text(): SystemMouseCursor;
    static get verticalText(): SystemMouseCursor;
    static get cell(): SystemMouseCursor;
    static get precise(): SystemMouseCursor;
    static get move(): SystemMouseCursor;
    static get grab(): SystemMouseCursor;
    static get grabbing(): SystemMouseCursor;
    static get noDrop(): SystemMouseCursor;
    static get alias(): SystemMouseCursor;
    static get copy(): SystemMouseCursor;
    static get disappearing(): SystemMouseCursor;
    static get allScroll(): SystemMouseCursor;
    static get resizeLeftRight(): SystemMouseCursor;
    static get resizeUpDown(): SystemMouseCursor;
    static get resizeUpLeftDownRight(): SystemMouseCursor;
    static get resizeUpRightDownLeft(): SystemMouseCursor;
    static get resizeUp(): SystemMouseCursor;
    static get resizeDown(): SystemMouseCursor;
    static get resizeLeft(): SystemMouseCursor;
    static get resizeRight(): SystemMouseCursor;
    static get resizeUpLeft(): SystemMouseCursor;
    static get resizeUpRight(): SystemMouseCursor;
    static get resizeDownLeft(): SystemMouseCursor;
    static get resizeDownRight(): SystemMouseCursor;
    static get resizeColumn(): SystemMouseCursor;
    static get resizeRow(): SystemMouseCursor;
    static get zoomIn(): SystemMouseCursor;
    static get zoomOut(): SystemMouseCursor;
}
export { SystemMouseCursors };
