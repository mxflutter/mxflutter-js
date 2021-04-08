//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

/* eslint-disable operator-linebreak */
import { MXMirror } from '../mirror/mirror';
import { MXDartClass, MXLifecycleDartClassBase } from '../mirror/base-type';
// 表示MXJSStatefulWidget/ MXJSStatelessWidget build 函数返回的类型
// 可能三种子类型 MXMirrorWidget（flutter镜像类），MXJSStatelessWidget，MXJSStatefulWidget（用户自定义子类）
abstract class MXWidget {}

abstract class MXBaseKey extends MXDartClass {
  /**
   * Key 有转化成唯一string接口，便于框架比较
   */
  abstract toString(): string;
}

// 镜像 js flutter Widget继承FlutterWidget
class MXMirrorWidget extends MXDartClass implements MXWidget {
  public key: MXBaseKey;

  // 用于WidgetTree的Path定位
  public get pathComponent(): string {
    if (this.key) {
      return this.className + this.key.toString();
    }

    return this.className;
  }

  // sub class override
  // 重载 preBuild 在框架统一build前修复某些字段值
  public preBuild(buildContext: any) {}
}

// 在Widget build体系中，需要保持生命周期的类，通过mirrorID对应js实例和dart实例，函数相互调用
// 一般作为Widget的成员变量，跟随Widget的序列化成json，传到Flutter侧，创建对应对象.
// 例如：Animation，AnimationController，ScrollController 等widget均继承自MXLifecycleWidgetBase
// 方案是与Widget相同，根据自己的属性，序列化成json在Flutter侧创建对应对象，
// 比普通Widget多的步骤是，在构造函数中，把自己存到MirrorMgr里保持生命周期，以未来接受事件，Widget dispose时 release释放
abstract class MXLifecycleWidgetBase extends MXLifecycleDartClassBase {
  public constructor() {
    super();
    // 依赖Flutter dispose消息，从MXMirror模块释放自己
    MXMirror.getInstance().addMirrorObject(this);
  }
}

// MX Build 性能数据
class MXBuildProfileInfo {
  public buildWidgetDataSeq: string;
  public startBuildTreeTime: number;
  public startEncodeDataTime: number;
  public startTransferDataTime: number;
  public startDecodeDataTime: number;
  public endDecodeDataTime: number;
  public firstFrameEndTime: number;
  public transferDataLen: number;

  public profileText(): string {
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

  public updateFirstFrameProfileInfo(flutterProfileInfo: {
    startDecodeDataTime: number;
    endDecodeDataTime: number;
    firstFrameEndTime: number;
  }) {
    if (flutterProfileInfo) {
      this.startDecodeDataTime = flutterProfileInfo.startDecodeDataTime;
      this.endDecodeDataTime = flutterProfileInfo.endDecodeDataTime;
      this.firstFrameEndTime = flutterProfileInfo.firstFrameEndTime;
    }
  }
}

export { MXWidget, MXBaseKey, MXMirrorWidget, MXLifecycleWidgetBase, MXBuildProfileInfo };
