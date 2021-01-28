import { RenderBox } from '../rendering/box';
import { FocusNode } from '../widgets/focus-manager';
import { MouseCursor } from '../rendering/mouse-cursor';
import { VisualDensity } from './theme-data';
import { StatelessWidget$, RenderObjectWidget, RenderObjectElement } from '../widgets/framework';
import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, TextDirection, TextBaseline } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum ListTileStyle {
    list = "{ \"_name\": \"ListTileStyle.list\", \"index\": 0 }",
    drawer = "{ \"_name\": \"ListTileStyle.drawer\", \"index\": 1 }"
}
export { ListTileStyle };
declare class ListTileTheme extends InheritedTheme {
    dense: boolean;
    shape: ShapeBorder;
    style: ListTileStyle;
    selectedColor: Color;
    iconColor: Color;
    textColor: Color;
    contentPadding: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        key?: Key;
        dense?: boolean;
        shape?: ShapeBorder;
        style?: ListTileStyle;
        selectedColor?: Color;
        iconColor?: Color;
        textColor?: Color;
        contentPadding?: EdgeInsetsGeometry;
        child?: MXWidget;
    });
}
export { ListTileTheme };
declare enum ListTileControlAffinity {
    leading = "{ \"_name\": \"ListTileControlAffinity.leading\", \"index\": 0 }",
    trailing = "{ \"_name\": \"ListTileControlAffinity.trailing\", \"index\": 1 }",
    platform = "{ \"_name\": \"ListTileControlAffinity.platform\", \"index\": 2 }"
}
export { ListTileControlAffinity };
declare class ListTile extends StatelessWidget$ {
    leading: MXWidget;
    title: MXWidget;
    subtitle: MXWidget;
    trailing: MXWidget;
    isThreeLine: boolean;
    dense: boolean;
    visualDensity: VisualDensity;
    shape: ShapeBorder;
    contentPadding: EdgeInsetsGeometry;
    enabled: boolean;
    onTap: any;
    onLongPress: any;
    mouseCursor: MouseCursor;
    selected: boolean;
    focusColor: Color;
    hoverColor: Color;
    focusNode: FocusNode;
    autofocus: boolean;
    constructor(namedParameters?: {
        key?: Key;
        leading?: MXWidget;
        title?: MXWidget;
        subtitle?: MXWidget;
        trailing?: MXWidget;
        isThreeLine?: boolean;
        dense?: boolean;
        visualDensity?: VisualDensity;
        shape?: ShapeBorder;
        contentPadding?: EdgeInsetsGeometry;
        enabled?: boolean;
        onTap?: any;
        onLongPress?: any;
        mouseCursor?: MouseCursor;
        selected?: boolean;
        focusColor?: Color;
        hoverColor?: Color;
        focusNode?: FocusNode;
        autofocus?: boolean;
    });
}
export { ListTile };
declare enum _ListTileSlot {
    leading = "{ \"_name\": \"_ListTileSlot.leading\", \"index\": 0 }",
    title = "{ \"_name\": \"_ListTileSlot.title\", \"index\": 1 }",
    subtitle = "{ \"_name\": \"_ListTileSlot.subtitle\", \"index\": 2 }",
    trailing = "{ \"_name\": \"_ListTileSlot.trailing\", \"index\": 3 }"
}
export { _ListTileSlot };
declare class _ListTile extends RenderObjectWidget {
    leading: MXWidget;
    title: MXWidget;
    subtitle: MXWidget;
    trailing: MXWidget;
    isThreeLine: boolean;
    isDense: boolean;
    visualDensity: VisualDensity;
    textDirection: TextDirection;
    titleBaselineType: TextBaseline;
    subtitleBaselineType: TextBaseline;
    constructor(namedParameters?: {
        key?: Key;
        leading?: MXWidget;
        title?: MXWidget;
        subtitle?: MXWidget;
        trailing?: MXWidget;
        isThreeLine?: boolean;
        isDense?: boolean;
        visualDensity?: VisualDensity;
        textDirection?: TextDirection;
        titleBaselineType?: TextBaseline;
        subtitleBaselineType?: TextBaseline;
    });
}
export { _ListTile };
declare class _ListTileElement extends RenderObjectElement {
    slotToChild: Map<any, any>;
    childToSlot: Map<any, any>;
    constructor(widget?: _ListTile);
}
export { _ListTileElement };
declare class _RenderListTile extends RenderBox {
    slotToChild: Map<any, any>;
    childToSlot: Map<any, any>;
    leading: RenderBox;
    title: RenderBox;
    subtitle: RenderBox;
    trailing: RenderBox;
    isDense: boolean;
    visualDensity: VisualDensity;
    isThreeLine: boolean;
    textDirection: TextDirection;
    titleBaselineType: TextBaseline;
    subtitleBaselineType: TextBaseline;
    constructor(namedParameters?: {
        isDense?: boolean;
        visualDensity?: VisualDensity;
        isThreeLine?: boolean;
        textDirection?: TextDirection;
        titleBaselineType?: TextBaseline;
        subtitleBaselineType?: TextBaseline;
    });
}
export { _RenderListTile };
