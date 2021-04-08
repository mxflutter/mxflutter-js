"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutovalidateMode = exports.FormFieldState = exports.FormField = exports._FormScope = exports.FormState = exports.Form = void 0;
const framework_1 = require("./framework");
class Form extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
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
exports.Form = Form;
class FormState extends framework_1.State {
}
exports.FormState = FormState;
class _FormScope extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.formState = namedParameters.formState;
        this.generation = namedParameters.generation;
        this.className = '_FormScope';
    }
}
exports._FormScope = _FormScope;
class FormField extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
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
exports.FormField = FormField;
class FormFieldState extends framework_1.State {
}
exports.FormFieldState = FormFieldState;
var AutovalidateMode;
(function (AutovalidateMode) {
    AutovalidateMode["disabled"] = "{ \"_name\": \"AutovalidateMode.disabled\", \"index\": 0 }";
    AutovalidateMode["always"] = "{ \"_name\": \"AutovalidateMode.always\", \"index\": 1 }";
    AutovalidateMode["onUserInteraction"] = "{ \"_name\": \"AutovalidateMode.onUserInteraction\", \"index\": 2 }";
})(AutovalidateMode || (AutovalidateMode = {}));
exports.AutovalidateMode = AutovalidateMode;
;
