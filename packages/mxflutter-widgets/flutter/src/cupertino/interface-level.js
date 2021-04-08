"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupertinoUserInterfaceLevel = exports.CupertinoUserInterfaceLevelData = void 0;
const framework_1 = require("../widgets/framework");
var CupertinoUserInterfaceLevelData;
(function (CupertinoUserInterfaceLevelData) {
    CupertinoUserInterfaceLevelData["base"] = "{ \"_name\": \"CupertinoUserInterfaceLevelData.base\", \"index\": 0 }";
    CupertinoUserInterfaceLevelData["elevated"] = "{ \"_name\": \"CupertinoUserInterfaceLevelData.elevated\", \"index\": 1 }";
})(CupertinoUserInterfaceLevelData || (CupertinoUserInterfaceLevelData = {}));
exports.CupertinoUserInterfaceLevelData = CupertinoUserInterfaceLevelData;
;
class CupertinoUserInterfaceLevel extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'CupertinoUserInterfaceLevel';
    }
}
exports.CupertinoUserInterfaceLevel = CupertinoUserInterfaceLevel;
