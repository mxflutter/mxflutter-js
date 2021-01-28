//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { LongPressGestureRecognizer, } from '../gestures/long-press';
import { StatefulWidget$, State$ } from '../widgets/framework';
class CupertinoScrollbar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.isAlwaysShown = namedParameters.isAlwaysShown;
        this.child = namedParameters.child;
        this.className = 'CupertinoScrollbar';
    }
}
export { CupertinoScrollbar };
class _CupertinoScrollbarState extends State$ {
}
export { _CupertinoScrollbarState };
class _ThumbPressGestureRecognizer extends LongPressGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.postAcceptSlopTolerance = namedParameters.postAcceptSlopTolerance;
        this['kind'] = namedParameters.kind;
        this.debugOwner = namedParameters.debugOwner;
        this.customPaintKey = namedParameters.customPaintKey;
        this.className = '_ThumbPressGestureRecognizer';
    }
}
export { _ThumbPressGestureRecognizer };
