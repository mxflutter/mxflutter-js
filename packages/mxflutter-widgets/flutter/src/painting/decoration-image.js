"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecorationImagePainter = exports.DecorationImage = exports.ImageRepeat = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var ImageRepeat;
(function (ImageRepeat) {
    ImageRepeat["repeat"] = "{ \"_name\": \"ImageRepeat.repeat\", \"index\": 0 }";
    ImageRepeat["repeatX"] = "{ \"_name\": \"ImageRepeat.repeatX\", \"index\": 1 }";
    ImageRepeat["repeatY"] = "{ \"_name\": \"ImageRepeat.repeatY\", \"index\": 2 }";
    ImageRepeat["noRepeat"] = "{ \"_name\": \"ImageRepeat.noRepeat\", \"index\": 3 }";
})(ImageRepeat || (ImageRepeat = {}));
exports.ImageRepeat = ImageRepeat;
;
class DecorationImage extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.image = namedParameters.image;
        this.onError = namedParameters.onError;
        this.colorFilter = namedParameters.colorFilter;
        this.fit = namedParameters.fit;
        this.alignment = namedParameters.alignment;
        this.centerSlice = namedParameters.centerSlice;
        this.repeat = namedParameters.repeat;
        this.matchTextDirection = namedParameters.matchTextDirection;
        this.scale = namedParameters.scale;
        this.className = 'DecorationImage';
    }
}
exports.DecorationImage = DecorationImage;
class DecorationImagePainter extends mxflutter_base_1.MXDartClass {
}
exports.DecorationImagePainter = DecorationImagePainter;
