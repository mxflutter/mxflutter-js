"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._SemanticsDebuggerPainter = exports._SemanticsClient = exports._SemanticsDebuggerState = exports.SemanticsDebugger = void 0;
const custom_paint_1 = require("../rendering/custom-paint");
const change_notifier_1 = require("../foundation/change-notifier");
const framework_1 = require("./framework");
class SemanticsDebugger extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.labelStyle = namedParameters.labelStyle;
        this.className = 'SemanticsDebugger';
    }
}
exports.SemanticsDebugger = SemanticsDebugger;
class _SemanticsDebuggerState extends framework_1.State {
}
exports._SemanticsDebuggerState = _SemanticsDebuggerState;
class _SemanticsClient extends change_notifier_1.ChangeNotifier {
    constructor(pipelineOwner) {
        super();
        this['pipelineOwner'] = pipelineOwner;
        this.className = '_SemanticsClient';
    }
}
exports._SemanticsClient = _SemanticsClient;
class _SemanticsDebuggerPainter extends custom_paint_1.CustomPainter {
    constructor(owner, generation, pointerPosition, devicePixelRatio, labelStyle) {
        super();
        this.owner = owner;
        this.generation = generation;
        this.pointerPosition = pointerPosition;
        this.devicePixelRatio = devicePixelRatio;
        this.labelStyle = labelStyle;
        this.className = '_SemanticsDebuggerPainter';
    }
}
exports._SemanticsDebuggerPainter = _SemanticsDebuggerPainter;
