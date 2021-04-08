// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { StatelessWidget, Widget } from './framework';
import { ValueKey, Key } from '../foundation/key';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class PageStorageKey extends ValueKey {
  public constructor(value?: any) {
    super();
    this['value'] = value;
    this.className = 'PageStorageKey';
  }
}
export { PageStorageKey };
class _StorageEntryIdentifier extends MXDartClass {
  keys: Array<any>;
  public constructor(keys?: Array<any>) {
    super();
    this.keys = keys;
    this.className = '_StorageEntryIdentifier';
  }
}
export { _StorageEntryIdentifier };
class PageStorageBucket extends MXDartClass {
  storage: Map<any, any>;
}
export { PageStorageBucket };
class PageStorage extends StatelessWidget {
  child: MXWidget;
  bucket: PageStorageBucket;
  public constructor(namedParameters: {key?: Key, bucket?: PageStorageBucket, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.bucket = namedParameters.bucket;
    this.child = namedParameters.child;
    this.className = 'PageStorage';
  }
}
export { PageStorage };
