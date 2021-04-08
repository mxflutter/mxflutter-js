"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryMessages = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class BinaryMessages extends mxflutter_base_1.MXDartClass {
    static setMessageHandler(channel, handler) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['channel'] = channel;
        jsObj['handler'] = handler;
        jsObj.className = 'BinaryMessages';
        jsObj['constructorName'] = 'setMessageHandler';
        return jsObj;
    }
    static setMockMessageHandler(channel, handler) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['channel'] = channel;
        jsObj['handler'] = handler;
        jsObj.className = 'BinaryMessages';
        jsObj['constructorName'] = 'setMockMessageHandler';
        return jsObj;
    }
}
exports.BinaryMessages = BinaryMessages;
