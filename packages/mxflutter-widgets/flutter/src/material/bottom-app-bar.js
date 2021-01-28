//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomClipper } from '../rendering/proxy-box';
import { StatefulWidget$, State$ } from '../widgets/framework';
class BottomAppBar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.notchMargin = namedParameters.notchMargin;
        this.child = namedParameters.child;
        this.className = 'BottomAppBar';
    }
}
export { BottomAppBar };
class _BottomAppBarState extends State$ {
}
export { _BottomAppBarState };
class _BottomAppBarClipper extends CustomClipper {
    constructor(namedParameters = {}) {
        super();
        this.geometry = namedParameters.geometry;
        this.shape = namedParameters.shape;
        this.notchMargin = namedParameters.notchMargin;
        this.className = '_BottomAppBarClipper';
    }
}
export { _BottomAppBarClipper };
