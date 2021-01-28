//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$, InheritedWidget } from './framework';
class Form extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
}
export { FormState };
class _FormScope extends InheritedWidget {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
}
export { FormFieldState };
