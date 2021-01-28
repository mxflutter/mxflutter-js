//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ScrollPhysics extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.parent = namedParameters.parent;
        this.className = 'ScrollPhysics';
    }
}
export { ScrollPhysics };
class RangeMaintainingScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'RangeMaintainingScrollPhysics';
    }
}
export { RangeMaintainingScrollPhysics };
class BouncingScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'BouncingScrollPhysics';
    }
}
export { BouncingScrollPhysics };
class ClampingScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'ClampingScrollPhysics';
    }
}
export { ClampingScrollPhysics };
class AlwaysScrollableScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'AlwaysScrollableScrollPhysics';
    }
}
export { AlwaysScrollableScrollPhysics };
class NeverScrollableScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'NeverScrollableScrollPhysics';
    }
}
export { NeverScrollableScrollPhysics };
