// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SystemNavigator extends MXDartClass {
  static routeInformationUpdated(namedParameters: {location?: string, state?: any} = {}) {
    var jsObj = new MXDartClass();
    jsObj['location'] = namedParameters.location;
    jsObj['state'] = namedParameters.state;
    jsObj.className = 'SystemNavigator';
    jsObj['constructorName'] = 'routeInformationUpdated';
    return jsObj;
  }
  static routeUpdated(namedParameters: {routeName?: string, previousRouteName?: string} = {}) {
    var jsObj = new MXDartClass();
    jsObj['routeName'] = namedParameters.routeName;
    jsObj['previousRouteName'] = namedParameters.previousRouteName;
    jsObj.className = 'SystemNavigator';
    jsObj['constructorName'] = 'routeUpdated';
    return jsObj;
  }
}
export { SystemNavigator };
