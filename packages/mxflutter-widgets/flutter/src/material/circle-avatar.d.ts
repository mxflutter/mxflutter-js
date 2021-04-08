import { Key } from '../foundation/key';
import { ImageProvider } from '../painting/image-provider';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CircleAvatar extends StatelessWidget {
    child: MXWidget;
    backgroundColor: Color;
    foregroundColor: Color;
    backgroundImage: ImageProvider;
    onBackgroundImageError: any;
    radius: number;
    minRadius: number;
    maxRadius: number;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        backgroundColor?: Color;
        backgroundImage?: ImageProvider;
        onBackgroundImageError?: any;
        foregroundColor?: Color;
        radius?: number;
        minRadius?: number;
        maxRadius?: number;
    });
}
export { CircleAvatar };
