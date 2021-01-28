//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from '../rendering/box';
import { StatelessWidget$, SingleChildRenderObjectWidget } from './framework';
class SingleChildScrollView extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.padding = namedParameters.padding;
        this.primary = namedParameters.primary;
        this.physics = namedParameters.physics;
        this.controller = namedParameters.controller;
        this.child = namedParameters.child;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'SingleChildScrollView';
    }
}
export { SingleChildScrollView };
class _SingleChildViewport extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.offset = namedParameters.offset;
        this.child = namedParameters.child;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = '_SingleChildViewport';
    }
}
export { _SingleChildViewport };
class _RenderSingleChildViewport extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.axisDirection = namedParameters.axisDirection;
        this.offset = namedParameters.offset;
        this.cacheExtent = namedParameters.cacheExtent;
        this['child'] = namedParameters.child;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = '_RenderSingleChildViewport';
    }
}
export { _RenderSingleChildViewport };
