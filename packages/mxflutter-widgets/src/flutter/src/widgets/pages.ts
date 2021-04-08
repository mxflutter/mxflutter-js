// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RouteSettings } from './navigator';
import { Color } from '../../../mx-dart-sdk';
import { Duration } from '../../../mx-dart-sdk';
import { ModalRoute } from './routes';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class PageRoute extends ModalRoute {
  fullscreenDialog: boolean;
}
export { PageRoute };
class PageRouteBuilder extends PageRoute {
  pageBuilder: any;
  transitionsBuilder: any;
  transitionDuration: Duration;
  reverseTransitionDuration: Duration;
  opaque: boolean;
  barrierDismissible: boolean;
  barrierColor: Color;
  barrierLabel: string;
  maintainState: boolean;
  public constructor(namedParameters: {settings?: RouteSettings, pageBuilder?: any, transitionsBuilder?: any, transitionDuration?: Duration, reverseTransitionDuration?: Duration, opaque?: boolean, barrierDismissible?: boolean, barrierColor?: Color, barrierLabel?: string, maintainState?: boolean, fullscreenDialog?: boolean} = {}) {
    super();
    this.settings = namedParameters.settings;
    this.pageBuilder = namedParameters.pageBuilder;
    this.transitionsBuilder = namedParameters.transitionsBuilder;
    this.transitionDuration = namedParameters.transitionDuration;
    this.reverseTransitionDuration = namedParameters.reverseTransitionDuration;
    this.opaque = namedParameters.opaque;
    this.barrierDismissible = namedParameters.barrierDismissible;
    this.barrierColor = namedParameters.barrierColor;
    this.barrierLabel = namedParameters.barrierLabel;
    this.maintainState = namedParameters.maintainState;
    this.fullscreenDialog = namedParameters.fullscreenDialog;
    this.className = 'PageRouteBuilder';
  }
}
export { PageRouteBuilder };
