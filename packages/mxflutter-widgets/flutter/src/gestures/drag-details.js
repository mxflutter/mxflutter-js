//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class DragDownDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'DragDownDetails';
    }
}
export { DragDownDetails };
class DragStartDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.sourceTimeStamp = namedParameters.sourceTimeStamp;
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'DragStartDetails';
    }
}
export { DragStartDetails };
class DragUpdateDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.sourceTimeStamp = namedParameters.sourceTimeStamp;
        this.delta = namedParameters.delta;
        this.primaryDelta = namedParameters.primaryDelta;
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'DragUpdateDetails';
    }
}
export { DragUpdateDetails };
class DragEndDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.velocity = namedParameters.velocity;
        this.primaryVelocity = namedParameters.primaryVelocity;
        this.className = 'DragEndDetails';
    }
}
export { DragEndDetails };
