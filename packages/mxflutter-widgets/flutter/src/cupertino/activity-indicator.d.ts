import { RRect, Color } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { CustomPainter } from '../rendering/custom-paint';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { StatefulWidget$, State$ } from '../widgets/framework';
declare class CupertinoActivityIndicator extends StatefulWidget$ {
    animating: boolean;
    radius: number;
    progress: number;
    constructor(namedParameters?: {
        key?: Key;
        animating?: boolean;
        radius?: number;
    });
    static partiallyRevealed(namedParameters?: {
        key?: Key;
        radius?: number;
        progress?: number;
    }): CupertinoActivityIndicator;
}
export { CupertinoActivityIndicator };
declare class _CupertinoActivityIndicatorState extends State$ {
    controller: AnimationController;
}
export { _CupertinoActivityIndicatorState };
declare class _CupertinoActivityIndicatorPainter extends CustomPainter {
    position: Animation;
    tickFundamentalRRect: RRect;
    activeColor: Color;
    radius: number;
    progress: number;
    constructor(namedParameters?: {
        position?: Animation;
        activeColor?: Color;
        radius?: number;
        progress?: number;
    });
}
export { _CupertinoActivityIndicatorPainter };
