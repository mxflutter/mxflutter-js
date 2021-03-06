// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { FocusNode } from './focus-manager';
import { StatefulWidget, Widget, State } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RawKeyboardListener extends StatefulWidget {
  focusNode: FocusNode;
  autofocus: boolean;
  includeSemantics: boolean;
  onKey: any;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, focusNode?: FocusNode, autofocus?: boolean, includeSemantics?: boolean, onKey?: any, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.includeSemantics = namedParameters.includeSemantics;
    this.onKey = namedParameters.onKey;
    this.child = namedParameters.child;
    this.className = 'RawKeyboardListener';
  }
}
export { RawKeyboardListener };
class _RawKeyboardListenerState extends State {
  listening: boolean;
}
export { _RawKeyboardListenerState };
