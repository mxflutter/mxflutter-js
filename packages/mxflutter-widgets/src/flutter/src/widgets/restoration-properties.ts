// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextEditingController } from './editable-text';
import { TextEditingValue } from '../services/text-input';
import { RestorableProperty } from './restoration';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class RestorableValue extends RestorableProperty {
  value: any;
}
export { RestorableValue };
class _RestorablePrimitiveValue extends RestorableValue {
  defaultValue: any;
  public constructor(_defaultValue?: any) {
    super();
    this.defaultValue = _defaultValue;
    this.className = '_RestorablePrimitiveValue';
  }
}
export { _RestorablePrimitiveValue };
class RestorableNum extends _RestorablePrimitiveValue {
  public constructor(defaultValue?: any) {
    super();
    this['defaultValue'] = defaultValue;
    this.className = 'RestorableNum';
  }
}
export { RestorableNum };
class RestorableDouble extends RestorableNum {
  public constructor(defaultValue?: number) {
    super();
    this['defaultValue'] = defaultValue;
    this.className = 'RestorableDouble';
  }
}
export { RestorableDouble };
class RestorableInt extends RestorableNum {
  public constructor(defaultValue?: number) {
    super();
    this['defaultValue'] = defaultValue;
    this.className = 'RestorableInt';
  }
}
export { RestorableInt };
class RestorableString extends _RestorablePrimitiveValue {
  public constructor(defaultValue?: string) {
    super();
    this['defaultValue'] = defaultValue;
    this.className = 'RestorableString';
  }
}
export { RestorableString };
class RestorableBool extends _RestorablePrimitiveValue {
  public constructor(defaultValue?: boolean) {
    super();
    this['defaultValue'] = defaultValue;
    this.className = 'RestorableBool';
  }
}
export { RestorableBool };
abstract class RestorableListenable extends RestorableProperty {
  value: any;
}
export { RestorableListenable };
class RestorableTextEditingController extends RestorableListenable {
  initialValue: TextEditingValue;
  controller: TextEditingController;
  public constructor(namedParameters: {text?: string} = {}) {
    super();
    this['text'] = namedParameters.text;
    this.className = 'RestorableTextEditingController';
  }
  static fromValue(value?: TextEditingValue) {
    var jsObj = new RestorableTextEditingController();
    jsObj['mx_value'] = value;
    jsObj['constructorName'] = 'fromValue';
    return jsObj;
  }
}
export { RestorableTextEditingController };
