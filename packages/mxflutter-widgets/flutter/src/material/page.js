//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Page } from '../widgets/navigator';
import { PageRoute } from '../widgets/pages';
class MaterialPageRoute extends PageRoute {
    constructor(namedParameters = {}) {
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
    preBuild(buildContext) {
        if (this.builder) {
            this['child'] = this.builder(buildContext);
            delete this.builder;
        }
    }
}
export { MaterialPageRoute };
class MaterialRouteTransitionMixin extends PageRoute {
}
export { MaterialRouteTransitionMixin };
class MaterialPage extends Page {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this['page'] = namedParameters.page;
        this.className = '_PageBasedMaterialPageRoute';
    }
}
export { _PageBasedMaterialPageRoute };
