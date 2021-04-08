// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatefulWidget, State } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class StreamBuilderBase extends StatefulWidget {
  stream: any;
}
export { StreamBuilderBase };
class _StreamBuilderBaseState extends State {
  subscription: any;
  summary: any;
}
export { _StreamBuilderBaseState };
enum ConnectionState {
  none = '{ "_name": "ConnectionState.none", "index": 0 }',
  waiting = '{ "_name": "ConnectionState.waiting", "index": 1 }',
  active = '{ "_name": "ConnectionState.active", "index": 2 }',
  done = '{ "_name": "ConnectionState.done", "index": 3 }',
};

export { ConnectionState };
class AsyncSnapshot extends MXDartClass {
  connectionState: ConnectionState;
  data: any;
  error: any;
  static nothing() {
    var jsObj = new AsyncSnapshot();
    jsObj['constructorName'] = 'nothing';
    return jsObj;
  }
  static waiting() {
    var jsObj = new AsyncSnapshot();
    jsObj['constructorName'] = 'waiting';
    return jsObj;
  }
  static withData(state?: ConnectionState, data?: any) {
    var jsObj = new AsyncSnapshot();
    jsObj['state'] = state;
    jsObj.data = data;
    jsObj['constructorName'] = 'withData';
    return jsObj;
  }
  static withError(state?: ConnectionState, error?: any) {
    var jsObj = new AsyncSnapshot();
    jsObj['state'] = state;
    jsObj.error = error;
    jsObj['constructorName'] = 'withError';
    return jsObj;
  }
  // MX Modified begin
  public inState(state?: ConnectionState) {
    const jsObj = new AsyncSnapshot();
    jsObj['state'] = state;
    jsObj['constructorName'] = 'nothing';
    return jsObj;
  }
  // MX Modified end
}
export { AsyncSnapshot };
class StreamBuilder extends StreamBuilderBase {
  builder: any;
  initialData: any;
  public constructor(namedParameters: {key?: Key, initialData?: any, stream?: any, builder?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.initialData = namedParameters.initialData;
    this.stream = namedParameters.stream;
    this.builder = namedParameters.builder;
    this.className = 'StreamBuilder';
  }
}
export { StreamBuilder };