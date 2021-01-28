//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PaintingContext } from '../rendering/object';
import { RenderListBody } from '../rendering/list-body';
import { ListBody } from '../widgets/basic';
import { CurvedAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Color, Canvas, Rect, Offset } from '../../../mx-dart-sdk';
import { Axis, AxisDirection } from '../painting/basic-types';
import { Widget, StatefulWidget$, State$, BuildContext$, GlobalKey } from '../widgets/framework';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class MergeableMaterialItem extends MXDartClass {
  key: LocalKey;
}
export { MergeableMaterialItem };
class MaterialSlice extends MergeableMaterialItem {
  child: MXWidget;
  public constructor(namedParameters: { key?: LocalKey; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = 'MaterialSlice';
  }
}
export { MaterialSlice };
class MaterialGap extends MergeableMaterialItem {
  size: number;
  public constructor(namedParameters: { key?: LocalKey; size?: number } = {}) {
    super();
    this.key = namedParameters.key;
    this.size = namedParameters.size;
    this.className = 'MaterialGap';
  }
}
export { MaterialGap };
class MergeableMaterial extends StatefulWidget$ {
  children: Array<any>;
  mainAxis: Axis;
  elevation: number;
  hasDividers: boolean;
  dividerColor: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      mainAxis?: Axis;
      elevation?: number;
      hasDividers?: boolean;
      children?: Array<any>;
      dividerColor?: Color;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.mainAxis = namedParameters.mainAxis;
    this.elevation = namedParameters.elevation;
    this.hasDividers = namedParameters.hasDividers;
    this.children = namedParameters.children;
    this.dividerColor = namedParameters.dividerColor;
    this.className = 'MergeableMaterial';
  }
}
export { MergeableMaterial };
class _AnimationTuple extends MXDartClass {
  controller: AnimationController;
  startAnimation: CurvedAnimation;
  endAnimation: CurvedAnimation;
  gapAnimation: CurvedAnimation;
  gapStart: number;
  public constructor(
    namedParameters: {
      controller?: AnimationController;
      startAnimation?: CurvedAnimation;
      endAnimation?: CurvedAnimation;
      gapAnimation?: CurvedAnimation;
      gapStart?: number;
    } = {},
  ) {
    super();
    this.controller = namedParameters.controller;
    this.startAnimation = namedParameters.startAnimation;
    this.endAnimation = namedParameters.endAnimation;
    this.gapAnimation = namedParameters.gapAnimation;
    this.gapStart = namedParameters.gapStart;
    this.className = '_AnimationTuple';
  }
}
export { _AnimationTuple };
class _MergeableMaterialState extends State$ {
  children: Array<any>;
  animationTuples: Map<any, any>;
}
export { _MergeableMaterialState };
class _MergeableMaterialSliceKey extends GlobalKey {
  value: LocalKey;
  public constructor(value?: LocalKey) {
    super();
    this.value = value;
    this.className = '_MergeableMaterialSliceKey';
  }
}
export { _MergeableMaterialSliceKey };
class _MergeableMaterialListBody extends ListBody {
  items: Array<any>;
  boxShadows: Array<any>;
  public constructor(
    namedParameters: { children?: Array<any>; mainAxis?: Axis; items?: Array<any>; boxShadows?: Array<any> } = {},
  ) {
    super();
    this.children = namedParameters.children;
    this.mainAxis = namedParameters.mainAxis;
    this.items = namedParameters.items;
    this.boxShadows = namedParameters.boxShadows;
    this.className = '_MergeableMaterialListBody';
  }
}
export { _MergeableMaterialListBody };
class _RenderMergeableMaterialListBody extends RenderListBody {
  boxShadows: Array<any>;
  public constructor(
    namedParameters: { children?: Array<any>; axisDirection?: AxisDirection; boxShadows?: Array<any> } = {},
  ) {
    super();
    this['children'] = namedParameters.children;
    this.axisDirection = namedParameters.axisDirection;
    this.boxShadows = namedParameters.boxShadows;
    this.className = '_RenderMergeableMaterialListBody';
  }
}
export { _RenderMergeableMaterialListBody };
