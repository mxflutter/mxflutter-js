//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class BottomNavigationBarItem extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.icon = namedParameters.icon;
        this.title = namedParameters.title;
        this.activeIcon = namedParameters.activeIcon;
        this.backgroundColor = namedParameters.backgroundColor;
        this.className = 'BottomNavigationBarItem';
    }
}
export { BottomNavigationBarItem };
