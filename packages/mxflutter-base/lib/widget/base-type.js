"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MXBuildProfileInfo = exports.MXLifecycleWidgetBase = exports.MXMirrorWidget = exports.MXBaseKey = exports.MXWidget = void 0;
/* eslint-disable operator-linebreak */
const mirror_1 = require("../mirror/mirror");
const base_type_1 = require("../mirror/base-type");
// 表示MXJSStatefulWidget/ MXJSStatelessWidget build 函数返回的类型
// 可能三种子类型 MXMirrorWidget（flutter镜像类），MXJSStatelessWidget，MXJSStatefulWidget（用户自定义子类）
class MXWidget {
}
exports.MXWidget = MXWidget;
class MXBaseKey extends base_type_1.MXDartClass {
}
exports.MXBaseKey = MXBaseKey;
// 镜像 js flutter Widget继承FlutterWidget
class MXMirrorWidget extends base_type_1.MXDartClass {
    // 用于WidgetTree的Path定位
    get pathComponent() {
        if (this.key) {
            return this.className + this.key.toString();
        }
        return this.className;
    }
    // sub class override
    // 重载 preBuild 在框架统一build前修复某些字段值
    preBuild(buildContext) { }
}
exports.MXMirrorWidget = MXMirrorWidget;
// 在Widget build体系中，需要保持生命周期的类，通过mirrorID对应js实例和dart实例，函数相互调用
// 一般作为Widget的成员变量，跟随Widget的序列化成json，传到Flutter侧，创建对应对象.
// 例如：Animation，AnimationController，ScrollController 等widget均继承自MXLifecycleWidgetBase
// 方案是与Widget相同，根据自己的属性，序列化成json在Flutter侧创建对应对象，
// 比普通Widget多的步骤是，在构造函数中，把自己存到MirrorMgr里保持生命周期，以未来接受事件，Widget dispose时 release释放
class MXLifecycleWidgetBase extends base_type_1.MXLifecycleDartClassBase {
    constructor() {
        super();
        // 依赖Flutter dispose消息，从MXMirror模块释放自己
        mirror_1.MXMirror.getInstance().addMirrorObject(this);
    }
}
exports.MXLifecycleWidgetBase = MXLifecycleWidgetBase;
// MX Build 性能数据
class MXBuildProfileInfo {
    profileText() {
        const buildJSWidgetTreeCost = this.startEncodeDataTime - this.startBuildTreeTime;
        const buildDataCost = this.startTransferDataTime - this.startEncodeDataTime;
        const transferCost = this.startDecodeDataTime - this.startTransferDataTime;
        const decodeDataCost = this.endDecodeDataTime - this.startDecodeDataTime;
        const paintCost = this.firstFrameEndTime - this.endDecodeDataTime;
        const mxcost = this.firstFrameEndTime - this.startBuildTreeTime;
        return `总耗时: MXBuildTotalCost: ${mxcost}ms :\n` +
            `[JS]buildJSWidgetTree: ${buildJSWidgetTreeCost}ms \n` +
            `[JS]EncodeWidgetTree2Json: ${buildDataCost}ms \n` +
            `[JS->Native->Dart]transfer(${(this.transferDataLen / 1024.0).toFixed(2)})KB: ${transferCost}ms\n` +
            `[Dart]DecodeJson2Map: ${decodeDataCost}ms\n` +
            `[Dart]Map2WidgetTree: ${paintCost}ms`;
    }
    updateFirstFrameProfileInfo(flutterProfileInfo) {
        if (flutterProfileInfo) {
            this.startDecodeDataTime = flutterProfileInfo.startDecodeDataTime;
            this.endDecodeDataTime = flutterProfileInfo.endDecodeDataTime;
            this.firstFrameEndTime = flutterProfileInfo.firstFrameEndTime;
        }
    }
}
exports.MXBuildProfileInfo = MXBuildProfileInfo;
