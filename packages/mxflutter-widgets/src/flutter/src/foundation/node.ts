// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AbstractNode extends MXDartClass {
  depth: number;
  owner: any;
  parent: AbstractNode;
}
export { AbstractNode };
