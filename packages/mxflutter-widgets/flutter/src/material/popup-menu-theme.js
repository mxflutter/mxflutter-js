//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class PopupMenuThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.shape = namedParameters.shape;
        this.elevation = namedParameters.elevation;
        this.textStyle = namedParameters.textStyle;
        this.className = 'PopupMenuThemeData';
    }
}
export { PopupMenuThemeData };
class PopupMenuTheme extends InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'PopupMenuTheme';
    }
}
export { PopupMenuTheme };
