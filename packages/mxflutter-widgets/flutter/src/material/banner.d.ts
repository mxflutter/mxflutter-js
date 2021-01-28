import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { StatelessWidget$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class MaterialBanner extends StatelessWidget$ {
    content: MXWidget;
    contentTextStyle: TextStyle;
    actions: Array<any>;
    leading: MXWidget;
    backgroundColor: Color;
    padding: EdgeInsetsGeometry;
    leadingPadding: EdgeInsetsGeometry;
    forceActionsBelow: boolean;
    constructor(namedParameters?: {
        key?: Key;
        content?: MXWidget;
        contentTextStyle?: TextStyle;
        actions?: Array<any>;
        leading?: MXWidget;
        backgroundColor?: Color;
        padding?: EdgeInsetsGeometry;
        leadingPadding?: EdgeInsetsGeometry;
        forceActionsBelow?: boolean;
    });
}
export { MaterialBanner };
