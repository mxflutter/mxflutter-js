//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class HitTestable extends MXDartClass {
}
export { HitTestable };
class HitTestDispatcher extends MXDartClass {
}
export { HitTestDispatcher };
class HitTestTarget extends MXDartClass {
}
export { HitTestTarget };
class HitTestEntry extends MXDartClass {
    constructor(target) {
        super();
        this.target = target;
        this.className = 'HitTestEntry';
    }
}
export { HitTestEntry };
class _TransformPart extends MXDartClass {
}
export { _TransformPart };
class _MatrixTransformPart extends _TransformPart {
    constructor(matrix) {
        super();
        this.matrix = matrix;
        this.className = '_MatrixTransformPart';
    }
}
export { _MatrixTransformPart };
class _OffsetTransformPart extends _TransformPart {
    constructor(offset) {
        super();
        this.offset = offset;
        this.className = '_OffsetTransformPart';
    }
}
export { _OffsetTransformPart };
class HitTestResult extends MXDartClass {
    static wrap(result) {
        var jsObj = new HitTestResult();
        jsObj['result'] = result;
        jsObj['constructorName'] = 'wrap';
        return jsObj;
    }
}
export { HitTestResult };
