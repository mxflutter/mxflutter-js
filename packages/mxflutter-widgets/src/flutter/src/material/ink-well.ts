// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MaterialStateProperty } from './material-state';
import { ShapeBorder } from '../painting/borders';
import { BorderRadius } from '../painting/border-radius';
import { BoxShape } from '../painting/box-border';
import { MouseCursor } from '../rendering/mouse-cursor';
import { InheritedWidget, Widget, StatelessWidget, StatefulWidget, State } from '../widgets/framework';
import { Color } from '../../../mx-dart-sdk';
import { InkFeature } from './material';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class InteractiveInkFeature extends InkFeature {
  color: Color;
}
export { InteractiveInkFeature };
abstract class InteractiveInkFeatureFactory extends MXDartClass {}
export { InteractiveInkFeatureFactory };
abstract class _ParentInkResponseState extends MXDartClass {}
export { _ParentInkResponseState };
class _ParentInkResponseProvider extends InheritedWidget {
  state: _ParentInkResponseState;
  public constructor(namedParameters: {state?: _ParentInkResponseState, child?: MXWidget} = {}) {
    super();
    this.state = namedParameters.state;
    this.child = namedParameters.child;
    this.className = '_ParentInkResponseProvider';
  }
}
export { _ParentInkResponseProvider };
class InkResponse extends StatelessWidget {
  child: MXWidget;
  onTap: any;
  onTapDown: any;
  onTapCancel: any;
  onDoubleTap: any;
  onLongPress: any;
  onHighlightChanged: any;
  onHover: any;
  mouseCursor: MouseCursor;
  containedInkWell: boolean;
  highlightShape: BoxShape;
  radius: number;
  borderRadius: BorderRadius;
  customBorder: ShapeBorder;
  focusColor: Color;
  hoverColor: Color;
  highlightColor: Color;
  overlayColor: MaterialStateProperty;
  splashColor: Color;
  splashFactory: InteractiveInkFeatureFactory;
  enableFeedback: boolean;
  excludeFromSemantics: boolean;
  onFocusChange: any;
  autofocus: boolean;
  focusNode: FocusNode;
  canRequestFocus: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, onTap?: any, onTapDown?: any, onTapCancel?: any, onDoubleTap?: any, onLongPress?: any, onHighlightChanged?: any, onHover?: any, mouseCursor?: MouseCursor, containedInkWell?: boolean, highlightShape?: BoxShape, radius?: number, borderRadius?: BorderRadius, customBorder?: ShapeBorder, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, overlayColor?: MaterialStateProperty, splashColor?: Color, splashFactory?: InteractiveInkFeatureFactory, enableFeedback?: boolean, excludeFromSemantics?: boolean, focusNode?: FocusNode, canRequestFocus?: boolean, onFocusChange?: any, autofocus?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.onTap = namedParameters.onTap;
    this.onTapDown = namedParameters.onTapDown;
    this.onTapCancel = namedParameters.onTapCancel;
    this.onDoubleTap = namedParameters.onDoubleTap;
    this.onLongPress = namedParameters.onLongPress;
    this.onHighlightChanged = namedParameters.onHighlightChanged;
    this.onHover = namedParameters.onHover;
    this.mouseCursor = namedParameters.mouseCursor;
    this.containedInkWell = namedParameters.containedInkWell;
    this.highlightShape = namedParameters.highlightShape;
    this.radius = namedParameters.radius;
    this.borderRadius = namedParameters.borderRadius;
    this.customBorder = namedParameters.customBorder;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.highlightColor = namedParameters.highlightColor;
    this.overlayColor = namedParameters.overlayColor;
    this.splashColor = namedParameters.splashColor;
    this.splashFactory = namedParameters.splashFactory;
    this.enableFeedback = namedParameters.enableFeedback;
    this.excludeFromSemantics = namedParameters.excludeFromSemantics;
    this.focusNode = namedParameters.focusNode;
    this.canRequestFocus = namedParameters.canRequestFocus;
    this.onFocusChange = namedParameters.onFocusChange;
    this.autofocus = namedParameters.autofocus;
    this.className = 'InkResponse';
  }
}
export { InkResponse };
class _InkResponseStateWidget extends StatefulWidget {
  child: MXWidget;
  onTap: any;
  onTapDown: any;
  onTapCancel: any;
  onDoubleTap: any;
  onLongPress: any;
  onHighlightChanged: any;
  onHover: any;
  mouseCursor: MouseCursor;
  containedInkWell: boolean;
  highlightShape: BoxShape;
  radius: number;
  borderRadius: BorderRadius;
  customBorder: ShapeBorder;
  focusColor: Color;
  hoverColor: Color;
  highlightColor: Color;
  overlayColor: MaterialStateProperty;
  splashColor: Color;
  splashFactory: InteractiveInkFeatureFactory;
  enableFeedback: boolean;
  excludeFromSemantics: boolean;
  onFocusChange: any;
  autofocus: boolean;
  focusNode: FocusNode;
  canRequestFocus: boolean;
  parentState: _ParentInkResponseState;
  getRectCallback: any;
  debugCheckContext: any;
  public constructor(namedParameters: {child?: MXWidget, onTap?: any, onTapDown?: any, onTapCancel?: any, onDoubleTap?: any, onLongPress?: any, onHighlightChanged?: any, onHover?: any, mouseCursor?: MouseCursor, containedInkWell?: boolean, highlightShape?: BoxShape, radius?: number, borderRadius?: BorderRadius, customBorder?: ShapeBorder, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, overlayColor?: MaterialStateProperty, splashColor?: Color, splashFactory?: InteractiveInkFeatureFactory, enableFeedback?: boolean, excludeFromSemantics?: boolean, focusNode?: FocusNode, canRequestFocus?: boolean, onFocusChange?: any, autofocus?: boolean, parentState?: _ParentInkResponseState, getRectCallback?: any, debugCheckContext?: any} = {}) {
    super();
    this.child = namedParameters.child;
    this.onTap = namedParameters.onTap;
    this.onTapDown = namedParameters.onTapDown;
    this.onTapCancel = namedParameters.onTapCancel;
    this.onDoubleTap = namedParameters.onDoubleTap;
    this.onLongPress = namedParameters.onLongPress;
    this.onHighlightChanged = namedParameters.onHighlightChanged;
    this.onHover = namedParameters.onHover;
    this.mouseCursor = namedParameters.mouseCursor;
    this.containedInkWell = namedParameters.containedInkWell;
    this.highlightShape = namedParameters.highlightShape;
    this.radius = namedParameters.radius;
    this.borderRadius = namedParameters.borderRadius;
    this.customBorder = namedParameters.customBorder;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.highlightColor = namedParameters.highlightColor;
    this.overlayColor = namedParameters.overlayColor;
    this.splashColor = namedParameters.splashColor;
    this.splashFactory = namedParameters.splashFactory;
    this.enableFeedback = namedParameters.enableFeedback;
    this.excludeFromSemantics = namedParameters.excludeFromSemantics;
    this.focusNode = namedParameters.focusNode;
    this.canRequestFocus = namedParameters.canRequestFocus;
    this.onFocusChange = namedParameters.onFocusChange;
    this.autofocus = namedParameters.autofocus;
    this.parentState = namedParameters.parentState;
    this.getRectCallback = namedParameters.getRectCallback;
    this.debugCheckContext = namedParameters.debugCheckContext;
    this.className = '_InkResponseStateWidget';
  }
}
export { _InkResponseStateWidget };
enum _HighlightType {
  pressed = '{ "_name": "_HighlightType.pressed", "index": 0 }',
  hover = '{ "_name": "_HighlightType.hover", "index": 1 }',
  focus = '{ "_name": "_HighlightType.focus", "index": 2 }',
};

export { _HighlightType };
class _InkResponseState extends State {
  splashes: Set<any>;
  currentSplash: InteractiveInkFeature;
  hovering: boolean;
  highlights: Map<any, any>;
  actionMap: Map<any, any>;
  activeChildren: any;
  hasFocus: boolean;
}
export { _InkResponseState };
class InkWell extends InkResponse {
  public constructor(namedParameters: {key?: Key, child?: MXWidget, onTap?: any, onDoubleTap?: any, onLongPress?: any, onTapDown?: any, onTapCancel?: any, onHighlightChanged?: any, onHover?: any, mouseCursor?: MouseCursor, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, overlayColor?: MaterialStateProperty, splashColor?: Color, splashFactory?: InteractiveInkFeatureFactory, radius?: number, borderRadius?: BorderRadius, customBorder?: ShapeBorder, enableFeedback?: boolean, excludeFromSemantics?: boolean, focusNode?: FocusNode, canRequestFocus?: boolean, onFocusChange?: any, autofocus?: boolean} = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this['onTap'] = namedParameters.onTap;
    this['onDoubleTap'] = namedParameters.onDoubleTap;
    this['onLongPress'] = namedParameters.onLongPress;
    this['onTapDown'] = namedParameters.onTapDown;
    this['onTapCancel'] = namedParameters.onTapCancel;
    this['onHighlightChanged'] = namedParameters.onHighlightChanged;
    this['onHover'] = namedParameters.onHover;
    this['mouseCursor'] = namedParameters.mouseCursor;
    this['focusColor'] = namedParameters.focusColor;
    this['hoverColor'] = namedParameters.hoverColor;
    this['highlightColor'] = namedParameters.highlightColor;
    this['overlayColor'] = namedParameters.overlayColor;
    this['splashColor'] = namedParameters.splashColor;
    this['splashFactory'] = namedParameters.splashFactory;
    this['radius'] = namedParameters.radius;
    this['borderRadius'] = namedParameters.borderRadius;
    this['customBorder'] = namedParameters.customBorder;
    this['enableFeedback'] = namedParameters.enableFeedback;
    this['excludeFromSemantics'] = namedParameters.excludeFromSemantics;
    this['focusNode'] = namedParameters.focusNode;
    this['canRequestFocus'] = namedParameters.canRequestFocus;
    this['onFocusChange'] = namedParameters.onFocusChange;
    this['autofocus'] = namedParameters.autofocus;
    this.className = 'InkWell';
  }
}
export { InkWell };
