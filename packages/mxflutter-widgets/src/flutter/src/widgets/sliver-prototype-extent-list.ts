// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderBox } from '../rendering/box';
import { RenderSliverFixedExtentBoxAdaptor } from '../rendering/sliver-fixed-extent-list';
import { Key } from '../foundation/key';
import { Widget, Element } from './framework';
import { SliverMultiBoxAdaptorWidget, SliverChildDelegate, SliverMultiBoxAdaptorElement } from './sliver';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SliverPrototypeExtentList extends SliverMultiBoxAdaptorWidget {
  prototypeItem: MXWidget;
  public constructor(namedParameters: {key?: Key, delegate?: SliverChildDelegate, prototypeItem?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.delegate = namedParameters.delegate;
    this.prototypeItem = namedParameters.prototypeItem;
    this.className = 'SliverPrototypeExtentList';
  }
}
export { SliverPrototypeExtentList };
class _SliverPrototypeExtentListElement extends SliverMultiBoxAdaptorElement {
  prototype: Element;
  public constructor(widget?: SliverPrototypeExtentList) {
    super();
    this['mx_widget'] = widget;
    this.className = '_SliverPrototypeExtentListElement';
  }
}
export { _SliverPrototypeExtentListElement };
class _RenderSliverPrototypeExtentList extends RenderSliverFixedExtentBoxAdaptor {
  child: RenderBox;
  public constructor(namedParameters: {childManager?: _SliverPrototypeExtentListElement} = {}) {
    super();
    this['mx_childManager'] = namedParameters.childManager;
    this.className = '_RenderSliverPrototypeExtentList';
  }
}
export { _RenderSliverPrototypeExtentList };
