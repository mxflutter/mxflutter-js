import { RenderBox } from './box';
import { BindingBase } from '../foundation/binding';
import { PipelineOwner, SemanticsHandle } from './object';
import { MouseTracker } from './mouse-tracking';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class RendererBinding extends MXDartClass {
    debugIsRenderViewInitialized: boolean;
    mouseTracker: MouseTracker;
    pipelineOwner: PipelineOwner;
    semanticsHandle: SemanticsHandle;
    debugMouseTrackerUpdateScheduled: boolean;
    firstFrameDeferredCount: number;
    firstFrameSent: boolean;
}
export { RendererBinding };
declare class RenderingFlutterBinding extends BindingBase {
    constructor(namedParameters?: {
        root?: RenderBox;
    });
}
export { RenderingFlutterBinding };
