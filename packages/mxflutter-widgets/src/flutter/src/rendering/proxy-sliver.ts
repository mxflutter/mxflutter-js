//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Animation } from '../animation/animation';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Matrix4 } from '../../../vector-math-64';
import { Offset } from '../../../mx-dart-sdk';
import { RenderObject, PaintingContext } from './object';
import { RenderSliver, SliverHitTestResult } from './sliver';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class RenderProxySliver extends RenderSliver {}
export { RenderProxySliver };
class RenderSliverOpacity extends RenderProxySliver {
  alpha: number;
  opacity: number;
  alwaysIncludeSemantics: boolean;
  public constructor(
    namedParameters: { opacity?: number; alwaysIncludeSemantics?: boolean; sliver?: RenderSliver } = {},
  ) {
    super();
    this.opacity = namedParameters.opacity;
    this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
    this['sliver'] = namedParameters.sliver;
    this.className = 'RenderSliverOpacity';
  }
}
export { RenderSliverOpacity };
class RenderSliverIgnorePointer extends RenderProxySliver {
  ignoring: boolean;
  ignoringSemantics: boolean;
  public constructor(namedParameters: { sliver?: RenderSliver; ignoring?: boolean; ignoringSemantics?: boolean } = {}) {
    super();
    this['sliver'] = namedParameters.sliver;
    this.ignoring = namedParameters.ignoring;
    this.ignoringSemantics = namedParameters.ignoringSemantics;
    this.className = 'RenderSliverIgnorePointer';
  }
}
export { RenderSliverIgnorePointer };
class RenderSliverOffstage extends RenderProxySliver {
  offstage: boolean;
  public constructor(namedParameters: { offstage?: boolean; sliver?: RenderSliver } = {}) {
    super();
    this.offstage = namedParameters.offstage;
    this['sliver'] = namedParameters.sliver;
    this.className = 'RenderSliverOffstage';
  }
}
export { RenderSliverOffstage };
class RenderSliverAnimatedOpacity extends RenderProxySliver {
  public constructor(
    namedParameters: { opacity?: Animation; alwaysIncludeSemantics?: boolean; sliver?: RenderSliver } = {},
  ) {
    super();
    this['opacity'] = namedParameters.opacity;
    this['alwaysIncludeSemantics'] = namedParameters.alwaysIncludeSemantics;
    this['sliver'] = namedParameters.sliver;
    this.className = 'RenderSliverAnimatedOpacity';
  }
}
export { RenderSliverAnimatedOpacity };
