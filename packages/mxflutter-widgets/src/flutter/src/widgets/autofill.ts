//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { AutofillClient } from '../services/autofill';
import { Key } from '../foundation/key';
import { StatefulWidget$, Widget, BuildContext$, State$, InheritedWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AutofillGroup extends StatefulWidget$ {
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = 'AutofillGroup';
  }
}
export { AutofillGroup };
class AutofillGroupState extends State$ {
  clients: Map<any, any>;
}
export { AutofillGroupState };
class _AutofillScope extends InheritedWidget {
  scope: AutofillGroupState;
  public constructor(namedParameters: { key?: Key; child?: MXWidget; autofillScopeState?: AutofillGroupState } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this['autofillScopeState'] = namedParameters.autofillScopeState;
    this.className = '_AutofillScope';
  }
}
export { _AutofillScope };
