//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXJSStatefulWidget, MXJSWidgetState } from '../widget/widget';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
import { Key, AsyncSnapshot, ConnectionState } from '@mxflutter/mxflutter-widgets/material';

class FutureBuilder extends MXJSStatefulWidget {
  public future: any;
  public builder: any;
  public initialData: any;
  public constructor(namedParameters: { key?: Key; future?: any; initialData?: any; builder?: any } = {}) {
    super();
    this.key = namedParameters.key;
    this.future = namedParameters.future;
    this.initialData = namedParameters.initialData;
    this.builder = namedParameters.builder;
    this.className = 'FutureBuilder';
  }
  // MX modified begin
  public createState() {
    return new _FutureBuilderState();
  }
  // MX modified end
}
export { FutureBuilder };
// MX Modified begin
class _FutureBuilderState extends MXJSWidgetState {
  protected snapshot: AsyncSnapshot;
  protected activeCallbackIdentity: Object;
  public initState() {
    const futureBuilder = this.widget as FutureBuilder;
    this.snapshot = AsyncSnapshot.withData(ConnectionState.none, futureBuilder.initialData);
    this.subscribe();
  }

  public didUpdateWidget(oldWidget) {
    super.didUpdateWidget(oldWidget);

    const futureBuilder = this.widget as FutureBuilder;
    if (oldWidget.future !== futureBuilder.future) {
      if (this.activeCallbackIdentity !== null) {
        this.unsubscribe();
        this.snapshot = this.snapshot.inState(ConnectionState.none);
      }
      this.subscribe();
    }
  }

  public build(context) {
    const futureBuilder = this.widget as FutureBuilder;
    return futureBuilder.builder(context, this.snapshot);
  }

  public dispose() {
    this.unsubscribe();
    super.dispose();
  }

  protected subscribe() {
    const futureBuilder = this.widget as FutureBuilder;
    if (futureBuilder.future !== null) {
      const callbackIdentity = Object();
      this.activeCallbackIdentity = callbackIdentity;
      futureBuilder
        .future()
        .then((data) => {
          if (this.activeCallbackIdentity === callbackIdentity) {
            this.setState(
              function () {
                this.snapshot = AsyncSnapshot.withData(ConnectionState.done, data);
              }.bind(this),
            );
          }
        })
        .catch((error) => {
          if (this.activeCallbackIdentity === callbackIdentity) {
            this.setState(
              function () {
                this.snapshot = AsyncSnapshot.withError(ConnectionState.done, error);
              }.bind(this),
            );
          }
        });
      this.snapshot = this.snapshot.inState(ConnectionState.waiting);
    }
  }

  protected unsubscribe() {
    this.activeCallbackIdentity = null;
  }
}
// MX Modified end

export { _FutureBuilderState };
