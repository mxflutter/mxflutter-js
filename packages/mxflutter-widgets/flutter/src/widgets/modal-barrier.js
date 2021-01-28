//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { SemanticsGestureDelegate, GestureRecognizerFactory } from './gesture-detector';
import { BaseTapGestureRecognizer } from '../gestures/tap';
import { AnimatedWidget } from './transitions';
import { StatelessWidget$ } from './framework';
class ModalBarrier extends StatelessWidget$ {
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
export { ModalBarrier };
class AnimatedModalBarrier extends AnimatedWidget {
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
export { AnimatedModalBarrier };
class _AnyTapGestureRecognizer extends BaseTapGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.debugOwner = namedParameters.debugOwner;
        this.className = '_AnyTapGestureRecognizer';
    }
}
export { _AnyTapGestureRecognizer };
class _ModalBarrierSemanticsDelegate extends SemanticsGestureDelegate {
    constructor(namedParameters = {}) {
        super();
        this.onDismiss = namedParameters.onDismiss;
        this.className = '_ModalBarrierSemanticsDelegate';
    }
}
export { _ModalBarrierSemanticsDelegate };
class _AnyTapGestureRecognizerFactory extends GestureRecognizerFactory {
    constructor(namedParameters = {}) {
        super();
        this.onAnyTapUp = namedParameters.onAnyTapUp;
        this.className = '_AnyTapGestureRecognizerFactory';
    }
}
export { _AnyTapGestureRecognizerFactory };
class _ModalBarrierGestureDetector extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.onDismiss = namedParameters.onDismiss;
        this.className = '_ModalBarrierGestureDetector';
    }
}
export { _ModalBarrierGestureDetector };
