import { SemanticsGestureDelegate, GestureRecognizerFactory } from './gesture-detector';
import { BaseTapGestureRecognizer } from '../gestures/tap';
import { Animation } from '../animation/animation';
import { AnimatedWidget } from './transitions';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class ModalBarrier extends StatelessWidget {
    color: Color;
    dismissible: boolean;
    barrierSemanticsDismissible: boolean;
    semanticsLabel: string;
    constructor(namedParameters?: {
        key?: Key;
        color?: Color;
        dismissible?: boolean;
        semanticsLabel?: string;
        barrierSemanticsDismissible?: boolean;
    });
}
export { ModalBarrier };
declare class AnimatedModalBarrier extends AnimatedWidget {
    dismissible: boolean;
    semanticsLabel: string;
    barrierSemanticsDismissible: boolean;
    constructor(namedParameters?: {
        key?: Key;
        color?: Animation;
        dismissible?: boolean;
        semanticsLabel?: string;
        barrierSemanticsDismissible?: boolean;
    });
}
export { AnimatedModalBarrier };
declare class _AnyTapGestureRecognizer extends BaseTapGestureRecognizer {
    onAnyTapUp: any;
    constructor(namedParameters?: {
        debugOwner?: any;
    });
}
export { _AnyTapGestureRecognizer };
declare class _ModalBarrierSemanticsDelegate extends SemanticsGestureDelegate {
    onDismiss: any;
    constructor(namedParameters?: {
        onDismiss?: any;
    });
}
export { _ModalBarrierSemanticsDelegate };
declare class _AnyTapGestureRecognizerFactory extends GestureRecognizerFactory {
    onAnyTapUp: any;
    constructor(namedParameters?: {
        onAnyTapUp?: any;
    });
}
export { _AnyTapGestureRecognizerFactory };
declare class _ModalBarrierGestureDetector extends StatelessWidget {
    child: MXWidget;
    onDismiss: any;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        onDismiss?: any;
    });
}
export { _ModalBarrierGestureDetector };
