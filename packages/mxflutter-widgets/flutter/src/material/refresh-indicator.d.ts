import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget, State } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum _RefreshIndicatorMode {
    drag = "{ \"_name\": \"_RefreshIndicatorMode.drag\", \"index\": 0 }",
    armed = "{ \"_name\": \"_RefreshIndicatorMode.armed\", \"index\": 1 }",
    snap = "{ \"_name\": \"_RefreshIndicatorMode.snap\", \"index\": 2 }",
    refresh = "{ \"_name\": \"_RefreshIndicatorMode.refresh\", \"index\": 3 }",
    done = "{ \"_name\": \"_RefreshIndicatorMode.done\", \"index\": 4 }",
    canceled = "{ \"_name\": \"_RefreshIndicatorMode.canceled\", \"index\": 5 }"
}
export { _RefreshIndicatorMode };
declare class RefreshIndicator extends StatefulWidget {
    child: MXWidget;
    displacement: number;
    onRefresh: any;
    color: Color;
    backgroundColor: Color;
    notificationPredicate: any;
    semanticsLabel: string;
    semanticsValue: string;
    strokeWidth: number;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        displacement?: number;
        onRefresh?: any;
        color?: Color;
        backgroundColor?: Color;
        notificationPredicate?: any;
        semanticsLabel?: string;
        semanticsValue?: string;
        strokeWidth?: number;
    });
}
export { RefreshIndicator };
declare class RefreshIndicatorState extends State {
    positionController: AnimationController;
    scaleController: AnimationController;
    positionFactor: Animation;
    scaleFactor: Animation;
    value: Animation;
    valueColor: Animation;
    mode: _RefreshIndicatorMode;
    pendingRefreshFuture: any;
    isIndicatorAtTop: boolean;
    dragOffset: number;
}
export { RefreshIndicatorState };
