//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedNotifier } from './inherited-notifier';
import { StatefulWidget$, State$ } from './framework';
import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class KeySet extends MXDartClass {
    constructor(key1, key2, key3, key4) {
        super();
        this['key1'] = key1;
        this['key2'] = key2;
        this['key3'] = key3;
        this['key4'] = key4;
        this.className = 'KeySet';
    }
    static fromSet(keys) {
        var jsObj = new KeySet();
        jsObj['__mx_keys'] = keys;
        jsObj['constructorName'] = 'fromSet';
        return jsObj;
    }
}
export { KeySet };
class LogicalKeySet extends KeySet {
    constructor(key1, key2, key3, key4) {
        super();
        this['key1'] = key1;
        this['key2'] = key2;
        this['key3'] = key3;
        this['key4'] = key4;
        this.className = 'LogicalKeySet';
    }
    static fromSet(keys) {
        var jsObj = new LogicalKeySet();
        jsObj['keys'] = keys;
        jsObj['constructorName'] = 'fromSet';
        return jsObj;
    }
}
export { LogicalKeySet };
class ShortcutManager extends ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this.shortcuts = namedParameters.shortcuts;
        this.modal = namedParameters.modal;
        this.className = 'ShortcutManager';
    }
}
export { ShortcutManager };
class Shortcuts extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.manager = namedParameters.manager;
        this.shortcuts = namedParameters.shortcuts;
        this.child = namedParameters.child;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'Shortcuts';
    }
}
export { Shortcuts };
class _ShortcutsState extends State$ {
}
export { _ShortcutsState };
class _ShortcutsMarker extends InheritedNotifier {
    constructor(namedParameters = {}) {
        super();
        this['manager'] = namedParameters.manager;
        this['child'] = namedParameters.child;
        this.className = '_ShortcutsMarker';
    }
}
export { _ShortcutsMarker };
