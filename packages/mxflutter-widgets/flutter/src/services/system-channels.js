"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemChannels = void 0;
const platform_channel_1 = require("./platform-channel");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SystemChannels extends mxflutter_base_1.MXDartClass {
    static get navigation() {
        var jsObj = new platform_channel_1.MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'navigation';
        return jsObj;
    }
    static get platform() {
        var jsObj = new platform_channel_1.MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'platform';
        return jsObj;
    }
    static get textInput() {
        var jsObj = new platform_channel_1.MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'textInput';
        return jsObj;
    }
    static get keyEvent() {
        var jsObj = new platform_channel_1.BasicMessageChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'keyEvent';
        return jsObj;
    }
    static get lifecycle() {
        var jsObj = new platform_channel_1.BasicMessageChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'lifecycle';
        return jsObj;
    }
    static get system() {
        var jsObj = new platform_channel_1.BasicMessageChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'system';
        return jsObj;
    }
    static get accessibility() {
        var jsObj = new platform_channel_1.BasicMessageChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'accessibility';
        return jsObj;
    }
    static get platform_views() {
        var jsObj = new platform_channel_1.MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'platform_views';
        return jsObj;
    }
    static get skia() {
        var jsObj = new platform_channel_1.MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'skia';
        return jsObj;
    }
    static get mouseCursor() {
        var jsObj = new platform_channel_1.MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'mouseCursor';
        return jsObj;
    }
    static get restoration() {
        var jsObj = new platform_channel_1.MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'restoration';
        return jsObj;
    }
}
exports.SystemChannels = SystemChannels;
