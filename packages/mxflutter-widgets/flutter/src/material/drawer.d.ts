import { ColorTween } from '../animation/tween';
import { AnimationController } from '../animation/animation-controller';
import { FocusScopeNode } from '../widgets/focus-manager';
import { LocalHistoryEntry } from '../widgets/routes';
import { Color } from '../../../mx-dart-sdk';
import { DragStartBehavior } from '../gestures/recognizer';
import { Key } from '../foundation/key';
import { StatelessWidget, StatefulWidget, GlobalKey, State } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum DrawerAlignment {
    start = "{ \"_name\": \"DrawerAlignment.start\", \"index\": 0 }",
    end = "{ \"_name\": \"DrawerAlignment.end\", \"index\": 1 }"
}
export { DrawerAlignment };
declare class Drawer extends StatelessWidget {
    elevation: number;
    child: MXWidget;
    semanticLabel: string;
    constructor(namedParameters?: {
        key?: Key;
        elevation?: number;
        child?: MXWidget;
        semanticLabel?: string;
    });
}
export { Drawer };
declare class DrawerController extends StatefulWidget {
    child: MXWidget;
    alignment: DrawerAlignment;
    drawerCallback: any;
    dragStartBehavior: DragStartBehavior;
    scrimColor: Color;
    enableOpenDragGesture: boolean;
    edgeDragWidth: number;
    constructor(namedParameters?: {
        key?: GlobalKey;
        child?: MXWidget;
        alignment?: DrawerAlignment;
        drawerCallback?: any;
        dragStartBehavior?: DragStartBehavior;
        scrimColor?: Color;
        edgeDragWidth?: number;
        enableOpenDragGesture?: boolean;
    });
}
export { DrawerController };
declare class DrawerControllerState extends State {
    historyEntry: LocalHistoryEntry;
    focusScopeNode: FocusScopeNode;
    controller: AnimationController;
    drawerKey: GlobalKey;
    previouslyOpened: boolean;
    scrimColorTween: ColorTween;
    gestureDetectorKey: GlobalKey;
}
export { DrawerControllerState };
