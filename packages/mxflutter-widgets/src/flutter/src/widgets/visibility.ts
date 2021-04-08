// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatelessWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Visibility extends StatelessWidget {
  child: MXWidget;
  replacement: MXWidget;
  visible: boolean;
  maintainState: boolean;
  maintainAnimation: boolean;
  maintainSize: boolean;
  maintainSemantics: boolean;
  maintainInteractivity: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, replacement?: MXWidget, visible?: boolean, maintainState?: boolean, maintainAnimation?: boolean, maintainSize?: boolean, maintainSemantics?: boolean, maintainInteractivity?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.replacement = namedParameters.replacement;
    this.visible = namedParameters.visible;
    this.maintainState = namedParameters.maintainState;
    this.maintainAnimation = namedParameters.maintainAnimation;
    this.maintainSize = namedParameters.maintainSize;
    this.maintainSemantics = namedParameters.maintainSemantics;
    this.maintainInteractivity = namedParameters.maintainInteractivity;
    this.className = 'Visibility';
  }
}
export { Visibility };
class SliverVisibility extends StatelessWidget {
  sliver: MXWidget;
  replacementSliver: MXWidget;
  visible: boolean;
  maintainState: boolean;
  maintainAnimation: boolean;
  maintainSize: boolean;
  maintainSemantics: boolean;
  maintainInteractivity: boolean;
  public constructor(namedParameters: {key?: Key, sliver?: MXWidget, replacementSliver?: MXWidget, visible?: boolean, maintainState?: boolean, maintainAnimation?: boolean, maintainSize?: boolean, maintainSemantics?: boolean, maintainInteractivity?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.sliver = namedParameters.sliver;
    this.replacementSliver = namedParameters.replacementSliver;
    this.visible = namedParameters.visible;
    this.maintainState = namedParameters.maintainState;
    this.maintainAnimation = namedParameters.maintainAnimation;
    this.maintainSize = namedParameters.maintainSize;
    this.maintainSemantics = namedParameters.maintainSemantics;
    this.maintainInteractivity = namedParameters.maintainInteractivity;
    this.className = 'SliverVisibility';
  }
}
export { SliverVisibility };
