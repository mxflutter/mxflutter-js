//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Size } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum BoxFit {
  fill = '{ "_name": "BoxFit.fill", "index": 0 }',
  contain = '{ "_name": "BoxFit.contain", "index": 1 }',
  cover = '{ "_name": "BoxFit.cover", "index": 2 }',
  fitWidth = '{ "_name": "BoxFit.fitWidth", "index": 3 }',
  fitHeight = '{ "_name": "BoxFit.fitHeight", "index": 4 }',
  none = '{ "_name": "BoxFit.none", "index": 5 }',
  scaleDown = '{ "_name": "BoxFit.scaleDown", "index": 6 }',
}

export { BoxFit };
class FittedSizes extends MXDartClass {
  source: Size;
  destination: Size;
  public constructor(source?: Size, destination?: Size) {
    super();
    this.source = source;
    this.destination = destination;
    this.className = 'FittedSizes';
  }
}
export { FittedSizes };
