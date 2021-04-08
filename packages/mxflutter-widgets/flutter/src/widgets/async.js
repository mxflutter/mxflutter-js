"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamBuilder = exports.AsyncSnapshot = exports.ConnectionState = exports._StreamBuilderBaseState = exports.StreamBuilderBase = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class StreamBuilderBase extends framework_1.StatefulWidget {
}
exports.StreamBuilderBase = StreamBuilderBase;
class _StreamBuilderBaseState extends framework_1.State {
}
exports._StreamBuilderBaseState = _StreamBuilderBaseState;
var ConnectionState;
(function (ConnectionState) {
    ConnectionState["none"] = "{ \"_name\": \"ConnectionState.none\", \"index\": 0 }";
    ConnectionState["waiting"] = "{ \"_name\": \"ConnectionState.waiting\", \"index\": 1 }";
    ConnectionState["active"] = "{ \"_name\": \"ConnectionState.active\", \"index\": 2 }";
    ConnectionState["done"] = "{ \"_name\": \"ConnectionState.done\", \"index\": 3 }";
})(ConnectionState || (ConnectionState = {}));
exports.ConnectionState = ConnectionState;
;
class AsyncSnapshot extends mxflutter_base_1.MXDartClass {
    static nothing() {
        var jsObj = new AsyncSnapshot();
        jsObj['constructorName'] = 'nothing';
        return jsObj;
    }
    static waiting() {
        var jsObj = new AsyncSnapshot();
        jsObj['constructorName'] = 'waiting';
        return jsObj;
    }
    static withData(state, data) {
        var jsObj = new AsyncSnapshot();
        jsObj['state'] = state;
        jsObj.data = data;
        jsObj['constructorName'] = 'withData';
        return jsObj;
    }
    static withError(state, error) {
        var jsObj = new AsyncSnapshot();
        jsObj['state'] = state;
        jsObj.error = error;
        jsObj['constructorName'] = 'withError';
        return jsObj;
    }
    // MX Modified begin
    inState(state) {
        const jsObj = new AsyncSnapshot();
        jsObj['state'] = state;
        jsObj['constructorName'] = 'nothing';
        return jsObj;
    }
}
exports.AsyncSnapshot = AsyncSnapshot;
class StreamBuilder extends StreamBuilderBase {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialData = namedParameters.initialData;
        this.stream = namedParameters.stream;
        this.builder = namedParameters.builder;
        this.className = 'StreamBuilder';
    }
}
exports.StreamBuilder = StreamBuilder;
