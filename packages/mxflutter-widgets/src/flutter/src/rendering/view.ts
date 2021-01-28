//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { HitTestResult } from '../gestures/hit-test';
import { Duration } from '../../../mx-dart-sdk';
import { RenderBox } from './box';
import { Matrix4 } from '../../../vector-math-64';
import { RenderObject, PaintingContext } from './object';
import { Size, Window, Offset } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ViewConfiguration extends MXDartClass {
  size: Size;
  devicePixelRatio: number;
  public constructor(namedParameters: { size?: Size; devicePixelRatio?: number } = {}) {
    super();
    this.size = namedParameters.size;
    this.devicePixelRatio = namedParameters.devicePixelRatio;
    this.className = 'ViewConfiguration';
  }
}
export { ViewConfiguration };
class RenderView extends RenderObject {
  size: Size;
  configuration: ViewConfiguration;
  window: Window;
  automaticSystemUiAdjustment: boolean;
  rootTransform: Matrix4;
  public constructor(namedParameters: { child?: RenderBox; configuration?: ViewConfiguration; window?: Window } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.configuration = namedParameters.configuration;
    this.window = namedParameters.window;
    this.className = 'RenderView';
  }
}
export { RenderView };
