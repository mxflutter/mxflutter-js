//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class RouteNotificationMessages extends MXDartClass {
    static maybeNotifyRouteChange(routeName, previousRouteName) {
        var jsObj = new MXDartClass();
        jsObj['routeName'] = routeName;
        jsObj['previousRouteName'] = previousRouteName;
        jsObj.className = 'RouteNotificationMessages';
        jsObj['constructorName'] = 'maybeNotifyRouteChange';
        return jsObj;
    }
}
export { RouteNotificationMessages };
