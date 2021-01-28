//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
import { CustomPainter } from '../rendering/custom-paint';
var BannerLocation;
(function (BannerLocation) {
    BannerLocation["topStart"] = "{ \"_name\": \"BannerLocation.topStart\", \"index\": 0 }";
    BannerLocation["topEnd"] = "{ \"_name\": \"BannerLocation.topEnd\", \"index\": 1 }";
    BannerLocation["bottomStart"] = "{ \"_name\": \"BannerLocation.bottomStart\", \"index\": 2 }";
    BannerLocation["bottomEnd"] = "{ \"_name\": \"BannerLocation.bottomEnd\", \"index\": 3 }";
})(BannerLocation || (BannerLocation = {}));
export { BannerLocation };
class BannerPainter extends CustomPainter {
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
export { BannerPainter };
class Banner extends StatelessWidget$ {
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
export { Banner };
class CheckedModeBanner extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'CheckedModeBanner';
    }
}
export { CheckedModeBanner };
