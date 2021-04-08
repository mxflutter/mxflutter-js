import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget } from '../widgets/framework';
declare class Divider extends StatelessWidget {
    height: number;
    thickness: number;
    indent: number;
    endIndent: number;
    color: Color;
    constructor(namedParameters?: {
        key?: Key;
        height?: number;
        thickness?: number;
        indent?: number;
        endIndent?: number;
        color?: Color;
    });
}
export { Divider };
declare class VerticalDivider extends StatelessWidget {
    width: number;
    thickness: number;
    indent: number;
    endIndent: number;
    color: Color;
    constructor(namedParameters?: {
        key?: Key;
        width?: number;
        thickness?: number;
        indent?: number;
        endIndent?: number;
        color?: Color;
    });
}
export { VerticalDivider };
