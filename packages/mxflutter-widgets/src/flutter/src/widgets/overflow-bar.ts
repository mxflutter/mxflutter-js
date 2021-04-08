// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ContainerBoxParentData, RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { TextDirection, Clip } from '../../../mx-dart-sdk';
import { VerticalDirection } from '../painting/basic-types';
import { MultiChildRenderObjectWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum OverflowBarAlignment {
  start = '{ "_name": "OverflowBarAlignment.start", "index": 0 }',
  end = '{ "_name": "OverflowBarAlignment.end", "index": 1 }',
  center = '{ "_name": "OverflowBarAlignment.center", "index": 2 }',
};

export { OverflowBarAlignment };
class OverflowBar extends MultiChildRenderObjectWidget {
  spacing: number;
  overflowSpacing: number;
  overflowAlignment: OverflowBarAlignment;
  overflowDirection: VerticalDirection;
  textDirection: TextDirection;
  clipBehavior: Clip;
  public constructor(namedParameters: {key?: Key, spacing?: number, overflowSpacing?: number, overflowAlignment?: OverflowBarAlignment, overflowDirection?: VerticalDirection, textDirection?: TextDirection, clipBehavior?: Clip, children?: Array<any>} = {}) {
    super();
    this.key = namedParameters.key;
    this.spacing = namedParameters.spacing;
    this.overflowSpacing = namedParameters.overflowSpacing;
    this.overflowAlignment = namedParameters.overflowAlignment;
    this.overflowDirection = namedParameters.overflowDirection;
    this.textDirection = namedParameters.textDirection;
    this.clipBehavior = namedParameters.clipBehavior;
    this.children = namedParameters.children;
    this.className = 'OverflowBar';
  }
}
export { OverflowBar };
class _OverflowBarParentData extends ContainerBoxParentData {}
export { _OverflowBarParentData };
class _RenderOverflowBar extends RenderBox {
  spacing: number;
  overflowSpacing: number;
  overflowAlignment: OverflowBarAlignment;
  overflowDirection: VerticalDirection;
  textDirection: TextDirection;
  clipBehavior: Clip;
  public constructor(namedParameters: {children?: Array<any>, spacing?: number, overflowSpacing?: number, overflowAlignment?: OverflowBarAlignment, overflowDirection?: VerticalDirection, textDirection?: TextDirection, clipBehavior?: Clip} = {}) {
    super();
    this['children'] = namedParameters.children;
    this.spacing = namedParameters.spacing;
    this.overflowSpacing = namedParameters.overflowSpacing;
    this.overflowAlignment = namedParameters.overflowAlignment;
    this.overflowDirection = namedParameters.overflowDirection;
    this.textDirection = namedParameters.textDirection;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = '_RenderOverflowBar';
  }
}
export { _RenderOverflowBar };
