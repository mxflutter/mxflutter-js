//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { PageRoute } from '../widgets/pages';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class SearchDelegate extends MXDartClass {
}
export { SearchDelegate };
var _SearchBody;
(function (_SearchBody) {
    _SearchBody["suggestions"] = "{ \"_name\": \"_SearchBody.suggestions\", \"index\": 0 }";
    _SearchBody["results"] = "{ \"_name\": \"_SearchBody.results\", \"index\": 1 }";
})(_SearchBody || (_SearchBody = {}));
export { _SearchBody };
class _SearchPageRoute extends PageRoute {
    constructor(namedParameters = {}) {
        super();
        this.delegate = namedParameters.delegate;
        this.className = '_SearchPageRoute';
    }
}
export { _SearchPageRoute };
class _SearchPage extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.delegate = namedParameters.delegate;
        this.animation = namedParameters.animation;
        this.className = '_SearchPage';
    }
}
export { _SearchPage };
class _SearchPageState extends State$ {
}
export { _SearchPageState };
