"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderImage = void 0;
const box_1 = require("./box");
class RenderImage extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.image = namedParameters.image;
        this.debugImageLabel = namedParameters.debugImageLabel;
        this.width = namedParameters.width;
        this.height = namedParameters.height;
        this.scale = namedParameters.scale;
        this.color = namedParameters.color;
        this.colorBlendMode = namedParameters.colorBlendMode;
        this.fit = namedParameters.fit;
        this.alignment = namedParameters.alignment;
        this.repeat = namedParameters.repeat;
        this.centerSlice = namedParameters.centerSlice;
        this.matchTextDirection = namedParameters.matchTextDirection;
        this.textDirection = namedParameters.textDirection;
        this.invertColors = namedParameters.invertColors;
        this.isAntiAlias = namedParameters.isAntiAlias;
        this.filterQuality = namedParameters.filterQuality;
        this.className = 'RenderImage';
    }
}
exports.RenderImage = RenderImage;
