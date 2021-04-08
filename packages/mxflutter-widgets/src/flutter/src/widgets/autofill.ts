// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatefulWidget, Widget, State, InheritedWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum AutofillContextAction {
  commit = '{ "_name": "AutofillContextAction.commit", "index": 0 }',
  cancel = '{ "_name": "AutofillContextAction.cancel", "index": 1 }',
};

export { AutofillContextAction };
class AutofillGroup extends StatefulWidget {
  child: MXWidget;
  onDisposeAction: AutofillContextAction;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, onDisposeAction?: AutofillContextAction} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.onDisposeAction = namedParameters.onDisposeAction;
    this.className = 'AutofillGroup';
  }
}
export { AutofillGroup };
class AutofillGroupState extends State {
  clients: Map<any, any>;
  isTopmostAutofillGroup: boolean;
}
export { AutofillGroupState };
class _AutofillScope extends InheritedWidget {
  scope: AutofillGroupState;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, autofillScopeState?: AutofillGroupState} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this['autofillScopeState'] = namedParameters.autofillScopeState;
    this.className = '_AutofillScope';
  }
}
export { _AutofillScope };
