import { Key } from '../foundation/key';
import { ListTileControlAffinity } from './list-tile';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ImageProvider } from '../painting/image-provider';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum _SwitchListTileType {
    material = "{ \"_name\": \"_SwitchListTileType.material\", \"index\": 0 }",
    adaptive = "{ \"_name\": \"_SwitchListTileType.adaptive\", \"index\": 1 }"
}
export { _SwitchListTileType };
declare class SwitchListTile extends StatelessWidget {
    value: boolean;
    onChanged: any;
    activeColor: Color;
    activeTrackColor: Color;
    inactiveThumbColor: Color;
    inactiveTrackColor: Color;
    activeThumbImage: ImageProvider;
    inactiveThumbImage: ImageProvider;
    title: MXWidget;
    subtitle: MXWidget;
    secondary: MXWidget;
    isThreeLine: boolean;
    dense: boolean;
    contentPadding: EdgeInsetsGeometry;
    selected: boolean;
    autofocus: boolean;
    switchListTileType: _SwitchListTileType;
    controlAffinity: ListTileControlAffinity;
    constructor(namedParameters?: {
        key?: Key;
        value?: boolean;
        onChanged?: any;
        activeColor?: Color;
        activeTrackColor?: Color;
        inactiveThumbColor?: Color;
        inactiveTrackColor?: Color;
        activeThumbImage?: ImageProvider;
        inactiveThumbImage?: ImageProvider;
        title?: MXWidget;
        subtitle?: MXWidget;
        isThreeLine?: boolean;
        dense?: boolean;
        contentPadding?: EdgeInsetsGeometry;
        secondary?: MXWidget;
        selected?: boolean;
        autofocus?: boolean;
        controlAffinity?: ListTileControlAffinity;
    });
    static adaptive(namedParameters?: {
        key?: Key;
        value?: boolean;
        onChanged?: any;
        activeColor?: Color;
        activeTrackColor?: Color;
        inactiveThumbColor?: Color;
        inactiveTrackColor?: Color;
        activeThumbImage?: ImageProvider;
        inactiveThumbImage?: ImageProvider;
        title?: MXWidget;
        subtitle?: MXWidget;
        isThreeLine?: boolean;
        dense?: boolean;
        contentPadding?: EdgeInsetsGeometry;
        secondary?: MXWidget;
        selected?: boolean;
        autofocus?: boolean;
        controlAffinity?: ListTileControlAffinity;
    }): SwitchListTile;
}
export { SwitchListTile };
