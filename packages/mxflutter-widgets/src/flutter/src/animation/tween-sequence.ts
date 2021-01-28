//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Animatable } from './tween';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TweenSequence extends Animatable {
  items: Array<any>;
  intervals: Array<any>;
  public constructor(items?: Array<any>) {
    super();
    this.items = items;
    this.className = 'TweenSequence';
  }
}
export { TweenSequence };
class FlippedTweenSequence extends TweenSequence {
  public constructor(items?: Array<any>) {
    super();
    this['items'] = items;
    this.className = 'FlippedTweenSequence';
  }
}
export { FlippedTweenSequence };
class TweenSequenceItem extends MXDartClass {
  tween: Animatable;
  weight: number;
  public constructor(namedParameters: { tween?: Animatable; weight?: number } = {}) {
    super();
    this.tween = namedParameters.tween;
    this.weight = namedParameters.weight;
    this.className = 'TweenSequenceItem';
  }
}
export { TweenSequenceItem };
class _Interval extends MXDartClass {
  start: number;
  end: number;
  public constructor(start?: number, end?: number) {
    super();
    this.start = start;
    this.end = end;
    this.className = '_Interval';
  }
}
export { _Interval };
