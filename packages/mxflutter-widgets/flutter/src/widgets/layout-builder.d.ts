import { RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { RenderObjectWithChildMixin, Constraints } from '../rendering/object';
import { RenderObjectWidget, RenderObjectElement, Element$ } from './framework';
declare abstract class ConstrainedLayoutBuilder extends RenderObjectWidget {
    builder: any;
}
export { ConstrainedLayoutBuilder };
declare class _LayoutBuilderElement extends RenderObjectElement {
    child: Element$;
    constructor(widget?: ConstrainedLayoutBuilder);
}
export { _LayoutBuilderElement };
declare abstract class RenderConstrainedLayoutBuilder extends RenderObjectWithChildMixin {
    callback: any;
    needsBuild: boolean;
    previousConstraints: Constraints;
}
export { RenderConstrainedLayoutBuilder };
declare class LayoutBuilder extends ConstrainedLayoutBuilder {
    constructor(namedParameters?: {
        key?: Key;
        builder?: any;
    });
}
export { LayoutBuilder };
declare class _RenderLayoutBuilder extends RenderBox {
}
export { _RenderLayoutBuilder };
