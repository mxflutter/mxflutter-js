// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { CustomPainter } from '../rendering/custom-paint';
import { SemanticsHandle, PipelineOwner } from '../rendering/object';
import { ChangeNotifier } from '../foundation/change-notifier';
import { Offset } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { TextStyle } from '../painting/text-style';
import { StatefulWidget, Widget, State } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SemanticsDebugger extends StatefulWidget {
  child: MXWidget;
  labelStyle: TextStyle;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, labelStyle?: TextStyle} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.labelStyle = namedParameters.labelStyle;
    this.className = 'SemanticsDebugger';
  }
}
export { SemanticsDebugger };
class _SemanticsDebuggerState extends State {
  client: _SemanticsClient;
  lastPointerDownLocation: Offset;
}
export { _SemanticsDebuggerState };
class _SemanticsClient extends ChangeNotifier {
  semanticsHandle: SemanticsHandle;
  generation: number;
  public constructor(pipelineOwner?: PipelineOwner) {
    super();
    this['pipelineOwner'] = pipelineOwner;
    this.className = '_SemanticsClient';
  }
}
export { _SemanticsClient };
class _SemanticsDebuggerPainter extends CustomPainter {
  owner: PipelineOwner;
  generation: number;
  pointerPosition: Offset;
  devicePixelRatio: number;
  labelStyle: TextStyle;
  public constructor(owner?: PipelineOwner, generation?: number, pointerPosition?: Offset, devicePixelRatio?: number, labelStyle?: TextStyle) {
    super();
    this.owner = owner;
    this.generation = generation;
    this.pointerPosition = pointerPosition;
    this.devicePixelRatio = devicePixelRatio;
    this.labelStyle = labelStyle;
    this.className = '_SemanticsDebuggerPainter';
  }
}
export { _SemanticsDebuggerPainter };
