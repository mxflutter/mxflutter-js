//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { PrimaryPointerGestureRecognizer } from './recognizer';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TapDownDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.kind = namedParameters.kind;
        this.className = 'TapDownDetails';
    }
}
export { TapDownDetails };
class TapUpDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'TapUpDetails';
    }
}
export { TapUpDetails };
class BaseTapGestureRecognizer extends PrimaryPointerGestureRecognizer {
}
export { BaseTapGestureRecognizer };
class TapGestureRecognizer extends BaseTapGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.debugOwner = namedParameters.debugOwner;
        this.className = 'TapGestureRecognizer';
    }
}
export { TapGestureRecognizer };
