"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._TrianglePainter = exports._StepperState = exports.Stepper = exports.Step = exports.StepperType = exports.StepState = void 0;
const custom_paint_1 = require("../rendering/custom-paint");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var StepState;
(function (StepState) {
    StepState["indexed"] = "{ \"_name\": \"StepState.indexed\", \"index\": 0 }";
    StepState["editing"] = "{ \"_name\": \"StepState.editing\", \"index\": 1 }";
    StepState["complete"] = "{ \"_name\": \"StepState.complete\", \"index\": 2 }";
    StepState["disabled"] = "{ \"_name\": \"StepState.disabled\", \"index\": 3 }";
    StepState["error"] = "{ \"_name\": \"StepState.error\", \"index\": 4 }";
})(StepState || (StepState = {}));
exports.StepState = StepState;
;
var StepperType;
(function (StepperType) {
    StepperType["vertical"] = "{ \"_name\": \"StepperType.vertical\", \"index\": 0 }";
    StepperType["horizontal"] = "{ \"_name\": \"StepperType.horizontal\", \"index\": 1 }";
})(StepperType || (StepperType = {}));
exports.StepperType = StepperType;
;
class Step extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.title = namedParameters.title;
        this.subtitle = namedParameters.subtitle;
        this.content = namedParameters.content;
        this.state = namedParameters.state;
        this.isActive = namedParameters.isActive;
        this.className = 'Step';
    }
}
exports.Step = Step;
class Stepper extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.steps = namedParameters.steps;
        this.physics = namedParameters.physics;
        this.type = namedParameters.type;
        this.currentStep = namedParameters.currentStep;
        this.onStepTapped = namedParameters.onStepTapped;
        this.onStepContinue = namedParameters.onStepContinue;
        this.onStepCancel = namedParameters.onStepCancel;
        this.controlsBuilder = namedParameters.controlsBuilder;
        this.className = 'Stepper';
    }
}
exports.Stepper = Stepper;
class _StepperState extends framework_1.State {
}
exports._StepperState = _StepperState;
class _TrianglePainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.className = '_TrianglePainter';
    }
}
exports._TrianglePainter = _TrianglePainter;
