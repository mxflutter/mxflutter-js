// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextDirection } from '../../../mx-dart-sdk';
import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { RenderSliver } from './sliver';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class RenderSliverEdgeInsetsPadding extends RenderSliver {}
export { RenderSliverEdgeInsetsPadding };
class RenderSliverPadding extends RenderSliverEdgeInsetsPadding {
  resolvedPadding: EdgeInsets;
  padding: EdgeInsetsGeometry;
  textDirection: TextDirection;
  public constructor(namedParameters: {padding?: EdgeInsetsGeometry, textDirection?: TextDirection, child?: RenderSliver} = {}) {
    super();
    this.padding = namedParameters.padding;
    this.textDirection = namedParameters.textDirection;
    this['child'] = namedParameters.child;
    this.className = 'RenderSliverPadding';
  }
}
export { RenderSliverPadding };
