//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class CardTheme extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.clipBehavior = namedParameters.clipBehavior;
        this.color = namedParameters.color;
        this.shadowColor = namedParameters.shadowColor;
        this.elevation = namedParameters.elevation;
        this.margin = namedParameters.margin;
        this.shape = namedParameters.shape;
        this.className = 'CardTheme';
    }
}
export { CardTheme };
