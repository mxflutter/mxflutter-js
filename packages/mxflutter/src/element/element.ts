//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

/* eslint-disable no-param-reassign */
/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable operator-linebreak */
import {
  MXJSLog,
  bridgeMXNativeJSFlutterApp,
  MXWidget,
  MXBaseKey,
  MXMirrorWidget,
  MXBuildProfileInfo,
  invokeMirrorObjMethodSync,
  MXMirrorObjMethodCall,
  mxMirrorClassNameKey,
} from '@mxflutter/mxflutter-base';
import {
  MXJSBaseWidget,
  MXJSStatelessWidget,
  MXJSStatefulWidget,
  MXJSWidgetState,
  MXJSStatelessWapperWidget,
  MXJSPageWidget,
} from '../widget/widget';
import { MXJSBuildOwner } from '../core/build-owner';
import { specialPreBuild } from './element-prebuild';
import { Size } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';

function exception(msg: string) {
  return new Error(msg);
}

// MXJSStatefulWidget / MXJSStatelessWidget 被MXElement组装展开字节的后，渲染出的用于刷新Flutter数据结构
export class MXWidgetRefreshFlutterData {
  public key: MXBaseKey;
  public name: string;
  public className: string;
  public navPushingWidgetElementID: string | null;
  public enableProfile: any;
  // build info
  public widgetID: string; // 原WidgetID
  public buildWidgetDataSeq: string;
  public widgetData: any;
  public isJSLazyWidget: boolean;
}

export abstract class MXJSBuildContext {
  public widget: MXJSBaseWidget;
  public owner: MXJSBuildOwner;

  // MXJSBuildContext 信息
  // TODO:重构
  public inheritedInfo?: any;
  public mediaQueryData?: any;
  public themeData?: any;
  public iconThemeData?: any;
  public inheritedWidgets?: Map<String, any>;

  // Element(Widget widget)
  public constructor() {
    // MXJSBuildContext 信息
    // TODO:重构
    this.inheritedInfo = {};
    this.mediaQueryData = null;
    this.themeData = null;
    this.iconThemeData = null;

    this.inheritedWidgets = new Map();
  }

  // 同步获取BuildContext Size。
  // 如果是嵌套Widget，Widget需要重载 isBuildSyncWithFlutter 返回 True
  // 尽量避免使用BuildContext Size，特别是在ListView等大量子Widget的情况下，影响性能
  public get size(): Size {
    let flutterCall = new MXMirrorObjMethodCall({
      className: 'BuildContext',
      funcName: 'size',
      args: { elementIDs: this.buildContextJson2DartInfo().elementIDs },
    });

    let data: string = invokeMirrorObjMethodSync(flutterCall);
    return Size.fromJson(JSON.parse(data));
  }

  // MXJSBuildContext 信息
  // TODO:重构
  public inheritBuildContext(fromBuildContext) {
    this.inheritedInfo = fromBuildContext.inheritedInfo;
    this.mediaQueryData = fromBuildContext.mediaQueryData;
    this.themeData = fromBuildContext.themeData;
    this.iconThemeData = fromBuildContext.iconThemeData;
  }

  public setInheritedInfo(args) {
    this.inheritedInfo = args;
    this.mediaQueryData = args.mediaQueryData;
    this.themeData = args.themeData;
    this.iconThemeData = args.iconThemeData;
  }

  // 同步调用XXX.of(content)
  public dependOnInheritedWidget(widgetName: string, parseOfDataHandler: (jsonMap: any) => any): any {
    let widgetOfDataObj = this.inheritedWidgets.get(widgetName);

    if (widgetOfDataObj) {
      return widgetOfDataObj;
    }

    let flutterCall = new MXMirrorObjMethodCall({
      className: widgetName,
      funcName: 'of',
      args: { context: this.buildContextJson2DartInfo() },
    });

    let widgetData: string = invokeMirrorObjMethodSync(flutterCall);
    if (widgetData) {
      widgetOfDataObj = parseOfDataHandler(JSON.parse(widgetData));
      if (widgetOfDataObj) {
        this.inheritedWidgets.set(widgetName, widgetOfDataObj);
      }
    }

    return widgetOfDataObj;
  }

  // build开始时，清空缓存
  public clearInheritedWidgetCache() {
    this.inheritedWidgets.clear();
  }

  public abstract buildContextJson2DartInfo(): any;
}

export class MXJSElement extends MXJSBuildContext {
  protected static widgetElementIDFeed = 0;
  public widgetElementID: string;
  public inDirtyList: boolean;
  public isPushed: boolean; // 从JS侧Push

  // 从Flutter创建的rootElement，parent = null,rootMgrElement = MXJSRootMgrElement

  public rootMgrElement: MXJSElement | null;
  public get isRootNode(): boolean {
    return !!this.rootMgrElement;
  }

  // build 性能数据
  public profileInfo: MXBuildProfileInfo | null;
  // 构建系列号，每build一次加1
  public buildWidgetDataSeq: string;
  public currentWidgetTree: MXJSWidgetTree | null;

  protected parent: MXJSElement | null;
  protected dirty: boolean;

  protected buildingWidgetTree: MXJSWidgetTree | null;
  // protected currentWidgetTree: MXJSWidgetTree | null;
  protected preWidgetTree: MXJSWidgetTree | null;
  protected buildWidgetDataSeqFeed = 0;
  protected buildSeq2WTreeMap: Map<string, MXJSWidgetTree>;

  // The Widget Pages that pushed this Widget
  // 把当前widget（this） push 出来的widget
  protected navPushingWidgetElement: MXJSElement | null;
  protected navPushingWidgetElementID: string | null;

  // The widget that was pushed by this widget
  // 由自己this push的widget page
  protected navPushedWidgetElements: Map<string, MXJSElement>;

  // Element(Widget widget)
  public constructor(widget: MXJSBaseWidget) {
    super();

    // JS侧主动创建的widgetElementIDFeed是偶数，Flutter侧主动创建的奇数
    MXJSElement.widgetElementIDFeed = MXJSElement.widgetElementIDFeed + 2;
    this.widgetElementID = String(MXJSElement.widgetElementIDFeed);

    this.widget = widget;
    this.parent = null;

    this.dirty = false;
    this.inDirtyList = false;
    this.isPushed = false;
    this.rootMgrElement = null;

    // MX Build 逻辑
    // 构建系列号，每build一次加1
    this.buildWidgetDataSeq = '1';
    this.buildingWidgetTree = null;
    this.currentWidgetTree = null;
    this.preWidgetTree = null;
    this.buildWidgetDataSeqFeed = 0;
    this.buildSeq2WTreeMap = new Map<string, MXJSWidgetTree>();

    // The Widget Pages that pushed this Widget
    // 把当前widget（this） push 出来的widget
    this.navPushingWidgetElement = null;
    this.navPushingWidgetElementID = null;

    // The widget that was pushed by this widget
    // 由自己this push的widget page
    this.navPushedWidgetElements = new Map<string, MXJSElement>();
    this.profileInfo = null;
  }

  public logString() {
    return (
      `${this.widget.logString()} widgetElementID: ${this.widgetElementID} ` +
      `buildSeq: ${this.buildWidgetDataSeq} ` +
      `currentTreeSeq: ${this.getWidgetTreeBuildSeq(this.currentWidgetTree)} ` +
      `buildingSeq: ${this.getWidgetTreeBuildSeq(this.buildingWidgetTree)} ` +
      `preTreeSeq: ${this.getWidgetTreeBuildSeq(this.preWidgetTree)}`
    );
  }

  public widgetLogString() {
    return `${this.widget.logString()} widgetElementID: ${this.widgetElementID} `;
  }

  // Set the owner of the element. The owner will be propagated to all the
  // descendants of this element.
  //
  // The owner manages the dirty elements list.
  public assignOwner(owner: MXJSBuildOwner) {
    this.owner = owner;
  }

  // js->flutter
  // navigator route
  public navigatorPush(pushWidget: MXJSBaseWidget | MXMirrorWidget | MXJSPageWidget) {
    // 2020 7.24修改为不清空，注释
    // 清空之前push的页面*
    // this._clearPushedWidgetElements();
    // 增加MXJSPageWidget判断，从一个bunble-xxx.js页面进入另一个bunble-xxx.js页面
    if (pushWidget instanceof MXJSPageWidget) {
      this.navigatorPushBundleJSPage(pushWidget);
      return;
    }

    // 如果RootWidget不是MXJSXXXXWidget的子类，需要用MXJSStatelessWidget包装一下
    pushWidget = this.wappingPushingWidget(pushWidget);
    const pushElement: MXJSElement = pushWidget.createElement();
    // TODO:fix inheritWidget
    pushElement.inheritBuildContext(this);
    // 设置push jsWidget的widget
    pushElement.navPushingWidgetElement = this;
    // Flutter侧 通过navPushingWidgetElementID找到对应Widget来push页面 pushWidget
    pushElement.navPushingWidgetElementID = this.widgetElementID;

    // 只有pushed的element 在收到dispose时，才会被释放
    pushElement.isPushed = true;

    const startBuildTreeTime = new Date().valueOf();
    // 把element build完成之后，安装到 root element上
    const builtTree: any = this.owner.buildScope(this, () => pushElement.mount(this));

    this.navPushedWidgetElements.set(pushElement.widgetElementID, pushElement);
    // call flutter navigatorPush
    this.owner.callFlutterPushWidget(builtTree, pushElement, startBuildTreeTime);
  }

  public navigatorPop() {
    const data = JSON.stringify({ widgetID: this.widgetElementID });
    bridgeMXNativeJSFlutterApp.callFlutterWidgetChannel('navigatorPop', data);
  }

  // js->flutter
  // navigator route
  public navigatorPushNamed(routeName: string, mxArguments: any) {
    // call flutter navigatorPushNamed
    this.owner.callFlutterPushNamedWidget(this.widgetElementID, routeName, mxArguments);
  }

  public markNeedsBuild() {
    this.dirty = true;
    this.owner.scheduleBuildFor(this);
  }

  // build mount(Element parent, dynamic newSlot)
  public mount(parent: MXJSElement | null, newSlot?: any): MXWidgetRefreshFlutterData {
    this.parent = parent;
    if (this.parent) {
      // TODO：重构 inheritBuildContext
      this.inheritBuildContext(parent);
      this.owner = this.parent.owner;
    }

    // 安装到父Element上时，第一次build
    return this.firstBuild();
  }

  public rebuild(): MXWidgetRefreshFlutterData {
    const built = this.performRebuild();
    this.confirmCurrentWidgetTree();
    return built;
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  public findChild(widgetID: string): MXJSElement | undefined {
    if (this.widgetElementID === widgetID) {
      return this;
    }

    // 先在currentTree里找，一般这里能找到
    let findElement;
    if (this.currentWidgetTree) {
      findElement = this.findElementFromWidgetTree(this.currentWidgetTree, widgetID);

      if (findElement) {
        return findElement;
      }
    }

    // 找不到就遍历treemap，为了去掉 buildend 回调确认WidgetTree的过程
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of this.buildSeq2WTreeMap) {
      const [seq, widgetTree] = entry;
      if (this.currentWidgetTree?.buildWidgetDataSeq === seq) {
        continue;
      }

      if (widgetTree) {
        findElement = this.findElementFromWidgetTree(widgetTree, widgetID);

        if (findElement) {
          return findElement;
        }
      }
    }

    // 查找被自己push的widgets
    findElement = this.navPushedWidgetElements.get(widgetID);
    if (findElement) {
      return findElement;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const entry of this.navPushedWidgetElements) {
      const [, element] = entry;
      findElement = element?.findChild(widgetID);
      if (findElement) {
        return findElement;
      }
    }
  }

  public removeChild(child: MXJSElement) {
    this.currentWidgetTree?.widgetID2ChildrenElements.delete(child.widgetElementID);
  }

  public invokeCallback(buildWidgetDataSeq: string, callID: string, args: any): any {
    MXJSLog.log(
      `MXJSElement invokeCallback ::${this.widget.logString()} ` +
        `buildWidgetDataSeq: ${buildWidgetDataSeq} callID: ${callID}`,
    );

    if (this.currentWidgetTree?.canInvoke(callID)) {
      return this.currentWidgetTree.invokeCallback(callID, args);
    }

    // 容错处理
    MXJSLog.error(
      `MXJSElement:invokeCallback: 容错搜索所有BuildTree，' +
    'this.buildingWidgetTree.buildWidgetDataSeq' +
    '(${this.getWidgetTreeBuildSeq(this.buildingWidgetTree)}) == ' +
    'buildWidgetDataSeq(${buildWidgetDataSeq}) ` + ` callID: ${callID}`,
    );

    this.buildSeq2WTreeMap.forEach((tree: MXJSWidgetTree) => {
      if (tree.canInvoke(callID)) {
        return tree.invokeCallback(callID, args);
      }
    });
  }

  public onBuildEnd(buildWidgetDataSeq: string) {
    if (!buildWidgetDataSeq) {
      return;
    }

    const tree = this.buildSeq2WTreeMap.get(buildWidgetDataSeq);

    if (tree) {
      this.preWidgetTree = this.currentWidgetTree;
      this.currentWidgetTree = tree;

      MXJSLog.log(`MXJSElement::onBuildEnd success::${this.logString()}`);

      this.clearWidgetTree(buildWidgetDataSeq);
    } else {
      MXJSLog.error(
        `MXJSElement::onBuildEnd fail ${this.buildSeq2WTreeMap.keys()}: ` +
          `buildEnd buildWidgetDataSeq: ${buildWidgetDataSeq} ` +
          `[${Object.keys(this.buildSeq2WTreeMap).join('|')}] ` +
          `elementInfo: ${this.logString()} `,
      );
    }
  }

  public onFirstFrameEnd(profileInfo: any) {
    this.updateFirstFrameProfileInfo(profileInfo);
  }

  // on Flutter dispose
  public onDispose(isParentDispose = false): void {
    // 这里要再继续研究Element和Flutter侧的释放方案
    // 如果不是pushed页面，在收到Flutter侧对应Widget dispose事件后，不能释放
    // 可能在Flutter侧重用
    if (!this.isPushed && !this.isRootNode && !this.widget.isJSLazyWidget && !isParentDispose) {
      MXJSLog.log(`MXJSElement::onDispose give up::${this.widgetLogString()}`);
      return;
    }
    // 调用子widget disposeWidget
    if (this.currentWidgetTree) {
      const tempMap: Map<string, MXJSElement> = new Map(this.currentWidgetTree.widgetID2ChildrenElements);

      tempMap.forEach((element, k) => {
        element.onDispose(true);
      });
    }

    // disopse self
    this.dispose(isParentDispose);
  }

  public dispose(isParentDispose: boolean): void {
    MXJSLog.log(`MXJSElement::dispose self ::${this.widgetLogString()}`);
    this.clearBuildInfo();

    // isJSLazyWidget 不把自己从parent中删除，保活等待flutter call rebuild
    if (this.widget.isJSLazyWidget && !isParentDispose) {
      return;
    }

    // 从父节点移除自己
    this.parent?.removeChild(this);
    this.rootMgrElement?.removeChild(this);

    // 如果element.pushed 移除
    if (this.isPushed) {
      this.navPushingWidgetElement?.removePushedWidget(this);
    }
  }

  public clearBuildInfo(): void {
    this.buildingWidgetTree = null;
    this.currentWidgetTree = null;
    this.preWidgetTree = null;
    this.buildSeq2WTreeMap = new Map<string, MXJSWidgetTree>();
  }

  // on Flutter didChangeDependencies
  public didChangeDependencies(): void {
    if (this instanceof MXJSStatefulElement) {
      MXJSLog.log(`MXJSElement::changeDependencies ::${this.widgetLogString()}`);
      const statefulElement = this as MXJSStatefulElement;
      statefulElement.state?.didChangeDependencies();
    }
  }

  public debugLogElementTree(): string {
    let log = `{ name: ${this.widget.name}, widgetElementID:${this.widgetElementID} `;

    if (this.currentWidgetTree?.widgetID2ChildrenElements?.size) log = `${log} child[`;
    this.currentWidgetTree?.widgetID2ChildrenElements.forEach((v, k) => {
      const childLog = v.debugLogElementTree();
      log = `${log} ${childLog}`;
    });
    if (this.currentWidgetTree?.widgetID2ChildrenElements?.size) log = `${log} ]`;

    if (this.navPushedWidgetElements?.size) log = `${log} navPushedWidgetElements[`;
    this.navPushedWidgetElements?.forEach((v, k) => {
      const childLog = v.debugLogElementTree();
      log = `${log} ${childLog}`;
    });
    if (this.navPushedWidgetElements?.size) log = `${log} ]`;

    log = `${log} }`;
    return log;
  }

  public debugPrintElementTree() {
    MXJSLog.debug(`debugPrintElementTree: ${this.debugLogElementTree()}`);
  }

  // 递归处理builtValue
  // elementPath 为此MXJSStatefulWidget build的WidgetTree中嵌套MXJSStatefulWidget的位置
  // element path : buildWidgetTreeSeq/FlutterWidget ClassName/FlutterWidget ClassName...
  // MXJSStatefulWidget sub class Name + key
  // eg. element path : "/Scaffold_key/AppBar_key/children/1/MXJSWidgetHomePage_key"
  public handleSyncCallbackResult(jsWidgetTree: MXJSWidgetTree, builtValue: any, elementPath = ''): any {
    // Lazy js Widget 在没展开之前会build出 null
    if (!builtValue) {
      return null;
    }

    if (builtValue instanceof MXJSStatelessWidget) {
      elementPath = `${elementPath}/${builtValue.pathComponent}`;
      builtValue = builtValue.build(this);
      // 处理builtValue.build(this)的返回值，仍然是MXJSStatelessWidget的情况，递归处理
      return this.handleSyncCallbackResult(jsWidgetTree, builtValue, elementPath);
    }

    if (builtValue instanceof MXJSStatefulWidget) {
      elementPath = `${elementPath}/${builtValue.pathComponent}`;
      return this.updateStatefulWidget(jsWidgetTree, builtValue, elementPath);
    }

    // builtValue是FlutterWidget镜像类，做preBuild处理
    // ListView等需要在build前展开children的镜像类， 有preBuild 函数
    if (builtValue instanceof MXMirrorWidget) {
      this.preBuildFlutterWidget(builtValue);
      elementPath = `${elementPath}/${builtValue.pathComponent}`;
    }

    // builtValue是FlutterWidget镜像类，递归处理builtValue的属性
    // eslint-disable-next-line no-restricted-syntax
    for (const propertyName in builtValue) {
      let value = builtValue[propertyName];
      // if (value != undefined && value != null && value != 0 &&  value != false)
      if (value) {
        const valuePath = `${elementPath}/${propertyName}`;

        // value 是onTap onXXX响应函数转成CallbackID
        if (typeof value === 'function' && propertyName && String(propertyName).indexOf('on') === 0) {
          // callback 在WidgetTree中的path可以作为唯一标示，匹配前后是否是相同控件的callback，可用于后台直出，或者本地预先保存Build好的UI数据
          const callbackId = jsWidgetTree.createCallbackID(value, valuePath);
          builtValue[propertyName] = callbackId;
          continue;
        }

        // value 是非对象，直接返回原值
        if (typeof value !== 'object') {
          continue;
        }

        value = this.handleSyncCallbackResult(jsWidgetTree, value, valuePath);
        builtValue[propertyName] = value;
      }
    }

    return builtValue;
  }

  public buildContextJson2DartInfo(): any {
    // 如果JS侧先build Widget ，对应Flutter侧还没有创建对应buildOwnerNode，element，要使用parent
    let elementIDs = [this.widgetElementID];
    let elementNode = this.parent;
    while (elementNode) {
      elementIDs.push(elementNode.widgetElementID);
      elementNode = elementNode.parent;
    }

    let jsonObj = {};
    jsonObj[mxMirrorClassNameKey] = 'MXJSElement';
    jsonObj['elementIDs'] = elementIDs;
    return jsonObj;
  }

  // 子类MXJSStatefulElement 重载的_firstBuild() 里执行initState
  protected firstBuild(): MXWidgetRefreshFlutterData {
    return this.rebuild();
  }

  // /@protected
  // /执行检查之后，调用build
  protected performRebuild(): MXWidgetRefreshFlutterData {
    let built: MXWidget | null = null;

    built = this.build();
    this.dirty = false;

    return this.buildRefreshFlutterData(built);
  }

  // subclass override
  // 最终调用到 MXJSStatefulWidget/ MXJSStatelessWidget build 函数
  // 调用用户的build函数，返回MXWidget
  protected build(): MXWidget | null {
    return null;
  }

  // Change the widget used to configure this element.
  // subclass override
  protected update(newStatefulWidget: MXJSBaseWidget): MXWidgetRefreshFlutterData | null {
    return null;
  }

  // buildRefreshFlutterData
  protected buildRefreshFlutterData(built: MXWidget | null): MXWidgetRefreshFlutterData {
    this.buildWidgetDataSeqFeed += 1;
    this.buildWidgetDataSeq = String(this.buildWidgetDataSeqFeed);

    const tempWidgetTree: MXJSWidgetTree = new MXJSWidgetTree(this.buildWidgetDataSeq);

    tempWidgetTree.ownerElement = this;
    this.buildingWidgetTree = tempWidgetTree;
    MXJSLog.log(`MXJSElement: _buildWidgetData ::${this.widget.logString()}`);

    const tempWidgetTreeObjMap = this.inflateWidgetTree(tempWidgetTree, built);

    // 加入缓存map
    this.buildSeq2WTreeMap.set(tempWidgetTree.buildWidgetDataSeq, tempWidgetTree);

    // MXJSStatefulWidget build 实际包含的字段
    const newWidgetObj = new MXWidgetRefreshFlutterData();
    // WidgetInfo
    if (this.widget.key) newWidgetObj.key = this.widget.key;
    if (this.widget.name) newWidgetObj.name = this.widget.name;
    newWidgetObj.className = this.widget.className;
    newWidgetObj.navPushingWidgetElementID = this.navPushingWidgetElementID;
    newWidgetObj.enableProfile = this.widget.enableProfile;
    // build info
    newWidgetObj.widgetID = this.widgetElementID; // 原WidgetID
    newWidgetObj.buildWidgetDataSeq = this.buildWidgetDataSeq;
    newWidgetObj.widgetData = tempWidgetTreeObjMap;
    newWidgetObj.isJSLazyWidget = this.widget.isJSLazyWidget || this.widget.isBuildSyncWithFlutter();

    return newWidgetObj;
  }

  // 递归处理builtValue
  // elementPath 为此MXJSStatefulWidget build的WidgetTree中嵌套MXJSStatefulWidget的位置
  // element path : buildWidgetTreeSeq/FlutterWidget ClassName/FlutterWidget ClassName...
  // MXJSStatefulWidget sub class Name + key
  // eg. element path : "/Scaffold_key/AppBar_key/children/1/MXJSWidgetHomePage_key"
  protected inflateWidgetTree(jsWidgetTree: MXJSWidgetTree, builtValue: any, elementPath = ''): any {
    // MXJSLog.log("inflateWidgetTree:" + builtValue);
    // MXJSLog.debug(elementPath);

    // Lazy js Widget 在没展开之前会build出 null
    if (!builtValue) {
      return null;
    }

    // builtValue的root节点是MXJSStatelessWidget 直接展开，返回build后的值
    if (builtValue instanceof MXJSStatelessWidget) {
      elementPath = `${elementPath}/${builtValue.pathComponent}`;
      builtValue = builtValue.build(this);
      // 处理builtValue.build(this)的返回值，仍然是MXJSStatelessWidget的情况，递归处理
      return this.inflateWidgetTree(jsWidgetTree, builtValue, elementPath);
    }

    if (builtValue instanceof MXJSStatefulWidget) {
      elementPath = `${elementPath}/${builtValue.pathComponent}`;
      return this.updateStatefulWidget(jsWidgetTree, builtValue, elementPath);
    }

    // builtValue是FlutterWidget镜像类，做preBuild处理
    // ListView等需要在build前展开children的镜像类， 有preBuild 函数
    if (builtValue instanceof MXMirrorWidget) {
      this.preBuildFlutterWidget(builtValue);
      elementPath = `${elementPath}/${builtValue.pathComponent}`;
    }

    // builtValue是FlutterWidget镜像类，递归处理builtValue的属性
    // eslint-disable-next-line no-restricted-syntax
    for (const propertyName in builtValue) {
      let value = builtValue[propertyName];
      // if (value != undefined && value != null && value != 0 &&  value != false)
      if (value) {
        const valuePath = `${elementPath}/${propertyName}`;

        // value 是onTap onXXX响应函数转成CallbackID
        if (typeof value === 'function' && propertyName && String(propertyName).indexOf('on') === 0) {
          // callback 在WidgetTree中的path可以作为唯一标示，匹配前后是否是相同控件的callback，可用于后台直出，或者本地预先保存Build好的UI数据
          const callbackId = jsWidgetTree.createCallbackID(value, valuePath);
          builtValue[propertyName] = callbackId;
          continue;
        }

        // value 是非对象，直接返回原值
        if (typeof value !== 'object') {
          continue;
        }

        value = this.inflateWidgetTree(jsWidgetTree, value, valuePath);
        builtValue[propertyName] = value;
      }
    }

    return builtValue;
  }

  // return builtTree
  protected updateStatefulWidget(
    jsWidgetTree: MXJSWidgetTree,
    statefulWidget: MXJSStatefulWidget,
    elementPath: string,
  ) {
    // 使用flutter的更新规则,tree path/ class / key相等，认为是同一位置widget更新
    // TODO:平级节点下，多个statefulWidget children，没有对齐flutter，做同级复用，只实现了相同索引位置的生命周期保持和更新
    let oldElement: MXJSElement | null = null;
    if (this.currentWidgetTree) {
      oldElement = this.currentWidgetTree.findElement(elementPath);
    }

    // mxjsbuilder ddc编译出的继承自MXJSStatefulWidget的 widget，没有被初始化
    statefulWidget.init();

    // 匹配到对应节点
    if (oldElement) {
      MXJSLog.debug(`updateStatefulWidget: Find the old node and reuse it::${elementPath}`);
      jsWidgetTree.addChildElement(elementPath, oldElement);
      return oldElement.update(statefulWidget);
    }

    MXJSLog.debug(`updateStatefulWidget: No old element node found:${elementPath}`);
    const newElement = this.inflateWidget(statefulWidget);
    jsWidgetTree.addChildElement(elementPath, newElement);

    return newElement.mount(this);
  }

  //  Element inflateWidget(Widget newWidget, dynamic newSlot)
  protected inflateWidget(newWidget: MXJSBaseWidget, newSlot?: any): MXJSElement {
    // let key = newWidget.key;
    // TODO:retakeInactiveElement GlobalKey final Element newChild = _retakeInactiveElement(key, newWidget);
    return newWidget.createElement();
  }

  // FlutterWidget
  protected preBuildFlutterWidget(flutterWidget: MXMirrorWidget) {
    if (!flutterWidget.className) {
      flutterWidget.className = flutterWidget.constructor.name;
    }

    // 方式 1
    if (specialPreBuild[flutterWidget.className]) {
      specialPreBuild[flutterWidget.className](flutterWidget, this);
    } else {
      flutterWidget.preBuild(this);
    }
  }

  // 0.1.0 2020-4-2 修改为不经过dart侧buildend确认，当发送rebuild或等价构建UI调用后
  // 直接确认CurrentTree，目的是可以聚合延迟发送buildend
  protected confirmCurrentWidgetTree() {
    this.preWidgetTree = this.currentWidgetTree;
    this.currentWidgetTree = this.buildingWidgetTree;
  }

  protected findElementFromWidgetTree(widgetTree: MXJSWidgetTree, widgetID: string) {
    if (widgetTree === null) {
      return null;
    }

    const element = widgetTree.widgetID2ChildrenElements.get(widgetID);
    if (element) {
      return element;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const entry of widgetTree.widgetID2ChildrenElements) {
      const [, element] = entry;
      const findElement = element?.findChild(widgetID);
      if (findElement) {
        return findElement;
      }
    }

    return null;
  }

  // 比buildWidgetDataSeq小的tree 可以清理掉了
  protected clearWidgetTree(buildWidgetDataSeq: string) {
    const intCurSeq = parseInt(buildWidgetDataSeq, 10);
    const clearSeqs: string[] = [];

    this.buildSeq2WTreeMap.forEach((v, seq) => {
      const intSeq = parseInt(seq, 10);

      // 保留第一次的构建，兼容有些Flutter Widget有不更新Widget内容的bug
      if (intSeq > 1 && intSeq < intCurSeq) {
        clearSeqs.push(seq);
      }
    });

    clearSeqs.forEach((seq) => {
      // MXJSLog.debug("JSWidget clearWidgetTree::" + this.widget.logString() + " delSeq: " + delSeq);
      this.buildSeq2WTreeMap.delete(seq);
    });
  }

  // TODO: 清理push页面要重新梳理，向上找到有navPushedWidgetElements的父节点，然后删除
  protected clearPushedWidgetElements() {
    // 清空当前widget的navPushedWidgets数据
    this.navPushedWidgetElements.forEach((element, k) => {
      element.onDispose();

      // TODO::fix
      if (element.parent) {
        // element.parent.removeChildWidget(element);
      }

      if (element.navPushingWidgetElement) {
        element.navPushingWidgetElement.removePushedWidget(element);
      }
    });

    this.navPushedWidgetElements = new Map<string, MXJSElement>();
  }

  protected removePushedWidget(element) {
    this.navPushedWidgetElements.delete(element.widgetElementID);
  }

  protected wappingPushingWidget(pushWidget: MXJSBaseWidget | MXMirrorWidget) {
    let newPushWidget: MXJSBaseWidget;
    // 目前业务页面的StatefulWidget和StatelessWidget都是继承至MXJSBaseWidget，而所有的基础widget都是继承至MXMirrorWidget
    if (pushWidget instanceof MXJSBaseWidget) {
      newPushWidget = pushWidget as MXJSBaseWidget;
    } else {
      // 那种根节点不是StatefulWidget的页面，比如Theme
      // 特殊处理，用MXJSStatelessWidget包裹一层
      newPushWidget = new MXJSStatelessWapperWidget(pushWidget);
    }

    return newPushWidget;
  }

  protected getWidgetTreeBuildSeq(widgetTree: MXJSWidgetTree | null) {
    if (widgetTree === null) {
      return '0';
    }
    return widgetTree.buildWidgetDataSeq;
  }

  // 性能分析模式
  // 打开性能分析模式，widget.enableProfile = true
  // 可以重载onFirstFrameEnd，使用profileInfo获得各个阶段耗时
  protected updateFirstFrameProfileInfo(profileInfo: any) {
    if (this.widget.enableProfile && profileInfo && this.profileInfo) {
      this.profileInfo.updateFirstFrameProfileInfo(profileInfo);
    }
  }

  // js->flutter
  protected navigatorPushBundleJSPage(pushWidget: MXJSPageWidget) {
    // Flutter侧 通过navPushingWidgetElementID找到对应Widget来push页面 pushWidget
    pushWidget.navPushingWidgetElementID = this.widgetElementID;
    const data = JSON.stringify(pushWidget);
    bridgeMXNativeJSFlutterApp.callFlutterWidgetChannel('navigatorPushBundleJSPage', data);
  }
}

// /保存一次build的数据，缓存element的树，缓存callback函数，方便整体释放过期的build数据
export class MXJSWidgetTree {
  public buildWidgetDataSeq: string;
  public ownerElement: MXJSElement;
  public widgetID2ChildrenElements: Map<string, MXJSElement>; // id 2 widget

  private childrenElements: Map<string, MXJSElement>; // path 2 widget

  private callbackIDFeed = 0;
  private callbackID2fun: Map<string, any>;

  public constructor(buildWidgetDataSeq: string) {
    this.buildWidgetDataSeq = buildWidgetDataSeq;

    this.childrenElements = new Map<string, MXJSElement>(); // path 2 widget
    this.widgetID2ChildrenElements = new Map<string, MXJSElement>(); // id 2 widget

    this.callbackID2fun = new Map<string, any>();
  }

  public findElement(elementPath: string): MXJSElement | null {
    const element = this.childrenElements.get(elementPath);
    return element ? element : null;
  }

  public addChildElement(elementPath: string, element: MXJSElement) {
    this.childrenElements.set(elementPath, element);
    this.widgetID2ChildrenElements.set(element.widgetElementID, element);
  }

  // TODO:callbackPath应用
  public createCallbackID(callback: any, callbackPath: string) {
    const cID = this.generateCallbackID();
    const callbackID = `${this.ownerElement.widgetElementID}/${cID}`;
    this.callbackID2fun.set(callbackID, callback);
    return callbackID;
  }

  public invokeCallback(callbackID: string, args: any[]): any {
    const callback: Function = this.findCallback(callbackID);

    if (args) {
      return callback(...args);
    }
    return callback();
  }

  public findCallback(callbackID: string): any {
    return this.callbackID2fun.get(callbackID);
  }

  public canInvoke(callbackID: string): boolean {
    return this.callbackID2fun.get(callbackID);
  }

  private generateCallbackID(): string {
    this.callbackIDFeed += 1; // copy 老逻辑
    return `${this.callbackIDFeed}`;
  }
}

// / An [Element] that uses a [StatelessWidget] as its configuration.
export class MXJSStatelessElement extends MXJSElement {
  public onFirstFrameEnd(profileInfo: any) {
    super.onFirstFrameEnd(profileInfo);

    if (!(this.widget instanceof MXJSStatelessWidget)) {
      throw exception('MXJSStatelessElement.widget is not MXJSStatelessWidget! ');
    }

    this.widget.onFirstFrameEnd(this.profileInfo);
  }

  protected build(): MXWidget | null {
    if (!(this.widget instanceof MXJSStatelessWidget)) {
      throw exception('MXJSStatelessElement.widget is not MXJSStatelessWidget! ');
    }

    return this.widget.build(this);
  }

  protected update(newWidget: MXJSStatelessWidget): MXWidgetRefreshFlutterData | null {
    return this.rebuild();
  }
}

// An [Element] that uses a [StatefulWidget] as its configuration.
export class MXJSStatefulElement extends MXJSElement {
  public state: MXJSWidgetState | null = null;

  public constructor(widget: MXJSStatefulWidget) {
    super(widget);

    // Lazy模式，只创建Element节点，用于接受Flutter侧消息，不展开创建State对象
    if (widget.isJSLazyWidget && widget.isLazyWidgetDelayBuild) {
      return;
    }

    // build函数与flutter同步模式，只创建Element节点，用于接受Flutter侧消息，不展开创建State对象
    // 等待Flutter侧build时同步build
    if (widget.isBuildSyncWithFlutter()) {
      return;
    }

    this.setupState();
  }

  public lazyModeFirstBuild() {
    if (this.state) {
      MXJSLog.debug(`MXJSStatefulElement:lazyModeRebuild this.state != null return; ${this.widgetLogString()}`);
      return;
    }

    MXJSLog.debug(`MXJSStatefulElement:lazyModeRebuild this.state = null firstBuild ${this.widgetLogString()}`);

    this.setupState();
    const startBuildTreeTime = new Date().valueOf();
    const refreshFlutterData: MXWidgetRefreshFlutterData = this.firstBuild();
    this.owner.callFlutterRebuildWidget(refreshFlutterData, this, startBuildTreeTime);
  }

  public onBuildEnd(buildWidgetDataSeq: string) {
    super.onBuildEnd(buildWidgetDataSeq);

    // TODO:重构
    if (this.widget instanceof MXJSStatefulWidget && this.state) {
      this.state.onBuildEnd({});
    }
  }

  public onFirstFrameEnd(profileInfo: any) {
    super.onFirstFrameEnd(profileInfo);

    if (!(this.widget instanceof MXJSStatefulWidget)) {
      throw exception('MXJSStatefulElement.widget is not MXJSStatefulWidget! ');
    }

    if (this.state) {
      this.state.onFirstFrameEnd(this.profileInfo);
    }
  }

  public dispose(isParentDispose: boolean) {
    if (this.widget instanceof MXJSStatefulWidget && this.state) {
      this.state.dispose();
      this.state = null;
    }
    super.dispose(isParentDispose);
  }

  protected setupState() {
    if (!(this.widget instanceof MXJSStatefulWidget)) {
      //
      throw exception('MXJSStatefulElement.widget is not MXJSStatefulWidget! ');
    }
    this.state = this.widget.createState();
    this.state.element = this;
    this.state.widget = this.widget;
  }

  // *initState的时机*
  protected firstBuild(): MXWidgetRefreshFlutterData {
    // lazy 模式state 暂时没有创建
    if (!this.state) {
      return super.firstBuild();
    }

    this.state.initState();
    return super.firstBuild();
  }

  protected build(): MXWidget | null {
    // lazy 模式，state还没创建，直接返回空值
    if (!this.state) {
      return null;
    }
    return this.state.build(this);
  }

  // Change the widget used to configure this element.
  //
  // The framework calls this function when the parent wishes to use a
  // different widget to configure this element. The new widget is guaranteed
  // to have the same [runtimeType] as the old widget.
  //
  // This function is called only during the "active" lifecycle state.
  protected update(newStatefulWidget: MXJSStatefulWidget): MXWidgetRefreshFlutterData | null {
    if (typeof newStatefulWidget !== typeof this.widget) {
      // same error
      return null;
    }

    const oldWidget = this.widget as MXJSStatefulWidget;
    this.widget = newStatefulWidget;
    this.state?.didUpdateWidget(oldWidget);

    // lazy 模式，this.state 可能没有创建
    if (this.state) {
      this.state.widget = newStatefulWidget;
    }

    return this.rebuild();
  }
}

// Element 组成树形结构，RootMgrElement为最顶层节点, 负责管理从Flutter Push的根部节点
// 从Flutter Push的根部节点可能有多个，MXJSRootMgrElement要负责这些RootElement的生命周期
// *从代码上MXJSRootMgrElement也是继承自MXJSElement，继承递归管理子element的功能。*
export class MXJSRootMgrElement extends MXJSElement {
  public constructor() {
    // 固定一颗WidgetTree
    const widget = new MXJSStatelessWapperWidget(null);
    widget.name = 'RootMgrElement';
    super(widget);

    this.currentWidgetTree = new MXJSWidgetTree('1');
    this.buildSeq2WTreeMap.set(this.currentWidgetTree.buildWidgetDataSeq, this.currentWidgetTree);
  }

  // Flutter->JS  push/run widget 为js入口api ，作为根部widget ，可以有多个root widget
  // TODO:: 重复push一样的widget需要处理
  public addRootElement(rootElement: MXJSElement) {
    rootElement.rootMgrElement = this;
    this.currentWidgetTree?.addChildElement(rootElement.widget.pathComponent, rootElement);
  }
}
