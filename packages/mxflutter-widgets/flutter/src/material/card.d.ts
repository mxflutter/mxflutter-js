import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ShapeBorder } from '../painting/borders';
import { Color, Clip } from '../../../mx-dart-sdk';
import { StatelessWidget$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Card extends StatelessWidget$ {
    color: Color;
    shadowColor: Color;
    elevation: number;
    shape: ShapeBorder;
    borderOnForeground: boolean;
    clipBehavior: Clip;
    margin: EdgeInsetsGeometry;
    semanticContainer: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        color?: Color;
        shadowColor?: Color;
        elevation?: number;
        shape?: ShapeBorder;
        borderOnForeground?: boolean;
        margin?: EdgeInsetsGeometry;
        clipBehavior?: Clip;
        child?: MXWidget;
        semanticContainer?: boolean;
    });
}
export { Card };
