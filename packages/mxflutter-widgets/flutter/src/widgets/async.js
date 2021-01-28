//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class StreamBuilderBase extends StatefulWidget$ {
}
export { StreamBuilderBase };
class _StreamBuilderBaseState extends State$ {
}
export { _StreamBuilderBaseState };
var ConnectionState;
(function (ConnectionState) {
    ConnectionState["none"] = "{ \"_name\": \"ConnectionState.none\", \"index\": 0 }";
    ConnectionState["waiting"] = "{ \"_name\": \"ConnectionState.waiting\", \"index\": 1 }";
    ConnectionState["active"] = "{ \"_name\": \"ConnectionState.active\", \"index\": 2 }";
    ConnectionState["done"] = "{ \"_name\": \"ConnectionState.done\", \"index\": 3 }";
})(ConnectionState || (ConnectionState = {}));
export { ConnectionState };
class AsyncSnapshot extends MXDartClass {
    static nothing() {
        var jsObj = new AsyncSnapshot();
        jsObj['constructorName'] = 'nothing';
        return jsObj;
    }
    static withData(state, data) {
        var jsObj = new AsyncSnapshot();
        jsObj['state'] = state;
        jsObj.data = data;
        jsObj['constructorName'] = 'withData';
        return jsObj;
    }
    static withError(state, error) {
        var jsObj = new AsyncSnapshot();
        jsObj['state'] = state;
        jsObj.error = error;
        jsObj['constructorName'] = 'withError';
        return jsObj;
    }
    // MX Modified begin
    inState(state) {
        const jsObj = new AsyncSnapshot();
        jsObj['state'] = state;
        jsObj['constructorName'] = 'nothing';
        return jsObj;
    }
}
export { AsyncSnapshot };
class StreamBuilder extends StreamBuilderBase {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialData = namedParameters.initialData;
        this.stream = namedParameters.stream;
        this.builder = namedParameters.builder;
        this.className = 'StreamBuilder';
    }
}
export { StreamBuilder };
// class FutureBuilder extends MXJSStatefulWidget {
//   future: any;
//   builder: any;
//   initialData: any;
//   public constructor(namedParameters: { key?: Key; future?: any; initialData?: any; builder?: any } = {}) {
//     super();
//     this.key = namedParameters.key;
//     this.future = namedParameters.future;
//     this.initialData = namedParameters.initialData;
//     this.builder = namedParameters.builder;
//     this.className = 'FutureBuilder';
//   }
//   // MX modified begin
//   public createState() {
//     return new _FutureBuilderState();
//   }
//   // MX modified end
// }
// export { FutureBuilder };
// // MX Modified begin
// class _FutureBuilderState extends MXJSWidgetState {
//   protected snapshot: AsyncSnapshot;
//   protected activeCallbackIdentity: Object;
//   public initState() {
//     const futureBuilder = this.widget as FutureBuilder;
//     this.snapshot = AsyncSnapshot.withData(ConnectionState.none, futureBuilder.initialData);
//     this.subscribe();
//   }
//   public didUpdateWidget(oldWidget) {
//     super.didUpdateWidget(oldWidget);
//     const futureBuilder = this.widget as FutureBuilder;
//     if (oldWidget.future !== futureBuilder.future) {
//       if (this.activeCallbackIdentity !== null) {
//         this.unsubscribe();
//         this.snapshot = this.snapshot.inState(ConnectionState.none);
//       }
//       this.subscribe();
//     }
//   }
//   public build(context) {
//     const futureBuilder = this.widget as FutureBuilder;
//     return futureBuilder.builder(context, this.snapshot);
//   }
//   public dispose() {
//     this.unsubscribe();
//     super.dispose();
//   }
//   protected subscribe() {
//     const futureBuilder = this.widget as FutureBuilder;
//     if (futureBuilder.future !== null) {
//       const callbackIdentity = Object();
//       this.activeCallbackIdentity = callbackIdentity;
//       futureBuilder
//         .future()
//         .then((data) => {
//           if (this.activeCallbackIdentity === callbackIdentity) {
//             this.setState(
//               function () {
//                 this.snapshot = AsyncSnapshot.withData(ConnectionState.done, data);
//               }.bind(this),
//             );
//           }
//         })
//         .catch((error) => {
//           if (this.activeCallbackIdentity === callbackIdentity) {
//             this.setState(
//               function () {
//                 this.snapshot = AsyncSnapshot.withError(ConnectionState.done, error);
//               }.bind(this),
//             );
//           }
//         });
//       this.snapshot = this.snapshot.inState(ConnectionState.waiting);
//     }
//   }
//   protected unsubscribe() {
//     this.activeCallbackIdentity = null;
//   }
// }
// // MX Modified end
// export { _FutureBuilderState };
