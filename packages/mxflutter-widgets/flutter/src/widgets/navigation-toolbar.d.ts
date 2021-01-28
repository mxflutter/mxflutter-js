import { TextDirection } from '../../../mx-dart-sdk';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { Key } from '../foundation/key';
import { StatelessWidget$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class NavigationToolbar extends StatelessWidget$ {
    leading: MXWidget;
    middle: MXWidget;
    trailing: MXWidget;
    centerMiddle: boolean;
    middleSpacing: number;
    constructor(namedParameters?: {
        key?: Key;
        leading?: MXWidget;
        middle?: MXWidget;
        trailing?: MXWidget;
        centerMiddle?: boolean;
        middleSpacing?: number;
    });
    static get kMiddleSpacing(): number;
}
export { NavigationToolbar };
declare enum _ToolbarSlot {
    leading = "{ \"_name\": \"_ToolbarSlot.leading\", \"index\": 0 }",
    middle = "{ \"_name\": \"_ToolbarSlot.middle\", \"index\": 1 }",
    trailing = "{ \"_name\": \"_ToolbarSlot.trailing\", \"index\": 2 }"
}
export { _ToolbarSlot };
declare class _ToolbarLayout extends MultiChildLayoutDelegate {
    centerMiddle: boolean;
    middleSpacing: number;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        centerMiddle?: boolean;
        middleSpacing?: number;
        textDirection?: TextDirection;
    });
}
export { _ToolbarLayout };
