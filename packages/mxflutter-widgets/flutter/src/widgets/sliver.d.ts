import { RenderBox } from '../rendering/box';
import { SliverGridDelegate } from '../rendering/sliver-grid';
import { RenderObjectWidget, RenderObjectElement, SingleChildRenderObjectWidget, SingleChildRenderObjectElement, ParentDataWidget } from './framework';
import { Key, ValueKey } from '../foundation/key';
import { MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class SliverChildDelegate extends MXMirrorWidget {
}
export { SliverChildDelegate };
declare class _SaltedValueKey extends ValueKey {
    constructor(key?: Key);
}
export { _SaltedValueKey };
declare class SliverChildBuilderDelegate extends SliverChildDelegate {
    builder: any;
    childCount: number;
    addAutomaticKeepAlives: boolean;
    addRepaintBoundaries: boolean;
    addSemanticIndexes: boolean;
    semanticIndexOffset: number;
    semanticIndexCallback: any;
    findChildIndexCallback: any;
    constructor(builder?: any, namedParameters?: {
        findChildIndexCallback?: any;
        childCount?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        semanticIndexCallback?: any;
        semanticIndexOffset?: number;
    });
    preBuild(buildContext: any): void;
}
export { SliverChildBuilderDelegate };
declare class SliverChildListDelegate extends SliverChildDelegate {
    addAutomaticKeepAlives: boolean;
    addRepaintBoundaries: boolean;
    addSemanticIndexes: boolean;
    semanticIndexOffset: number;
    semanticIndexCallback: any;
    children: Array<any>;
    keyToIndex: Map<any, any>;
    constructor(children?: Array<any>, namedParameters?: {
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        semanticIndexCallback?: any;
        semanticIndexOffset?: number;
    });
    static fixed(children?: Array<any>, namedParameters?: {
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        semanticIndexCallback?: any;
        semanticIndexOffset?: number;
    }): SliverChildListDelegate;
}
export { SliverChildListDelegate };
declare abstract class SliverWithKeepAliveWidget extends RenderObjectWidget {
}
export { SliverWithKeepAliveWidget };
declare abstract class SliverMultiBoxAdaptorWidget extends SliverWithKeepAliveWidget {
    delegate: SliverChildDelegate;
}
export { SliverMultiBoxAdaptorWidget };
declare class SliverList extends SliverMultiBoxAdaptorWidget {
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverChildDelegate;
    });
}
export { SliverList };
declare class SliverFixedExtentList extends SliverMultiBoxAdaptorWidget {
    itemExtent: number;
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverChildDelegate;
        itemExtent?: number;
    });
}
export { SliverFixedExtentList };
declare class SliverGrid extends SliverMultiBoxAdaptorWidget {
    gridDelegate: SliverGridDelegate;
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SliverChildDelegate;
        gridDelegate?: SliverGridDelegate;
    });
    static count(namedParameters?: {
        key?: Key;
        crossAxisCount?: number;
        mainAxisSpacing?: number;
        crossAxisSpacing?: number;
        childAspectRatio?: number;
        children?: Array<any>;
    }): SliverGrid;
    static extent(namedParameters?: {
        key?: Key;
        maxCrossAxisExtent?: number;
        mainAxisSpacing?: number;
        crossAxisSpacing?: number;
        childAspectRatio?: number;
        children?: Array<any>;
    }): SliverGrid;
}
export { SliverGrid };
declare class SliverMultiBoxAdaptorElement extends RenderObjectElement {
    childWidgets: Map<any, any>;
    childElements: any;
    currentBeforeChild: RenderBox;
    currentlyUpdatingChildIndex: number;
    didUnderflow: boolean;
    constructor(widget?: SliverMultiBoxAdaptorWidget);
}
export { SliverMultiBoxAdaptorElement };
declare class SliverOpacity extends SingleChildRenderObjectWidget {
    opacity: number;
    alwaysIncludeSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        opacity?: number;
        alwaysIncludeSemantics?: boolean;
        sliver?: MXWidget;
    });
}
export { SliverOpacity };
declare class SliverIgnorePointer extends SingleChildRenderObjectWidget {
    ignoring: boolean;
    ignoringSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        ignoring?: boolean;
        ignoringSemantics?: boolean;
        sliver?: MXWidget;
    });
}
export { SliverIgnorePointer };
declare class SliverOffstage extends SingleChildRenderObjectWidget {
    offstage: boolean;
    constructor(namedParameters?: {
        key?: Key;
        offstage?: boolean;
        sliver?: MXWidget;
    });
}
export { SliverOffstage };
declare class _SliverOffstageElement extends SingleChildRenderObjectElement {
    constructor(widget?: SliverOffstage);
}
export { _SliverOffstageElement };
declare class KeepAlive extends ParentDataWidget {
    keepAlive: boolean;
    constructor(namedParameters?: {
        key?: Key;
        keepAlive?: boolean;
        child?: MXWidget;
    });
}
export { KeepAlive };
