//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomPainter } from '../rendering/custom-paint';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var StepState;
(function (StepState) {
    StepState["indexed"] = "{ \"_name\": \"StepState.indexed\", \"index\": 0 }";
    StepState["editing"] = "{ \"_name\": \"StepState.editing\", \"index\": 1 }";
    StepState["complete"] = "{ \"_name\": \"StepState.complete\", \"index\": 2 }";
    StepState["disabled"] = "{ \"_name\": \"StepState.disabled\", \"index\": 3 }";
    StepState["error"] = "{ \"_name\": \"StepState.error\", \"index\": 4 }";
})(StepState || (StepState = {}));
export { StepState };
var StepperType;
(function (StepperType) {
    StepperType["vertical"] = "{ \"_name\": \"StepperType.vertical\", \"index\": 0 }";
    StepperType["horizontal"] = "{ \"_name\": \"StepperType.horizontal\", \"index\": 1 }";
})(StepperType || (StepperType = {}));
export { StepperType };
class Step extends MXDartClass {
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
export { Step };
class Stepper extends StatefulWidget$ {
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
export { Stepper };
class _StepperState extends State$ {
}
export { _StepperState };
class _TrianglePainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.className = '_TrianglePainter';
    }
}
export { _TrianglePainter };
