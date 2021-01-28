//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _ActiveItem extends MXDartClass {
    static incoming(controller, itemIndex) {
        var jsObj = new _ActiveItem();
        jsObj.controller = controller;
        jsObj.itemIndex = itemIndex;
        jsObj['constructorName'] = 'incoming';
        return jsObj;
    }
    static outgoing(controller, itemIndex, removedItemBuilder) {
        var jsObj = new _ActiveItem();
        jsObj.controller = controller;
        jsObj.itemIndex = itemIndex;
        jsObj.removedItemBuilder = removedItemBuilder;
        jsObj['constructorName'] = 'outgoing';
        return jsObj;
    }
    static index(itemIndex) {
        var jsObj = new _ActiveItem();
        jsObj.itemIndex = itemIndex;
        jsObj['constructorName'] = 'index';
        return jsObj;
    }
}
export { _ActiveItem };
class AnimatedList extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.itemBuilder = namedParameters.itemBuilder;
        this.initialItemCount = namedParameters.initialItemCount;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.controller = namedParameters.controller;
        this.primary = namedParameters.primary;
        this.physics = namedParameters.physics;
        this.shrinkWrap = namedParameters.shrinkWrap;
        this.padding = namedParameters.padding;
        this.className = 'AnimatedList';
    }
}
export { AnimatedList };
class AnimatedListState extends State$ {
}
export { AnimatedListState };
class SliverAnimatedList extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.itemBuilder = namedParameters.itemBuilder;
        this.initialItemCount = namedParameters.initialItemCount;
        this.className = 'SliverAnimatedList';
    }
}
export { SliverAnimatedList };
class SliverAnimatedListState extends State$ {
}
export { SliverAnimatedListState };
