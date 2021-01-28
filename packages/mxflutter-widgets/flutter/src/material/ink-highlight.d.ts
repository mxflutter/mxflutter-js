import { Duration } from '../../../mx-dart-sdk';
import { RenderBox } from '../rendering/box';
import { MaterialInkController } from './material';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { TextDirection, Color } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { BorderRadius } from '../painting/border-radius';
import { BoxShape } from '../painting/box-border';
import { InteractiveInkFeature } from './ink-well';
declare class InkHighlight extends InteractiveInkFeature {
    shape: BoxShape;
    radius: number;
    borderRadius: BorderRadius;
    customBorder: ShapeBorder;
    rectCallback: any;
    textDirection: TextDirection;
    alpha: Animation;
    alphaController: AnimationController;
    active: boolean;
    constructor(namedParameters?: {
        controller?: MaterialInkController;
        referenceBox?: RenderBox;
        color?: Color;
        textDirection?: TextDirection;
        shape?: BoxShape;
        radius?: number;
        borderRadius?: BorderRadius;
        customBorder?: ShapeBorder;
        rectCallback?: any;
        onRemoved?: any;
        fadeDuration?: Duration;
    });
}
export { InkHighlight };
