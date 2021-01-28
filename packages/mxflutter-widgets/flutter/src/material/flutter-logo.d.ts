import { Key } from '../foundation/key';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { FlutterLogoStyle } from '../painting/flutter-logo';
import { Color } from '../../../mx-dart-sdk';
import { MaterialColor } from './colors';
import { StatelessWidget$ } from '../widgets/framework';
declare class FlutterLogo extends StatelessWidget$ {
    size: number;
    colors: MaterialColor;
    textColor: Color;
    style: FlutterLogoStyle;
    duration: Duration;
    curve: Curve;
    constructor(namedParameters?: {
        key?: Key;
        size?: number;
        colors?: MaterialColor;
        textColor?: Color;
        style?: FlutterLogoStyle;
        duration?: Duration;
        curve?: Curve;
    });
}
export { FlutterLogo };
