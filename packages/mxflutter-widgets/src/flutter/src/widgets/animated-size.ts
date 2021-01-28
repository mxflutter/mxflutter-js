//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { RenderAnimatedSize } from '../rendering/animated-size';
import { Key } from '../foundation/key';
import { TickerProvider } from '../scheduler/ticker';
import { Duration } from '../../../mx-dart-sdk';
import { Curve } from '../animation/curves';
import { AlignmentGeometry } from '../painting/alignment';
import { SingleChildRenderObjectWidget, Widget, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AnimatedSize extends SingleChildRenderObjectWidget {
  alignment: AlignmentGeometry;
  curve: Curve;
  duration: Duration;
  reverseDuration: Duration;
  vsync: TickerProvider;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      alignment?: AlignmentGeometry;
      curve?: Curve;
      duration?: Duration;
      reverseDuration?: Duration;
      vsync?: TickerProvider;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.alignment = namedParameters.alignment;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.reverseDuration = namedParameters.reverseDuration;
    this.className = 'AnimatedSize';
  }
}
export { AnimatedSize };
