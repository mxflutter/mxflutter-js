//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RawKeyEventData, KeyboardSide, ModifierKey } from './raw-keyboard';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RawKeyEventDataFuchsia extends RawKeyEventData {
  hidUsage: number;
  codePoint: number;
  modifiers: number;
  public constructor(namedParameters: { hidUsage?: number; codePoint?: number; modifiers?: number } = {}) {
    super();
    this.hidUsage = namedParameters.hidUsage;
    this.codePoint = namedParameters.codePoint;
    this.modifiers = namedParameters.modifiers;
    this.className = 'RawKeyEventDataFuchsia';
  }
  static get modifierNone() {
    return 0;
  }
  static get modifierCapsLock() {
    return 1;
  }
  static get modifierLeftShift() {
    return 2;
  }
  static get modifierRightShift() {
    return 4;
  }
  static get modifierShift() {
    return 6;
  }
  static get modifierLeftControl() {
    return 8;
  }
  static get modifierRightControl() {
    return 16;
  }
  static get modifierControl() {
    return 24;
  }
  static get modifierLeftAlt() {
    return 32;
  }
  static get modifierRightAlt() {
    return 64;
  }
  static get modifierAlt() {
    return 96;
  }
  static get modifierLeftMeta() {
    return 128;
  }
  static get modifierRightMeta() {
    return 256;
  }
  static get modifierMeta() {
    return 384;
  }
}
export { RawKeyEventDataFuchsia };
