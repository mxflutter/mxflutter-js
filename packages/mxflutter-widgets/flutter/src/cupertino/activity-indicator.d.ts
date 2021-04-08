import { Color, RRect } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { CustomPainter } from '../rendering/custom-paint';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { StatefulWidget, State } from '../widgets/framework';
declare enum CupertinoActivityIndicatorIOSVersionStyle {
    iOS13 = "{ \"_name\": \"CupertinoActivityIndicatorIOSVersionStyle.iOS13\", \"index\": 0 }",
    iOS14 = "{ \"_name\": \"CupertinoActivityIndicatorIOSVersionStyle.iOS14\", \"index\": 1 }"
}
export { CupertinoActivityIndicatorIOSVersionStyle };
declare class CupertinoActivityIndicator extends StatefulWidget {
    animating: boolean;
    radius: number;
    progress: number;
    iOSVersionStyle: CupertinoActivityIndicatorIOSVersionStyle;
    constructor(namedParameters?: {
        key?: Key;
        animating?: boolean;
        radius?: number;
        iOSVersionStyle?: CupertinoActivityIndicatorIOSVersionStyle;
    });
    static partiallyRevealed(namedParameters?: {
        key?: Key;
        radius?: number;
        progress?: number;
        iOSVersionStyle?: CupertinoActivityIndicatorIOSVersionStyle;
    }): CupertinoActivityIndicator;
}
export { CupertinoActivityIndicator };
declare class _CupertinoActivityIndicatorState extends State {
    controller: AnimationController;
}
export { _CupertinoActivityIndicatorState };
declare class _CupertinoActivityIndicatorPainter extends CustomPainter {
    position: Animation;
    activeColor: Color;
    radius: number;
    progress: number;
    alphaValues: Array<any>;
    tickFundamentalRRect: RRect;
    constructor(namedParameters?: {
        position?: Animation;
        activeColor?: Color;
        radius?: number;
        progress?: number;
        iOSVersionStyle?: CupertinoActivityIndicatorIOSVersionStyle;
    });
}
export { _CupertinoActivityIndicatorPainter };
