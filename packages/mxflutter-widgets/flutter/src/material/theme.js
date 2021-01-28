//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ImplicitlyAnimatedWidget, AnimatedWidgetBaseState } from '../widgets/implicit-animations';
import { Tween } from '../animation/tween';
import { InheritedTheme } from '../widgets/inherited-theme';
import { ThemeData } from './theme-data';
import { StatelessWidget$ } from '../widgets/framework';
class Theme extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.isMaterialAppTheme = namedParameters.isMaterialAppTheme;
        this.child = namedParameters.child;
        this.className = 'Theme';
    }
    // MX modified begin
    static of(context) {
        let widgetOfData = context.dependOnInheritedWidget('Theme', (jsonMap) => {
            return ThemeData.fromJson(jsonMap);
        });
        return widgetOfData;
    }
}
export { Theme };
class _InheritedTheme extends InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.theme = namedParameters.theme;
        this.child = namedParameters.child;
        this.className = '_InheritedTheme';
    }
}
export { _InheritedTheme };
class ThemeDataTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'ThemeDataTween';
    }
}
export { ThemeDataTween };
class AnimatedTheme extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.isMaterialAppTheme = namedParameters.isMaterialAppTheme;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.child = namedParameters.child;
        this.className = 'AnimatedTheme';
    }
}
export { AnimatedTheme };
class _AnimatedThemeState extends AnimatedWidgetBaseState {
}
export { _AnimatedThemeState };
