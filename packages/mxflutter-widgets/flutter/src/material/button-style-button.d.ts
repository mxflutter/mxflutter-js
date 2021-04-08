import { RenderBox } from '../rendering/box';
import { RenderShiftedBox } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { MaterialStateMouseCursor } from './material-state';
import { FocusNode } from '../widgets/focus-manager';
import { Clip, Size } from '../../../mx-dart-sdk';
import { ButtonStyle } from './button-style';
import { StatefulWidget, State, SingleChildRenderObjectWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class ButtonStyleButton extends StatefulWidget {
    onPressed: any;
    onLongPress: any;
    style: ButtonStyle;
    clipBehavior: Clip;
    focusNode: FocusNode;
    autofocus: boolean;
    child: MXWidget;
}
export { ButtonStyleButton };
declare class _ButtonStyleState extends State {
    states: Set<any>;
}
export { _ButtonStyleState };
declare class _MouseCursor extends MaterialStateMouseCursor {
    resolveCallback: any;
    constructor(resolveCallback?: any);
}
export { _MouseCursor };
declare class _InputPadding extends SingleChildRenderObjectWidget {
    minSize: Size;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        minSize?: Size;
    });
}
export { _InputPadding };
declare class _RenderInputPadding extends RenderShiftedBox {
    minSize: Size;
    constructor(_minSize?: Size, child?: RenderBox);
}
export { _RenderInputPadding };
