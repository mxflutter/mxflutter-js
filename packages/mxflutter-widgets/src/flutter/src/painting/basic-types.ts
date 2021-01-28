//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum RenderComparison {
  identical = '{ "_name": "RenderComparison.identical", "index": 0 }',
  metadata = '{ "_name": "RenderComparison.metadata", "index": 1 }',
  paint = '{ "_name": "RenderComparison.paint", "index": 2 }',
  layout = '{ "_name": "RenderComparison.layout", "index": 3 }',
}

export { RenderComparison };
enum Axis {
  horizontal = '{ "_name": "Axis.horizontal", "index": 0 }',
  vertical = '{ "_name": "Axis.vertical", "index": 1 }',
}

export { Axis };
enum VerticalDirection {
  up = '{ "_name": "VerticalDirection.up", "index": 0 }',
  down = '{ "_name": "VerticalDirection.down", "index": 1 }',
}

export { VerticalDirection };
enum AxisDirection {
  up = '{ "_name": "AxisDirection.up", "index": 0 }',
  right = '{ "_name": "AxisDirection.right", "index": 1 }',
  down = '{ "_name": "AxisDirection.down", "index": 2 }',
  left = '{ "_name": "AxisDirection.left", "index": 3 }',
}

export { AxisDirection };
