// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MouseCursor } from '../rendering/mouse-cursor';
import { MaterialStateProperty } from './material-state';
import { Widget, StatelessWidget } from '../widgets/framework';
import { Clip, Color } from '../../../mx-dart-sdk';
import { FocusNode } from '../widgets/focus-manager';
import { ButtonStyle } from './button-style';
import { Key } from '../foundation/key';
import { ButtonStyleButton } from './button-style-button';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ElevatedButton extends ButtonStyleButton {
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, style?: ButtonStyle, focusNode?: FocusNode, autofocus?: boolean, clipBehavior?: Clip, child?: MXWidget} = {}) {
    super();
    this['key'] = namedParameters.key;
    this['onPressed'] = namedParameters.onPressed;
    this['onLongPress'] = namedParameters.onLongPress;
    this['style'] = namedParameters.style;
    this['focusNode'] = namedParameters.focusNode;
    this['autofocus'] = namedParameters.autofocus;
    this['clipBehavior'] = namedParameters.clipBehavior;
    this['child'] = namedParameters.child;
    this.className = 'ElevatedButton';
  }
  static icon(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, style?: ButtonStyle, focusNode?: FocusNode, autofocus?: boolean, clipBehavior?: Clip, icon?: MXWidget, label?: MXWidget} = {}) {
    var jsObj = new ElevatedButton();
    jsObj['key'] = namedParameters.key;
    jsObj['onPressed'] = namedParameters.onPressed;
    jsObj['onLongPress'] = namedParameters.onLongPress;
    jsObj['style'] = namedParameters.style;
    jsObj['focusNode'] = namedParameters.focusNode;
    jsObj['autofocus'] = namedParameters.autofocus;
    jsObj['clipBehavior'] = namedParameters.clipBehavior;
    jsObj['icon'] = namedParameters.icon;
    jsObj['label'] = namedParameters.label;
    jsObj['constructorName'] = 'icon';
    return jsObj;
  }
}
export { ElevatedButton };
class _ElevatedButtonDefaultBackground extends MaterialStateProperty {
  primary: Color;
  onSurface: Color;
  public constructor(primary?: Color, onSurface?: Color) {
    super();
    this.primary = primary;
    this.onSurface = onSurface;
    this.className = '_ElevatedButtonDefaultBackground';
  }
}
export { _ElevatedButtonDefaultBackground };
class _ElevatedButtonDefaultForeground extends MaterialStateProperty {
  onPrimary: Color;
  onSurface: Color;
  public constructor(onPrimary?: Color, onSurface?: Color) {
    super();
    this.onPrimary = onPrimary;
    this.onSurface = onSurface;
    this.className = '_ElevatedButtonDefaultForeground';
  }
}
export { _ElevatedButtonDefaultForeground };
class _ElevatedButtonDefaultOverlay extends MaterialStateProperty {
  onPrimary: Color;
  public constructor(onPrimary?: Color) {
    super();
    this.onPrimary = onPrimary;
    this.className = '_ElevatedButtonDefaultOverlay';
  }
}
export { _ElevatedButtonDefaultOverlay };
class _ElevatedButtonDefaultElevation extends MaterialStateProperty {
  elevation: number;
  public constructor(elevation?: number) {
    super();
    this.elevation = elevation;
    this.className = '_ElevatedButtonDefaultElevation';
  }
}
export { _ElevatedButtonDefaultElevation };
class _ElevatedButtonDefaultMouseCursor extends MaterialStateProperty {
  enabledCursor: MouseCursor;
  disabledCursor: MouseCursor;
  public constructor(enabledCursor?: MouseCursor, disabledCursor?: MouseCursor) {
    super();
    this.enabledCursor = enabledCursor;
    this.disabledCursor = disabledCursor;
    this.className = '_ElevatedButtonDefaultMouseCursor';
  }
}
export { _ElevatedButtonDefaultMouseCursor };
class _ElevatedButtonWithIcon extends ElevatedButton {
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, style?: ButtonStyle, focusNode?: FocusNode, autofocus?: boolean, clipBehavior?: Clip, icon?: MXWidget, label?: MXWidget} = {}) {
    super();
    this['key'] = namedParameters.key;
    this['onPressed'] = namedParameters.onPressed;
    this['onLongPress'] = namedParameters.onLongPress;
    this['style'] = namedParameters.style;
    this['focusNode'] = namedParameters.focusNode;
    this['autofocus'] = namedParameters.autofocus;
    this['clipBehavior'] = namedParameters.clipBehavior;
    this['icon'] = namedParameters.icon;
    this['label'] = namedParameters.label;
    this.className = '_ElevatedButtonWithIcon';
  }
}
export { _ElevatedButtonWithIcon };
class _ElevatedButtonWithIconChild extends StatelessWidget {
  label: MXWidget;
  icon: MXWidget;
  public constructor(namedParameters: {key?: Key, label?: MXWidget, icon?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.label = namedParameters.label;
    this.icon = namedParameters.icon;
    this.className = '_ElevatedButtonWithIconChild';
  }
}
export { _ElevatedButtonWithIconChild };
