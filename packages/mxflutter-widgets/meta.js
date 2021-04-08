"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._VisibleForTesting = exports._VisibleForOverriding = exports._Virtual = exports._Sealed = exports._Protected = exports._OptionalTypeArgs = exports._NonVirtual = exports._MustCallSuper = exports._Literal = exports._IsTestGroup = exports._IsTest = exports._Factory = exports._Experimental = exports._DoNotStore = exports._Checked = exports._AlwaysThrows = exports.Required = exports.Immutable = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Immutable extends mxflutter_base_1.MXDartClass {
    constructor(reason) {
        super();
        this.reason = reason;
        this.className = 'Immutable';
    }
}
exports.Immutable = Immutable;
class Required extends mxflutter_base_1.MXDartClass {
    constructor(reason) {
        super();
        this.reason = reason;
        this.className = 'Required';
    }
}
exports.Required = Required;
class _AlwaysThrows extends mxflutter_base_1.MXDartClass {
}
exports._AlwaysThrows = _AlwaysThrows;
class _Checked extends mxflutter_base_1.MXDartClass {
}
exports._Checked = _Checked;
class _DoNotStore extends mxflutter_base_1.MXDartClass {
}
exports._DoNotStore = _DoNotStore;
class _Experimental extends mxflutter_base_1.MXDartClass {
}
exports._Experimental = _Experimental;
class _Factory extends mxflutter_base_1.MXDartClass {
}
exports._Factory = _Factory;
class _IsTest extends mxflutter_base_1.MXDartClass {
}
exports._IsTest = _IsTest;
class _IsTestGroup extends mxflutter_base_1.MXDartClass {
}
exports._IsTestGroup = _IsTestGroup;
class _Literal extends mxflutter_base_1.MXDartClass {
}
exports._Literal = _Literal;
class _MustCallSuper extends mxflutter_base_1.MXDartClass {
}
exports._MustCallSuper = _MustCallSuper;
class _NonVirtual extends mxflutter_base_1.MXDartClass {
}
exports._NonVirtual = _NonVirtual;
class _OptionalTypeArgs extends mxflutter_base_1.MXDartClass {
}
exports._OptionalTypeArgs = _OptionalTypeArgs;
class _Protected extends mxflutter_base_1.MXDartClass {
}
exports._Protected = _Protected;
class _Sealed extends mxflutter_base_1.MXDartClass {
}
exports._Sealed = _Sealed;
class _Virtual extends mxflutter_base_1.MXDartClass {
}
exports._Virtual = _Virtual;
class _VisibleForOverriding extends mxflutter_base_1.MXDartClass {
}
exports._VisibleForOverriding = _VisibleForOverriding;
class _VisibleForTesting extends mxflutter_base_1.MXDartClass {
}
exports._VisibleForTesting = _VisibleForTesting;
