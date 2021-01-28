//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ImplicitlyAnimatedWidget, ImplicitlyAnimatedWidgetState } from './implicit-animations';
import { StatelessWidget$ } from './framework';
class FadeInImage extends StatelessWidget$ {
    constructor(namedParameters = {}) {
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
    static memoryNetwork(namedParameters = {}) {
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
    static assetNetwork(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
}
export { _AnimatedFadeOutFadeInState };
