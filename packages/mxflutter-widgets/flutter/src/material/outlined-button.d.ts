import { MouseCursor } from '../rendering/mouse-cursor';
import { MaterialStateProperty } from './material-state';
import { StatelessWidget } from '../widgets/framework';
import { Clip, Color } from '../../../mx-dart-sdk';
import { FocusNode } from '../widgets/focus-manager';
import { ButtonStyle } from './button-style';
import { Key } from '../foundation/key';
import { ButtonStyleButton } from './button-style-button';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class OutlinedButton extends ButtonStyleButton {
    constructor(namedParameters?: {
        key?: Key;
        onPressed?: any;
        onLongPress?: any;
        style?: ButtonStyle;
        focusNode?: FocusNode;
        autofocus?: boolean;
        clipBehavior?: Clip;
        child?: MXWidget;
    });
    static icon(namedParameters?: {
        key?: Key;
        onPressed?: any;
        onLongPress?: any;
        style?: ButtonStyle;
        focusNode?: FocusNode;
        autofocus?: boolean;
        clipBehavior?: Clip;
        icon?: MXWidget;
        label?: MXWidget;
    }): OutlinedButton;
}
export { OutlinedButton };
declare class _OutlinedButtonDefaultForeground extends MaterialStateProperty {
    primary: Color;
    onSurface: Color;
    constructor(primary?: Color, onSurface?: Color);
}
export { _OutlinedButtonDefaultForeground };
declare class _OutlinedButtonDefaultOverlay extends MaterialStateProperty {
    primary: Color;
    constructor(primary?: Color);
}
export { _OutlinedButtonDefaultOverlay };
declare class _OutlinedButtonDefaultMouseCursor extends MaterialStateProperty {
    enabledCursor: MouseCursor;
    disabledCursor: MouseCursor;
    constructor(enabledCursor?: MouseCursor, disabledCursor?: MouseCursor);
}
export { _OutlinedButtonDefaultMouseCursor };
declare class _OutlinedButtonWithIcon extends OutlinedButton {
    constructor(namedParameters?: {
        key?: Key;
        onPressed?: any;
        onLongPress?: any;
        style?: ButtonStyle;
        focusNode?: FocusNode;
        autofocus?: boolean;
        clipBehavior?: Clip;
        icon?: MXWidget;
        label?: MXWidget;
    });
}
export { _OutlinedButtonWithIcon };
declare class _OutlinedButtonWithIconChild extends StatelessWidget {
    label: MXWidget;
    icon: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        label?: MXWidget;
        icon?: MXWidget;
    });
}
export { _OutlinedButtonWithIconChild };
