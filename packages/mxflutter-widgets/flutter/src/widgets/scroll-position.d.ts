import { ScrollActivity } from './scroll-activity';
import { ValueNotifier } from '../foundation/change-notifier';
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { ViewportOffset } from '../rendering/viewport-offset';
declare enum ScrollPositionAlignmentPolicy {
    explicit = "{ \"_name\": \"ScrollPositionAlignmentPolicy.explicit\", \"index\": 0 }",
    keepVisibleAtEnd = "{ \"_name\": \"ScrollPositionAlignmentPolicy.keepVisibleAtEnd\", \"index\": 1 }",
    keepVisibleAtStart = "{ \"_name\": \"ScrollPositionAlignmentPolicy.keepVisibleAtStart\", \"index\": 2 }"
}
export { ScrollPositionAlignmentPolicy };
declare abstract class ScrollPosition extends ViewportOffset {
    physics: ScrollPhysics;
    context: ScrollContext;
    keepScrollOffset: boolean;
    debugLabel: string;
    minScrollExtent: number;
    maxScrollExtent: number;
    pixels: number;
    viewportDimension: number;
    haveDimensions: boolean;
    didChangeViewportDimensionOrReceiveCorrection: boolean;
    semanticActions: Set<any>;
    isScrollingNotifier: ValueNotifier;
    activity: ScrollActivity;
}
export { ScrollPosition };
