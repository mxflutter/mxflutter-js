// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RawKeyEventData } from './raw-keyboard';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RawKeyEventDataAndroid extends RawKeyEventData {
  flags: number;
  codePoint: number;
  plainCodePoint: number;
  keyCode: number;
  scanCode: number;
  metaState: number;
  eventSource: number;
  vendorId: number;
  productId: number;
  deviceId: number;
  repeatCount: number;
  public constructor(namedParameters: {flags?: number, codePoint?: number, plainCodePoint?: number, keyCode?: number, scanCode?: number, metaState?: number, eventSource?: number, vendorId?: number, productId?: number, deviceId?: number, repeatCount?: number} = {}) {
    super();
    this.flags = namedParameters.flags;
    this.codePoint = namedParameters.codePoint;
    this.plainCodePoint = namedParameters.plainCodePoint;
    this.keyCode = namedParameters.keyCode;
    this.scanCode = namedParameters.scanCode;
    this.metaState = namedParameters.metaState;
    this.eventSource = namedParameters.eventSource;
    this.vendorId = namedParameters.vendorId;
    this.productId = namedParameters.productId;
    this.deviceId = namedParameters.deviceId;
    this.repeatCount = namedParameters.repeatCount;
    this.className = 'RawKeyEventDataAndroid';
  }
  static get modifierNone() {
    return 0;
  }
  static get modifierAlt() {
    return 2;
  }
  static get modifierLeftAlt() {
    return 16;
  }
  static get modifierRightAlt() {
    return 32;
  }
  static get modifierShift() {
    return 1;
  }
  static get modifierLeftShift() {
    return 64;
  }
  static get modifierRightShift() {
    return 128;
  }
  static get modifierSym() {
    return 4;
  }
  static get modifierFunction() {
    return 8;
  }
  static get modifierControl() {
    return 4096;
  }
  static get modifierLeftControl() {
    return 8192;
  }
  static get modifierRightControl() {
    return 16384;
  }
  static get modifierMeta() {
    return 65536;
  }
  static get modifierLeftMeta() {
    return 131072;
  }
  static get modifierRightMeta() {
    return 262144;
  }
  static get modifierCapsLock() {
    return 1048576;
  }
  static get modifierNumLock() {
    return 2097152;
  }
  static get modifierScrollLock() {
    return 4194304;
  }
}
export { RawKeyEventDataAndroid };
