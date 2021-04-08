"use strict";
//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._FutureBuilderState = exports.FutureBuilder = void 0;
const widget_1 = require("../widget/widget");
const material_1 = require("@mxflutter/mxflutter-widgets/material");
class FutureBuilder extends widget_1.MXJSStatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.future = namedParameters.future;
        this.initialData = namedParameters.initialData;
        this.builder = namedParameters.builder;
        this.className = 'FutureBuilder';
    }
    // MX modified begin
    createState() {
        return new _FutureBuilderState();
    }
}
exports.FutureBuilder = FutureBuilder;
// MX Modified begin
class _FutureBuilderState extends widget_1.MXJSWidgetState {
    initState() {
        const futureBuilder = this.widget;
        this.snapshot = material_1.AsyncSnapshot.withData(material_1.ConnectionState.none, futureBuilder.initialData);
        this.subscribe();
    }
    didUpdateWidget(oldWidget) {
        super.didUpdateWidget(oldWidget);
        const futureBuilder = this.widget;
        if (oldWidget.future !== futureBuilder.future) {
            if (this.activeCallbackIdentity !== null) {
                this.unsubscribe();
                this.snapshot = this.snapshot.inState(material_1.ConnectionState.none);
            }
            this.subscribe();
        }
    }
    build(context) {
        const futureBuilder = this.widget;
        return futureBuilder.builder(context, this.snapshot);
    }
    dispose() {
        this.unsubscribe();
        super.dispose();
    }
    subscribe() {
        const futureBuilder = this.widget;
        if (futureBuilder.future !== null) {
            const callbackIdentity = Object();
            this.activeCallbackIdentity = callbackIdentity;
            futureBuilder
                .future()
                .then((data) => {
                if (this.activeCallbackIdentity === callbackIdentity) {
                    this.setState(function () {
                        this.snapshot = material_1.AsyncSnapshot.withData(material_1.ConnectionState.done, data);
                    }.bind(this));
                }
            })
                .catch((error) => {
                if (this.activeCallbackIdentity === callbackIdentity) {
                    this.setState(function () {
                        this.snapshot = material_1.AsyncSnapshot.withError(material_1.ConnectionState.done, error);
                    }.bind(this));
                }
            });
            this.snapshot = this.snapshot.inState(material_1.ConnectionState.waiting);
        }
    }
    unsubscribe() {
        this.activeCallbackIdentity = null;
    }
}
exports._FutureBuilderState = _FutureBuilderState;
