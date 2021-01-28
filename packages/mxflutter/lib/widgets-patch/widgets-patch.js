//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXJSStatefulWidget, MXJSWidgetState } from '../widget/widget';
import { AsyncSnapshot, ConnectionState } from '@mxflutter/mxflutter-widgets/material';
class FutureBuilder extends MXJSStatefulWidget {
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
export { FutureBuilder };
// MX Modified begin
class _FutureBuilderState extends MXJSWidgetState {
    initState() {
        const futureBuilder = this.widget;
        this.snapshot = AsyncSnapshot.withData(ConnectionState.none, futureBuilder.initialData);
        this.subscribe();
    }
    didUpdateWidget(oldWidget) {
        super.didUpdateWidget(oldWidget);
        const futureBuilder = this.widget;
        if (oldWidget.future !== futureBuilder.future) {
            if (this.activeCallbackIdentity !== null) {
                this.unsubscribe();
                this.snapshot = this.snapshot.inState(ConnectionState.none);
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
                        this.snapshot = AsyncSnapshot.withData(ConnectionState.done, data);
                    }.bind(this));
                }
            })
                .catch((error) => {
                if (this.activeCallbackIdentity === callbackIdentity) {
                    this.setState(function () {
                        this.snapshot = AsyncSnapshot.withError(ConnectionState.done, error);
                    }.bind(this));
                }
            });
            this.snapshot = this.snapshot.inState(ConnectionState.waiting);
        }
    }
    unsubscribe() {
        this.activeCallbackIdentity = null;
    }
}
// MX Modified end
export { _FutureBuilderState };
