//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { BuildContext$ } from '../widgets/framework';
import { Color } from '../../../mx-dart-sdk';
import { IconThemeData } from '../widgets/icon-theme-data';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoIconThemeData extends IconThemeData {
  public constructor(namedParameters: { color?: Color; opacity?: number; size?: number } = {}) {
    super();
    this['color'] = namedParameters.color;
    this['opacity'] = namedParameters.opacity;
    this['size'] = namedParameters.size;
    this.className = 'CupertinoIconThemeData';
  }
}
export { CupertinoIconThemeData };
