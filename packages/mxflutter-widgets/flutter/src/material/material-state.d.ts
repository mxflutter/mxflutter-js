import { MouseCursor } from '../rendering/mouse-cursor';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum MaterialState {
    hovered = "{ \"_name\": \"MaterialState.hovered\", \"index\": 0 }",
    focused = "{ \"_name\": \"MaterialState.focused\", \"index\": 1 }",
    pressed = "{ \"_name\": \"MaterialState.pressed\", \"index\": 2 }",
    dragged = "{ \"_name\": \"MaterialState.dragged\", \"index\": 3 }",
    selected = "{ \"_name\": \"MaterialState.selected\", \"index\": 4 }",
    disabled = "{ \"_name\": \"MaterialState.disabled\", \"index\": 5 }",
    error = "{ \"_name\": \"MaterialState.error\", \"index\": 6 }"
}
export { MaterialState };
declare abstract class MaterialStateColor extends Color {
}
export { MaterialStateColor };
declare class _MaterialStateColor extends MaterialStateColor {
    resolve: any;
    constructor(_resolve?: any);
}
export { _MaterialStateColor };
declare abstract class MaterialStateMouseCursor extends MouseCursor {
    static get clickable(): {
        className: string;
        mirrorID: string;
    };
    static get textable(): {
        className: string;
        mirrorID: string;
    };
}
export { MaterialStateMouseCursor };
declare class _EnabledAndDisabledMouseCursor extends MaterialStateMouseCursor {
    enabledCursor: MouseCursor;
    disabledCursor: MouseCursor;
    name: string;
    constructor(namedParameters?: {
        enabledCursor?: MouseCursor;
        disabledCursor?: MouseCursor;
        name?: string;
    });
}
export { _EnabledAndDisabledMouseCursor };
declare abstract class MaterialStateProperty extends MXDartClass {
}
export { MaterialStateProperty };
declare class _MaterialStatePropertyWith extends MXDartClass {
    resolve: any;
    constructor(_resolve?: any);
}
export { _MaterialStatePropertyWith };
declare class _MaterialStatePropertyAll extends MXDartClass {
    value: any;
    constructor(value?: any);
}
export { _MaterialStatePropertyAll };
