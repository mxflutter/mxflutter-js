import { Key } from '../foundation/key';
import { StatelessWidget$ } from './framework';
import { Color } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
declare class _PlaceholderPainter extends CustomPainter {
    color: Color;
    strokeWidth: number;
    constructor(namedParameters?: {
        color?: Color;
        strokeWidth?: number;
    });
}
export { _PlaceholderPainter };
declare class Placeholder extends StatelessWidget$ {
    color: Color;
    strokeWidth: number;
    fallbackWidth: number;
    fallbackHeight: number;
    constructor(namedParameters?: {
        key?: Key;
        color?: Color;
        strokeWidth?: number;
        fallbackWidth?: number;
        fallbackHeight?: number;
    });
}
export { Placeholder };
