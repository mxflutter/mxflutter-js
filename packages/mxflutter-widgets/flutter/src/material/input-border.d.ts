import { BorderRadius } from '../painting/border-radius';
import { ShapeBorder, BorderSide } from '../painting/borders';
declare abstract class InputBorder extends ShapeBorder {
    borderSide: BorderSide;
    static get none(): {
        borderSide: BorderSide;
        className: string;
        mirrorID: string;
    };
}
export { InputBorder };
declare class _NoInputBorder extends InputBorder {
}
export { _NoInputBorder };
declare class UnderlineInputBorder extends InputBorder {
    borderRadius: BorderRadius;
    constructor(namedParameters?: {
        borderSide?: BorderSide;
        borderRadius?: BorderRadius;
    });
}
export { UnderlineInputBorder };
declare class OutlineInputBorder extends InputBorder {
    gapPadding: number;
    borderRadius: BorderRadius;
    constructor(namedParameters?: {
        borderSide?: BorderSide;
        borderRadius?: BorderRadius;
        gapPadding?: number;
    });
}
export { OutlineInputBorder };
