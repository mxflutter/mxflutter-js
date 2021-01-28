import { Key } from '../foundation/key';
import { InheritedWidget } from '../widgets/framework';
import { VerticalDirection } from '../painting/basic-types';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ButtonTextTheme, ButtonBarLayoutBehavior } from './button-theme';
import { MainAxisAlignment, MainAxisSize } from '../rendering/flex';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class ButtonBarThemeData extends MXDartClass {
    alignment: MainAxisAlignment;
    mainAxisSize: MainAxisSize;
    buttonTextTheme: ButtonTextTheme;
    buttonMinWidth: number;
    buttonHeight: number;
    buttonPadding: EdgeInsetsGeometry;
    buttonAlignedDropdown: boolean;
    layoutBehavior: ButtonBarLayoutBehavior;
    overflowDirection: VerticalDirection;
    constructor(namedParameters?: {
        alignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        buttonTextTheme?: ButtonTextTheme;
        buttonMinWidth?: number;
        buttonHeight?: number;
        buttonPadding?: EdgeInsetsGeometry;
        buttonAlignedDropdown?: boolean;
        layoutBehavior?: ButtonBarLayoutBehavior;
        overflowDirection?: VerticalDirection;
    });
}
export { ButtonBarThemeData };
declare class ButtonBarTheme extends InheritedWidget {
    data: ButtonBarThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: ButtonBarThemeData;
        child?: MXWidget;
    });
}
export { ButtonBarTheme };
