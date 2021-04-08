"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliverAnimatedListState = exports.SliverAnimatedList = exports.AnimatedListState = exports.AnimatedList = exports._ActiveItem = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _ActiveItem extends mxflutter_base_1.MXDartClass {
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
exports._ActiveItem = _ActiveItem;
class AnimatedList extends framework_1.StatefulWidget {
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
exports.AnimatedList = AnimatedList;
class AnimatedListState extends framework_1.State {
}
exports.AnimatedListState = AnimatedListState;
class SliverAnimatedList extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.itemBuilder = namedParameters.itemBuilder;
        this.initialItemCount = namedParameters.initialItemCount;
        this.className = 'SliverAnimatedList';
    }
}
exports.SliverAnimatedList = SliverAnimatedList;
class SliverAnimatedListState extends framework_1.State {
}
exports.SliverAnimatedListState = SliverAnimatedListState;
