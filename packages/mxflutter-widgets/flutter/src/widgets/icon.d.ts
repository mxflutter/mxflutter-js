import { Key } from '../foundation/key';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { IconData } from './icon-data';
import { StatelessWidget$ } from './framework';
declare class Icon extends StatelessWidget$ {
    icon: IconData;
    size: number;
    color: Color;
    semanticLabel: string;
    textDirection: TextDirection;
    constructor(icon?: IconData, namedParameters?: {
        key?: Key;
        size?: number;
        color?: Color;
        semanticLabel?: string;
        textDirection?: TextDirection;
    });
}
export { Icon };
