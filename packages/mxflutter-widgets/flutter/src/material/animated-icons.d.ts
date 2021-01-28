import { CustomPainter } from '../rendering/custom-paint';
import { Key } from '../foundation/key';
import { Color, TextDirection, Size } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { StatelessWidget$ } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class AnimatedIcon extends StatelessWidget$ {
    progress: Animation;
    color: Color;
    size: number;
    icon: AnimatedIconData;
    semanticLabel: string;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        key?: Key;
        icon?: AnimatedIconData;
        progress?: Animation;
        color?: Color;
        size?: number;
        semanticLabel?: string;
        textDirection?: TextDirection;
    });
}
export { AnimatedIcon };
declare class _AnimatedIconPainter extends CustomPainter {
    paths: Array<any>;
    progress: Animation;
    color: Color;
    scale: number;
    shouldMirror: boolean;
    uiPathFactory: any;
    constructor(namedParameters?: {
        paths?: Array<any>;
        progress?: Animation;
        color?: Color;
        scale?: number;
        shouldMirror?: boolean;
        uiPathFactory?: any;
    });
}
export { _AnimatedIconPainter };
declare class _PathFrames extends MXDartClass {
    commands: Array<any>;
    opacities: Array<any>;
    constructor(namedParameters?: {
        commands?: Array<any>;
        opacities?: Array<any>;
    });
}
export { _PathFrames };
declare abstract class _PathCommand extends MXDartClass {
}
export { _PathCommand };
declare class _PathMoveTo extends _PathCommand {
    points: Array<any>;
    constructor(points?: Array<any>);
}
export { _PathMoveTo };
declare class _PathCubicTo extends _PathCommand {
    controlPoints2: Array<any>;
    controlPoints1: Array<any>;
    targetPoints: Array<any>;
    constructor(controlPoints1?: Array<any>, controlPoints2?: Array<any>, targetPoints?: Array<any>);
}
export { _PathCubicTo };
declare class _PathLineTo extends _PathCommand {
    points: Array<any>;
    constructor(points?: Array<any>);
}
export { _PathLineTo };
declare class _PathClose extends _PathCommand {
}
export { _PathClose };
declare abstract class AnimatedIcons extends MXDartClass {
    static get add_event(): {
        className: string;
        mirrorID: string;
    };
    static get arrow_menu(): {
        className: string;
        mirrorID: string;
    };
    static get close_menu(): {
        className: string;
        mirrorID: string;
    };
    static get ellipsis_search(): {
        className: string;
        mirrorID: string;
    };
    static get event_add(): {
        className: string;
        mirrorID: string;
    };
    static get home_menu(): {
        className: string;
        mirrorID: string;
    };
    static get list_view(): {
        className: string;
        mirrorID: string;
    };
    static get menu_arrow(): {
        className: string;
        mirrorID: string;
    };
    static get menu_close(): {
        className: string;
        mirrorID: string;
    };
    static get menu_home(): {
        className: string;
        mirrorID: string;
    };
    static get pause_play(): {
        className: string;
        mirrorID: string;
    };
    static get play_pause(): {
        className: string;
        mirrorID: string;
    };
    static get search_ellipsis(): {
        className: string;
        mirrorID: string;
    };
    static get view_list(): {
        className: string;
        mirrorID: string;
    };
}
export { AnimatedIcons };
declare abstract class AnimatedIconData extends MXDartClass {
}
export { AnimatedIconData };
declare class _AnimatedIconData extends AnimatedIconData {
    size: Size;
    paths: Array<any>;
    matchTextDirection: boolean;
    constructor(size?: Size, paths?: Array<any>, namedParameters?: {
        matchTextDirection?: boolean;
    });
}
export { _AnimatedIconData };
