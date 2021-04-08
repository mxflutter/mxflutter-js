// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
import { Key } from '../foundation/key';
import { ScrollPhysics } from '../widgets/scroll-physics';
import { Widget, StatefulWidget, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum StepState {
  indexed = '{ "_name": "StepState.indexed", "index": 0 }',
  editing = '{ "_name": "StepState.editing", "index": 1 }',
  complete = '{ "_name": "StepState.complete", "index": 2 }',
  disabled = '{ "_name": "StepState.disabled", "index": 3 }',
  error = '{ "_name": "StepState.error", "index": 4 }',
};

export { StepState };
enum StepperType {
  vertical = '{ "_name": "StepperType.vertical", "index": 0 }',
  horizontal = '{ "_name": "StepperType.horizontal", "index": 1 }',
};

export { StepperType };
class Step extends MXDartClass {
  title: MXWidget;
  subtitle: MXWidget;
  content: MXWidget;
  state: StepState;
  isActive: boolean;
  public constructor(namedParameters: {title?: MXWidget, subtitle?: MXWidget, content?: MXWidget, state?: StepState, isActive?: boolean} = {}) {
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
class Stepper extends StatefulWidget {
  steps: Array<any>;
  physics: ScrollPhysics;
  type: StepperType;
  currentStep: number;
  onStepTapped: any;
  onStepContinue: any;
  onStepCancel: any;
  controlsBuilder: any;
  public constructor(namedParameters: {key?: Key, steps?: Array<any>, physics?: ScrollPhysics, type?: StepperType, currentStep?: number, onStepTapped?: any, onStepContinue?: any, onStepCancel?: any, controlsBuilder?: any} = {}) {
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
class _StepperState extends State {
  keys: Array<any>;
  oldStates: Map<any, any>;
}
export { _StepperState };
class _TrianglePainter extends CustomPainter {
  color: Color;
  public constructor(namedParameters: {color?: Color} = {}) {
    super();
    this.color = namedParameters.color;
    this.className = '_TrianglePainter';
  }
}
export { _TrianglePainter };
