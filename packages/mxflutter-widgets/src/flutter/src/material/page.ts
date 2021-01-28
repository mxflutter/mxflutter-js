//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { LocalKey } from '../foundation/key';
import { Animation } from '../animation/animation';
import { BuildContext$, Widget } from '../widgets/framework';
import { TransitionRoute } from '../widgets/routes';
import { RouteSettings, Page } from '../widgets/navigator';
import { PageRoute } from '../widgets/pages';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class MaterialPageRoute extends PageRoute {
  builder: any;
  maintainState: boolean;
  public constructor(
    namedParameters: {
      builder?: any;
      settings?: RouteSettings;
      maintainState?: boolean;
      fullscreenDialog?: boolean;
    } = {},
  ) {
    super();
    this.builder = namedParameters.builder;
    this.settings = namedParameters.settings;
    this.maintainState = namedParameters.maintainState;
    this.fullscreenDialog = namedParameters.fullscreenDialog;
    this.className = 'MaterialPageRoute';
    // MX Modified begin
    this['child'] = null;
    // MX Modified end
  }
  // MX modified begin
  public preBuild(buildContext: any) {
    if (this.builder) {
      this['child'] = this.builder(buildContext);
      delete this.builder;
    }
  }
  // MX modified end
}
export { MaterialPageRoute };
abstract class MaterialRouteTransitionMixin extends PageRoute {}
export { MaterialRouteTransitionMixin };
class MaterialPage extends Page {
  builder: any;
  maintainState: boolean;
  fullscreenDialog: boolean;
  public constructor(
    namedParameters: {
      builder?: any;
      maintainState?: boolean;
      fullscreenDialog?: boolean;
      key?: LocalKey;
      name?: string;
      __mx_arguments?: any;
    } = {},
  ) {
    super();
    this.builder = namedParameters.builder;
    this.maintainState = namedParameters.maintainState;
    this.fullscreenDialog = namedParameters.fullscreenDialog;
    this.key = namedParameters.key;
    this.name = namedParameters.name;
    this.__mx_arguments = namedParameters.__mx_arguments;
    this.className = 'MaterialPage';
  }
}
export { MaterialPage };
class _PageBasedMaterialPageRoute extends PageRoute {
  public constructor(namedParameters: { page?: MaterialPage } = {}) {
    super();
    this['page'] = namedParameters.page;
    this.className = '_PageBasedMaterialPageRoute';
  }
}
export { _PageBasedMaterialPageRoute };
