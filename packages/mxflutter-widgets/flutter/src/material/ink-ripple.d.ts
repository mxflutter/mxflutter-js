import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { ShapeBorder } from '../painting/borders';
import { BorderRadius } from '../painting/border-radius';
import { Offset, Color, TextDirection } from '../../../mx-dart-sdk';
import { RenderBox } from '../rendering/box';
import { MaterialInkController } from './material';
import { InteractiveInkFeatureFactory, InteractiveInkFeature } from './ink-well';
declare class _InkRippleFactory extends InteractiveInkFeatureFactory {
}
export { _InkRippleFactory };
declare class InkRipple extends InteractiveInkFeature {
    position: Offset;
    borderRadius: BorderRadius;
    customBorder: ShapeBorder;
    targetRadius: number;
    clipCallback: any;
    textDirection: TextDirection;
    radius: Animation;
    radiusController: AnimationController;
    fadeIn: Animation;
    fadeInController: AnimationController;
    fadeOut: Animation;
    fadeOutController: AnimationController;
    constructor(namedParameters?: {
        controller?: MaterialInkController;
        referenceBox?: RenderBox;
        position?: Offset;
        color?: Color;
        textDirection?: TextDirection;
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
export { InkRipple };
