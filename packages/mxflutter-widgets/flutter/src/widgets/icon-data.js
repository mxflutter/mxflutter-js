//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class IconData extends MXDartClass {
    constructor(codePoint, namedParameters = {}) {
        super();
        this.codePoint = codePoint;
        this.fontFamily = namedParameters.fontFamily;
        this.fontPackage = namedParameters.fontPackage;
        this.matchTextDirection = namedParameters.matchTextDirection;
        this.className = 'IconData';
    }
}
export { IconData };
