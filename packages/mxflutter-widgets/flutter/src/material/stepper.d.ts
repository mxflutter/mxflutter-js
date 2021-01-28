import { Color } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
import { Key } from '../foundation/key';
import { ScrollPhysics } from '../widgets/scroll-physics';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare enum StepState {
    indexed = "{ \"_name\": \"StepState.indexed\", \"index\": 0 }",
    editing = "{ \"_name\": \"StepState.editing\", \"index\": 1 }",
    complete = "{ \"_name\": \"StepState.complete\", \"index\": 2 }",
    disabled = "{ \"_name\": \"StepState.disabled\", \"index\": 3 }",
    error = "{ \"_name\": \"StepState.error\", \"index\": 4 }"
}
export { StepState };
declare enum StepperType {
    vertical = "{ \"_name\": \"StepperType.vertical\", \"index\": 0 }",
    horizontal = "{ \"_name\": \"StepperType.horizontal\", \"index\": 1 }"
}
export { StepperType };
declare class Step extends MXDartClass {
    title: MXWidget;
    subtitle: MXWidget;
    content: MXWidget;
    state: StepState;
    isActive: boolean;
    constructor(namedParameters?: {
        title?: MXWidget;
        subtitle?: MXWidget;
        content?: MXWidget;
        state?: StepState;
        isActive?: boolean;
    });
}
export { Step };
declare class Stepper extends StatefulWidget$ {
    steps: Array<any>;
    physics: ScrollPhysics;
    type: StepperType;
    currentStep: number;
    onStepTapped: any;
    onStepContinue: any;
    onStepCancel: any;
    controlsBuilder: any;
    constructor(namedParameters?: {
        key?: Key;
        steps?: Array<any>;
        physics?: ScrollPhysics;
        type?: StepperType;
        currentStep?: number;
        onStepTapped?: any;
        onStepContinue?: any;
        onStepCancel?: any;
        controlsBuilder?: any;
    });
}
export { Stepper };
declare class _StepperState extends State$ {
    keys: Array<any>;
    oldStates: Map<any, any>;
}
export { _StepperState };
declare class _TrianglePainter extends CustomPainter {
    color: Color;
    constructor(namedParameters?: {
        color?: Color;
    });
}
export { _TrianglePainter };
