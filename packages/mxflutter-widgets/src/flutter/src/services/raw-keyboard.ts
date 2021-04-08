// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum KeyboardSide {
  any = '{ "_name": "KeyboardSide.any", "index": 0 }',
  left = '{ "_name": "KeyboardSide.left", "index": 1 }',
  right = '{ "_name": "KeyboardSide.right", "index": 2 }',
  all = '{ "_name": "KeyboardSide.all", "index": 3 }',
};

export { KeyboardSide };
enum ModifierKey {
  controlModifier = '{ "_name": "ModifierKey.controlModifier", "index": 0 }',
  shiftModifier = '{ "_name": "ModifierKey.shiftModifier", "index": 1 }',
  altModifier = '{ "_name": "ModifierKey.altModifier", "index": 2 }',
  metaModifier = '{ "_name": "ModifierKey.metaModifier", "index": 3 }',
  capsLockModifier = '{ "_name": "ModifierKey.capsLockModifier", "index": 4 }',
  numLockModifier = '{ "_name": "ModifierKey.numLockModifier", "index": 5 }',
  scrollLockModifier = '{ "_name": "ModifierKey.scrollLockModifier", "index": 6 }',
  functionModifier = '{ "_name": "ModifierKey.functionModifier", "index": 7 }',
  symbolModifier = '{ "_name": "ModifierKey.symbolModifier", "index": 8 }',
};

export { ModifierKey };
abstract class RawKeyEventData extends MXDartClass {}
export { RawKeyEventData };
abstract class RawKeyEvent extends MXDartClass {
  character: string;
  data: RawKeyEventData;
  static fromMessage(message?: Map<any, any>) {
    var jsObj = new class MXRawKeyEvent extends RawKeyEvent {}();
    jsObj['message'] = message;
    jsObj['constructorName'] = 'fromMessage';
    return jsObj;
  }
}
export { RawKeyEvent };
class RawKeyDownEvent extends RawKeyEvent {
  public constructor(namedParameters: {data?: RawKeyEventData, character?: string} = {}) {
    super();
    this['data'] = namedParameters.data;
    this['character'] = namedParameters.character;
    this.className = 'RawKeyDownEvent';
  }
}
export { RawKeyDownEvent };
class RawKeyUpEvent extends RawKeyEvent {
  public constructor(namedParameters: {data?: RawKeyEventData, character?: string} = {}) {
    super();
    this['data'] = namedParameters.data;
    this['character'] = namedParameters.character;
    this.className = 'RawKeyUpEvent';
  }
}
export { RawKeyUpEvent };
class RawKeyboard extends MXDartClass {
  listeners: Array<any>;
  keyEventHandler: any;
  keysPressed: Map<any, any>;
}
export { RawKeyboard };
class _ModifierSidePair extends MXDartClass {
  modifier: ModifierKey;
  side: KeyboardSide;
  public constructor(modifier?: ModifierKey, side?: KeyboardSide) {
    super();
    this.modifier = modifier;
    this.side = side;
    this.className = '_ModifierSidePair';
  }
}
export { _ModifierSidePair };
