//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
import { ValueKey } from '../foundation/key';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class PageStorageKey extends ValueKey {
    constructor(value) {
        super();
        this['value'] = value;
        this.className = 'PageStorageKey';
    }
}
export { PageStorageKey };
class _StorageEntryIdentifier extends MXDartClass {
    constructor(keys) {
        super();
        this.keys = keys;
        this.className = '_StorageEntryIdentifier';
    }
}
export { _StorageEntryIdentifier };
class PageStorageBucket extends MXDartClass {
}
export { PageStorageBucket };
class PageStorage extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.bucket = namedParameters.bucket;
        this.child = namedParameters.child;
        this.className = 'PageStorage';
    }
}
export { PageStorage };
