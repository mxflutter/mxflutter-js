import { Key } from '../foundation/key';
import { StatelessWidget } from './framework';
import { Color } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class _GridPaperPainter extends CustomPainter {
    color: Color;
    interval: number;
    divisions: number;
    subdivisions: number;
    constructor(namedParameters?: {
        color?: Color;
        interval?: number;
        divisions?: number;
        subdivisions?: number;
    });
}
export { _GridPaperPainter };
declare class GridPaper extends StatelessWidget {
    color: Color;
    interval: number;
    divisions: number;
    subdivisions: number;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        color?: Color;
        interval?: number;
        divisions?: number;
        subdivisions?: number;
        child?: MXWidget;
    });
}
export { GridPaper };
