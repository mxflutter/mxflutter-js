//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderObjectWidget, RenderObjectElement, SingleChildRenderObjectWidget, SingleChildRenderObjectElement, ParentDataWidget, } from './framework';
import { ValueKey } from '../foundation/key';
import { MXMirrorWidget } from '@mxflutter/mxflutter-base';
class SliverChildDelegate extends MXMirrorWidget {
}
export { SliverChildDelegate };
class _SaltedValueKey extends ValueKey {
    constructor(key) {
        super();
        this['key'] = key;
        this.className = '_SaltedValueKey';
    }
}
export { _SaltedValueKey };
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
export { SliverChildBuilderDelegate };
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
export { SliverChildListDelegate };
class SliverWithKeepAliveWidget extends RenderObjectWidget {
}
export { SliverWithKeepAliveWidget };
class SliverMultiBoxAdaptorWidget extends SliverWithKeepAliveWidget {
}
export { SliverMultiBoxAdaptorWidget };
class SliverList extends SliverMultiBoxAdaptorWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = 'SliverList';
    }
}
export { SliverList };
class SliverFixedExtentList extends SliverMultiBoxAdaptorWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.itemExtent = namedParameters.itemExtent;
        this.className = 'SliverFixedExtentList';
    }
}
export { SliverFixedExtentList };
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
export { SliverGrid };
class SliverMultiBoxAdaptorElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = 'SliverMultiBoxAdaptorElement';
    }
}
export { SliverMultiBoxAdaptorElement };
class SliverOpacity extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverOpacity';
    }
}
export { SliverOpacity };
class SliverIgnorePointer extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.ignoring = namedParameters.ignoring;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverIgnorePointer';
    }
}
export { SliverIgnorePointer };
class SliverOffstage extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.offstage = namedParameters.offstage;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverOffstage';
    }
}
export { SliverOffstage };
class _SliverOffstageElement extends SingleChildRenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_SliverOffstageElement';
    }
}
export { _SliverOffstageElement };
class KeepAlive extends ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.keepAlive = namedParameters.keepAlive;
        this.child = namedParameters.child;
        this.className = 'KeepAlive';
    }
}
export { KeepAlive };
