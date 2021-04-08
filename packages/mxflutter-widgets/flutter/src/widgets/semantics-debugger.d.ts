import { CustomPainter } from '../rendering/custom-paint';
import { SemanticsHandle, PipelineOwner } from '../rendering/object';
import { ChangeNotifier } from '../foundation/change-notifier';
import { Offset } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { TextStyle } from '../painting/text-style';
import { StatefulWidget, State } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class SemanticsDebugger extends StatefulWidget {
    child: MXWidget;
    labelStyle: TextStyle;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        labelStyle?: TextStyle;
    });
}
export { SemanticsDebugger };
declare class _SemanticsDebuggerState extends State {
    client: _SemanticsClient;
    lastPointerDownLocation: Offset;
}
export { _SemanticsDebuggerState };
declare class _SemanticsClient extends ChangeNotifier {
    semanticsHandle: SemanticsHandle;
    generation: number;
    constructor(pipelineOwner?: PipelineOwner);
}
export { _SemanticsClient };
declare class _SemanticsDebuggerPainter extends CustomPainter {
    owner: PipelineOwner;
    generation: number;
    pointerPosition: Offset;
    devicePixelRatio: number;
    labelStyle: TextStyle;
    constructor(owner?: PipelineOwner, generation?: number, pointerPosition?: Offset, devicePixelRatio?: number, labelStyle?: TextStyle);
}
export { _SemanticsDebuggerPainter };
