//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { PaintingContext } from './object';
import { TextDirection, Clip, TextBaseline, Offset } from '../../../mx-dart-sdk';
import { Axis, VerticalDirection } from '../painting/basic-types';
import { ContainerBoxParentData, RenderBox, BoxHitTestResult } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum WrapAlignment {
  start = '{ "_name": "WrapAlignment.start", "index": 0 }',
  end = '{ "_name": "WrapAlignment.end", "index": 1 }',
  center = '{ "_name": "WrapAlignment.center", "index": 2 }',
  spaceBetween = '{ "_name": "WrapAlignment.spaceBetween", "index": 3 }',
  spaceAround = '{ "_name": "WrapAlignment.spaceAround", "index": 4 }',
  spaceEvenly = '{ "_name": "WrapAlignment.spaceEvenly", "index": 5 }',
}

export { WrapAlignment };
enum WrapCrossAlignment {
  start = '{ "_name": "WrapCrossAlignment.start", "index": 0 }',
  end = '{ "_name": "WrapCrossAlignment.end", "index": 1 }',
  center = '{ "_name": "WrapCrossAlignment.center", "index": 2 }',
}

export { WrapCrossAlignment };
class _RunMetrics extends MXDartClass {
  mainAxisExtent: number;
  crossAxisExtent: number;
  childCount: number;
  public constructor(mainAxisExtent?: number, crossAxisExtent?: number, childCount?: number) {
    super();
    this.mainAxisExtent = mainAxisExtent;
    this.crossAxisExtent = crossAxisExtent;
    this.childCount = childCount;
    this.className = '_RunMetrics';
  }
}
export { _RunMetrics };
class WrapParentData extends ContainerBoxParentData {
  runIndex: number;
}
export { WrapParentData };
class RenderWrap extends RenderBox {
  direction: Axis;
  alignment: WrapAlignment;
  spacing: number;
  runAlignment: WrapAlignment;
  runSpacing: number;
  crossAxisAlignment: WrapCrossAlignment;
  textDirection: TextDirection;
  verticalDirection: VerticalDirection;
  clipBehavior: Clip;
  hasVisualOverflow: boolean;
  public constructor(
    namedParameters: {
      children?: Array<any>;
      direction?: Axis;
      alignment?: WrapAlignment;
      spacing?: number;
      runAlignment?: WrapAlignment;
      runSpacing?: number;
      crossAxisAlignment?: WrapCrossAlignment;
      textDirection?: TextDirection;
      verticalDirection?: VerticalDirection;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this['children'] = namedParameters.children;
    this.direction = namedParameters.direction;
    this.alignment = namedParameters.alignment;
    this.spacing = namedParameters.spacing;
    this.runAlignment = namedParameters.runAlignment;
    this.runSpacing = namedParameters.runSpacing;
    this.crossAxisAlignment = namedParameters.crossAxisAlignment;
    this.textDirection = namedParameters.textDirection;
    this.verticalDirection = namedParameters.verticalDirection;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'RenderWrap';
  }
}
export { RenderWrap };
