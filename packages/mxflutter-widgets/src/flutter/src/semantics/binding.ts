// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { AccessibilityFeatures } from '../../../mx-dart-sdk';
import { BindingBase } from '../foundation/binding';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class SemanticsBinding extends BindingBase {
  accessibilityFeatures: AccessibilityFeatures;
}
export { SemanticsBinding };
