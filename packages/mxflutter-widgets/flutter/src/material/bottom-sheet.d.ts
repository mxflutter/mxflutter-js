import { RouteSettings } from '../widgets/navigator';
import { ThemeData } from './theme-data';
import { PopupRoute } from '../widgets/routes';
import { ParametricCurve, Curve } from '../animation/curves';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { ShapeBorder } from '../painting/borders';
import { Color, Clip } from '../../../mx-dart-sdk';
import { AnimationController } from '../animation/animation-controller';
import { StatefulWidget, State, GlobalKey } from '../widgets/framework';
declare class BottomSheet extends StatefulWidget {
    animationController: AnimationController;
    onClosing: any;
    builder: any;
    enableDrag: boolean;
    onDragStart: any;
    onDragEnd: any;
    backgroundColor: Color;
    elevation: number;
    shape: ShapeBorder;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        animationController?: AnimationController;
        enableDrag?: boolean;
        onDragStart?: any;
        onDragEnd?: any;
        backgroundColor?: Color;
        elevation?: number;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        onClosing?: any;
        builder?: any;
    });
}
export { BottomSheet };
declare class _BottomSheetState extends State {
    childKey: GlobalKey;
}
export { _BottomSheetState };
declare class _ModalBottomSheetLayout extends SingleChildLayoutDelegate {
    progress: number;
    isScrollControlled: boolean;
    constructor(progress?: number, isScrollControlled?: boolean);
}
export { _ModalBottomSheetLayout };
declare class _ModalBottomSheet extends StatefulWidget {
    route: _ModalBottomSheetRoute;
    isScrollControlled: boolean;
    backgroundColor: Color;
    elevation: number;
    shape: ShapeBorder;
    clipBehavior: Clip;
    enableDrag: boolean;
    constructor(namedParameters?: {
        key?: Key;
        route?: _ModalBottomSheetRoute;
        backgroundColor?: Color;
        elevation?: number;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        isScrollControlled?: boolean;
        enableDrag?: boolean;
    });
}
export { _ModalBottomSheet };
declare class _ModalBottomSheetState extends State {
    animationCurve: ParametricCurve;
}
export { _ModalBottomSheetState };
declare class _ModalBottomSheetRoute extends PopupRoute {
    builder: any;
    theme: ThemeData;
    isScrollControlled: boolean;
    backgroundColor: Color;
    elevation: number;
    shape: ShapeBorder;
    clipBehavior: Clip;
    modalBarrierColor: Color;
    isDismissible: boolean;
    enableDrag: boolean;
    barrierLabel: string;
    animationController: AnimationController;
    constructor(namedParameters?: {
        builder?: any;
        theme?: ThemeData;
        barrierLabel?: string;
        backgroundColor?: Color;
        elevation?: number;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        modalBarrierColor?: Color;
        isDismissible?: boolean;
        enableDrag?: boolean;
        isScrollControlled?: boolean;
        settings?: RouteSettings;
    });
}
export { _ModalBottomSheetRoute };
declare class _BottomSheetSuspendedCurve extends ParametricCurve {
    startingPoint: number;
    curve: Curve;
    constructor(startingPoint?: number, namedParameters?: {
        curve?: Curve;
    });
}
export { _BottomSheetSuspendedCurve };
