// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatelessWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class OrientationBuilder extends StatelessWidget {
  builder: any;
  public constructor(namedParameters: {key?: Key, builder?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.builder = namedParameters.builder;
    this.className = 'OrientationBuilder';
  }
}
export { OrientationBuilder };
