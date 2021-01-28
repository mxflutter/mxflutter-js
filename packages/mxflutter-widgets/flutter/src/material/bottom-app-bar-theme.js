//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class BottomAppBarTheme extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.className = 'BottomAppBarTheme';
    }
}
export { BottomAppBarTheme };
