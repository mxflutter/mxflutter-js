//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Animation, AnimationStatus } from '../animation/animation';
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
import { StatelessWidget$, BuildContext$, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class FadeInImage extends StatelessWidget$ {
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
  public constructor(
    namedParameters: {
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
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.placeholder = namedParameters.placeholder;
    this.placeholderErrorBuilder = namedParameters.placeholderErrorBuilder;
    this.image = namedParameters.image;
    this.imageErrorBuilder = namedParameters.imageErrorBuilder;
    this.excludeFromSemantics = namedParameters.excludeFromSemantics;
    this.imageSemanticLabel = namedParameters.imageSemanticLabel;
    this.fadeOutDuration = namedParameters.fadeOutDuration;
    this.fadeOutCurve = namedParameters.fadeOutCurve;
    this.fadeInDuration = namedParameters.fadeInDuration;
    this.fadeInCurve = namedParameters.fadeInCurve;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.fit = namedParameters.fit;
    this.alignment = namedParameters.alignment;
    this.repeat = namedParameters.repeat;
    this.matchTextDirection = namedParameters.matchTextDirection;
    this.className = 'FadeInImage';
  }
  static memoryNetwork(
    namedParameters: {
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
    } = {},
  ) {
    var jsObj = new FadeInImage();
    jsObj.key = namedParameters.key;
    jsObj['__mx_placeholder'] = namedParameters.placeholder;
    jsObj.placeholderErrorBuilder = namedParameters.placeholderErrorBuilder;
    jsObj['__mx_image'] = namedParameters.image;
    jsObj.imageErrorBuilder = namedParameters.imageErrorBuilder;
    jsObj['placeholderScale'] = namedParameters.placeholderScale;
    jsObj['imageScale'] = namedParameters.imageScale;
    jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
    jsObj.imageSemanticLabel = namedParameters.imageSemanticLabel;
    jsObj.fadeOutDuration = namedParameters.fadeOutDuration;
    jsObj.fadeOutCurve = namedParameters.fadeOutCurve;
    jsObj.fadeInDuration = namedParameters.fadeInDuration;
    jsObj.fadeInCurve = namedParameters.fadeInCurve;
    jsObj.width = namedParameters.width;
    jsObj.height = namedParameters.height;
    jsObj.fit = namedParameters.fit;
    jsObj.alignment = namedParameters.alignment;
    jsObj.repeat = namedParameters.repeat;
    jsObj.matchTextDirection = namedParameters.matchTextDirection;
    jsObj['placeholderCacheWidth'] = namedParameters.placeholderCacheWidth;
    jsObj['placeholderCacheHeight'] = namedParameters.placeholderCacheHeight;
    jsObj['imageCacheWidth'] = namedParameters.imageCacheWidth;
    jsObj['imageCacheHeight'] = namedParameters.imageCacheHeight;
    jsObj['constructorName'] = 'memoryNetwork';
    return jsObj;
  }
  static assetNetwork(
    namedParameters: {
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
    } = {},
  ) {
    var jsObj = new FadeInImage();
    jsObj.key = namedParameters.key;
    jsObj['__mx_placeholder'] = namedParameters.placeholder;
    jsObj.placeholderErrorBuilder = namedParameters.placeholderErrorBuilder;
    jsObj['__mx_image'] = namedParameters.image;
    jsObj.imageErrorBuilder = namedParameters.imageErrorBuilder;
    jsObj['bundle'] = namedParameters.bundle;
    jsObj['placeholderScale'] = namedParameters.placeholderScale;
    jsObj['imageScale'] = namedParameters.imageScale;
    jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
    jsObj.imageSemanticLabel = namedParameters.imageSemanticLabel;
    jsObj.fadeOutDuration = namedParameters.fadeOutDuration;
    jsObj.fadeOutCurve = namedParameters.fadeOutCurve;
    jsObj.fadeInDuration = namedParameters.fadeInDuration;
    jsObj.fadeInCurve = namedParameters.fadeInCurve;
    jsObj.width = namedParameters.width;
    jsObj.height = namedParameters.height;
    jsObj.fit = namedParameters.fit;
    jsObj.alignment = namedParameters.alignment;
    jsObj.repeat = namedParameters.repeat;
    jsObj.matchTextDirection = namedParameters.matchTextDirection;
    jsObj['placeholderCacheWidth'] = namedParameters.placeholderCacheWidth;
    jsObj['placeholderCacheHeight'] = namedParameters.placeholderCacheHeight;
    jsObj['imageCacheWidth'] = namedParameters.imageCacheWidth;
    jsObj['imageCacheHeight'] = namedParameters.imageCacheHeight;
    jsObj['constructorName'] = 'assetNetwork';
    return jsObj;
  }
}
export { FadeInImage };
class _AnimatedFadeOutFadeIn extends ImplicitlyAnimatedWidget {
  target: MXWidget;
  placeholder: MXWidget;
  isTargetLoaded: boolean;
  fadeInDuration: Duration;
  fadeOutDuration: Duration;
  fadeInCurve: Curve;
  fadeOutCurve: Curve;
  public constructor(
    namedParameters: {
      key?: Key;
      target?: MXWidget;
      placeholder?: MXWidget;
      isTargetLoaded?: boolean;
      fadeOutDuration?: Duration;
      fadeOutCurve?: Curve;
      fadeInDuration?: Duration;
      fadeInCurve?: Curve;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.target = namedParameters.target;
    this.placeholder = namedParameters.placeholder;
    this.isTargetLoaded = namedParameters.isTargetLoaded;
    this.fadeOutDuration = namedParameters.fadeOutDuration;
    this.fadeOutCurve = namedParameters.fadeOutCurve;
    this.fadeInDuration = namedParameters.fadeInDuration;
    this.fadeInCurve = namedParameters.fadeInCurve;
    this.className = '_AnimatedFadeOutFadeIn';
  }
}
export { _AnimatedFadeOutFadeIn };
class _AnimatedFadeOutFadeInState extends ImplicitlyAnimatedWidgetState {
  targetOpacity: Tween;
  placeholderOpacity: Tween;
  targetOpacityAnimation: Animation;
  placeholderOpacityAnimation: Animation;
}
export { _AnimatedFadeOutFadeInState };
