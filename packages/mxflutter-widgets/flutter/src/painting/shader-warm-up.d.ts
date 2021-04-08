import { Size } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class ShaderWarmUp extends MXDartClass {
}
export { ShaderWarmUp };
declare class DefaultShaderWarmUp extends ShaderWarmUp {
    drawCallSpacing: number;
    canvasSize: Size;
    constructor(namedParameters?: {
        drawCallSpacing?: number;
        canvasSize?: Size;
    });
}
export { DefaultShaderWarmUp };
