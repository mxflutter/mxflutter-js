import { VerticalDirection } from '../painting/basic-types';
import { TextStyle } from '../painting/text-style';
import { Key } from '../foundation/key';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { Color, Clip } from '../../../mx-dart-sdk';
import { StatelessWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Dialog extends StatelessWidget {
    backgroundColor: Color;
    elevation: number;
    insetAnimationDuration: Duration;
    insetAnimationCurve: Curve;
    insetPadding: EdgeInsets;
    clipBehavior: Clip;
    shape: ShapeBorder;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        backgroundColor?: Color;
        elevation?: number;
        insetAnimationDuration?: Duration;
        insetAnimationCurve?: Curve;
        insetPadding?: EdgeInsets;
        clipBehavior?: Clip;
        shape?: ShapeBorder;
        child?: MXWidget;
    });
}
export { Dialog };
declare class AlertDialog extends StatelessWidget {
    title: MXWidget;
    titlePadding: EdgeInsetsGeometry;
    titleTextStyle: TextStyle;
    content: MXWidget;
    contentPadding: EdgeInsetsGeometry;
    contentTextStyle: TextStyle;
    actions: Array<any>;
    actionsPadding: EdgeInsetsGeometry;
    actionsOverflowDirection: VerticalDirection;
    actionsOverflowButtonSpacing: number;
    buttonPadding: EdgeInsetsGeometry;
    backgroundColor: Color;
    elevation: number;
    semanticLabel: string;
    insetPadding: EdgeInsets;
    clipBehavior: Clip;
    shape: ShapeBorder;
    scrollable: boolean;
    constructor(namedParameters?: {
        key?: Key;
        title?: MXWidget;
        titlePadding?: EdgeInsetsGeometry;
        titleTextStyle?: TextStyle;
        content?: MXWidget;
        contentPadding?: EdgeInsetsGeometry;
        contentTextStyle?: TextStyle;
        actions?: Array<any>;
        actionsPadding?: EdgeInsetsGeometry;
        actionsOverflowDirection?: VerticalDirection;
        actionsOverflowButtonSpacing?: number;
        buttonPadding?: EdgeInsetsGeometry;
        backgroundColor?: Color;
        elevation?: number;
        semanticLabel?: string;
        insetPadding?: EdgeInsets;
        clipBehavior?: Clip;
        shape?: ShapeBorder;
        scrollable?: boolean;
    });
}
export { AlertDialog };
declare class SimpleDialogOption extends StatelessWidget {
    onPressed: any;
    child: MXWidget;
    padding: EdgeInsets;
    constructor(namedParameters?: {
        key?: Key;
        onPressed?: any;
        padding?: EdgeInsets;
        child?: MXWidget;
    });
}
export { SimpleDialogOption };
declare class SimpleDialog extends StatelessWidget {
    title: MXWidget;
    titlePadding: EdgeInsetsGeometry;
    titleTextStyle: TextStyle;
    children: Array<any>;
    contentPadding: EdgeInsetsGeometry;
    backgroundColor: Color;
    elevation: number;
    semanticLabel: string;
    shape: ShapeBorder;
    constructor(namedParameters?: {
        key?: Key;
        title?: MXWidget;
        titlePadding?: EdgeInsetsGeometry;
        titleTextStyle?: TextStyle;
        children?: Array<any>;
        contentPadding?: EdgeInsetsGeometry;
        backgroundColor?: Color;
        elevation?: number;
        semanticLabel?: string;
        shape?: ShapeBorder;
    });
}
export { SimpleDialog };
