"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AnimatedThemeState = exports.AnimatedTheme = exports.ThemeDataTween = exports._InheritedTheme = exports.Theme = void 0;
const implicit_animations_1 = require("../widgets/implicit-animations");
const tween_1 = require("../animation/tween");
const inherited_theme_1 = require("../widgets/inherited-theme");
const theme_data_1 = require("./theme-data");
const framework_1 = require("../widgets/framework");
class Theme extends framework_1.StatelessWidget {
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
            return theme_data_1.ThemeData.fromJson(jsonMap);
        });
        return widgetOfData;
    }
}
exports.Theme = Theme;
class _InheritedTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.theme = namedParameters.theme;
        this.child = namedParameters.child;
        this.className = '_InheritedTheme';
    }
}
exports._InheritedTheme = _InheritedTheme;
class ThemeDataTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'ThemeDataTween';
    }
}
exports.ThemeDataTween = ThemeDataTween;
class AnimatedTheme extends implicit_animations_1.ImplicitlyAnimatedWidget {
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
exports.AnimatedTheme = AnimatedTheme;
class _AnimatedThemeState extends implicit_animations_1.AnimatedWidgetBaseState {
}
exports._AnimatedThemeState = _AnimatedThemeState;
