// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RawKeyEventData } from './raw-keyboard';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RawKeyEventDataLinux extends RawKeyEventData {
  keyHelper: KeyHelper;
  unicodeScalarValues: number;
  scanCode: number;
  keyCode: number;
  modifiers: number;
  isDown: boolean;
  public constructor(namedParameters: {keyHelper?: KeyHelper, unicodeScalarValues?: number, scanCode?: number, keyCode?: number, modifiers?: number, isDown?: boolean} = {}) {
    super();
    this.keyHelper = namedParameters.keyHelper;
    this.unicodeScalarValues = namedParameters.unicodeScalarValues;
    this.scanCode = namedParameters.scanCode;
    this.keyCode = namedParameters.keyCode;
    this.modifiers = namedParameters.modifiers;
    this.isDown = namedParameters.isDown;
    this.className = 'RawKeyEventDataLinux';
  }
}
export { RawKeyEventDataLinux };
abstract class KeyHelper extends MXDartClass {
  public constructor(toolkit?: string) {
    super();
    this['toolkit'] = toolkit;
    this.className = 'KeyHelper';
  }
}
export { KeyHelper };
class GLFWKeyHelper extends MXDartClass {
  static get modifierCapsLock() {
    return 16;
  }
  static get modifierShift() {
    return 1;
  }
  static get modifierControl() {
    return 2;
  }
  static get modifierAlt() {
    return 4;
  }
  static get modifierMeta() {
    return 8;
  }
  static get modifierNumericPad() {
    return 32;
  }
}
export { GLFWKeyHelper };
class GtkKeyHelper extends MXDartClass {
  static get modifierShift() {
    return 1;
  }
  static get modifierCapsLock() {
    return 2;
  }
  static get modifierControl() {
    return 4;
  }
  static get modifierMod1() {
    return 8;
  }
  static get modifierMod2() {
    return 16;
  }
  static get modifierMeta() {
    return 268435456;
  }
}
export { GtkKeyHelper };
