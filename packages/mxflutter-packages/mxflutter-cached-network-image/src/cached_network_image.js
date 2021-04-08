//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

const { MXMirrorWidget } = require('@mxflutter/mxflutter');

class CachedNetworkImage extends MXMirrorWidget {
  constructor({
    key,
    imageUrl,
    imageBuilder,
    placeholder,
    errorWidget,
    fadeOutDuration,
    fadeOutCurve,
    fadeInDuration,
    fadeInCurve,
    width,
    height,
    fit,
    alignment,
    repeat,
    matchTextDirection,
    httpHeaders,
    cacheManager,
    useOldImageOnUrlChange,
    color,
    filterQuality,
    colorBlendMode,
    placeholderFadeInDuration,
  } = {}) {
    super();

    this.key = key;
    this.imageUrl = imageUrl;
    this.imageBuilder = imageBuilder;
    this.placeholder = placeholder;
    this.errorWidget = errorWidget;
    this.fadeOutDuration = fadeOutDuration;
    this.fadeOutCurve = fadeOutCurve;
    this.fadeInDuration = fadeInDuration;
    this.fadeInCurve = fadeInCurve;
    this.width = width;
    this.height = height;
    this.fit = fit;
    this.alignment = alignment;
    this.repeat = repeat;
    this.matchTextDirection = matchTextDirection;
    this.httpHeaders = httpHeaders;
    this.cacheManager = cacheManager;
    this.useOldImageOnUrlChange = useOldImageOnUrlChange;
    this.color = color;
    this.filterQuality = filterQuality;
    this.colorBlendMode = colorBlendMode;
    this.placeholderFadeInDuration = placeholderFadeInDuration;
  }

  preBuild(buildContext) {
    // 暂时只处理placeholder
    if (this.placeholder) {
      this.placeholderChild = this.placeholder(buildContext, this.imageUrl);
      delete this.placeholder;
    }
  }
}

CachedNetworkImage.new = function (arg) {
  return new CachedNetworkImage(arg);
};

// src__cached_image_widget = Object.create(null);
// src__cached_image_widget.CachedNetworkImage = CachedNetworkImage;
// exports.src__cached_image_widget = src__cached_image_widget;

//for js dev
module.exports = {
  CachedNetworkImage,
};
