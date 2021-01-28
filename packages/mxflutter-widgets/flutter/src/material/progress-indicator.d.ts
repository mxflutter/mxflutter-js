import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { CustomPainter } from '../rendering/custom-paint';
import { Animation } from '../animation/animation';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$ } from '../widgets/framework';
declare abstract class ProgressIndicator extends StatefulWidget$ {
    value: number;
    backgroundColor: Color;
    valueColor: Animation;
    semanticsLabel: string;
    semanticsValue: string;
}
export { ProgressIndicator };
declare class _LinearProgressIndicatorPainter extends CustomPainter {
    backgroundColor: Color;
    valueColor: Color;
    value: number;
    animationValue: number;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        valueColor?: Color;
        value?: number;
        animationValue?: number;
        textDirection?: TextDirection;
    });
    static get line1Head(): {
        className: string;
        mirrorID: string;
    };
    static get line1Tail(): {
        className: string;
        mirrorID: string;
    };
    static get line2Head(): {
        className: string;
        mirrorID: string;
    };
    static get line2Tail(): {
        className: string;
        mirrorID: string;
    };
}
export { _LinearProgressIndicatorPainter };
declare class LinearProgressIndicator extends ProgressIndicator {
    minHeight: number;
    constructor(namedParameters?: {
        key?: Key;
        value?: number;
        backgroundColor?: Color;
        valueColor?: Animation;
        minHeight?: number;
        semanticsLabel?: string;
        semanticsValue?: string;
    });
}
export { LinearProgressIndicator };
declare class _LinearProgressIndicatorState extends State$ {
    controller: AnimationController;
}
export { _LinearProgressIndicatorState };
declare class _CircularProgressIndicatorPainter extends CustomPainter {
    backgroundColor: Color;
    valueColor: Color;
    value: number;
    headValue: number;
    tailValue: number;
    offsetValue: number;
    rotationValue: number;
    strokeWidth: number;
    arcStart: number;
    arcSweep: number;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        valueColor?: Color;
        value?: number;
        headValue?: number;
        tailValue?: number;
        offsetValue?: number;
        rotationValue?: number;
        strokeWidth?: number;
    });
}
export { _CircularProgressIndicatorPainter };
declare class CircularProgressIndicator extends ProgressIndicator {
    strokeWidth: number;
    constructor(namedParameters?: {
        key?: Key;
        value?: number;
        backgroundColor?: Color;
        valueColor?: Animation;
        strokeWidth?: number;
        semanticsLabel?: string;
        semanticsValue?: string;
    });
}
export { CircularProgressIndicator };
declare class _CircularProgressIndicatorState extends State$ {
    controller: AnimationController;
}
export { _CircularProgressIndicatorState };
declare class _RefreshProgressIndicatorPainter extends _CircularProgressIndicatorPainter {
    arrowheadScale: number;
    constructor(namedParameters?: {
        valueColor?: Color;
        value?: number;
        headValue?: number;
        tailValue?: number;
        offsetValue?: number;
        rotationValue?: number;
        strokeWidth?: number;
        arrowheadScale?: number;
    });
}
export { _RefreshProgressIndicatorPainter };
declare class RefreshProgressIndicator extends CircularProgressIndicator {
    constructor(namedParameters?: {
        key?: Key;
        value?: number;
        backgroundColor?: Color;
        valueColor?: Animation;
        strokeWidth?: number;
        semanticsLabel?: string;
        semanticsValue?: string;
    });
}
export { RefreshProgressIndicator };
declare class _RefreshProgressIndicatorState extends _CircularProgressIndicatorState {
}
export { _RefreshProgressIndicatorState };
