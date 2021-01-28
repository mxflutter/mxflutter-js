import { Animation } from '../animation/animation';
import { RenderSliver } from './sliver';
declare abstract class RenderProxySliver extends RenderSliver {
}
export { RenderProxySliver };
declare class RenderSliverOpacity extends RenderProxySliver {
    alpha: number;
    opacity: number;
    alwaysIncludeSemantics: boolean;
    constructor(namedParameters?: {
        opacity?: number;
        alwaysIncludeSemantics?: boolean;
        sliver?: RenderSliver;
    });
}
export { RenderSliverOpacity };
declare class RenderSliverIgnorePointer extends RenderProxySliver {
    ignoring: boolean;
    ignoringSemantics: boolean;
    constructor(namedParameters?: {
        sliver?: RenderSliver;
        ignoring?: boolean;
        ignoringSemantics?: boolean;
    });
}
export { RenderSliverIgnorePointer };
declare class RenderSliverOffstage extends RenderProxySliver {
    offstage: boolean;
    constructor(namedParameters?: {
        offstage?: boolean;
        sliver?: RenderSliver;
    });
}
export { RenderSliverOffstage };
declare class RenderSliverAnimatedOpacity extends RenderProxySliver {
    constructor(namedParameters?: {
        opacity?: Animation;
        alwaysIncludeSemantics?: boolean;
        sliver?: RenderSliver;
    });
}
export { RenderSliverAnimatedOpacity };
