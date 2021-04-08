import { RenderBox } from '../rendering/box';
import { RenderSliverFixedExtentBoxAdaptor } from '../rendering/sliver-fixed-extent-list';
import { Key } from '../foundation/key';
import { Element } from './framework';
import { SliverMultiBoxAdaptorWidget, SliverChildDelegate, SliverMultiBoxAdaptorElement } from './sliver';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class SliverPrototypeExtentList extends SliverMultiBoxAdaptorWidget {
    prototypeItem: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverChildDelegate;
        prototypeItem?: MXWidget;
    });
}
export { SliverPrototypeExtentList };
declare class _SliverPrototypeExtentListElement extends SliverMultiBoxAdaptorElement {
    prototype: Element;
    constructor(widget?: SliverPrototypeExtentList);
}
export { _SliverPrototypeExtentListElement };
declare class _RenderSliverPrototypeExtentList extends RenderSliverFixedExtentBoxAdaptor {
    child: RenderBox;
    constructor(namedParameters?: {
        childManager?: _SliverPrototypeExtentListElement;
    });
}
export { _RenderSliverPrototypeExtentList };
