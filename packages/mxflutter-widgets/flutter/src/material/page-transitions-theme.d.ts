import { Key } from '../foundation/key';
import { Animation } from '../animation/animation';
import { StatelessWidget } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _FadeUpwardsPageTransition extends StatelessWidget {
    positionAnimation: Animation;
    opacityAnimation: Animation;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        routeAnimation?: Animation;
        child?: MXWidget;
    });
}
export { _FadeUpwardsPageTransition };
declare class _OpenUpwardsPageTransition extends StatelessWidget {
    animation: Animation;
    secondaryAnimation: Animation;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        animation?: Animation;
        secondaryAnimation?: Animation;
        child?: MXWidget;
    });
}
export { _OpenUpwardsPageTransition };
declare class _ZoomPageTransition extends StatelessWidget {
    animation: Animation;
    secondaryAnimation: Animation;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        animation?: Animation;
        secondaryAnimation?: Animation;
        child?: MXWidget;
    });
}
export { _ZoomPageTransition };
declare class _ZoomEnterTransition extends StatelessWidget {
    animation: Animation;
    child: MXWidget;
    reverse: boolean;
    constructor(namedParameters?: {
        key?: Key;
        animation?: Animation;
        reverse?: boolean;
        child?: MXWidget;
    });
}
export { _ZoomEnterTransition };
declare class _ZoomExitTransition extends StatelessWidget {
    animation: Animation;
    reverse: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        animation?: Animation;
        reverse?: boolean;
        child?: MXWidget;
    });
}
export { _ZoomExitTransition };
declare abstract class PageTransitionsBuilder extends MXDartClass {
}
export { PageTransitionsBuilder };
declare class FadeUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {
}
export { FadeUpwardsPageTransitionsBuilder };
declare class OpenUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {
}
export { OpenUpwardsPageTransitionsBuilder };
declare class ZoomPageTransitionsBuilder extends PageTransitionsBuilder {
}
export { ZoomPageTransitionsBuilder };
declare class CupertinoPageTransitionsBuilder extends PageTransitionsBuilder {
}
export { CupertinoPageTransitionsBuilder };
declare class PageTransitionsTheme extends MXDartClass {
    builders: Map<any, any>;
    constructor(namedParameters?: {
        builders?: Map<any, any>;
    });
}
export { PageTransitionsTheme };
