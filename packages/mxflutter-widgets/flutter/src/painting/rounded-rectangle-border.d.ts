import { BorderRadiusGeometry } from './border-radius';
import { OutlinedBorder, BorderSide } from './borders';
declare class RoundedRectangleBorder extends OutlinedBorder {
    borderRadius: BorderRadiusGeometry;
    constructor(namedParameters?: {
        side?: BorderSide;
        borderRadius?: BorderRadiusGeometry;
    });
}
export { RoundedRectangleBorder };
declare class _RoundedRectangleToCircleBorder extends OutlinedBorder {
    borderRadius: BorderRadiusGeometry;
    circleness: number;
    constructor(namedParameters?: {
        side?: BorderSide;
        borderRadius?: BorderRadiusGeometry;
        circleness?: number;
    });
}
export { _RoundedRectangleToCircleBorder };
