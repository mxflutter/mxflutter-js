// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ChangeNotifier } from '../foundation/change-notifier';
import { RestorationBucket } from '../services/restoration';
import { Key } from '../foundation/key';
import { StatefulWidget, Widget, State, InheritedWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RestorationScope extends StatefulWidget {
  child: MXWidget;
  restorationId: string;
  public constructor(namedParameters: {key?: Key, restorationId?: string, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.restorationId = namedParameters.restorationId;
    this.child = namedParameters.child;
    this.className = 'RestorationScope';
  }
}
export { RestorationScope };
class _RestorationScopeState extends State {}
export { _RestorationScopeState };
class UnmanagedRestorationScope extends InheritedWidget {
  bucket: RestorationBucket;
  public constructor(namedParameters: {key?: Key, bucket?: RestorationBucket, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.bucket = namedParameters.bucket;
    this.child = namedParameters.child;
    this.className = 'UnmanagedRestorationScope';
  }
}
export { UnmanagedRestorationScope };
class RootRestorationScope extends StatefulWidget {
  child: MXWidget;
  restorationId: string;
  public constructor(namedParameters: {key?: Key, restorationId?: string, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.restorationId = namedParameters.restorationId;
    this.child = namedParameters.child;
    this.className = 'RootRestorationScope';
  }
}
export { RootRestorationScope };
class _RootRestorationScopeState extends State {
  okToRenderBlankContainer: boolean;
  rootBucketValid: boolean;
  rootBucket: RestorationBucket;
  ancestorBucket: RestorationBucket;
  isLoadingRootBucket: boolean;
}
export { _RootRestorationScopeState };
abstract class RestorableProperty extends ChangeNotifier {
  disposed: boolean;
  restorationId: string;
  owner: RestorationMixin;
}
export { RestorableProperty };
abstract class RestorationMixin extends State {
  bucket: RestorationBucket;
  properties: Map<any, any>;
  debugPropertiesWaitingForReregistration: Array<any>;
  firstRestorePending: boolean;
  currentParent: RestorationBucket;
}
export { RestorationMixin };
