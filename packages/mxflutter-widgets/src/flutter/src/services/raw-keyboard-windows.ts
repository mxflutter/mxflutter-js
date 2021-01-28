//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RawKeyEventData, KeyboardSide, ModifierKey } from './raw-keyboard';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RawKeyEventDataWindows extends RawKeyEventData {
  keyCode: number;
  scanCode: number;
  characterCodePoint: number;
  modifiers: number;
  public constructor(
    namedParameters: { keyCode?: number; scanCode?: number; characterCodePoint?: number; modifiers?: number } = {},
  ) {
    super();
    this.keyCode = namedParameters.keyCode;
    this.scanCode = namedParameters.scanCode;
    this.characterCodePoint = namedParameters.characterCodePoint;
    this.modifiers = namedParameters.modifiers;
    this.className = 'RawKeyEventDataWindows';
  }
  static get modifierShift() {
    return 1;
  }
  static get modifierLeftShift() {
    return 2;
  }
  static get modifierRightShift() {
    return 4;
  }
  static get modifierControl() {
    return 8;
  }
  static get modifierLeftControl() {
    return 16;
  }
  static get modifierRightControl() {
    return 32;
  }
  static get modifierAlt() {
    return 64;
  }
  static get modifierLeftAlt() {
    return 128;
  }
  static get modifierRightAlt() {
    return 256;
  }
  static get modifierLeftMeta() {
    return 512;
  }
  static get modifierRightMeta() {
    return 1024;
  }
  static get modifierCaps() {
    return 2048;
  }
  static get modifierNumLock() {
    return 4096;
  }
  static get modifierScrollLock() {
    return 8192;
  }
}
export { RawKeyEventDataWindows };
