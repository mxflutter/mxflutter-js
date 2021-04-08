"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ModalBarrierGestureDetector = exports._AnyTapGestureRecognizerFactory = exports._ModalBarrierSemanticsDelegate = exports._AnyTapGestureRecognizer = exports.AnimatedModalBarrier = exports.ModalBarrier = void 0;
const gesture_detector_1 = require("./gesture-detector");
const tap_1 = require("../gestures/tap");
const transitions_1 = require("./transitions");
const framework_1 = require("./framework");
class ModalBarrier extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.dismissible = namedParameters.dismissible;
        this.semanticsLabel = namedParameters.semanticsLabel;
        this.barrierSemanticsDismissible = namedParameters.barrierSemanticsDismissible;
        this.className = 'ModalBarrier';
    }
}
exports.ModalBarrier = ModalBarrier;
class AnimatedModalBarrier extends transitions_1.AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['color'] = namedParameters.color;
        this.dismissible = namedParameters.dismissible;
        this.semanticsLabel = namedParameters.semanticsLabel;
        this.barrierSemanticsDismissible = namedParameters.barrierSemanticsDismissible;
        this.className = 'AnimatedModalBarrier';
    }
}
exports.AnimatedModalBarrier = AnimatedModalBarrier;
class _AnyTapGestureRecognizer extends tap_1.BaseTapGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.debugOwner = namedParameters.debugOwner;
        this.className = '_AnyTapGestureRecognizer';
    }
}
exports._AnyTapGestureRecognizer = _AnyTapGestureRecognizer;
class _ModalBarrierSemanticsDelegate extends gesture_detector_1.SemanticsGestureDelegate {
    constructor(namedParameters = {}) {
        super();
        this.onDismiss = namedParameters.onDismiss;
        this.className = '_ModalBarrierSemanticsDelegate';
    }
}
exports._ModalBarrierSemanticsDelegate = _ModalBarrierSemanticsDelegate;
class _AnyTapGestureRecognizerFactory extends gesture_detector_1.GestureRecognizerFactory {
    constructor(namedParameters = {}) {
        super();
        this.onAnyTapUp = namedParameters.onAnyTapUp;
        this.className = '_AnyTapGestureRecognizerFactory';
    }
}
exports._AnyTapGestureRecognizerFactory = _AnyTapGestureRecognizerFactory;
class _ModalBarrierGestureDetector extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.onDismiss = namedParameters.onDismiss;
        this.className = '_ModalBarrierGestureDetector';
    }
}
exports._ModalBarrierGestureDetector = _ModalBarrierGestureDetector;
