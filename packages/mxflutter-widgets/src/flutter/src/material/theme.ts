// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { Curve } from '../animation/curves';
import { ImplicitlyAnimatedWidget, AnimatedWidgetBaseState } from '../widgets/implicit-animations';
import { Tween } from '../animation/tween';
import { InheritedTheme } from '../widgets/inherited-theme';
import { Key } from '../foundation/key';
import { ThemeData } from './theme-data';
import { StatelessWidget, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Theme extends StatelessWidget {
  data: ThemeData;
  isMaterialAppTheme: boolean;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, data?: ThemeData, isMaterialAppTheme?: boolean, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.isMaterialAppTheme = namedParameters.isMaterialAppTheme;
    this.child = namedParameters.child;
    this.className = 'Theme';
  }
  // MX modified begin
  public static of(context: any): ThemeData {
    let widgetOfData = context.dependOnInheritedWidget('Theme', (jsonMap: any) => {
      return ThemeData.fromJson(jsonMap);
    });
    return widgetOfData;
  }
  // MX modified end
}
export { Theme };
class _InheritedTheme extends InheritedTheme {
  theme: Theme;
  public constructor(namedParameters: {key?: Key, theme?: Theme, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.theme = namedParameters.theme;
    this.child = namedParameters.child;
    this.className = '_InheritedTheme';
  }
}
export { _InheritedTheme };
class ThemeDataTween extends Tween {
  public constructor(namedParameters: {begin?: ThemeData, end?: ThemeData} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'ThemeDataTween';
  }
}
export { ThemeDataTween };
class AnimatedTheme extends ImplicitlyAnimatedWidget {
  data: ThemeData;
  isMaterialAppTheme: boolean;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, data?: ThemeData, isMaterialAppTheme?: boolean, curve?: Curve, duration?: Duration, onEnd?: any, child?: MXWidget} = {}) {
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
  data: ThemeDataTween;
}
export { _AnimatedThemeState };
