import { BorderRadiusGeometry } from './border-radius';
import { OutlinedBorder, BorderSide } from './borders';
declare class ContinuousRectangleBorder extends OutlinedBorder {
    borderRadius: BorderRadiusGeometry;
    constructor(namedParameters?: {
        side?: BorderSide;
        borderRadius?: BorderRadiusGeometry;
    });
}
export { ContinuousRectangleBorder };
