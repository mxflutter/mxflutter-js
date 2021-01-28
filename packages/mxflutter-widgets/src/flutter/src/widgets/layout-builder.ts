//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Offset } from '../../../mx-dart-sdk';
import { RenderBox, BoxHitTestResult } from '../rendering/box';
import { Key } from '../foundation/key';
import { RenderObject, RenderObjectWithChildMixin, Constraints, PaintingContext } from '../rendering/object';
import { RenderObjectWidget, RenderObjectElement, Element$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class ConstrainedLayoutBuilder extends RenderObjectWidget {
  builder: any;
}
export { ConstrainedLayoutBuilder };
class _LayoutBuilderElement extends RenderObjectElement {
  child: Element$;
  public constructor(widget?: ConstrainedLayoutBuilder) {
    super();
    this['__mx_widget'] = widget;
    this.className = '_LayoutBuilderElement';
  }
}
export { _LayoutBuilderElement };
abstract class RenderConstrainedLayoutBuilder extends RenderObjectWithChildMixin {
  callback: any;
  needsBuild: boolean;
  previousConstraints: Constraints;
}
export { RenderConstrainedLayoutBuilder };
class LayoutBuilder extends ConstrainedLayoutBuilder {
  public constructor(namedParameters: { key?: Key; builder?: any } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['builder'] = namedParameters.builder;
    this.className = 'LayoutBuilder';
  }
}
export { LayoutBuilder };
class _RenderLayoutBuilder extends RenderBox {}
export { _RenderLayoutBuilder };
