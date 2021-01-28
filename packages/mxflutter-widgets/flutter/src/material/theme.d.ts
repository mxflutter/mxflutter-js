import { Duration } from '../../../mx-dart-sdk';
import { Curve } from '../animation/curves';
import { ImplicitlyAnimatedWidget, AnimatedWidgetBaseState } from '../widgets/implicit-animations';
import { Tween } from '../animation/tween';
import { InheritedTheme } from '../widgets/inherited-theme';
import { Key } from '../foundation/key';
import { ThemeData } from './theme-data';
import { StatelessWidget$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Theme extends StatelessWidget$ {
    data: ThemeData;
    isMaterialAppTheme: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        data?: ThemeData;
        isMaterialAppTheme?: boolean;
        child?: MXWidget;
    });
    static of(context: any): ThemeData;
}
export { Theme };
declare class _InheritedTheme extends InheritedTheme {
    theme: Theme;
    constructor(namedParameters?: {
        key?: Key;
        theme?: Theme;
        child?: MXWidget;
    });
}
export { _InheritedTheme };
declare class ThemeDataTween extends Tween {
    constructor(namedParameters?: {
        begin?: ThemeData;
        end?: ThemeData;
    });
}
export { ThemeDataTween };
declare class AnimatedTheme extends ImplicitlyAnimatedWidget {
    data: ThemeData;
    isMaterialAppTheme: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        data?: ThemeData;
        isMaterialAppTheme?: boolean;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
        child?: MXWidget;
    });
}
export { AnimatedTheme };
declare class _AnimatedThemeState extends AnimatedWidgetBaseState {
    data: ThemeDataTween;
}
export { _AnimatedThemeState };
