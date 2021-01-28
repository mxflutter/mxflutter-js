//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$, InheritedWidget } from './framework';
class AutofillGroup extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'AutofillGroup';
    }
}
export { AutofillGroup };
class AutofillGroupState extends State$ {
}
export { AutofillGroupState };
class _AutofillScope extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this['autofillScopeState'] = namedParameters.autofillScopeState;
        this.className = '_AutofillScope';
    }
}
export { _AutofillScope };
