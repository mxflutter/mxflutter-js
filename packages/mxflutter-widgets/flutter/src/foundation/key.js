//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
// MX Modified begin
import { MXBaseKey } from '@mxflutter/mxflutter-base';
// MX Modified end
import { MXDartClass } from '@mxflutter/mxflutter-base';
// MX Modified begin
class Key extends MXBaseKey {
    // MX Modified end
    constructor(value) {
        super();
        this['value'] = value;
        this.className = 'Key';
    }
    // MX modified begin
    // mx特殊逻辑，Key只能是String类型
    toString() {
        return `Key:${this['value']}`;
    }
}
export { Key };
class LocalKey extends Key {
}
export { LocalKey };
class ValueKey extends LocalKey {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'ValueKey';
    }
}
export { ValueKey };
class _TypeLiteral extends MXDartClass {
}
export { _TypeLiteral };
