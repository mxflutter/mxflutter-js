//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ShapeBorder } from '../painting/borders';
class InputBorder extends ShapeBorder {
    static get none() {
        var jsObj = new (class MXInputBorder extends InputBorder {
        })();
        jsObj['className'] = 'InputBorder';
        jsObj['constructorName'] = 'none';
        return jsObj;
    }
}
export { InputBorder };
class _NoInputBorder extends InputBorder {
}
export { _NoInputBorder };
class UnderlineInputBorder extends InputBorder {
    constructor(namedParameters = {}) {
        super();
        this.borderSide = namedParameters.borderSide;
        this.borderRadius = namedParameters.borderRadius;
        this.className = 'UnderlineInputBorder';
    }
}
export { UnderlineInputBorder };
class OutlineInputBorder extends InputBorder {
    constructor(namedParameters = {}) {
        super();
        this.borderSide = namedParameters.borderSide;
        this.borderRadius = namedParameters.borderRadius;
        this.gapPadding = namedParameters.gapPadding;
        this.className = 'OutlineInputBorder';
    }
}
export { OutlineInputBorder };
