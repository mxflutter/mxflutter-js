import { SliverGridDelegate } from '../rendering/sliver-grid';
import { SliverChildDelegate } from './sliver';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { DragStartBehavior } from '../gestures/recognizer';
import { Key } from '../foundation/key';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { Axis } from '../painting/basic-types';
import { StatelessWidget$ } from './framework';
declare enum ScrollViewKeyboardDismissBehavior {
    manual = "{ \"_name\": \"ScrollViewKeyboardDismissBehavior.manual\", \"index\": 0 }",
    onDrag = "{ \"_name\": \"ScrollViewKeyboardDismissBehavior.onDrag\", \"index\": 1 }"
}
export { ScrollViewKeyboardDismissBehavior };
declare abstract class ScrollView extends StatelessWidget$ {
    scrollDirection: Axis;
    reverse: boolean;
    controller: ScrollController;
    primary: boolean;
    physics: ScrollPhysics;
    shrinkWrap: boolean;
    center: Key;
    anchor: number;
    cacheExtent: number;
    semanticChildCount: number;
    dragStartBehavior: DragStartBehavior;
    keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior;
}
export { ScrollView };
declare class CustomScrollView extends ScrollView {
    slivers: Array<any>;
    constructor(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        center?: Key;
        anchor?: number;
        cacheExtent?: number;
        slivers?: Array<any>;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { CustomScrollView };
declare abstract class BoxScrollView extends ScrollView {
    padding: EdgeInsetsGeometry;
}
export { BoxScrollView };
declare class ListView extends BoxScrollView {
    itemExtent: number;
    childrenDelegate: SliverChildDelegate;
    constructor(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
        itemExtent?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        children?: Array<any>;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    });
    static builder(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
        itemExtent?: number;
        itemBuilder?: any;
        itemCount?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    }): ListView;
    static separated(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
        itemBuilder?: any;
        separatorBuilder?: any;
        itemCount?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        dragStartBehavior?: DragStartBehavior;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    }): ListView;
    static custom(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
        itemExtent?: number;
        childrenDelegate?: SliverChildDelegate;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    }): ListView;
    preBuild(buildContext: any): void;
}
export { ListView };
declare class GridView extends BoxScrollView {
    gridDelegate: SliverGridDelegate;
    childrenDelegate: SliverChildDelegate;
    constructor(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
        gridDelegate?: SliverGridDelegate;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        children?: Array<any>;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    });
    static builder(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
        gridDelegate?: SliverGridDelegate;
        itemBuilder?: any;
        itemCount?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    }): GridView;
    static custom(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
        gridDelegate?: SliverGridDelegate;
        childrenDelegate?: SliverChildDelegate;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    }): GridView;
    static count(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
        crossAxisCount?: number;
        mainAxisSpacing?: number;
        crossAxisSpacing?: number;
        childAspectRatio?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        children?: Array<any>;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    }): GridView;
    static extent(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
        maxCrossAxisExtent?: number;
        mainAxisSpacing?: number;
        crossAxisSpacing?: number;
        childAspectRatio?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        children?: Array<any>;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    }): GridView;
}
export { GridView };
