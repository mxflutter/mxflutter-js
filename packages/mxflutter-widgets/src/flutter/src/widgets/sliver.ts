//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RenderSliverOpacity, RenderSliverIgnorePointer, RenderSliverOffstage } from '../rendering/proxy-sliver';
import { RenderObject } from '../rendering/object';
import { RenderBox } from '../rendering/box';
import { SliverGridDelegate, RenderSliverGrid } from '../rendering/sliver-grid';
import { RenderSliverFixedExtentList } from '../rendering/sliver-fixed-extent-list';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { SliverConstraints } from '../rendering/sliver';
import {
  BuildContext$,
  RenderObjectWidget,
  RenderObjectElement,
  Element$,
  Widget,
  SingleChildRenderObjectWidget,
  SingleChildRenderObjectElement,
  ParentDataWidget,
} from './framework';
import { Key, ValueKey } from '../foundation/key';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class SliverChildDelegate extends MXMirrorWidget {}
export { SliverChildDelegate };
class _SaltedValueKey extends ValueKey {
  public constructor(key?: Key) {
    super();
    this['key'] = key;
    this.className = '_SaltedValueKey';
  }
}
export { _SaltedValueKey };
class SliverChildBuilderDelegate extends SliverChildDelegate {
  builder: any;
  childCount: number;
  addAutomaticKeepAlives: boolean;
  addRepaintBoundaries: boolean;
  addSemanticIndexes: boolean;
  semanticIndexOffset: number;
  semanticIndexCallback: any;
  findChildIndexCallback: any;
  public constructor(
    builder?: any,
    namedParameters: {
      findChildIndexCallback?: any;
      childCount?: number;
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      semanticIndexCallback?: any;
      semanticIndexOffset?: number;
    } = {},
  ) {
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
  public preBuild(buildContext) {
    if (this.builder) {
      for (let i = 0; i < this.childCount; ++i) {
        const w = this.builder(buildContext, i);
        this['children'].push(w);
      }
      delete this.builder;
    }
  }
  // MX modified end
}
export { SliverChildBuilderDelegate };
class SliverChildListDelegate extends SliverChildDelegate {
  addAutomaticKeepAlives: boolean;
  addRepaintBoundaries: boolean;
  addSemanticIndexes: boolean;
  semanticIndexOffset: number;
  semanticIndexCallback: any;
  children: Array<any>;
  keyToIndex: Map<any, any>;
  public constructor(
    children?: Array<any>,
    namedParameters: {
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      semanticIndexCallback?: any;
      semanticIndexOffset?: number;
    } = {},
  ) {
    super();
    this.children = children;
    this.addAutomaticKeepAlives = namedParameters.addAutomaticKeepAlives;
    this.addRepaintBoundaries = namedParameters.addRepaintBoundaries;
    this.addSemanticIndexes = namedParameters.addSemanticIndexes;
    this.semanticIndexCallback = namedParameters.semanticIndexCallback;
    this.semanticIndexOffset = namedParameters.semanticIndexOffset;
    this.className = 'SliverChildListDelegate';
  }
  static fixed(
    children?: Array<any>,
    namedParameters: {
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      semanticIndexCallback?: any;
      semanticIndexOffset?: number;
    } = {},
  ) {
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
abstract class SliverWithKeepAliveWidget extends RenderObjectWidget {}
export { SliverWithKeepAliveWidget };
abstract class SliverMultiBoxAdaptorWidget extends SliverWithKeepAliveWidget {
  delegate: SliverChildDelegate;
}
export { SliverMultiBoxAdaptorWidget };
class SliverList extends SliverMultiBoxAdaptorWidget {
  public constructor(namedParameters: { key?: Key; delegate?: SliverChildDelegate } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['delegate'] = namedParameters.delegate;
    this.className = 'SliverList';
  }
}
export { SliverList };
class SliverFixedExtentList extends SliverMultiBoxAdaptorWidget {
  itemExtent: number;
  public constructor(namedParameters: { key?: Key; delegate?: SliverChildDelegate; itemExtent?: number } = {}) {
    super();
    this.key = namedParameters.key;
    this.delegate = namedParameters.delegate;
    this.itemExtent = namedParameters.itemExtent;
    this.className = 'SliverFixedExtentList';
  }
}
export { SliverFixedExtentList };
class SliverGrid extends SliverMultiBoxAdaptorWidget {
  gridDelegate: SliverGridDelegate;
  public constructor(
    namedParameters: { key?: Key; delegate?: SliverChildDelegate; gridDelegate?: SliverGridDelegate } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.delegate = namedParameters.delegate;
    this.gridDelegate = namedParameters.gridDelegate;
    this.className = 'SliverGrid';
  }
  static count(
    namedParameters: {
      key?: Key;
      crossAxisCount?: number;
      mainAxisSpacing?: number;
      crossAxisSpacing?: number;
      childAspectRatio?: number;
      children?: Array<any>;
    } = {},
  ) {
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
  static extent(
    namedParameters: {
      key?: Key;
      maxCrossAxisExtent?: number;
      mainAxisSpacing?: number;
      crossAxisSpacing?: number;
      childAspectRatio?: number;
      children?: Array<any>;
    } = {},
  ) {
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
  childWidgets: Map<any, any>;
  childElements: any;
  currentBeforeChild: RenderBox;
  currentlyUpdatingChildIndex: number;
  didUnderflow: boolean;
  public constructor(widget?: SliverMultiBoxAdaptorWidget) {
    super();
    this['__mx_widget'] = widget;
    this.className = 'SliverMultiBoxAdaptorElement';
  }
}
export { SliverMultiBoxAdaptorElement };
class SliverOpacity extends SingleChildRenderObjectWidget {
  opacity: number;
  alwaysIncludeSemantics: boolean;
  public constructor(
    namedParameters: { key?: Key; opacity?: number; alwaysIncludeSemantics?: boolean; sliver?: MXWidget } = {},
  ) {
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
  ignoring: boolean;
  ignoringSemantics: boolean;
  public constructor(
    namedParameters: { key?: Key; ignoring?: boolean; ignoringSemantics?: boolean; sliver?: MXWidget } = {},
  ) {
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
  offstage: boolean;
  public constructor(namedParameters: { key?: Key; offstage?: boolean; sliver?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.offstage = namedParameters.offstage;
    this['sliver'] = namedParameters.sliver;
    this.className = 'SliverOffstage';
  }
}
export { SliverOffstage };
class _SliverOffstageElement extends SingleChildRenderObjectElement {
  public constructor(widget?: SliverOffstage) {
    super();
    this['widget'] = widget;
    this.className = '_SliverOffstageElement';
  }
}
export { _SliverOffstageElement };
class KeepAlive extends ParentDataWidget {
  keepAlive: boolean;
  public constructor(namedParameters: { key?: Key; keepAlive?: boolean; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.keepAlive = namedParameters.keepAlive;
    this.child = namedParameters.child;
    this.className = 'KeepAlive';
  }
}
export { KeepAlive };
