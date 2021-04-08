// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatefulWidget, Widget, State, InheritedWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Form extends StatefulWidget {
  child: MXWidget;
  onWillPop: any;
  onChanged: any;
  autovalidateMode: AutovalidateMode;
  autovalidate: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, autovalidate?: boolean, onWillPop?: any, onChanged?: any, autovalidateMode?: AutovalidateMode} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.autovalidate = namedParameters.autovalidate;
    this.onWillPop = namedParameters.onWillPop;
    this.onChanged = namedParameters.onChanged;
    this.autovalidateMode = namedParameters.autovalidateMode;
    this.className = 'Form';
  }
}
export { Form };
class FormState extends State {
  generation: number;
  hasInteractedByUser: boolean;
  fields: Set<any>;
}
export { FormState };
class _FormScope extends InheritedWidget {
  formState: FormState;
  generation: number;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, formState?: FormState, generation?: number} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.formState = namedParameters.formState;
    this.generation = namedParameters.generation;
    this.className = '_FormScope';
  }
}
export { _FormScope };
class FormField extends StatefulWidget {
  onSaved: any;
  validator: any;
  builder: any;
  initialValue: any;
  enabled: boolean;
  autovalidateMode: AutovalidateMode;
  autovalidate: boolean;
  public constructor(namedParameters: {key?: Key, builder?: any, onSaved?: any, validator?: any, initialValue?: any, autovalidate?: boolean, enabled?: boolean, autovalidateMode?: AutovalidateMode} = {}) {
    super();
    this.key = namedParameters.key;
    this.builder = namedParameters.builder;
    this.onSaved = namedParameters.onSaved;
    this.validator = namedParameters.validator;
    this.initialValue = namedParameters.initialValue;
    this.autovalidate = namedParameters.autovalidate;
    this.enabled = namedParameters.enabled;
    this.autovalidateMode = namedParameters.autovalidateMode;
    this.className = 'FormField';
  }
}
export { FormField };
class FormFieldState extends State {
  value: any;
  errorText: string;
  hasInteractedByUser: boolean;
}
export { FormFieldState };
enum AutovalidateMode {
  disabled = '{ "_name": "AutovalidateMode.disabled", "index": 0 }',
  always = '{ "_name": "AutovalidateMode.always", "index": 1 }',
  onUserInteraction = '{ "_name": "AutovalidateMode.onUserInteraction", "index": 2 }',
};

export { AutovalidateMode };
