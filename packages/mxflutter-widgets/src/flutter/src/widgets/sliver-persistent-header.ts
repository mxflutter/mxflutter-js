//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import {
  RenderSliverPersistentHeader,
  RenderSliverScrollingPersistentHeader,
  OverScrollHeaderStretchConfiguration,
  RenderSliverPinnedPersistentHeader,
  RenderSliverFloatingPinnedPersistentHeader,
  FloatingHeaderSnapConfiguration,
  RenderSliverFloatingPersistentHeader,
} from '../rendering/sliver-persistent-header';
import { RenderObject } from '../rendering/object';
import { RenderBox } from '../rendering/box';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { StatelessWidget$, BuildContext$, RenderObjectElement, Element$, RenderObjectWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class SliverPersistentHeaderDelegate extends MXDartClass {}
export { SliverPersistentHeaderDelegate };
class SliverPersistentHeader extends StatelessWidget$ {
  delegate: SliverPersistentHeaderDelegate;
  pinned: boolean;
  floating: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      delegate?: SliverPersistentHeaderDelegate;
      pinned?: boolean;
      floating?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.delegate = namedParameters.delegate;
    this.pinned = namedParameters.pinned;
    this.floating = namedParameters.floating;
    this.className = 'SliverPersistentHeader';
  }
}
export { SliverPersistentHeader };
class _SliverPersistentHeaderElement extends RenderObjectElement {
  child: Element$;
  public constructor(widget?: _SliverPersistentHeaderRenderObjectWidget) {
    super();
    this['__mx_widget'] = widget;
    this.className = '_SliverPersistentHeaderElement';
  }
}
export { _SliverPersistentHeaderElement };
abstract class _SliverPersistentHeaderRenderObjectWidget extends RenderObjectWidget {
  delegate: SliverPersistentHeaderDelegate;
}
export { _SliverPersistentHeaderRenderObjectWidget };
abstract class _RenderSliverPersistentHeaderForWidgetsMixin extends RenderSliverPersistentHeader {
  element: _SliverPersistentHeaderElement;
}
export { _RenderSliverPersistentHeaderForWidgetsMixin };
class _SliverScrollingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; delegate?: SliverPersistentHeaderDelegate } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['delegate'] = namedParameters.delegate;
    this.className = '_SliverScrollingPersistentHeader';
  }
}
export { _SliverScrollingPersistentHeader };
class _RenderSliverScrollingPersistentHeaderForWidgets extends RenderSliverScrollingPersistentHeader {
  public constructor(
    namedParameters: { child?: RenderBox; stretchConfiguration?: OverScrollHeaderStretchConfiguration } = {},
  ) {
    super();
    this['child'] = namedParameters.child;
    this['stretchConfiguration'] = namedParameters.stretchConfiguration;
    this.className = '_RenderSliverScrollingPersistentHeaderForWidgets';
  }
}
export { _RenderSliverScrollingPersistentHeaderForWidgets };
class _SliverPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; delegate?: SliverPersistentHeaderDelegate } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['delegate'] = namedParameters.delegate;
    this.className = '_SliverPinnedPersistentHeader';
  }
}
export { _SliverPinnedPersistentHeader };
class _RenderSliverPinnedPersistentHeaderForWidgets extends RenderSliverPinnedPersistentHeader {
  public constructor(
    namedParameters: { child?: RenderBox; stretchConfiguration?: OverScrollHeaderStretchConfiguration } = {},
  ) {
    super();
    this['child'] = namedParameters.child;
    this['stretchConfiguration'] = namedParameters.stretchConfiguration;
    this.className = '_RenderSliverPinnedPersistentHeaderForWidgets';
  }
}
export { _RenderSliverPinnedPersistentHeaderForWidgets };
class _SliverFloatingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; delegate?: SliverPersistentHeaderDelegate } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['delegate'] = namedParameters.delegate;
    this.className = '_SliverFloatingPersistentHeader';
  }
}
export { _SliverFloatingPersistentHeader };
class _RenderSliverFloatingPinnedPersistentHeaderForWidgets extends RenderSliverFloatingPinnedPersistentHeader {
  public constructor(
    namedParameters: {
      child?: RenderBox;
      snapConfiguration?: FloatingHeaderSnapConfiguration;
      stretchConfiguration?: OverScrollHeaderStretchConfiguration;
    } = {},
  ) {
    super();
    this['child'] = namedParameters.child;
    this['snapConfiguration'] = namedParameters.snapConfiguration;
    this['stretchConfiguration'] = namedParameters.stretchConfiguration;
    this.className = '_RenderSliverFloatingPinnedPersistentHeaderForWidgets';
  }
}
export { _RenderSliverFloatingPinnedPersistentHeaderForWidgets };
class _SliverFloatingPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; delegate?: SliverPersistentHeaderDelegate } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['delegate'] = namedParameters.delegate;
    this.className = '_SliverFloatingPinnedPersistentHeader';
  }
}
export { _SliverFloatingPinnedPersistentHeader };
class _RenderSliverFloatingPersistentHeaderForWidgets extends RenderSliverFloatingPersistentHeader {
  public constructor(
    namedParameters: {
      child?: RenderBox;
      snapConfiguration?: FloatingHeaderSnapConfiguration;
      stretchConfiguration?: OverScrollHeaderStretchConfiguration;
    } = {},
  ) {
    super();
    this['child'] = namedParameters.child;
    this['snapConfiguration'] = namedParameters.snapConfiguration;
    this['stretchConfiguration'] = namedParameters.stretchConfiguration;
    this.className = '_RenderSliverFloatingPersistentHeaderForWidgets';
  }
}
export { _RenderSliverFloatingPersistentHeaderForWidgets };
