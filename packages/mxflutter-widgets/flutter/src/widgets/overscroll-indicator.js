//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Notification } from './notification-listener';
import { CustomPainter } from '../rendering/custom-paint';
import { ChangeNotifier } from '../foundation/change-notifier';
import { StatefulWidget$, State$ } from './framework';
class GlowingOverscrollIndicator extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.showLeading = namedParameters.showLeading;
        this.showTrailing = namedParameters.showTrailing;
        this.axisDirection = namedParameters.axisDirection;
        this.color = namedParameters.color;
        this.notificationPredicate = namedParameters.notificationPredicate;
        this.child = namedParameters.child;
        this.className = 'GlowingOverscrollIndicator';
    }
}
export { GlowingOverscrollIndicator };
class _GlowingOverscrollIndicatorState extends State$ {
}
export { _GlowingOverscrollIndicatorState };
var _GlowState;
(function (_GlowState) {
    _GlowState["idle"] = "{ \"_name\": \"_GlowState.idle\", \"index\": 0 }";
    _GlowState["absorb"] = "{ \"_name\": \"_GlowState.absorb\", \"index\": 1 }";
    _GlowState["pull"] = "{ \"_name\": \"_GlowState.pull\", \"index\": 2 }";
    _GlowState["recede"] = "{ \"_name\": \"_GlowState.recede\", \"index\": 3 }";
})(_GlowState || (_GlowState = {}));
export { _GlowState };
class _GlowController extends ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.axis = namedParameters.axis;
        this.className = '_GlowController';
    }
}
export { _GlowController };
class _GlowingOverscrollIndicatorPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.leadingController = namedParameters.leadingController;
        this.trailingController = namedParameters.trailingController;
        this.axisDirection = namedParameters.axisDirection;
        this.repaint = namedParameters.repaint;
        this.className = '_GlowingOverscrollIndicatorPainter';
    }
    static get piOver2() {
        return 1.5707963267948966;
    }
}
export { _GlowingOverscrollIndicatorPainter };
class OverscrollIndicatorNotification extends Notification {
    constructor(namedParameters = {}) {
        super();
        this.leading = namedParameters.leading;
        this.className = 'OverscrollIndicatorNotification';
    }
}
export { OverscrollIndicatorNotification };
