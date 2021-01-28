import { Color } from '../../../mx-dart-sdk';
import { EdgeInsets } from '../painting/edge-insets';
import { Duration } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _SaltedKey extends LocalKey {
    salt: any;
    value: any;
    constructor(salt?: any, value?: any);
}
export { _SaltedKey };
declare class ExpansionPanel extends MXDartClass {
    headerBuilder: any;
    body: MXWidget;
    isExpanded: boolean;
    canTapOnHeader: boolean;
    constructor(namedParameters?: {
        headerBuilder?: any;
        body?: MXWidget;
        isExpanded?: boolean;
        canTapOnHeader?: boolean;
    });
}
export { ExpansionPanel };
declare class ExpansionPanelRadio extends ExpansionPanel {
    value: any;
    constructor(namedParameters?: {
        value?: any;
        headerBuilder?: any;
        body?: MXWidget;
        canTapOnHeader?: boolean;
    });
}
export { ExpansionPanelRadio };
declare class ExpansionPanelList extends StatefulWidget$ {
    children: Array<any>;
    expansionCallback: any;
    animationDuration: Duration;
    allowOnlyOnePanelOpen: boolean;
    initialOpenPanelValue: any;
    expandedHeaderPadding: EdgeInsets;
    dividerColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        expansionCallback?: any;
        animationDuration?: Duration;
        expandedHeaderPadding?: EdgeInsets;
        dividerColor?: Color;
    });
    static radio(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        expansionCallback?: any;
        animationDuration?: Duration;
        initialOpenPanelValue?: any;
        expandedHeaderPadding?: EdgeInsets;
        dividerColor?: Color;
    }): ExpansionPanelList;
}
export { ExpansionPanelList };
declare class _ExpansionPanelListState extends State$ {
    currentOpenPanel: ExpansionPanelRadio;
}
export { _ExpansionPanelListState };
