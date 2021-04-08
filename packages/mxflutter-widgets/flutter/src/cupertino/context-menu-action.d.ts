import { Key } from '../foundation/key';
import { IconData } from '../widgets/icon-data';
import { StatefulWidget, State, GlobalKey } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CupertinoContextMenuAction extends StatefulWidget {
    child: MXWidget;
    isDefaultAction: boolean;
    isDestructiveAction: boolean;
    onPressed: any;
    trailingIcon: IconData;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        isDefaultAction?: boolean;
        isDestructiveAction?: boolean;
        onPressed?: any;
        trailingIcon?: IconData;
    });
}
export { CupertinoContextMenuAction };
declare class _CupertinoContextMenuActionState extends State {
    globalKey: GlobalKey;
    isPressed: boolean;
}
export { _CupertinoContextMenuActionState };
