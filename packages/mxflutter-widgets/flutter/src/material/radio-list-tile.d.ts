import { Key } from '../foundation/key';
import { ListTileControlAffinity } from './list-tile';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class RadioListTile extends StatelessWidget$ {
    value: any;
    groupValue: any;
    onChanged: any;
    toggleable: boolean;
    activeColor: Color;
    title: MXWidget;
    subtitle: MXWidget;
    secondary: MXWidget;
    isThreeLine: boolean;
    dense: boolean;
    selected: boolean;
    controlAffinity: ListTileControlAffinity;
    autofocus: boolean;
    constructor(namedParameters?: {
        key?: Key;
        value?: any;
        groupValue?: any;
        onChanged?: any;
        toggleable?: boolean;
        activeColor?: Color;
        title?: MXWidget;
        subtitle?: MXWidget;
        isThreeLine?: boolean;
        dense?: boolean;
        secondary?: MXWidget;
        selected?: boolean;
        controlAffinity?: ListTileControlAffinity;
        autofocus?: boolean;
    });
}
export { RadioListTile };
