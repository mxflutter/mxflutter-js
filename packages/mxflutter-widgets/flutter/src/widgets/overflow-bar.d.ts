import { ContainerBoxParentData, RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { TextDirection, Clip } from '../../../mx-dart-sdk';
import { VerticalDirection } from '../painting/basic-types';
import { MultiChildRenderObjectWidget } from './framework';
declare enum OverflowBarAlignment {
    start = "{ \"_name\": \"OverflowBarAlignment.start\", \"index\": 0 }",
    end = "{ \"_name\": \"OverflowBarAlignment.end\", \"index\": 1 }",
    center = "{ \"_name\": \"OverflowBarAlignment.center\", \"index\": 2 }"
}
export { OverflowBarAlignment };
declare class OverflowBar extends MultiChildRenderObjectWidget {
    spacing: number;
    overflowSpacing: number;
    overflowAlignment: OverflowBarAlignment;
    overflowDirection: VerticalDirection;
    textDirection: TextDirection;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        spacing?: number;
        overflowSpacing?: number;
        overflowAlignment?: OverflowBarAlignment;
        overflowDirection?: VerticalDirection;
        textDirection?: TextDirection;
        clipBehavior?: Clip;
        children?: Array<any>;
    });
}
export { OverflowBar };
declare class _OverflowBarParentData extends ContainerBoxParentData {
}
export { _OverflowBarParentData };
declare class _RenderOverflowBar extends RenderBox {
    spacing: number;
    overflowSpacing: number;
    overflowAlignment: OverflowBarAlignment;
    overflowDirection: VerticalDirection;
    textDirection: TextDirection;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        children?: Array<any>;
        spacing?: number;
        overflowSpacing?: number;
        overflowAlignment?: OverflowBarAlignment;
        overflowDirection?: VerticalDirection;
        textDirection?: TextDirection;
        clipBehavior?: Clip;
    });
}
export { _RenderOverflowBar };
