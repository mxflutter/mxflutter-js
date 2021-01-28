import { Animation } from '../animation/animation';
import { Tween } from '../animation/tween';
import { ImplicitlyAnimatedWidget, ImplicitlyAnimatedWidgetState } from './implicit-animations';
import { AssetBundle } from '../services/asset-bundle';
import { Key } from '../foundation/key';
import { ImageRepeat } from '../painting/decoration-image';
import { AlignmentGeometry } from '../painting/alignment';
import { BoxFit } from '../painting/box-fit';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { ImageProvider } from '../painting/image-provider';
import { StatelessWidget$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class FadeInImage extends StatelessWidget$ {
    placeholder: ImageProvider;
    placeholderErrorBuilder: any;
    image: ImageProvider;
    imageErrorBuilder: any;
    fadeOutDuration: Duration;
    fadeOutCurve: Curve;
    fadeInDuration: Duration;
    fadeInCurve: Curve;
    width: number;
    height: number;
    fit: BoxFit;
    alignment: AlignmentGeometry;
    repeat: ImageRepeat;
    matchTextDirection: boolean;
    excludeFromSemantics: boolean;
    imageSemanticLabel: string;
    constructor(namedParameters?: {
        key?: Key;
        placeholder?: ImageProvider;
        placeholderErrorBuilder?: any;
        image?: ImageProvider;
        imageErrorBuilder?: any;
        excludeFromSemantics?: boolean;
        imageSemanticLabel?: string;
        fadeOutDuration?: Duration;
        fadeOutCurve?: Curve;
        fadeInDuration?: Duration;
        fadeInCurve?: Curve;
        width?: number;
        height?: number;
        fit?: BoxFit;
        alignment?: AlignmentGeometry;
        repeat?: ImageRepeat;
        matchTextDirection?: boolean;
    });
    static memoryNetwork(namedParameters?: {
        key?: Key;
        placeholder?: any;
        placeholderErrorBuilder?: any;
        image?: string;
        imageErrorBuilder?: any;
        placeholderScale?: number;
        imageScale?: number;
        excludeFromSemantics?: boolean;
        imageSemanticLabel?: string;
        fadeOutDuration?: Duration;
        fadeOutCurve?: Curve;
        fadeInDuration?: Duration;
        fadeInCurve?: Curve;
        width?: number;
        height?: number;
        fit?: BoxFit;
        alignment?: AlignmentGeometry;
        repeat?: ImageRepeat;
        matchTextDirection?: boolean;
        placeholderCacheWidth?: number;
        placeholderCacheHeight?: number;
        imageCacheWidth?: number;
        imageCacheHeight?: number;
    }): FadeInImage;
    static assetNetwork(namedParameters?: {
        key?: Key;
        placeholder?: string;
        placeholderErrorBuilder?: any;
        image?: string;
        imageErrorBuilder?: any;
        bundle?: AssetBundle;
        placeholderScale?: number;
        imageScale?: number;
        excludeFromSemantics?: boolean;
        imageSemanticLabel?: string;
        fadeOutDuration?: Duration;
        fadeOutCurve?: Curve;
        fadeInDuration?: Duration;
        fadeInCurve?: Curve;
        width?: number;
        height?: number;
        fit?: BoxFit;
        alignment?: AlignmentGeometry;
        repeat?: ImageRepeat;
        matchTextDirection?: boolean;
        placeholderCacheWidth?: number;
        placeholderCacheHeight?: number;
        imageCacheWidth?: number;
        imageCacheHeight?: number;
    }): FadeInImage;
}
export { FadeInImage };
declare class _AnimatedFadeOutFadeIn extends ImplicitlyAnimatedWidget {
    target: MXWidget;
    placeholder: MXWidget;
    isTargetLoaded: boolean;
    fadeInDuration: Duration;
    fadeOutDuration: Duration;
    fadeInCurve: Curve;
    fadeOutCurve: Curve;
    constructor(namedParameters?: {
        key?: Key;
        target?: MXWidget;
        placeholder?: MXWidget;
        isTargetLoaded?: boolean;
        fadeOutDuration?: Duration;
        fadeOutCurve?: Curve;
        fadeInDuration?: Duration;
        fadeInCurve?: Curve;
    });
}
export { _AnimatedFadeOutFadeIn };
declare class _AnimatedFadeOutFadeInState extends ImplicitlyAnimatedWidgetState {
    targetOpacity: Tween;
    placeholderOpacity: Tween;
    targetOpacityAnimation: Animation;
    placeholderOpacityAnimation: Animation;
}
export { _AnimatedFadeOutFadeInState };
