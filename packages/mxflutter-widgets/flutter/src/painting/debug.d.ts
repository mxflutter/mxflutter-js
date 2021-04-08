import { Size } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ImageSizeInfo extends MXDartClass {
    source: string;
    displaySize: Size;
    imageSize: Size;
    constructor(namedParameters?: {
        source?: string;
        displaySize?: Size;
        imageSize?: Size;
    });
}
export { ImageSizeInfo };
