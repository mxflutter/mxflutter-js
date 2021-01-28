//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedNotifier } from './inherited-notifier';
import { StatefulWidget$, State$, StatelessWidget$ } from './framework';
class Focus extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.onFocusChange = namedParameters.onFocusChange;
        this.onKey = namedParameters.onKey;
        this.debugLabel = namedParameters.debugLabel;
        this.canRequestFocus = namedParameters.canRequestFocus;
        this.descendantsAreFocusable = namedParameters.descendantsAreFocusable;
        this.skipTraversal = namedParameters.skipTraversal;
        this.includeSemantics = namedParameters.includeSemantics;
        this.className = 'Focus';
    }
}
export { Focus };
class _FocusState extends State$ {
}
export { _FocusState };
class FocusScope extends Focus {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['node'] = namedParameters.node;
        this['child'] = namedParameters.child;
        this['autofocus'] = namedParameters.autofocus;
        this['onFocusChange'] = namedParameters.onFocusChange;
        this['canRequestFocus'] = namedParameters.canRequestFocus;
        this['skipTraversal'] = namedParameters.skipTraversal;
        this['onKey'] = namedParameters.onKey;
        this['debugLabel'] = namedParameters.debugLabel;
        this.className = 'FocusScope';
    }
}
export { FocusScope };
class _FocusScopeState extends _FocusState {
}
export { _FocusScopeState };
class _FocusMarker extends InheritedNotifier {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['node'] = namedParameters.node;
        this['child'] = namedParameters.child;
        this.className = '_FocusMarker';
    }
}
export { _FocusMarker };
class ExcludeFocus extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.excluding = namedParameters.excluding;
        this.child = namedParameters.child;
        this.className = 'ExcludeFocus';
    }
}
export { ExcludeFocus };
