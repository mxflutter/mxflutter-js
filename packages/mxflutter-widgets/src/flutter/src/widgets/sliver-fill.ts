//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { EdgeInsets } from '../painting/edge-insets';
import { SliverConstraints } from '../rendering/sliver';
import { RenderSliverEdgeInsetsPadding } from '../rendering/sliver-padding';
import { RenderSliverFillViewport } from '../rendering/sliver-fill';
import { Key } from '../foundation/key';
import { SliverChildDelegate, SliverMultiBoxAdaptorWidget } from './sliver';
import { StatelessWidget$, BuildContext$, SingleChildRenderObjectWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SliverFillViewport extends StatelessWidget$ {
  viewportFraction: number;
  padEnds: boolean;
  delegate: SliverChildDelegate;
  public constructor(
    namedParameters: { key?: Key; delegate?: SliverChildDelegate; viewportFraction?: number; padEnds?: boolean } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.delegate = namedParameters.delegate;
    this.viewportFraction = namedParameters.viewportFraction;
    this.padEnds = namedParameters.padEnds;
    this.className = 'SliverFillViewport';
  }
}
export { SliverFillViewport };
class _SliverFillViewportRenderObjectWidget extends SliverMultiBoxAdaptorWidget {
  viewportFraction: number;
  public constructor(namedParameters: { key?: Key; delegate?: SliverChildDelegate; viewportFraction?: number } = {}) {
    super();
    this.key = namedParameters.key;
    this.delegate = namedParameters.delegate;
    this.viewportFraction = namedParameters.viewportFraction;
    this.className = '_SliverFillViewportRenderObjectWidget';
  }
}
export { _SliverFillViewportRenderObjectWidget };
class _SliverFractionalPadding extends SingleChildRenderObjectWidget {
  viewportFraction: number;
  public constructor(namedParameters: { viewportFraction?: number; sliver?: MXWidget } = {}) {
    super();
    this.viewportFraction = namedParameters.viewportFraction;
    this['sliver'] = namedParameters.sliver;
    this.className = '_SliverFractionalPadding';
  }
}
export { _SliverFractionalPadding };
class _RenderSliverFractionalPadding extends RenderSliverEdgeInsetsPadding {
  lastResolvedConstraints: SliverConstraints;
  viewportFraction: number;
  resolvedPadding: EdgeInsets;
  public constructor(namedParameters: { viewportFraction?: number } = {}) {
    super();
    this.viewportFraction = namedParameters.viewportFraction;
    this.className = '_RenderSliverFractionalPadding';
  }
}
export { _RenderSliverFractionalPadding };
class SliverFillRemaining extends StatelessWidget$ {
  child: MXWidget;
  hasScrollBody: boolean;
  fillOverscroll: boolean;
  public constructor(
    namedParameters: { key?: Key; child?: MXWidget; hasScrollBody?: boolean; fillOverscroll?: boolean } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.hasScrollBody = namedParameters.hasScrollBody;
    this.fillOverscroll = namedParameters.fillOverscroll;
    this.className = 'SliverFillRemaining';
  }
}
export { SliverFillRemaining };
class _SliverFillRemainingWithScrollable extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = '_SliverFillRemainingWithScrollable';
  }
}
export { _SliverFillRemainingWithScrollable };
class _SliverFillRemainingWithoutScrollable extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = '_SliverFillRemainingWithoutScrollable';
  }
}
export { _SliverFillRemainingWithoutScrollable };
class _SliverFillRemainingAndOverscroll extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = '_SliverFillRemainingAndOverscroll';
  }
}
export { _SliverFillRemainingAndOverscroll };
