"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AnimatedFadeOutFadeInState = exports._AnimatedFadeOutFadeIn = exports.FadeInImage = void 0;
const implicit_animations_1 = require("./implicit-animations");
const framework_1 = require("./framework");
class FadeInImage extends framework_1.StatelessWidget {
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
        jsObj['mx_placeholder'] = namedParameters.placeholder;
        jsObj.placeholderErrorBuilder = namedParameters.placeholderErrorBuilder;
        jsObj['mx_image'] = namedParameters.image;
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
        jsObj['mx_placeholder'] = namedParameters.placeholder;
        jsObj.placeholderErrorBuilder = namedParameters.placeholderErrorBuilder;
        jsObj['mx_image'] = namedParameters.image;
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
exports.FadeInImage = FadeInImage;
class _AnimatedFadeOutFadeIn extends implicit_animations_1.ImplicitlyAnimatedWidget {
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
exports._AnimatedFadeOutFadeIn = _AnimatedFadeOutFadeIn;
class _AnimatedFadeOutFadeInState extends implicit_animations_1.ImplicitlyAnimatedWidgetState {
}
exports._AnimatedFadeOutFadeInState = _AnimatedFadeOutFadeInState;
