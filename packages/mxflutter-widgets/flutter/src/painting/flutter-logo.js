//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Decoration, BoxPainter } from './decoration';
var FlutterLogoStyle;
(function (FlutterLogoStyle) {
    FlutterLogoStyle["markOnly"] = "{ \"_name\": \"FlutterLogoStyle.markOnly\", \"index\": 0 }";
    FlutterLogoStyle["horizontal"] = "{ \"_name\": \"FlutterLogoStyle.horizontal\", \"index\": 1 }";
    FlutterLogoStyle["stacked"] = "{ \"_name\": \"FlutterLogoStyle.stacked\", \"index\": 2 }";
})(FlutterLogoStyle || (FlutterLogoStyle = {}));
export { FlutterLogoStyle };
class FlutterLogoDecoration extends Decoration {
    constructor(namedParameters = {}) {
        super();
        this.lightColor = namedParameters.lightColor;
        this.darkColor = namedParameters.darkColor;
        this.textColor = namedParameters.textColor;
        this.style = namedParameters.style;
        this.margin = namedParameters.margin;
        this.className = 'FlutterLogoDecoration';
    }
}
export { FlutterLogoDecoration };
class _FlutterLogoPainter extends BoxPainter {
    constructor(_config) {
        super();
        this.config = _config;
        this.className = '_FlutterLogoPainter';
    }
}
export { _FlutterLogoPainter };
