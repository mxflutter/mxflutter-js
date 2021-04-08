"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MXJSPageWidget = exports.MXJSLazyStatefulWapperWidget = exports.MXJSHostStatefulWapperWidget = exports.MXJSSingleChildStatefulWidget = exports.MXJSStatelessWapperWidget = exports.MXJSWidgetState = exports.MXJSStatefulWidget = exports.MXJSStatelessWidget = exports.MXJSBaseWidget = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
const element_1 = require("../element/element");
const widgets_binding_observer_1 = require("./widgets-binding-observer");
class MXJSBaseWidget {
    constructor(name, { key } = {}) {
        // Lazy模式
        // JS创建一个Lazy MXJSStatefulWidget，创建出Element之后，暂时不展开（不创建state，不调用initState，build）
        // 等待Flutter侧展开时，通知JS刷新，主要用在TabBarView
        // TabBarView Tab间切换时，会引发被隐藏的TabView Dispose，isJSLazyWidget阻止JS侧释放掉被隐藏的Element，仍能接收事件
        this.isJSLazyWidget = false;
        // 当处于Lazy模式时，是否延迟Build，例如三个Tab页面，第一个显示的页面不延迟build，其他两个延迟build
        this.isLazyWidgetDelayBuild = true;
        this.name = name;
        this.key = key;
        this.initialized = false;
        // 编译出来的JS可能调用不到JS构造函数，手动调用下.init
        this.init();
    }
    init() {
        // /性能分析模式
        // /打开性能分析模式，widget.enableProfile = true
        // /可以重载onFirstFrameEnd，获得各个阶段耗时
        this.enableProfile = false;
    }
    // subclass override
    onBuildEnd(args) { }
    // 是否与Flutter同步构建，打开后会损失性能
    // 用于在JS侧如果嵌套了MXJSStatefulWidget，子Widget build函数中如要使用BuildContext信息，
    // 传递的BuildContext是root widget的，如果获取的信息不是想要的，打开这个标识位
    // 子Widget在Flutter侧对应节点展开时才调用到JS，获取到的BuildContext是实时的
    isBuildSyncWithFlutter() {
        return false;
    }
    // 用于WidgetTree的Path定位
    get pathComponent() {
        let component = this.constructor.name;
        if (this.name) {
            component = `${component}-${this.name}`;
        }
        if (this.key) {
            component = `${component}-${this.key.toString()}`;
        }
        return component;
    }
    logString() {
        return `Widget: Name: ${this.name} Class: ${this.className}`;
    }
    // subclass override
    hostWidgetFirstFrameEnd(profileInfo) { }
}
exports.MXJSBaseWidget = MXJSBaseWidget;
// 无状态的MXJSStatelessWidget,在JS PreBuild阶段提前build
class MXJSStatelessWidget extends MXJSBaseWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXJSStatelessWidget';
    }
    init() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        super.init();
        this.className = 'MXJSStatelessWidget';
    }
    // MXJSStatelessElement createElement();
    createElement() {
        if (!this.initialized) {
            this.init();
        }
        const element = new element_1.MXJSStatelessElement(this);
        if (this.flutterHostWidgetID) {
            element.widgetElementID = this.flutterHostWidgetID;
        }
        return element;
    }
    // subclass overwite
    onFirstFrameEnd(profileInfo) { }
}
exports.MXJSStatelessWidget = MXJSStatelessWidget;
class MXJSStatefulWidget extends MXJSBaseWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXJSStatefulWidget';
    }
    init() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        super.init();
        this.className = 'MXJSStatefulWidget';
    }
    // MXJSStatefulElement createElement();
    createElement() {
        if (!this.initialized) {
            this.init();
        }
        const element = new element_1.MXJSStatefulElement(this);
        if (this.flutterHostWidgetID) {
            element.widgetElementID = this.flutterHostWidgetID;
        }
        return element;
    }
}
exports.MXJSStatefulWidget = MXJSStatefulWidget;
class MXJSWidgetState extends widgets_binding_observer_1.WidgetsBindingObserver {
    constructor() {
        super();
        this.isBuildEnd = false;
        this.setStateCallback = null;
        this.widget = null;
    }
    get context() {
        return this.element;
    }
    get mounted() {
        return this.element !== null;
    }
    // Called when this object is inserted into the tree.
    //
    // The framework will call this method exactly once for each [State] object
    // it creates.
    // subclass override
    // @mustCallSuper
    initState() {
        var _a;
        mxflutter_base_1.MXJSLog.log(`MXJSWidgetState initState ::${(_a = this.widget) === null || _a === void 0 ? void 0 : _a.logString()}`);
    }
    setState(fun) {
        var _a, _b;
        mxflutter_base_1.MXJSLog.log(`MXJSWidgetState setState ::${(_a = this.widget) === null || _a === void 0 ? void 0 : _a.logString()}`);
        if (fun) {
            fun();
        }
        (_b = this.element) === null || _b === void 0 ? void 0 : _b.markNeedsBuild();
    }
    // subclass overwite
    onBuildEnd(args) { }
    // subclass overwite
    onFirstFrameEnd(profileInfo) { }
    // subclass override
    dispose() { }
    // subclass override
    didUpdateWidget(oldWidget) { }
    // subclass override
    didChangeDependencies() { }
}
exports.MXJSWidgetState = MXJSWidgetState;
// 支持 mxjsbuilder v2，widget要有 new 方法
MXJSWidgetState.new = MXJSWidgetState.constructor;
class MXJSStatelessWapperWidget extends MXJSStatelessWidget {
    constructor(child, { key } = {}) {
        super('MXJSStatelessWapperWidget', { key });
        this.child = child;
    }
    build() {
        return this.child;
    }
}
exports.MXJSStatelessWapperWidget = MXJSStatelessWapperWidget;
class MXJSSingleChildStatefulWidget extends MXJSStatefulWidget {
    constructor(child, { key, name } = {}) {
        super(name !== null && name !== void 0 ? name : 'MXJSSingleChildStatefulWidget', { key });
        this.child = child;
    }
    createState() {
        return new MXJSSingleChildStatefulWidgetState();
    }
}
exports.MXJSSingleChildStatefulWidget = MXJSSingleChildStatefulWidget;
class MXJSSingleChildStatefulWidgetState extends MXJSWidgetState {
    build(buildContext) {
        if (this.widget === null) {
            return null;
        }
        const hostWidget = this.widget;
        return hostWidget.child;
    }
    onFirstFrameEnd(profileInfo) {
        const hostWidget = this.widget;
        const childWidget = hostWidget.child;
        childWidget === null || childWidget === void 0 ? void 0 : childWidget.hostWidgetFirstFrameEnd(profileInfo);
    }
}
// 对应 Flutter 的 HostWidget 节点
class MXJSHostStatefulWapperWidget extends MXJSSingleChildStatefulWidget {
    constructor(child, { key } = {}) {
        super(child, { key, name: 'MXJSHostStatefulWapperWidget' });
        this.child = child;
    }
}
exports.MXJSHostStatefulWapperWidget = MXJSHostStatefulWapperWidget;
// JS侧主动创建空Widget，等待Flutter展开时刷新
class MXJSLazyStatefulWapperWidget extends MXJSSingleChildStatefulWidget {
    constructor(child, { key } = {}) {
        super(child, { key, name: 'MXJSLazyStatefulWapperWidget' });
        this.child = child;
        this.isJSLazyWidget = true;
        this.isLazyWidgetDelayBuild = true;
    }
}
exports.MXJSLazyStatefulWapperWidget = MXJSLazyStatefulWapperWidget;
// 对应Flutter侧相同类，用于从一个bundle页面跳转到另一个bundle页面
class MXJSPageWidget extends mxflutter_base_1.MXDartClass {
    constructor({ jsWidgetName, key, flutterPushParams, } = {}) {
        super();
        this.jsWidgetName = jsWidgetName;
        this.key = key;
        this.flutterPushParams = flutterPushParams;
    }
}
exports.MXJSPageWidget = MXJSPageWidget;
