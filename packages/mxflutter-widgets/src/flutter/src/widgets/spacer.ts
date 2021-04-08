// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatelessWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Spacer extends StatelessWidget {
  flex: number;
  public constructor(namedParameters: {key?: Key, flex?: number} = {}) {
    super();
    this.key = namedParameters.key;
    this.flex = namedParameters.flex;
    this.className = 'Spacer';
  }
}
export { Spacer };
