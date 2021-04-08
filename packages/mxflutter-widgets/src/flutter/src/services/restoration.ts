// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RestorationManager extends ChangeNotifier {
  rootBucket: RestorationBucket;
  pendingRootBucket: any;
  rootBucketIsValid: boolean;
  isReplacing: boolean;
  debugDoingUpdate: boolean;
  serializationScheduled: boolean;
  bucketsNeedingSerialization: Set<any>;
}
export { RestorationManager };
class RestorationBucket extends MXDartClass {
  rawData: Map<any, any>;
  debugOwner: any;
  manager: RestorationManager;
  parent: RestorationBucket;
  restorationId: string;
  claimedChildren: Map<any, any>;
  childrenToAdd: Map<any, any>;
  needsSerialization: boolean;
  debugDisposed: boolean;
  static empty(namedParameters: {restorationId?: string, debugOwner?: any} = {}) {
    var jsObj = new RestorationBucket();
    jsObj.restorationId = namedParameters.restorationId;
    jsObj.debugOwner = namedParameters.debugOwner;
    jsObj['constructorName'] = 'empty';
    return jsObj;
  }
  static root(namedParameters: {manager?: RestorationManager, rawData?: Map<any, any>} = {}) {
    var jsObj = new RestorationBucket();
    jsObj.manager = namedParameters.manager;
    jsObj.rawData = namedParameters.rawData;
    jsObj['constructorName'] = 'root';
    return jsObj;
  }
  static child(namedParameters: {restorationId?: string, parent?: RestorationBucket, debugOwner?: any} = {}) {
    var jsObj = new RestorationBucket();
    jsObj.restorationId = namedParameters.restorationId;
    jsObj.parent = namedParameters.parent;
    jsObj.debugOwner = namedParameters.debugOwner;
    jsObj['constructorName'] = 'child';
    return jsObj;
  }
}
export { RestorationBucket };
