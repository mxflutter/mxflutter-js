import { TextDirection, TextBaseline } from '../../../mx-dart-sdk';
import { Flex } from '../widgets/basic';
import { Key } from '../foundation/key';
import { VerticalDirection, Axis } from '../painting/basic-types';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ButtonTextTheme, ButtonBarLayoutBehavior } from './button-theme';
import { MainAxisAlignment, MainAxisSize, CrossAxisAlignment, RenderFlex } from '../rendering/flex';
import { StatelessWidget } from '../widgets/framework';
declare class ButtonBar extends StatelessWidget {
    alignment: MainAxisAlignment;
    mainAxisSize: MainAxisSize;
    buttonTextTheme: ButtonTextTheme;
    buttonMinWidth: number;
    buttonHeight: number;
    buttonPadding: EdgeInsetsGeometry;
    buttonAlignedDropdown: boolean;
    layoutBehavior: ButtonBarLayoutBehavior;
    overflowDirection: VerticalDirection;
    overflowButtonSpacing: number;
    children: Array<any>;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        buttonTextTheme?: ButtonTextTheme;
        buttonMinWidth?: number;
        buttonHeight?: number;
        buttonPadding?: EdgeInsetsGeometry;
        buttonAlignedDropdown?: boolean;
        layoutBehavior?: ButtonBarLayoutBehavior;
        overflowDirection?: VerticalDirection;
        overflowButtonSpacing?: number;
        children?: Array<any>;
    });
}
export { ButtonBar };
declare class _ButtonBarRow extends Flex {
    overflowButtonSpacing: number;
    constructor(namedParameters?: {
        children?: Array<any>;
        direction?: Axis;
        mainAxisSize?: MainAxisSize;
        mainAxisAlignment?: MainAxisAlignment;
        crossAxisAlignment?: CrossAxisAlignment;
        textDirection?: TextDirection;
        overflowDirection?: VerticalDirection;
        textBaseline?: TextBaseline;
        overflowButtonSpacing?: number;
    });
}
export { _ButtonBarRow };
declare class _RenderButtonBarRow extends RenderFlex {
    hasCheckedLayoutWidth: boolean;
    overflowButtonSpacing: number;
    constructor(namedParameters?: {
        children?: Array<any>;
        direction?: Axis;
        mainAxisSize?: MainAxisSize;
        mainAxisAlignment?: MainAxisAlignment;
        crossAxisAlignment?: CrossAxisAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        textBaseline?: TextBaseline;
        overflowButtonSpacing?: number;
    });
}
export { _RenderButtonBarRow };
