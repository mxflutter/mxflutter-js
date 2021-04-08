import { BorderRadius } from './border-radius';
import { OutlinedBorder, BorderSide } from './borders';
declare class StadiumBorder extends OutlinedBorder {
    constructor(namedParameters?: {
        side?: BorderSide;
    });
}
export { StadiumBorder };
declare class _StadiumToCircleBorder extends OutlinedBorder {
    circleness: number;
    constructor(namedParameters?: {
        side?: BorderSide;
        circleness?: number;
    });
}
export { _StadiumToCircleBorder };
declare class _StadiumToRoundedRectangleBorder extends OutlinedBorder {
    borderRadius: BorderRadius;
    rectness: number;
    constructor(namedParameters?: {
        side?: BorderSide;
        borderRadius?: BorderRadius;
        rectness?: number;
    });
}
export { _StadiumToRoundedRectangleBorder };
