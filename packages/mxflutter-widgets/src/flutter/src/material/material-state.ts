//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MouseCursor } from '../rendering/mouse-cursor';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum MaterialState {
  hovered = '{ "_name": "MaterialState.hovered", "index": 0 }',
  focused = '{ "_name": "MaterialState.focused", "index": 1 }',
  pressed = '{ "_name": "MaterialState.pressed", "index": 2 }',
  dragged = '{ "_name": "MaterialState.dragged", "index": 3 }',
  selected = '{ "_name": "MaterialState.selected", "index": 4 }',
  disabled = '{ "_name": "MaterialState.disabled", "index": 5 }',
  error = '{ "_name": "MaterialState.error", "index": 6 }',
}

export { MaterialState };
abstract class MaterialStateColor extends Color {}
export { MaterialStateColor };
class _MaterialStateColor extends MaterialStateColor {
  resolve: any;
  public constructor(_resolve?: any) {
    super();
    this.resolve = _resolve;
    this.className = '_MaterialStateColor';
  }
}
export { _MaterialStateColor };
abstract class MaterialStateMouseCursor extends MouseCursor {
  static get clickable() {
    var jsObj = new (class MXMaterialStateMouseCursor extends MaterialStateMouseCursor {})();
    jsObj['className'] = 'MaterialStateMouseCursor';
    jsObj['constructorName'] = 'clickable';
    return jsObj;
  }
  static get textable() {
    var jsObj = new (class MXMaterialStateMouseCursor extends MaterialStateMouseCursor {})();
    jsObj['className'] = 'MaterialStateMouseCursor';
    jsObj['constructorName'] = 'textable';
    return jsObj;
  }
}
export { MaterialStateMouseCursor };
class _EnabledAndDisabledMouseCursor extends MaterialStateMouseCursor {
  enabledCursor: MouseCursor;
  disabledCursor: MouseCursor;
  name: string;
  public constructor(
    namedParameters: { enabledCursor?: MouseCursor; disabledCursor?: MouseCursor; name?: string } = {},
  ) {
    super();
    this.enabledCursor = namedParameters.enabledCursor;
    this.disabledCursor = namedParameters.disabledCursor;
    this.name = namedParameters.name;
    this.className = '_EnabledAndDisabledMouseCursor';
  }
}
export { _EnabledAndDisabledMouseCursor };
abstract class MaterialStateProperty extends MXDartClass {}
export { MaterialStateProperty };
class _MaterialStatePropertyWith extends MXDartClass {
  resolve: any;
  public constructor(_resolve?: any) {
    super();
    this.resolve = _resolve;
    this.className = '_MaterialStatePropertyWith';
  }
}
export { _MaterialStatePropertyWith };
class _MaterialStatePropertyAll extends MXDartClass {
  value: any;
  public constructor(value?: any) {
    super();
    this.value = value;
    this.className = '_MaterialStatePropertyAll';
  }
}
export { _MaterialStatePropertyAll };
