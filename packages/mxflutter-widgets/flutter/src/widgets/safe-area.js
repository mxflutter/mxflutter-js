//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
class SafeArea extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.left = namedParameters.left;
        this.top = namedParameters.top;
        this.right = namedParameters.right;
        this.bottom = namedParameters.bottom;
        this.minimum = namedParameters.minimum;
        this.maintainBottomViewPadding = namedParameters.maintainBottomViewPadding;
        this.child = namedParameters.child;
        this.className = 'SafeArea';
    }
}
export { SafeArea };
class SliverSafeArea extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.left = namedParameters.left;
        this.top = namedParameters.top;
        this.right = namedParameters.right;
        this.bottom = namedParameters.bottom;
        this.minimum = namedParameters.minimum;
        this.sliver = namedParameters.sliver;
        this.className = 'SliverSafeArea';
    }
}
export { SliverSafeArea };
