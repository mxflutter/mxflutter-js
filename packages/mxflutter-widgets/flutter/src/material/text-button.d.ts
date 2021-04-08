import { MouseCursor } from '../rendering/mouse-cursor';
import { MaterialStateProperty } from './material-state';
import { StatelessWidget } from '../widgets/framework';
import { Clip, Color } from '../../../mx-dart-sdk';
import { FocusNode } from '../widgets/focus-manager';
import { ButtonStyle } from './button-style';
import { Key } from '../foundation/key';
import { ButtonStyleButton } from './button-style-button';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class TextButton extends ButtonStyleButton {
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
    }): TextButton;
}
export { TextButton };
declare class _TextButtonDefaultForeground extends MaterialStateProperty {
    primary: Color;
    onSurface: Color;
    constructor(primary?: Color, onSurface?: Color);
}
export { _TextButtonDefaultForeground };
declare class _TextButtonDefaultOverlay extends MaterialStateProperty {
    primary: Color;
    constructor(primary?: Color);
}
export { _TextButtonDefaultOverlay };
declare class _TextButtonDefaultMouseCursor extends MaterialStateProperty {
    enabledCursor: MouseCursor;
    disabledCursor: MouseCursor;
    constructor(enabledCursor?: MouseCursor, disabledCursor?: MouseCursor);
}
export { _TextButtonDefaultMouseCursor };
declare class _TextButtonWithIcon extends TextButton {
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
export { _TextButtonWithIcon };
declare class _TextButtonWithIconChild extends StatelessWidget {
    label: MXWidget;
    icon: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        label?: MXWidget;
        icon?: MXWidget;
    });
}
export { _TextButtonWithIconChild };
