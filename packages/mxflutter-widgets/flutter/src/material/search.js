"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._SearchPageState = exports._SearchPage = exports._SearchPageRoute = exports._SearchBody = exports.SearchDelegate = void 0;
const framework_1 = require("../widgets/framework");
const pages_1 = require("../widgets/pages");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SearchDelegate extends mxflutter_base_1.MXDartClass {
}
exports.SearchDelegate = SearchDelegate;
var _SearchBody;
(function (_SearchBody) {
    _SearchBody["suggestions"] = "{ \"_name\": \"_SearchBody.suggestions\", \"index\": 0 }";
    _SearchBody["results"] = "{ \"_name\": \"_SearchBody.results\", \"index\": 1 }";
})(_SearchBody || (_SearchBody = {}));
exports._SearchBody = _SearchBody;
;
class _SearchPageRoute extends pages_1.PageRoute {
    constructor(namedParameters = {}) {
        super();
        this.delegate = namedParameters.delegate;
        this.className = '_SearchPageRoute';
    }
}
exports._SearchPageRoute = _SearchPageRoute;
class _SearchPage extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.delegate = namedParameters.delegate;
        this.animation = namedParameters.animation;
        this.className = '_SearchPage';
    }
}
exports._SearchPage = _SearchPage;
class _SearchPageState extends framework_1.State {
}
exports._SearchPageState = _SearchPageState;
