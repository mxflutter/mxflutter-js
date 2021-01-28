import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { ImageProvider } from '../painting/image-provider';
import { StatelessWidget$ } from './framework';
declare class ImageIcon extends StatelessWidget$ {
    image: ImageProvider;
    size: number;
    color: Color;
    semanticLabel: string;
    constructor(image?: ImageProvider, namedParameters?: {
        key?: Key;
        size?: number;
        color?: Color;
        semanticLabel?: string;
    });
}
export { ImageIcon };
