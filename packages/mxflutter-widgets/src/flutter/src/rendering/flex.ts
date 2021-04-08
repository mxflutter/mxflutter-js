// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextDirection, TextBaseline, Clip } from '../../../mx-dart-sdk';
import { Axis, VerticalDirection } from '../painting/basic-types';
import { ContainerBoxParentData, RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum FlexFit {
  tight = '{ "_name": "FlexFit.tight", "index": 0 }',
  loose = '{ "_name": "FlexFit.loose", "index": 1 }',
};

export { FlexFit };
class FlexParentData extends ContainerBoxParentData {
  flex: number;
  fit: FlexFit;
}
export { FlexParentData };
enum MainAxisSize {
  min = '{ "_name": "MainAxisSize.min", "index": 0 }',
  max = '{ "_name": "MainAxisSize.max", "index": 1 }',
};

export { MainAxisSize };
enum MainAxisAlignment {
  start = '{ "_name": "MainAxisAlignment.start", "index": 0 }',
  end = '{ "_name": "MainAxisAlignment.end", "index": 1 }',
  center = '{ "_name": "MainAxisAlignment.center", "index": 2 }',
  spaceBetween = '{ "_name": "MainAxisAlignment.spaceBetween", "index": 3 }',
  spaceAround = '{ "_name": "MainAxisAlignment.spaceAround", "index": 4 }',
  spaceEvenly = '{ "_name": "MainAxisAlignment.spaceEvenly", "index": 5 }',
};

export { MainAxisAlignment };
enum CrossAxisAlignment {
  start = '{ "_name": "CrossAxisAlignment.start", "index": 0 }',
  end = '{ "_name": "CrossAxisAlignment.end", "index": 1 }',
  center = '{ "_name": "CrossAxisAlignment.center", "index": 2 }',
  stretch = '{ "_name": "CrossAxisAlignment.stretch", "index": 3 }',
  baseline = '{ "_name": "CrossAxisAlignment.baseline", "index": 4 }',
};

export { CrossAxisAlignment };
class RenderFlex extends RenderBox {
  direction: Axis;
  mainAxisAlignment: MainAxisAlignment;
  mainAxisSize: MainAxisSize;
  crossAxisAlignment: CrossAxisAlignment;
  textDirection: TextDirection;
  verticalDirection: VerticalDirection;
  textBaseline: TextBaseline;
  overflow: number;
  clipBehavior: Clip;
  public constructor(namedParameters: {children?: Array<any>, direction?: Axis, mainAxisSize?: MainAxisSize, mainAxisAlignment?: MainAxisAlignment, crossAxisAlignment?: CrossAxisAlignment, textDirection?: TextDirection, verticalDirection?: VerticalDirection, textBaseline?: TextBaseline, clipBehavior?: Clip} = {}) {
    super();
    this['children'] = namedParameters.children;
    this.direction = namedParameters.direction;
    this.mainAxisSize = namedParameters.mainAxisSize;
    this.mainAxisAlignment = namedParameters.mainAxisAlignment;
    this.crossAxisAlignment = namedParameters.crossAxisAlignment;
    this.textDirection = namedParameters.textDirection;
    this.verticalDirection = namedParameters.verticalDirection;
    this.textBaseline = namedParameters.textBaseline;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'RenderFlex';
  }
}
export { RenderFlex };
