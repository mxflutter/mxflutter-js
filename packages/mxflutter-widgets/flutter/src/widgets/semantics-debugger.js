//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomPainter } from '../rendering/custom-paint';
import { ChangeNotifier } from '../foundation/change-notifier';
import { StatefulWidget$, State$ } from './framework';
class SemanticsDebugger extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.labelStyle = namedParameters.labelStyle;
        this.className = 'SemanticsDebugger';
    }
}
export { SemanticsDebugger };
class _SemanticsDebuggerState extends State$ {
}
export { _SemanticsDebuggerState };
class _SemanticsClient extends ChangeNotifier {
    constructor(pipelineOwner) {
        super();
        this['pipelineOwner'] = pipelineOwner;
        this.className = '_SemanticsClient';
    }
}
export { _SemanticsClient };
class _SemanticsDebuggerPainter extends CustomPainter {
    constructor(owner, generation, pointerPosition, devicePixelRatio, labelStyle) {
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
