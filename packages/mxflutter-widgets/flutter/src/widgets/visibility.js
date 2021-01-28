//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
class Visibility extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.replacement = namedParameters.replacement;
        this.visible = namedParameters.visible;
        this.maintainState = namedParameters.maintainState;
        this.maintainAnimation = namedParameters.maintainAnimation;
        this.maintainSize = namedParameters.maintainSize;
        this.maintainSemantics = namedParameters.maintainSemantics;
        this.maintainInteractivity = namedParameters.maintainInteractivity;
        this.className = 'Visibility';
    }
}
export { Visibility };
class SliverVisibility extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.sliver = namedParameters.sliver;
        this.replacementSliver = namedParameters.replacementSliver;
        this.visible = namedParameters.visible;
        this.maintainState = namedParameters.maintainState;
        this.maintainAnimation = namedParameters.maintainAnimation;
        this.maintainSize = namedParameters.maintainSize;
        this.maintainSemantics = namedParameters.maintainSemantics;
        this.maintainInteractivity = namedParameters.maintainInteractivity;
        this.className = 'SliverVisibility';
    }
}
export { SliverVisibility };
