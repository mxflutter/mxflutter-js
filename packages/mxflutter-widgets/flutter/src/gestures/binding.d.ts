import { PointerSignalResolver } from './pointer-signal-resolver';
import { GestureArenaManager } from './arena';
import { PointerRouter } from './pointer-router';
import { BindingBase } from '../foundation/binding';
declare abstract class GestureBinding extends BindingBase {
    pendingPointerEvents: any;
    pointerRouter: PointerRouter;
    gestureArena: GestureArenaManager;
    pointerSignalResolver: PointerSignalResolver;
    hitTests: Map<any, any>;
}
export { GestureBinding };
