"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridView = exports.ListView = exports.BoxScrollView = exports.CustomScrollView = exports.ScrollView = exports.ScrollViewKeyboardDismissBehavior = void 0;
const framework_1 = require("./framework");
var ScrollViewKeyboardDismissBehavior;
(function (ScrollViewKeyboardDismissBehavior) {
    ScrollViewKeyboardDismissBehavior["manual"] = "{ \"_name\": \"ScrollViewKeyboardDismissBehavior.manual\", \"index\": 0 }";
    ScrollViewKeyboardDismissBehavior["onDrag"] = "{ \"_name\": \"ScrollViewKeyboardDismissBehavior.onDrag\", \"index\": 1 }";
})(ScrollViewKeyboardDismissBehavior || (ScrollViewKeyboardDismissBehavior = {}));
exports.ScrollViewKeyboardDismissBehavior = ScrollViewKeyboardDismissBehavior;
;
class ScrollView extends framework_1.StatelessWidget {
}
exports.ScrollView = ScrollView;
class CustomScrollView extends ScrollView {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.controller = namedParameters.controller;
        this.primary = namedParameters.primary;
        this.physics = namedParameters.physics;
        this.shrinkWrap = namedParameters.shrinkWrap;
        this.center = namedParameters.center;
        this.anchor = namedParameters.anchor;
        this.cacheExtent = namedParameters.cacheExtent;
        this.slivers = namedParameters.slivers;
        this.semanticChildCount = namedParameters.semanticChildCount;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.restorationId = namedParameters.restorationId;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'CustomScrollView';
    }
}
exports.CustomScrollView = CustomScrollView;
class BoxScrollView extends ScrollView {
}
exports.BoxScrollView = BoxScrollView;
class ListView extends BoxScrollView {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.controller = namedParameters.controller;
        this.primary = namedParameters.primary;
        this.physics = namedParameters.physics;
        this.shrinkWrap = namedParameters.shrinkWrap;
        this.padding = namedParameters.padding;
        this.itemExtent = namedParameters.itemExtent;
        this['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
        this['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
        this['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
        this.cacheExtent = namedParameters.cacheExtent;
        this['children'] = namedParameters.children;
        this.semanticChildCount = namedParameters.semanticChildCount;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
        this.restorationId = namedParameters.restorationId;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'ListView';
    }
    static builder(namedParameters = {}) {
        var jsObj = new ListView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.primary = namedParameters.primary;
        jsObj.physics = namedParameters.physics;
        jsObj.shrinkWrap = namedParameters.shrinkWrap;
        jsObj.padding = namedParameters.padding;
        jsObj.itemExtent = namedParameters.itemExtent;
        jsObj['itemBuilder'] = namedParameters.itemBuilder;
        jsObj['itemCount'] = namedParameters.itemCount;
        jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
        jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
        jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
        jsObj.cacheExtent = namedParameters.cacheExtent;
        jsObj.semanticChildCount = namedParameters.semanticChildCount;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj['constructorName'] = 'builder';
        return jsObj;
    }
    static separated(namedParameters = {}) {
        var jsObj = new ListView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.primary = namedParameters.primary;
        jsObj.physics = namedParameters.physics;
        jsObj.shrinkWrap = namedParameters.shrinkWrap;
        jsObj.padding = namedParameters.padding;
        jsObj['itemBuilder'] = namedParameters.itemBuilder;
        jsObj['separatorBuilder'] = namedParameters.separatorBuilder;
        jsObj['itemCount'] = namedParameters.itemCount;
        jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
        jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
        jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
        jsObj.cacheExtent = namedParameters.cacheExtent;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj['constructorName'] = 'separated';
        return jsObj;
    }
    static custom(namedParameters = {}) {
        var jsObj = new ListView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.primary = namedParameters.primary;
        jsObj.physics = namedParameters.physics;
        jsObj.shrinkWrap = namedParameters.shrinkWrap;
        jsObj.padding = namedParameters.padding;
        jsObj.itemExtent = namedParameters.itemExtent;
        jsObj.childrenDelegate = namedParameters.childrenDelegate;
        jsObj.cacheExtent = namedParameters.cacheExtent;
        jsObj.semanticChildCount = namedParameters.semanticChildCount;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj['constructorName'] = 'custom';
        return jsObj;
    }
    // MX modified begin
    preBuild(buildContext) {
        if (this['itemBuilder']) {
            this['children'] = [];
            for (let i = 0; i < this['itemCount']; ++i) {
                const w = this['itemBuilder'](buildContext, i);
                this['children'].push(w);
            }
            delete this['itemBuilder'];
        }
    }
}
exports.ListView = ListView;
class GridView extends BoxScrollView {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.controller = namedParameters.controller;
        this.primary = namedParameters.primary;
        this.physics = namedParameters.physics;
        this.shrinkWrap = namedParameters.shrinkWrap;
        this.padding = namedParameters.padding;
        this.gridDelegate = namedParameters.gridDelegate;
        this['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
        this['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
        this['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
        this.cacheExtent = namedParameters.cacheExtent;
        this['children'] = namedParameters.children;
        this.semanticChildCount = namedParameters.semanticChildCount;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.clipBehavior = namedParameters.clipBehavior;
        this.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
        this.restorationId = namedParameters.restorationId;
        this.className = 'GridView';
    }
    static builder(namedParameters = {}) {
        var jsObj = new GridView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.primary = namedParameters.primary;
        jsObj.physics = namedParameters.physics;
        jsObj.shrinkWrap = namedParameters.shrinkWrap;
        jsObj.padding = namedParameters.padding;
        jsObj.gridDelegate = namedParameters.gridDelegate;
        jsObj['itemBuilder'] = namedParameters.itemBuilder;
        jsObj['itemCount'] = namedParameters.itemCount;
        jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
        jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
        jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
        jsObj.cacheExtent = namedParameters.cacheExtent;
        jsObj.semanticChildCount = namedParameters.semanticChildCount;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj['constructorName'] = 'builder';
        return jsObj;
    }
    static custom(namedParameters = {}) {
        var jsObj = new GridView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.primary = namedParameters.primary;
        jsObj.physics = namedParameters.physics;
        jsObj.shrinkWrap = namedParameters.shrinkWrap;
        jsObj.padding = namedParameters.padding;
        jsObj.gridDelegate = namedParameters.gridDelegate;
        jsObj.childrenDelegate = namedParameters.childrenDelegate;
        jsObj.cacheExtent = namedParameters.cacheExtent;
        jsObj.semanticChildCount = namedParameters.semanticChildCount;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj['constructorName'] = 'custom';
        return jsObj;
    }
    static count(namedParameters = {}) {
        var jsObj = new GridView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.primary = namedParameters.primary;
        jsObj.physics = namedParameters.physics;
        jsObj.shrinkWrap = namedParameters.shrinkWrap;
        jsObj.padding = namedParameters.padding;
        jsObj['crossAxisCount'] = namedParameters.crossAxisCount;
        jsObj['mainAxisSpacing'] = namedParameters.mainAxisSpacing;
        jsObj['crossAxisSpacing'] = namedParameters.crossAxisSpacing;
        jsObj['childAspectRatio'] = namedParameters.childAspectRatio;
        jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
        jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
        jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
        jsObj.cacheExtent = namedParameters.cacheExtent;
        jsObj['children'] = namedParameters.children;
        jsObj.semanticChildCount = namedParameters.semanticChildCount;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj['constructorName'] = 'count';
        return jsObj;
    }
    static extent(namedParameters = {}) {
        var jsObj = new GridView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.primary = namedParameters.primary;
        jsObj.physics = namedParameters.physics;
        jsObj.shrinkWrap = namedParameters.shrinkWrap;
        jsObj.padding = namedParameters.padding;
        jsObj['maxCrossAxisExtent'] = namedParameters.maxCrossAxisExtent;
        jsObj['mainAxisSpacing'] = namedParameters.mainAxisSpacing;
        jsObj['crossAxisSpacing'] = namedParameters.crossAxisSpacing;
        jsObj['childAspectRatio'] = namedParameters.childAspectRatio;
        jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
        jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
        jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
        jsObj.cacheExtent = namedParameters.cacheExtent;
        jsObj['children'] = namedParameters.children;
        jsObj.semanticChildCount = namedParameters.semanticChildCount;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj['constructorName'] = 'extent';
        return jsObj;
    }
}
exports.GridView = GridView;
