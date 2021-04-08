// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { PlaceholderAlignment, TextBaseline } from '../../../mx-dart-sdk';
import { InlineSpan } from './inline-span';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class PlaceholderSpan extends InlineSpan {
  alignment: PlaceholderAlignment;
  baseline: TextBaseline;
}
export { PlaceholderSpan };
