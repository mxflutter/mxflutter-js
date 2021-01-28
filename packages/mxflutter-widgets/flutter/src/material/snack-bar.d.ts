import { Animation } from '../animation/animation';
import { Duration } from '../../../mx-dart-sdk';
import { SnackBarBehavior } from './snack-bar-theme';
import { ShapeBorder } from '../painting/borders';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum SnackBarClosedReason {
    action = "{ \"_name\": \"SnackBarClosedReason.action\", \"index\": 0 }",
    dismiss = "{ \"_name\": \"SnackBarClosedReason.dismiss\", \"index\": 1 }",
    swipe = "{ \"_name\": \"SnackBarClosedReason.swipe\", \"index\": 2 }",
    hide = "{ \"_name\": \"SnackBarClosedReason.hide\", \"index\": 3 }",
    remove = "{ \"_name\": \"SnackBarClosedReason.remove\", \"index\": 4 }",
    timeout = "{ \"_name\": \"SnackBarClosedReason.timeout\", \"index\": 5 }"
}
export { SnackBarClosedReason };
declare class SnackBarAction extends StatefulWidget$ {
    textColor: Color;
    disabledTextColor: Color;
    label: string;
    onPressed: any;
    constructor(namedParameters?: {
        key?: Key;
        textColor?: Color;
        disabledTextColor?: Color;
        label?: string;
        onPressed?: any;
    });
}
export { SnackBarAction };
declare class _SnackBarActionState extends State$ {
    haveTriggeredAction: boolean;
}
export { _SnackBarActionState };
declare class SnackBar extends StatefulWidget$ {
    content: MXWidget;
    backgroundColor: Color;
    elevation: number;
    shape: ShapeBorder;
    behavior: SnackBarBehavior;
    action: SnackBarAction;
    duration: Duration;
    animation: Animation;
    onVisible: any;
    constructor(namedParameters?: {
        key?: Key;
        content?: MXWidget;
        backgroundColor?: Color;
        elevation?: number;
        shape?: ShapeBorder;
        behavior?: SnackBarBehavior;
        action?: SnackBarAction;
        duration?: Duration;
        animation?: Animation;
        onVisible?: any;
    });
}
export { SnackBar };
declare class _SnackBarState extends State$ {
    wasVisible: boolean;
}
export { _SnackBarState };
