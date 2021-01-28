//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DragDownDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { AnimationStatus } from '../animation/animation';
import { ColorTween } from '../animation/tween';
import { AnimationController } from '../animation/animation-controller';
import { FocusScopeNode } from '../widgets/focus-manager';
import { LocalHistoryEntry } from '../widgets/routes';
import { Color } from '../../../mx-dart-sdk';
import { DragStartBehavior } from '../gestures/recognizer';
import { Key } from '../foundation/key';
import { StatelessWidget$, Widget, BuildContext$, StatefulWidget$, GlobalKey, State$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum DrawerAlignment {
  start = '{ "_name": "DrawerAlignment.start", "index": 0 }',
  end = '{ "_name": "DrawerAlignment.end", "index": 1 }',
}

export { DrawerAlignment };
class Drawer extends StatelessWidget$ {
  elevation: number;
  child: MXWidget;
  semanticLabel: string;
  public constructor(
    namedParameters: { key?: Key; elevation?: number; child?: MXWidget; semanticLabel?: string } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.elevation = namedParameters.elevation;
    this.child = namedParameters.child;
    this.semanticLabel = namedParameters.semanticLabel;
    this.className = 'Drawer';
  }
}
export { Drawer };
class DrawerController extends StatefulWidget$ {
  child: MXWidget;
  alignment: DrawerAlignment;
  drawerCallback: any;
  dragStartBehavior: DragStartBehavior;
  scrimColor: Color;
  enableOpenDragGesture: boolean;
  edgeDragWidth: number;
  public constructor(
    namedParameters: {
      key?: GlobalKey;
      child?: MXWidget;
      alignment?: DrawerAlignment;
      drawerCallback?: any;
      dragStartBehavior?: DragStartBehavior;
      scrimColor?: Color;
      edgeDragWidth?: number;
      enableOpenDragGesture?: boolean;
    } = {},
  ) {
    super();
    this['__mx_key'] = namedParameters.key;
    this.child = namedParameters.child;
    this.alignment = namedParameters.alignment;
    this.drawerCallback = namedParameters.drawerCallback;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.scrimColor = namedParameters.scrimColor;
    this.edgeDragWidth = namedParameters.edgeDragWidth;
    this.enableOpenDragGesture = namedParameters.enableOpenDragGesture;
    this.className = 'DrawerController';
  }
}
export { DrawerController };
class DrawerControllerState extends State$ {
  historyEntry: LocalHistoryEntry;
  focusScopeNode: FocusScopeNode;
  controller: AnimationController;
  drawerKey: GlobalKey;
  previouslyOpened: boolean;
  scrimColorTween: ColorTween;
  gestureDetectorKey: GlobalKey;
}
export { DrawerControllerState };
