import { MouseCursor } from '../rendering/mouse-cursor';
import { MaterialStateProperty } from './material-state';
import { StatelessWidget } from '../widgets/framework';
import { Clip, Color } from '../../../mx-dart-sdk';
import { FocusNode } from '../widgets/focus-manager';
import { ButtonStyle } from './button-style';
import { Key } from '../foundation/key';
import { ButtonStyleButton } from './button-style-button';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class ElevatedButton extends ButtonStyleButton {
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
    }): ElevatedButton;
}
export { ElevatedButton };
declare class _ElevatedButtonDefaultBackground extends MaterialStateProperty {
    primary: Color;
    onSurface: Color;
    constructor(primary?: Color, onSurface?: Color);
}
export { _ElevatedButtonDefaultBackground };
declare class _ElevatedButtonDefaultForeground extends MaterialStateProperty {
    onPrimary: Color;
    onSurface: Color;
    constructor(onPrimary?: Color, onSurface?: Color);
}
export { _ElevatedButtonDefaultForeground };
declare class _ElevatedButtonDefaultOverlay extends MaterialStateProperty {
    onPrimary: Color;
    constructor(onPrimary?: Color);
}
export { _ElevatedButtonDefaultOverlay };
declare class _ElevatedButtonDefaultElevation extends MaterialStateProperty {
    elevation: number;
    constructor(elevation?: number);
}
export { _ElevatedButtonDefaultElevation };
declare class _ElevatedButtonDefaultMouseCursor extends MaterialStateProperty {
    enabledCursor: MouseCursor;
    disabledCursor: MouseCursor;
    constructor(enabledCursor?: MouseCursor, disabledCursor?: MouseCursor);
}
export { _ElevatedButtonDefaultMouseCursor };
declare class _ElevatedButtonWithIcon extends ElevatedButton {
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
export { _ElevatedButtonWithIcon };
declare class _ElevatedButtonWithIconChild extends StatelessWidget {
    label: MXWidget;
    icon: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        label?: MXWidget;
        icon?: MXWidget;
    });
}
export { _ElevatedButtonWithIconChild };
