"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeepAlive = exports._SliverOffstageElement = exports.SliverOffstage = exports.SliverIgnorePointer = exports.SliverOpacity = exports.SliverMultiBoxAdaptorElement = exports.SliverGrid = exports.SliverFixedExtentList = exports.SliverList = exports.SliverMultiBoxAdaptorWidget = exports.SliverWithKeepAliveWidget = exports.SliverChildListDelegate = exports.SliverChildBuilderDelegate = exports._SaltedValueKey = exports.SliverChildDelegate = void 0;
const framework_1 = require("./framework");
const key_1 = require("../foundation/key");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SliverChildDelegate extends mxflutter_base_1.MXMirrorWidget {
}
exports.SliverChildDelegate = SliverChildDelegate;
class _SaltedValueKey extends key_1.ValueKey {
    constructor(key) {
        super();
        this['key'] = key;
        this.className = '_SaltedValueKey';
    }
}
exports._SaltedValueKey = _SaltedValueKey;
class SliverChildBuilderDelegate extends SliverChildDelegate {
    constructor(builder, namedParameters = {}) {
        super();
        this.builder = builder;
        this.findChildIndexCallback = namedParameters.findChildIndexCallback;
        this.childCount = namedParameters.childCount;
        this.addAutomaticKeepAlives = namedParameters.addAutomaticKeepAlives;
        this.addRepaintBoundaries = namedParameters.addRepaintBoundaries;
        this.addSemanticIndexes = namedParameters.addSemanticIndexes;
        this.semanticIndexCallback = namedParameters.semanticIndexCallback;
        this.semanticIndexOffset = namedParameters.semanticIndexOffset;
        this.className = 'SliverChildBuilderDelegate';
        // MX Modified begin
        this['children'] = [];
        // MX Modified end
    }
    // MX modified begin
    preBuild(buildContext) {
        if (this.builder) {
            for (let i = 0; i < this.childCount; ++i) {
                const w = this.builder(buildContext, i);
                this['children'].push(w);
            }
            delete this.builder;
        }
    }
}
exports.SliverChildBuilderDelegate = SliverChildBuilderDelegate;
class SliverChildListDelegate extends SliverChildDelegate {
    constructor(children, namedParameters = {}) {
        super();
        this.children = children;
        this.addAutomaticKeepAlives = namedParameters.addAutomaticKeepAlives;
        this.addRepaintBoundaries = namedParameters.addRepaintBoundaries;
        this.addSemanticIndexes = namedParameters.addSemanticIndexes;
        this.semanticIndexCallback = namedParameters.semanticIndexCallback;
        this.semanticIndexOffset = namedParameters.semanticIndexOffset;
        this.className = 'SliverChildListDelegate';
    }
    static fixed(children, namedParameters = {}) {
        var jsObj = new SliverChildListDelegate();
        jsObj.children = children;
        jsObj.addAutomaticKeepAlives = namedParameters.addAutomaticKeepAlives;
        jsObj.addRepaintBoundaries = namedParameters.addRepaintBoundaries;
        jsObj.addSemanticIndexes = namedParameters.addSemanticIndexes;
        jsObj.semanticIndexCallback = namedParameters.semanticIndexCallback;
        jsObj.semanticIndexOffset = namedParameters.semanticIndexOffset;
        jsObj['constructorName'] = 'fixed';
        return jsObj;
    }
}
exports.SliverChildListDelegate = SliverChildListDelegate;
class SliverWithKeepAliveWidget extends framework_1.RenderObjectWidget {
}
exports.SliverWithKeepAliveWidget = SliverWithKeepAliveWidget;
class SliverMultiBoxAdaptorWidget extends SliverWithKeepAliveWidget {
}
exports.SliverMultiBoxAdaptorWidget = SliverMultiBoxAdaptorWidget;
class SliverList extends SliverMultiBoxAdaptorWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = 'SliverList';
    }
}
exports.SliverList = SliverList;
class SliverFixedExtentList extends SliverMultiBoxAdaptorWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.itemExtent = namedParameters.itemExtent;
        this.className = 'SliverFixedExtentList';
    }
}
exports.SliverFixedExtentList = SliverFixedExtentList;
class SliverGrid extends SliverMultiBoxAdaptorWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.gridDelegate = namedParameters.gridDelegate;
        this.className = 'SliverGrid';
    }
    static count(namedParameters = {}) {
        var jsObj = new SliverGrid();
        jsObj.key = namedParameters.key;
        jsObj['crossAxisCount'] = namedParameters.crossAxisCount;
        jsObj['mainAxisSpacing'] = namedParameters.mainAxisSpacing;
        jsObj['crossAxisSpacing'] = namedParameters.crossAxisSpacing;
        jsObj['childAspectRatio'] = namedParameters.childAspectRatio;
        jsObj['children'] = namedParameters.children;
        jsObj['constructorName'] = 'count';
        return jsObj;
    }
    static extent(namedParameters = {}) {
        var jsObj = new SliverGrid();
        jsObj.key = namedParameters.key;
        jsObj['maxCrossAxisExtent'] = namedParameters.maxCrossAxisExtent;
        jsObj['mainAxisSpacing'] = namedParameters.mainAxisSpacing;
        jsObj['crossAxisSpacing'] = namedParameters.crossAxisSpacing;
        jsObj['childAspectRatio'] = namedParameters.childAspectRatio;
        jsObj['children'] = namedParameters.children;
        jsObj['constructorName'] = 'extent';
        return jsObj;
    }
}
exports.SliverGrid = SliverGrid;
class SliverMultiBoxAdaptorElement extends framework_1.RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = 'SliverMultiBoxAdaptorElement';
    }
}
exports.SliverMultiBoxAdaptorElement = SliverMultiBoxAdaptorElement;
class SliverOpacity extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverOpacity';
    }
}
exports.SliverOpacity = SliverOpacity;
class SliverIgnorePointer extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.ignoring = namedParameters.ignoring;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverIgnorePointer';
    }
}
exports.SliverIgnorePointer = SliverIgnorePointer;
class SliverOffstage extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.offstage = namedParameters.offstage;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverOffstage';
    }
}
exports.SliverOffstage = SliverOffstage;
class _SliverOffstageElement extends framework_1.SingleChildRenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_SliverOffstageElement';
    }
}
exports._SliverOffstageElement = _SliverOffstageElement;
class KeepAlive extends framework_1.ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.keepAlive = namedParameters.keepAlive;
        this.child = namedParameters.child;
        this.className = 'KeepAlive';
    }
}
exports.KeepAlive = KeepAlive;
