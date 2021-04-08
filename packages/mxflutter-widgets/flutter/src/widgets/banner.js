"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckedModeBanner = exports.Banner = exports.BannerPainter = exports.BannerLocation = void 0;
const framework_1 = require("./framework");
const custom_paint_1 = require("../rendering/custom-paint");
var BannerLocation;
(function (BannerLocation) {
    BannerLocation["topStart"] = "{ \"_name\": \"BannerLocation.topStart\", \"index\": 0 }";
    BannerLocation["topEnd"] = "{ \"_name\": \"BannerLocation.topEnd\", \"index\": 1 }";
    BannerLocation["bottomStart"] = "{ \"_name\": \"BannerLocation.bottomStart\", \"index\": 2 }";
    BannerLocation["bottomEnd"] = "{ \"_name\": \"BannerLocation.bottomEnd\", \"index\": 3 }";
})(BannerLocation || (BannerLocation = {}));
exports.BannerLocation = BannerLocation;
;
class BannerPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.message = namedParameters.message;
        this.textDirection = namedParameters.textDirection;
        this.location = namedParameters.location;
        this.layoutDirection = namedParameters.layoutDirection;
        this.color = namedParameters.color;
        this.textStyle = namedParameters.textStyle;
        this.className = 'BannerPainter';
    }
}
exports.BannerPainter = BannerPainter;
class Banner extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.message = namedParameters.message;
        this.textDirection = namedParameters.textDirection;
        this.location = namedParameters.location;
        this.layoutDirection = namedParameters.layoutDirection;
        this.color = namedParameters.color;
        this.textStyle = namedParameters.textStyle;
        this.className = 'Banner';
    }
}
exports.Banner = Banner;
class CheckedModeBanner extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'CheckedModeBanner';
    }
}
exports.CheckedModeBanner = CheckedModeBanner;
