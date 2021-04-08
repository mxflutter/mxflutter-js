// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { Size } from '../../../mx-dart-sdk';
import { StatelessWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class PreferredSizeWidget extends MXDartClass {}
export { PreferredSizeWidget };
class PreferredSize extends StatelessWidget {
  child: MXWidget;
  preferredSize: Size;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, preferredSize?: Size} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.preferredSize = namedParameters.preferredSize;
    this.className = 'PreferredSize';
  }
}
export { PreferredSize };
