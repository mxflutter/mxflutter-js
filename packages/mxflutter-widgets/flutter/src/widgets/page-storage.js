"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageStorage = exports.PageStorageBucket = exports._StorageEntryIdentifier = exports.PageStorageKey = void 0;
const framework_1 = require("./framework");
const key_1 = require("../foundation/key");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class PageStorageKey extends key_1.ValueKey {
    constructor(value) {
        super();
        this['value'] = value;
        this.className = 'PageStorageKey';
    }
}
exports.PageStorageKey = PageStorageKey;
class _StorageEntryIdentifier extends mxflutter_base_1.MXDartClass {
    constructor(keys) {
        super();
        this.keys = keys;
        this.className = '_StorageEntryIdentifier';
    }
}
exports._StorageEntryIdentifier = _StorageEntryIdentifier;
class PageStorageBucket extends mxflutter_base_1.MXDartClass {
}
exports.PageStorageBucket = PageStorageBucket;
class PageStorage extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.bucket = namedParameters.bucket;
        this.child = namedParameters.child;
        this.className = 'PageStorage';
    }
}
exports.PageStorage = PageStorage;
