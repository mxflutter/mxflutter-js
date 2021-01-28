//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MethodChannel, BasicMessageChannel } from './platform-channel';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class SystemChannels extends MXDartClass {
    static get navigation() {
        var jsObj = new MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'navigation';
        return jsObj;
    }
    static get platform() {
        var jsObj = new MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'platform';
        return jsObj;
    }
    static get textInput() {
        var jsObj = new MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'textInput';
        return jsObj;
    }
    static get keyEvent() {
        var jsObj = new BasicMessageChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'keyEvent';
        return jsObj;
    }
    static get lifecycle() {
        var jsObj = new BasicMessageChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'lifecycle';
        return jsObj;
    }
    static get system() {
        var jsObj = new BasicMessageChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'system';
        return jsObj;
    }
    static get accessibility() {
        var jsObj = new BasicMessageChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'accessibility';
        return jsObj;
    }
    static get platform_views() {
        var jsObj = new MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'platform_views';
        return jsObj;
    }
    static get skia() {
        var jsObj = new MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'skia';
        return jsObj;
    }
    static get mouseCursor() {
        var jsObj = new MethodChannel();
        jsObj['className'] = 'SystemChannels';
        jsObj['constructorName'] = 'mouseCursor';
        return jsObj;
    }
}
export { SystemChannels };
