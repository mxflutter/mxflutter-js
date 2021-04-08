// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { CompoundAnimation } from '../animation/animations';
import { RouteSettings } from '../widgets/navigator';
import { Animatable, Tween } from '../animation/tween';
import { Orientation } from '../widgets/media-query';
import { PopupRoute } from '../widgets/routes';
import { Animation } from '../animation/animation';
import { OverlayEntry } from '../widgets/overlay';
import { Rect, ImageFilter, Offset } from '../../../mx-dart-sdk';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { StatefulWidget, Widget, State, GlobalKey, StatelessWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _ContextMenuLocation {
  center = '{ "_name": "_ContextMenuLocation.center", "index": 0 }',
  left = '{ "_name": "_ContextMenuLocation.left", "index": 1 }',
  right = '{ "_name": "_ContextMenuLocation.right", "index": 2 }',
};

export { _ContextMenuLocation };
class CupertinoContextMenu extends StatefulWidget {
  child: MXWidget;
  actions: Array<any>;
  previewBuilder: any;
  public constructor(namedParameters: {key?: Key, actions?: Array<any>, child?: MXWidget, previewBuilder?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.actions = namedParameters.actions;
    this.child = namedParameters.child;
    this.previewBuilder = namedParameters.previewBuilder;
    this.className = 'CupertinoContextMenu';
  }
}
export { CupertinoContextMenu };
class _CupertinoContextMenuState extends State {
  childGlobalKey: GlobalKey;
  childHidden: boolean;
  openController: AnimationController;
  decoyChildEndRect: Rect;
  lastOverlayEntry: OverlayEntry;
  route: _ContextMenuRoute;
}
export { _CupertinoContextMenuState };
class _DecoyChild extends StatefulWidget {
  beginRect: Rect;
  controller: AnimationController;
  endRect: Rect;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, beginRect?: Rect, controller?: AnimationController, endRect?: Rect, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.beginRect = namedParameters.beginRect;
    this.controller = namedParameters.controller;
    this.endRect = namedParameters.endRect;
    this.child = namedParameters.child;
    this.className = '_DecoyChild';
  }
}
export { _DecoyChild };
class _DecoyChildState extends State {
  childGlobalKey: GlobalKey;
  mask: Animation;
  rect: Animation;
}
export { _DecoyChildState };
class _ContextMenuRoute extends PopupRoute {
  actions: Array<any>;
  builder: any;
  childGlobalKey: GlobalKey;
  contextMenuLocation: _ContextMenuLocation;
  externalOffstage: boolean;
  internalOffstage: boolean;
  lastOrientation: Orientation;
  previousChildRect: Rect;
  scale: number;
  sheetGlobalKey: GlobalKey;
  sheetRectAnimatable: Animatable;
  sheetRectAnimatableReverse: Animatable;
  opacityTween: Tween;
  sheetOpacity: Animation;
  barrierLabel: string;
  public constructor(namedParameters: {actions?: Array<any>, contextMenuLocation?: _ContextMenuLocation, barrierLabel?: string, builder?: any, filter?: ImageFilter, previousChildRect?: Rect, settings?: RouteSettings} = {}) {
    super();
    this.actions = namedParameters.actions;
    this.contextMenuLocation = namedParameters.contextMenuLocation;
    this.barrierLabel = namedParameters.barrierLabel;
    this.builder = namedParameters.builder;
    this.filter = namedParameters.filter;
    this.previousChildRect = namedParameters.previousChildRect;
    this.settings = namedParameters.settings;
    this.className = '_ContextMenuRoute';
  }
}
export { _ContextMenuRoute };
class _ContextMenuRouteStatic extends StatefulWidget {
  actions: Array<any>;
  child: MXWidget;
  childGlobalKey: GlobalKey;
  contextMenuLocation: _ContextMenuLocation;
  onDismiss: any;
  orientation: Orientation;
  sheetGlobalKey: GlobalKey;
  public constructor(namedParameters: {key?: Key, actions?: Array<any>, child?: MXWidget, childGlobalKey?: GlobalKey, contextMenuLocation?: _ContextMenuLocation, onDismiss?: any, orientation?: Orientation, sheetGlobalKey?: GlobalKey} = {}) {
    super();
    this.key = namedParameters.key;
    this.actions = namedParameters.actions;
    this.child = namedParameters.child;
    this.childGlobalKey = namedParameters.childGlobalKey;
    this.contextMenuLocation = namedParameters.contextMenuLocation;
    this.onDismiss = namedParameters.onDismiss;
    this.orientation = namedParameters.orientation;
    this.sheetGlobalKey = namedParameters.sheetGlobalKey;
    this.className = '_ContextMenuRouteStatic';
  }
}
export { _ContextMenuRouteStatic };
class _ContextMenuRouteStaticState extends State {
  dragOffset: Offset;
  lastScale: number;
  moveController: AnimationController;
  sheetController: AnimationController;
  moveAnimation: Animation;
  sheetScaleAnimation: Animation;
  sheetOpacityAnimation: Animation;
}
export { _ContextMenuRouteStaticState };
class _ContextMenuSheet extends StatelessWidget {
  actions: Array<any>;
  contextMenuLocation: _ContextMenuLocation;
  orientation: Orientation;
  public constructor(namedParameters: {key?: Key, actions?: Array<any>, contextMenuLocation?: _ContextMenuLocation, orientation?: Orientation} = {}) {
    super();
    this.key = namedParameters.key;
    this.actions = namedParameters.actions;
    this.contextMenuLocation = namedParameters.contextMenuLocation;
    this.orientation = namedParameters.orientation;
    this.className = '_ContextMenuSheet';
  }
}
export { _ContextMenuSheet };
class _OnOffAnimation extends CompoundAnimation {
  offValue: any;
  public constructor(namedParameters: {controller?: AnimationController, onValue?: any, offValue?: any, intervalOn?: number, intervalOff?: number} = {}) {
    super();
    this['controller'] = namedParameters.controller;
    this['onValue'] = namedParameters.onValue;
    this.offValue = namedParameters.offValue;
    this['intervalOn'] = namedParameters.intervalOn;
    this['intervalOff'] = namedParameters.intervalOff;
    this.className = '_OnOffAnimation';
  }
}
export { _OnOffAnimation };
