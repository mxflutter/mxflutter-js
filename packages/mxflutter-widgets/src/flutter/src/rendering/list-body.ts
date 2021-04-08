// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { AxisDirection } from '../painting/basic-types';
import { ContainerBoxParentData, RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ListBodyParentData extends ContainerBoxParentData {}
export { ListBodyParentData };
class RenderListBody extends RenderBox {
  axisDirection: AxisDirection;
  public constructor(namedParameters: {children?: Array<any>, axisDirection?: AxisDirection} = {}) {
    super();
    this['children'] = namedParameters.children;
    this.axisDirection = namedParameters.axisDirection;
    this.className = 'RenderListBody';
  }
}
export { RenderListBody };
