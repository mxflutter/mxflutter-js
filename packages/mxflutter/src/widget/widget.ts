//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXJSLog, MXWidget, MXBaseKey, MXBuildProfileInfo, MXDartClass } from '@mxflutter/mxflutter-base';
import { MXJSStatelessElement, MXJSStatefulElement, MXJSElement } from '../element/element';
import { WidgetsBindingObserver } from './widgets-binding-observer';

export abstract class MXJSBaseWidget implements MXWidget {
  public key: MXBaseKey | undefined;
  public className: string;
  public name?: string;
  public initialized: boolean;
  // Lazy模式
  // JS创建一个Lazy MXJSStatefulWidget，创建出Element之后，暂时不展开（不创建state，不调用initState，build）
  // 等待Flutter侧展开时，通知JS刷新，主要用在TabBarView
  // TabBarView Tab间切换时，会引发被隐藏的TabView Dispose，isJSLazyWidget阻止JS侧释放掉被隐藏的Element，仍能接收事件
  public isJSLazyWidget = false;
  // 当处于Lazy模式时，是否延迟Build，例如三个Tab页面，第一个显示的页面不延迟build，其他两个延迟build
  public isLazyWidgetDelayBuild = true;

  // 如果是Flutter侧主动Push页面，Flutter先创建一个HostWidget，生成一个flutterHostWidgetID，调用到JS侧，
  // JS侧Build数据后用 flutterHostWidgetID 去刷新Flutter侧的HostWidget
  public flutterHostWidgetID: string;

  // debug 打开build过程性能记录
  public enableProfile: boolean;

  // flutter打开js页面时的传递参数
  public flutterPushParams: Object;

  public constructor(name?: string, { key }: { key?: MXBaseKey } = {}) {
    this.name = name;
    this.key = key;
    this.initialized = false;
    // 编译出来的JS可能调用不到JS构造函数，手动调用下.init
    this.init();
  }

  public init(): void {
    // /性能分析模式
    // /打开性能分析模式，widget.enableProfile = true
    // /可以重载onFirstFrameEnd，获得各个阶段耗时
    this.enableProfile = false;
  }

  // subclass override
  public onBuildEnd(args: any) {}

  // 是否与Flutter同步构建，打开后会损失性能
  // 用于在JS侧如果嵌套了MXJSStatefulWidget，子Widget build函数中如要使用BuildContext信息，
  // 传递的BuildContext是root widget的，如果获取的信息不是想要的，打开这个标识位
  // 子Widget在Flutter侧对应节点展开时才调用到JS，获取到的BuildContext是实时的
  public isBuildSyncWithFlutter() {
    return false;
  }

  // 用于WidgetTree的Path定位
  public get pathComponent(): string {
    let component = this.constructor.name;

    if (this.name) {
      component = `${component}-${this.name}`;
    }

    if (this.key) {
      component = `${component}-${this.key.toString()}`;
    }

    return component;
  }

  public logString(): string {
    return `Widget: Name: ${this.name} Class: ${this.className}`;
  }

  // subclass override
  public hostWidgetFirstFrameEnd(profileInfo: any) {}

  // MXJSElement createElement();
  public abstract createElement(): MXJSElement;
}

// 无状态的MXJSStatelessWidget,在JS PreBuild阶段提前build
export abstract class MXJSStatelessWidget extends MXJSBaseWidget {
  public constructor(name?: string, { key }: { key?: MXBaseKey } = {}) {
    super(name, { key });
    this.className = 'MXJSStatelessWidget';
  }

  public init(): void {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    super.init();
    this.className = 'MXJSStatelessWidget';
  }

  // MXJSStatelessElement createElement();
  public createElement(): MXJSStatelessElement {
    if (!this.initialized) {
      this.init();
    }

    const element = new MXJSStatelessElement(this);
    if (this.flutterHostWidgetID) {
      element.widgetElementID = this.flutterHostWidgetID;
    }
    return element;
  }

  // subclass overwite
  public onFirstFrameEnd(profileInfo: MXBuildProfileInfo | null): void {}

  // subclass override
  abstract build(buildContext: MXJSElement): MXWidget | null;
}

export abstract class MXJSStatefulWidget extends MXJSBaseWidget {
  public constructor(name?: string, { key }: { key?: MXBaseKey } = {}) {
    super(name, { key });
    this.className = 'MXJSStatefulWidget';
  }

  public init(): void {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    super.init();
    this.className = 'MXJSStatefulWidget';
  }

  // MXJSStatefulElement createElement();
  public createElement(): MXJSStatefulElement {
    if (!this.initialized) {
      this.init();
    }

    const element = new MXJSStatefulElement(this);
    if (this.flutterHostWidgetID) {
      element.widgetElementID = this.flutterHostWidgetID;
    }
    return element;
  }

  // subclass override
  abstract createState(): MXJSWidgetState;
}

export abstract class MXJSWidgetState extends WidgetsBindingObserver {
  // 支持 mxjsbuilder v2，widget要有 new 方法
  public static new = MXJSWidgetState.constructor;
  public widget: MXJSStatefulWidget | null;
  public element: MXJSStatefulElement | null;
  protected isBuildEnd = false;
  protected setStateCallback: Function | null = null;

  public constructor() {
    super();
    this.widget = null;
  }

  public get context(): MXJSStatefulElement | null {
    return this.element;
  }

  public get mounted(): boolean {
    return this.element !== null;
  }

  // Called when this object is inserted into the tree.
  //
  // The framework will call this method exactly once for each [State] object
  // it creates.
  // subclass override
  // @mustCallSuper
  public initState(): void {
    MXJSLog.log(`MXJSWidgetState initState ::${this.widget?.logString()}`);
  }

  public setState(fun: Function): void {
    MXJSLog.log(`MXJSWidgetState setState ::${this.widget?.logString()}`);

    if (fun) {
      fun();
    }

    this.element?.markNeedsBuild();
  }

  // subclass overwite
  public onBuildEnd(args: any): void {}

  // subclass overwite
  public onFirstFrameEnd(profileInfo: MXBuildProfileInfo | null): void {}

  // subclass override
  public dispose(): void {}

  // subclass override
  public didUpdateWidget(oldWidget: MXJSStatefulWidget): void {}

  // subclass override
  public didChangeDependencies(): void {}

  // subclass override
  public abstract build(buildContext: MXJSElement): MXWidget | null;
}

export class MXJSStatelessWapperWidget extends MXJSStatelessWidget {
  private child: MXWidget | null;

  public constructor(child: MXWidget | null, { key }: { key?: MXBaseKey } = {}) {
    super('MXJSStatelessWapperWidget', { key });
    this.child = child;
  }

  public build() {
    return this.child;
  }
}

export class MXJSSingleChildStatefulWidget extends MXJSStatefulWidget {
  public child: MXWidget;

  public constructor(child: MXWidget, { key, name }: { key?: MXBaseKey; name?: string } = {}) {
    super(name ?? 'MXJSSingleChildStatefulWidget', { key });
    this.child = child;
  }

  public createState(): MXJSSingleChildStatefulWidgetState {
    return new MXJSSingleChildStatefulWidgetState();
  }
}

class MXJSSingleChildStatefulWidgetState extends MXJSWidgetState {
  public build(buildContext: MXJSElement): MXWidget | null {
    if (this.widget === null) {
      return null;
    }
    const hostWidget = this.widget as MXJSSingleChildStatefulWidget;
    return hostWidget.child;
  }

  public onFirstFrameEnd(profileInfo: any) {
    const hostWidget = this.widget as MXJSSingleChildStatefulWidget;
    const childWidget = hostWidget.child as MXJSBaseWidget;
    childWidget?.hostWidgetFirstFrameEnd(profileInfo);
  }
}

// 对应 Flutter 的 HostWidget 节点
export class MXJSHostStatefulWapperWidget extends MXJSSingleChildStatefulWidget {
  public constructor(child: MXWidget, { key }: { key?: MXBaseKey } = {}) {
    super(child, { key, name: 'MXJSHostStatefulWapperWidget' });
    this.child = child;
  }
}

// JS侧主动创建空Widget，等待Flutter展开时刷新
export class MXJSLazyStatefulWapperWidget extends MXJSSingleChildStatefulWidget {
  public constructor(child: MXWidget, { key }: { key?: MXBaseKey } = {}) {
    super(child, { key, name: 'MXJSLazyStatefulWapperWidget' });
    this.child = child;
    this.isJSLazyWidget = true;
    this.isLazyWidgetDelayBuild = true;
  }
}

// 对应Flutter侧相同类，用于从一个bundle页面跳转到另一个bundle页面
export class MXJSPageWidget extends MXDartClass {
  public jsWidgetName: string;
  public key: MXBaseKey | undefined;
  public flutterPushParams: any | undefined;
  public navPushingWidgetElementID: string | undefined;

  public constructor({
    jsWidgetName,
    key,
    flutterPushParams,
  }: { jsWidgetName?: string; key?: MXBaseKey | undefined; flutterPushParams?: any | undefined } = {}) {
    super();

    this.jsWidgetName = jsWidgetName;
    this.key = key;
    this.flutterPushParams = flutterPushParams;
  }
}
