// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { SemanticsGestureDelegate, GestureRecognizerFactory } from './gesture-detector';
import { BaseTapGestureRecognizer } from '../gestures/tap';
import { Animation } from '../animation/animation';
import { AnimatedWidget } from './transitions';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ModalBarrier extends StatelessWidget {
  color: Color;
  dismissible: boolean;
  barrierSemanticsDismissible: boolean;
  semanticsLabel: string;
  public constructor(namedParameters: {key?: Key, color?: Color, dismissible?: boolean, semanticsLabel?: string, barrierSemanticsDismissible?: boolean} = {}) {
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
  dismissible: boolean;
  semanticsLabel: string;
  barrierSemanticsDismissible: boolean;
  public constructor(namedParameters: {key?: Key, color?: Animation, dismissible?: boolean, semanticsLabel?: string, barrierSemanticsDismissible?: boolean} = {}) {
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
  onAnyTapUp: any;
  public constructor(namedParameters: {debugOwner?: any} = {}) {
    super();
    this.debugOwner = namedParameters.debugOwner;
    this.className = '_AnyTapGestureRecognizer';
  }
}
export { _AnyTapGestureRecognizer };
class _ModalBarrierSemanticsDelegate extends SemanticsGestureDelegate {
  onDismiss: any;
  public constructor(namedParameters: {onDismiss?: any} = {}) {
    super();
    this.onDismiss = namedParameters.onDismiss;
    this.className = '_ModalBarrierSemanticsDelegate';
  }
}
export { _ModalBarrierSemanticsDelegate };
class _AnyTapGestureRecognizerFactory extends GestureRecognizerFactory {
  onAnyTapUp: any;
  public constructor(namedParameters: {onAnyTapUp?: any} = {}) {
    super();
    this.onAnyTapUp = namedParameters.onAnyTapUp;
    this.className = '_AnyTapGestureRecognizerFactory';
  }
}
export { _AnyTapGestureRecognizerFactory };
class _ModalBarrierGestureDetector extends StatelessWidget {
  child: MXWidget;
  onDismiss: any;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, onDismiss?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.onDismiss = namedParameters.onDismiss;
    this.className = '_ModalBarrierGestureDetector';
  }
}
export { _ModalBarrierGestureDetector };
