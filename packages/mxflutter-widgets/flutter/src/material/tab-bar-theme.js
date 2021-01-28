//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TabBarTheme extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.indicator = namedParameters.indicator;
        this.indicatorSize = namedParameters.indicatorSize;
        this.labelColor = namedParameters.labelColor;
        this.labelPadding = namedParameters.labelPadding;
        this.labelStyle = namedParameters.labelStyle;
        this.unselectedLabelColor = namedParameters.unselectedLabelColor;
        this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
        this.className = 'TabBarTheme';
    }
}
export { TabBarTheme };
