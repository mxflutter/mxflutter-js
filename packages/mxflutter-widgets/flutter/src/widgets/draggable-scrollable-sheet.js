"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._InheritedResetNotifier = exports._ResetNotifier = exports.DraggableScrollableActuator = exports._DraggableScrollableSheetScrollPosition = exports._DraggableScrollableSheetScrollController = exports._DraggableScrollableSheetState = exports._DraggableSheetExtent = exports.DraggableScrollableNotification = exports.DraggableScrollableSheet = void 0;
const inherited_notifier_1 = require("./inherited-notifier");
const scroll_position_with_single_context_1 = require("./scroll-position-with-single-context");
const scroll_controller_1 = require("./scroll-controller");
const change_notifier_1 = require("../foundation/change-notifier");
const notification_listener_1 = require("./notification-listener");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class DraggableScrollableSheet extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialChildSize = namedParameters.initialChildSize;
        this.minChildSize = namedParameters.minChildSize;
        this.maxChildSize = namedParameters.maxChildSize;
        this.expand = namedParameters.expand;
        this.builder = namedParameters.builder;
        this.className = 'DraggableScrollableSheet';
    }
}
exports.DraggableScrollableSheet = DraggableScrollableSheet;
class DraggableScrollableNotification extends notification_listener_1.Notification {
    constructor(namedParameters = {}) {
        super();
        this.extent = namedParameters.extent;
        this.minExtent = namedParameters.minExtent;
        this.maxExtent = namedParameters.maxExtent;
        this.initialExtent = namedParameters.initialExtent;
        this.context = namedParameters.context;
        this.className = 'DraggableScrollableNotification';
    }
}
exports.DraggableScrollableNotification = DraggableScrollableNotification;
class _DraggableSheetExtent extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.minExtent = namedParameters.minExtent;
        this.maxExtent = namedParameters.maxExtent;
        this.initialExtent = namedParameters.initialExtent;
        this['listener'] = namedParameters.listener;
        this.className = '_DraggableSheetExtent';
    }
}
exports._DraggableSheetExtent = _DraggableSheetExtent;
class _DraggableScrollableSheetState extends framework_1.State {
}
exports._DraggableScrollableSheetState = _DraggableScrollableSheetState;
class _DraggableScrollableSheetScrollController extends scroll_controller_1.ScrollController {
    constructor(namedParameters = {}) {
        super();
        this.initialScrollOffset = namedParameters.initialScrollOffset;
        this.debugLabel = namedParameters.debugLabel;
        this.extent = namedParameters.extent;
        this.className = '_DraggableScrollableSheetScrollController';
    }
}
exports._DraggableScrollableSheetScrollController = _DraggableScrollableSheetScrollController;
class _DraggableScrollableSheetScrollPosition extends scroll_position_with_single_context_1.ScrollPositionWithSingleContext {
    constructor(namedParameters = {}) {
        super();
        this.physics = namedParameters.physics;
        this.context = namedParameters.context;
        this['initialPixels'] = namedParameters.initialPixels;
        this.keepScrollOffset = namedParameters.keepScrollOffset;
        this['oldPosition'] = namedParameters.oldPosition;
        this.debugLabel = namedParameters.debugLabel;
        this.extent = namedParameters.extent;
        this.className = '_DraggableScrollableSheetScrollPosition';
    }
}
exports._DraggableScrollableSheetScrollPosition = _DraggableScrollableSheetScrollPosition;
class DraggableScrollableActuator extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'DraggableScrollableActuator';
    }
}
exports.DraggableScrollableActuator = DraggableScrollableActuator;
class _ResetNotifier extends change_notifier_1.ChangeNotifier {
}
exports._ResetNotifier = _ResetNotifier;
class _InheritedResetNotifier extends inherited_notifier_1.InheritedNotifier {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this['notifier'] = namedParameters.notifier;
        this.className = '_InheritedResetNotifier';
    }
}
exports._InheritedResetNotifier = _InheritedResetNotifier;
