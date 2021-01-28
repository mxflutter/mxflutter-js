//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
var BoxFit;
(function (BoxFit) {
    BoxFit["fill"] = "{ \"_name\": \"BoxFit.fill\", \"index\": 0 }";
    BoxFit["contain"] = "{ \"_name\": \"BoxFit.contain\", \"index\": 1 }";
    BoxFit["cover"] = "{ \"_name\": \"BoxFit.cover\", \"index\": 2 }";
    BoxFit["fitWidth"] = "{ \"_name\": \"BoxFit.fitWidth\", \"index\": 3 }";
    BoxFit["fitHeight"] = "{ \"_name\": \"BoxFit.fitHeight\", \"index\": 4 }";
    BoxFit["none"] = "{ \"_name\": \"BoxFit.none\", \"index\": 5 }";
    BoxFit["scaleDown"] = "{ \"_name\": \"BoxFit.scaleDown\", \"index\": 6 }";
})(BoxFit || (BoxFit = {}));
export { BoxFit };
class FittedSizes extends MXDartClass {
    constructor(source, destination) {
        super();
        this.source = source;
        this.destination = destination;
        this.className = 'FittedSizes';
    }
}
export { FittedSizes };
