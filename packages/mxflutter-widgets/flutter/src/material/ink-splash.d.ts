import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { ShapeBorder } from '../painting/borders';
import { BorderRadius } from '../painting/border-radius';
import { Offset, Color, TextDirection } from '../../../mx-dart-sdk';
import { RenderBox } from '../rendering/box';
import { MaterialInkController } from './material';
import { InteractiveInkFeatureFactory, InteractiveInkFeature } from './ink-well';
declare class _InkSplashFactory extends InteractiveInkFeatureFactory {
}
export { _InkSplashFactory };
declare class InkSplash extends InteractiveInkFeature {
    position: Offset;
    borderRadius: BorderRadius;
    customBorder: ShapeBorder;
    targetRadius: number;
    clipCallback: any;
    repositionToReferenceBox: boolean;
    textDirection: TextDirection;
    radius: Animation;
    radiusController: AnimationController;
    alpha: Animation;
    alphaController: AnimationController;
    constructor(namedParameters?: {
        controller?: MaterialInkController;
        referenceBox?: RenderBox;
        textDirection?: TextDirection;
        position?: Offset;
        color?: Color;
        containedInkWell?: boolean;
        rectCallback?: any;
        borderRadius?: BorderRadius;
        customBorder?: ShapeBorder;
        radius?: number;
        onRemoved?: any;
    });
    static get splashFactory(): {
        className: string;
        mirrorID: string;
    };
}
export { InkSplash };
