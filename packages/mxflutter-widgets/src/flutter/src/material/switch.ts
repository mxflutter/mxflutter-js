// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { BoxPainter } from '../painting/decoration';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { RenderToggleable } from './toggleable';
import { BoxConstraints } from '../rendering/box';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MouseCursor } from '../rendering/mouse-cursor';
import { DragStartBehavior } from '../gestures/recognizer';
import { MaterialTapTargetSize } from './theme-data';
import { ImageProvider, ImageConfiguration } from '../painting/image-provider';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, State, LeafRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _SwitchType {
  material = '{ "_name": "_SwitchType.material", "index": 0 }',
  adaptive = '{ "_name": "_SwitchType.adaptive", "index": 1 }',
};

export { _SwitchType };
class Switch extends StatefulWidget {
  value: boolean;
  onChanged: any;
  activeColor: Color;
  activeTrackColor: Color;
  inactiveThumbColor: Color;
  inactiveTrackColor: Color;
  activeThumbImage: ImageProvider;
  onActiveThumbImageError: any;
  inactiveThumbImage: ImageProvider;
  onInactiveThumbImageError: any;
  materialTapTargetSize: MaterialTapTargetSize;
  switchType: _SwitchType;
  dragStartBehavior: DragStartBehavior;
  mouseCursor: MouseCursor;
  focusColor: Color;
  hoverColor: Color;
  focusNode: FocusNode;
  autofocus: boolean;
  public constructor(namedParameters: {key?: Key, value?: boolean, onChanged?: any, activeColor?: Color, activeTrackColor?: Color, inactiveThumbColor?: Color, inactiveTrackColor?: Color, activeThumbImage?: ImageProvider, onActiveThumbImageError?: any, inactiveThumbImage?: ImageProvider, onInactiveThumbImageError?: any, materialTapTargetSize?: MaterialTapTargetSize, dragStartBehavior?: DragStartBehavior, mouseCursor?: MouseCursor, focusColor?: Color, hoverColor?: Color, focusNode?: FocusNode, autofocus?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.onChanged = namedParameters.onChanged;
    this.activeColor = namedParameters.activeColor;
    this.activeTrackColor = namedParameters.activeTrackColor;
    this.inactiveThumbColor = namedParameters.inactiveThumbColor;
    this.inactiveTrackColor = namedParameters.inactiveTrackColor;
    this.activeThumbImage = namedParameters.activeThumbImage;
    this.onActiveThumbImageError = namedParameters.onActiveThumbImageError;
    this.inactiveThumbImage = namedParameters.inactiveThumbImage;
    this.onInactiveThumbImageError = namedParameters.onInactiveThumbImageError;
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.mouseCursor = namedParameters.mouseCursor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.className = 'Switch';
  }
  static adaptive(namedParameters: {key?: Key, value?: boolean, onChanged?: any, activeColor?: Color, activeTrackColor?: Color, inactiveThumbColor?: Color, inactiveTrackColor?: Color, activeThumbImage?: ImageProvider, onActiveThumbImageError?: any, inactiveThumbImage?: ImageProvider, onInactiveThumbImageError?: any, materialTapTargetSize?: MaterialTapTargetSize, dragStartBehavior?: DragStartBehavior, mouseCursor?: MouseCursor, focusColor?: Color, hoverColor?: Color, focusNode?: FocusNode, autofocus?: boolean} = {}) {
    var jsObj = new Switch();
    jsObj.key = namedParameters.key;
    jsObj.value = namedParameters.value;
    jsObj.onChanged = namedParameters.onChanged;
    jsObj.activeColor = namedParameters.activeColor;
    jsObj.activeTrackColor = namedParameters.activeTrackColor;
    jsObj.inactiveThumbColor = namedParameters.inactiveThumbColor;
    jsObj.inactiveTrackColor = namedParameters.inactiveTrackColor;
    jsObj.activeThumbImage = namedParameters.activeThumbImage;
    jsObj.onActiveThumbImageError = namedParameters.onActiveThumbImageError;
    jsObj.inactiveThumbImage = namedParameters.inactiveThumbImage;
    jsObj.onInactiveThumbImageError = namedParameters.onInactiveThumbImageError;
    jsObj.materialTapTargetSize = namedParameters.materialTapTargetSize;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.mouseCursor = namedParameters.mouseCursor;
    jsObj.focusColor = namedParameters.focusColor;
    jsObj.hoverColor = namedParameters.hoverColor;
    jsObj.focusNode = namedParameters.focusNode;
    jsObj.autofocus = namedParameters.autofocus;
    jsObj['constructorName'] = 'adaptive';
    return jsObj;
  }
}
export { Switch };
class _SwitchState extends State {
  actionMap: Map<any, any>;
  focused: boolean;
  hovering: boolean;
}
export { _SwitchState };
class _SwitchRenderObjectWidget extends LeafRenderObjectWidget {
  value: boolean;
  activeColor: Color;
  inactiveColor: Color;
  hoverColor: Color;
  focusColor: Color;
  activeThumbImage: ImageProvider;
  onActiveThumbImageError: any;
  inactiveThumbImage: ImageProvider;
  onInactiveThumbImageError: any;
  activeTrackColor: Color;
  inactiveTrackColor: Color;
  configuration: ImageConfiguration;
  onChanged: any;
  additionalConstraints: BoxConstraints;
  dragStartBehavior: DragStartBehavior;
  hasFocus: boolean;
  hovering: boolean;
  state: _SwitchState;
  public constructor(namedParameters: {key?: Key, value?: boolean, activeColor?: Color, inactiveColor?: Color, hoverColor?: Color, focusColor?: Color, activeThumbImage?: ImageProvider, onActiveThumbImageError?: any, inactiveThumbImage?: ImageProvider, onInactiveThumbImageError?: any, activeTrackColor?: Color, inactiveTrackColor?: Color, configuration?: ImageConfiguration, onChanged?: any, additionalConstraints?: BoxConstraints, dragStartBehavior?: DragStartBehavior, hasFocus?: boolean, hovering?: boolean, state?: _SwitchState} = {}) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.activeColor = namedParameters.activeColor;
    this.inactiveColor = namedParameters.inactiveColor;
    this.hoverColor = namedParameters.hoverColor;
    this.focusColor = namedParameters.focusColor;
    this.activeThumbImage = namedParameters.activeThumbImage;
    this.onActiveThumbImageError = namedParameters.onActiveThumbImageError;
    this.inactiveThumbImage = namedParameters.inactiveThumbImage;
    this.onInactiveThumbImageError = namedParameters.onInactiveThumbImageError;
    this.activeTrackColor = namedParameters.activeTrackColor;
    this.inactiveTrackColor = namedParameters.inactiveTrackColor;
    this.configuration = namedParameters.configuration;
    this.onChanged = namedParameters.onChanged;
    this.additionalConstraints = namedParameters.additionalConstraints;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.hasFocus = namedParameters.hasFocus;
    this.hovering = namedParameters.hovering;
    this.state = namedParameters.state;
    this.className = '_SwitchRenderObjectWidget';
  }
}
export { _SwitchRenderObjectWidget };
class _RenderSwitch extends RenderToggleable {
  activeThumbImage: ImageProvider;
  onActiveThumbImageError: any;
  inactiveThumbImage: ImageProvider;
  onInactiveThumbImageError: any;
  activeTrackColor: Color;
  inactiveTrackColor: Color;
  configuration: ImageConfiguration;
  textDirection: TextDirection;
  state: _SwitchState;
  drag: HorizontalDragGestureRecognizer;
  needsPositionAnimation: boolean;
  cachedThumbColor: Color;
  cachedThumbImage: ImageProvider;
  cachedThumbErrorListener: any;
  cachedThumbPainter: BoxPainter;
  isPainting: boolean;
  public constructor(namedParameters: {value?: boolean, activeColor?: Color, inactiveColor?: Color, hoverColor?: Color, focusColor?: Color, activeThumbImage?: ImageProvider, onActiveThumbImageError?: any, inactiveThumbImage?: ImageProvider, onInactiveThumbImageError?: any, activeTrackColor?: Color, inactiveTrackColor?: Color, configuration?: ImageConfiguration, additionalConstraints?: BoxConstraints, textDirection?: TextDirection, onChanged?: any, dragStartBehavior?: DragStartBehavior, hasFocus?: boolean, hovering?: boolean, state?: _SwitchState} = {}) {
    super();
    this.value = namedParameters.value;
    this.activeColor = namedParameters.activeColor;
    this.inactiveColor = namedParameters.inactiveColor;
    this.hoverColor = namedParameters.hoverColor;
    this.focusColor = namedParameters.focusColor;
    this.activeThumbImage = namedParameters.activeThumbImage;
    this.onActiveThumbImageError = namedParameters.onActiveThumbImageError;
    this.inactiveThumbImage = namedParameters.inactiveThumbImage;
    this.onInactiveThumbImageError = namedParameters.onInactiveThumbImageError;
    this.activeTrackColor = namedParameters.activeTrackColor;
    this.inactiveTrackColor = namedParameters.inactiveTrackColor;
    this.configuration = namedParameters.configuration;
    this.additionalConstraints = namedParameters.additionalConstraints;
    this.textDirection = namedParameters.textDirection;
    this.onChanged = namedParameters.onChanged;
    this['dragStartBehavior'] = namedParameters.dragStartBehavior;
    this.hasFocus = namedParameters.hasFocus;
    this.hovering = namedParameters.hovering;
    this.state = namedParameters.state;
    this.className = '_RenderSwitch';
  }
}
export { _RenderSwitch };
