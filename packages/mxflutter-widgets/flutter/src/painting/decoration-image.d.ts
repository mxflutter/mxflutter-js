import { ImageStream, ImageInfo } from './image-stream';
import { AlignmentGeometry } from './alignment';
import { BoxFit } from './box-fit';
import { ColorFilter, Rect } from '../../../mx-dart-sdk';
import { ImageProvider } from './image-provider';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum ImageRepeat {
    repeat = "{ \"_name\": \"ImageRepeat.repeat\", \"index\": 0 }",
    repeatX = "{ \"_name\": \"ImageRepeat.repeatX\", \"index\": 1 }",
    repeatY = "{ \"_name\": \"ImageRepeat.repeatY\", \"index\": 2 }",
    noRepeat = "{ \"_name\": \"ImageRepeat.noRepeat\", \"index\": 3 }"
}
export { ImageRepeat };
declare class DecorationImage extends MXDartClass {
    image: ImageProvider;
    onError: any;
    colorFilter: ColorFilter;
    fit: BoxFit;
    alignment: AlignmentGeometry;
    centerSlice: Rect;
    repeat: ImageRepeat;
    matchTextDirection: boolean;
    scale: number;
    constructor(namedParameters?: {
        image?: ImageProvider;
        onError?: any;
        colorFilter?: ColorFilter;
        fit?: BoxFit;
        alignment?: AlignmentGeometry;
        centerSlice?: Rect;
        repeat?: ImageRepeat;
        matchTextDirection?: boolean;
        scale?: number;
    });
}
export { DecorationImage };
declare class DecorationImagePainter extends MXDartClass {
    details: DecorationImage;
    onChanged: any;
    imageStream: ImageStream;
    image: ImageInfo;
}
export { DecorationImagePainter };
