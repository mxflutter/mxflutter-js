import { Key } from '../foundation/key';
import { StatelessWidget$ } from './framework';
import { TextPainter } from '../painting/text-painter';
import { TextStyle } from '../painting/text-style';
import { TextDirection, Color, Paint } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum BannerLocation {
    topStart = "{ \"_name\": \"BannerLocation.topStart\", \"index\": 0 }",
    topEnd = "{ \"_name\": \"BannerLocation.topEnd\", \"index\": 1 }",
    bottomStart = "{ \"_name\": \"BannerLocation.bottomStart\", \"index\": 2 }",
    bottomEnd = "{ \"_name\": \"BannerLocation.bottomEnd\", \"index\": 3 }"
}
export { BannerLocation };
declare class BannerPainter extends CustomPainter {
    message: string;
    textDirection: TextDirection;
    location: BannerLocation;
    layoutDirection: TextDirection;
    color: Color;
    textStyle: TextStyle;
    prepared: boolean;
    textPainter: TextPainter;
    paintShadow: Paint;
    paintBanner: Paint;
    constructor(namedParameters?: {
        message?: string;
        textDirection?: TextDirection;
        location?: BannerLocation;
        layoutDirection?: TextDirection;
        color?: Color;
        textStyle?: TextStyle;
    });
}
export { BannerPainter };
declare class Banner extends StatelessWidget$ {
    child: MXWidget;
    message: string;
    textDirection: TextDirection;
    location: BannerLocation;
    layoutDirection: TextDirection;
    color: Color;
    textStyle: TextStyle;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        message?: string;
        textDirection?: TextDirection;
        location?: BannerLocation;
        layoutDirection?: TextDirection;
        color?: Color;
        textStyle?: TextStyle;
    });
}
export { Banner };
declare class CheckedModeBanner extends StatelessWidget$ {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { CheckedModeBanner };
