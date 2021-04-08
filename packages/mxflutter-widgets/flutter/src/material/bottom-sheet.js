"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._BottomSheetSuspendedCurve = exports._ModalBottomSheetRoute = exports._ModalBottomSheetState = exports._ModalBottomSheet = exports._ModalBottomSheetLayout = exports._BottomSheetState = exports.BottomSheet = void 0;
const routes_1 = require("../widgets/routes");
const curves_1 = require("../animation/curves");
const shifted_box_1 = require("../rendering/shifted-box");
const framework_1 = require("../widgets/framework");
class BottomSheet extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animationController = namedParameters.animationController;
        this.enableDrag = namedParameters.enableDrag;
        this.onDragStart = namedParameters.onDragStart;
        this.onDragEnd = namedParameters.onDragEnd;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.onClosing = namedParameters.onClosing;
        this.builder = namedParameters.builder;
        this.className = 'BottomSheet';
    }
}
exports.BottomSheet = BottomSheet;
class _BottomSheetState extends framework_1.State {
}
exports._BottomSheetState = _BottomSheetState;
class _ModalBottomSheetLayout extends shifted_box_1.SingleChildLayoutDelegate {
    constructor(progress, isScrollControlled) {
        super();
        this.progress = progress;
        this.isScrollControlled = isScrollControlled;
        this.className = '_ModalBottomSheetLayout';
    }
}
exports._ModalBottomSheetLayout = _ModalBottomSheetLayout;
class _ModalBottomSheet extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.route = namedParameters.route;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.isScrollControlled = namedParameters.isScrollControlled;
        this.enableDrag = namedParameters.enableDrag;
        this.className = '_ModalBottomSheet';
    }
}
exports._ModalBottomSheet = _ModalBottomSheet;
class _ModalBottomSheetState extends framework_1.State {
}
exports._ModalBottomSheetState = _ModalBottomSheetState;
class _ModalBottomSheetRoute extends routes_1.PopupRoute {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.theme = namedParameters.theme;
        this.barrierLabel = namedParameters.barrierLabel;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.modalBarrierColor = namedParameters.modalBarrierColor;
        this.isDismissible = namedParameters.isDismissible;
        this.enableDrag = namedParameters.enableDrag;
        this.isScrollControlled = namedParameters.isScrollControlled;
        this.settings = namedParameters.settings;
        this.className = '_ModalBottomSheetRoute';
    }
}
exports._ModalBottomSheetRoute = _ModalBottomSheetRoute;
class _BottomSheetSuspendedCurve extends curves_1.ParametricCurve {
    constructor(startingPoint, namedParameters = {}) {
        super();
        this.startingPoint = startingPoint;
        this.curve = namedParameters.curve;
        this.className = '_BottomSheetSuspendedCurve';
    }
}
exports._BottomSheetSuspendedCurve = _BottomSheetSuspendedCurve;
