import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Decoration } from '../painting/decoration';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class _AccountPictures extends StatelessWidget$ {
    currentAccountPicture: MXWidget;
    otherAccountsPictures: Array<any>;
    constructor(namedParameters?: {
        key?: Key;
        currentAccountPicture?: MXWidget;
        otherAccountsPictures?: Array<any>;
    });
}
export { _AccountPictures };
declare class _AccountDetails extends StatefulWidget$ {
    accountName: MXWidget;
    accountEmail: MXWidget;
    onTap: any;
    isOpen: boolean;
    arrowColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        accountName?: MXWidget;
        accountEmail?: MXWidget;
        onTap?: any;
        isOpen?: boolean;
        arrowColor?: Color;
    });
}
export { _AccountDetails };
declare class _AccountDetailsState extends State$ {
    animation: Animation;
    controller: AnimationController;
}
export { _AccountDetailsState };
declare class _AccountDetailsLayout extends MultiChildLayoutDelegate {
    textDirection: TextDirection;
    constructor(namedParameters?: {
        textDirection?: TextDirection;
    });
    static get accountName(): string;
    static get accountEmail(): string;
    static get dropdownIcon(): string;
}
export { _AccountDetailsLayout };
declare class UserAccountsDrawerHeader extends StatefulWidget$ {
    decoration: Decoration;
    margin: EdgeInsetsGeometry;
    currentAccountPicture: MXWidget;
    otherAccountsPictures: Array<any>;
    accountName: MXWidget;
    accountEmail: MXWidget;
    onDetailsPressed: any;
    arrowColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        decoration?: Decoration;
        margin?: EdgeInsetsGeometry;
        currentAccountPicture?: MXWidget;
        otherAccountsPictures?: Array<any>;
        accountName?: MXWidget;
        accountEmail?: MXWidget;
        onDetailsPressed?: any;
        arrowColor?: Color;
    });
}
export { UserAccountsDrawerHeader };
declare class _UserAccountsDrawerHeaderState extends State$ {
    isOpen: boolean;
}
export { _UserAccountsDrawerHeaderState };
