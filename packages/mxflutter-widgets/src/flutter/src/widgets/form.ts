//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatefulWidget$, Widget, BuildContext$, State$, InheritedWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Form extends StatefulWidget$ {
  child: MXWidget;
  autovalidate: boolean;
  onWillPop: any;
  onChanged: any;
  public constructor(
    namedParameters: { key?: Key; child?: MXWidget; autovalidate?: boolean; onWillPop?: any; onChanged?: any } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.autovalidate = namedParameters.autovalidate;
    this.onWillPop = namedParameters.onWillPop;
    this.onChanged = namedParameters.onChanged;
    this.className = 'Form';
  }
}
export { Form };
class FormState extends State$ {
  generation: number;
  fields: Set<any>;
}
export { FormState };
class _FormScope extends InheritedWidget {
  formState: FormState;
  generation: number;
  public constructor(
    namedParameters: { key?: Key; child?: MXWidget; formState?: FormState; generation?: number } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.formState = namedParameters.formState;
    this.generation = namedParameters.generation;
    this.className = '_FormScope';
  }
}
export { _FormScope };
class FormField extends StatefulWidget$ {
  onSaved: any;
  validator: any;
  builder: any;
  initialValue: any;
  autovalidate: boolean;
  enabled: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      builder?: any;
      onSaved?: any;
      validator?: any;
      initialValue?: any;
      autovalidate?: boolean;
      enabled?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.builder = namedParameters.builder;
    this.onSaved = namedParameters.onSaved;
    this.validator = namedParameters.validator;
    this.initialValue = namedParameters.initialValue;
    this.autovalidate = namedParameters.autovalidate;
    this.enabled = namedParameters.enabled;
    this.className = 'FormField';
  }
}
export { FormField };
class FormFieldState extends State$ {
  value: any;
  errorText: string;
}
export { FormFieldState };
