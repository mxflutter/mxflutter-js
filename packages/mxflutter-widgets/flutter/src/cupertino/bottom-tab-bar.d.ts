import { Key } from '../foundation/key';
import { Border } from '../painting/box-border';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget$ } from '../widgets/framework';
declare class CupertinoTabBar extends StatelessWidget$ {
    items: Array<any>;
    onTap: any;
    currentIndex: number;
    backgroundColor: Color;
    activeColor: Color;
    inactiveColor: Color;
    iconSize: number;
    border: Border;
    constructor(namedParameters?: {
        key?: Key;
        items?: Array<any>;
        onTap?: any;
        currentIndex?: number;
        backgroundColor?: Color;
        activeColor?: Color;
        inactiveColor?: Color;
        iconSize?: number;
        border?: Border;
    });
}
export { CupertinoTabBar };
