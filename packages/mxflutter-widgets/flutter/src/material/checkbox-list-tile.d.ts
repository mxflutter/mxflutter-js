import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ListTileControlAffinity } from './list-tile';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CheckboxListTile extends StatelessWidget {
    value: boolean;
    onChanged: any;
    activeColor: Color;
    checkColor: Color;
    title: MXWidget;
    subtitle: MXWidget;
    secondary: MXWidget;
    isThreeLine: boolean;
    dense: boolean;
    selected: boolean;
    controlAffinity: ListTileControlAffinity;
    autofocus: boolean;
    contentPadding: EdgeInsetsGeometry;
    tristate: boolean;
    constructor(namedParameters?: {
        key?: Key;
        value?: boolean;
        onChanged?: any;
        activeColor?: Color;
        checkColor?: Color;
        title?: MXWidget;
        subtitle?: MXWidget;
        isThreeLine?: boolean;
        dense?: boolean;
        secondary?: MXWidget;
        selected?: boolean;
        controlAffinity?: ListTileControlAffinity;
        autofocus?: boolean;
        contentPadding?: EdgeInsetsGeometry;
        tristate?: boolean;
    });
}
export { CheckboxListTile };
