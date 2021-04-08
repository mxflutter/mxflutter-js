"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingPluginException = exports.PlatformException = exports.MethodCodec = exports.MethodCall = exports.MessageCodec = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class MessageCodec extends mxflutter_base_1.MXDartClass {
}
exports.MessageCodec = MessageCodec;
class MethodCall extends mxflutter_base_1.MXDartClass {
    constructor(method, mx_arguments) {
        super();
        this.method = method;
        this.mx_arguments = mx_arguments;
        this.className = 'MethodCall';
    }
}
exports.MethodCall = MethodCall;
class MethodCodec extends mxflutter_base_1.MXDartClass {
}
exports.MethodCodec = MethodCodec;
class PlatformException extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.code = namedParameters.code;
        this.message = namedParameters.message;
        this.details = namedParameters.details;
        this.stacktrace = namedParameters.stacktrace;
        this.className = 'PlatformException';
    }
}
exports.PlatformException = PlatformException;
class MissingPluginException extends mxflutter_base_1.MXDartClass {
    constructor(message) {
        super();
        this.message = message;
        this.className = 'MissingPluginException';
    }
}
exports.MissingPluginException = MissingPluginException;
