//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
// MX Modified begin
import { MXMirrorObjMethodCall } from '@mxflutter/mxflutter-base';
import { ChangeNotifier } from '../foundation/change-notifier';
class ScrollController extends ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this.initialScrollOffset = namedParameters.initialScrollOffset;
        this.keepScrollOffset = namedParameters.keepScrollOffset;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'ScrollController';
    }
    // MX modified begin
    animateTo(offset, namedParameters = {}) {
        const argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'ScrollController',
            funcName: 'animateTo',
            args: {
                offset,
                duration: namedParameters.duration,
                curve: namedParameters.curve,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
    jumpTo(value) {
        const argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'ScrollController',
            funcName: 'jumpTo',
            args: {
                value,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
}
export { ScrollController };
class TrackingScrollController extends ScrollController {
    constructor(namedParameters = {}) {
        super();
        this.initialScrollOffset = namedParameters.initialScrollOffset;
        this.keepScrollOffset = namedParameters.keepScrollOffset;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'TrackingScrollController';
    }
}
export { TrackingScrollController };
