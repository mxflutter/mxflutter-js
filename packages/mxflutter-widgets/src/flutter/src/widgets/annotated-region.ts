// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { SingleChildRenderObjectWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AnnotatedRegion extends SingleChildRenderObjectWidget {
  value: any;
  sized: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, value?: any, sized?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.value = namedParameters.value;
    this.sized = namedParameters.sized;
    this.className = 'AnnotatedRegion';
  }
}
export { AnnotatedRegion };
