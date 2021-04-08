import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { ScrollDragController } from './scroll-activity';
import { ScrollDirection } from '../rendering/viewport-offset';
import { ScrollPosition } from './scroll-position';
declare class ScrollPositionWithSingleContext extends ScrollPosition {
    heldPreviousVelocity: number;
    userScrollDirection: ScrollDirection;
    currentDrag: ScrollDragController;
    constructor(namedParameters?: {
        physics?: ScrollPhysics;
        context?: ScrollContext;
        initialPixels?: number;
        keepScrollOffset?: boolean;
        oldPosition?: ScrollPosition;
        debugLabel?: string;
    });
}
export { ScrollPositionWithSingleContext };
