// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { InheritedNotifier } from './inherited-notifier';
import { Key } from '../foundation/key';
import { StatefulWidget, Widget, State } from './framework';
import { ChangeNotifier } from '../foundation/change-notifier';
import { LogicalKeyboardKey } from '../services/keyboard-key';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class KeySet extends MXDartClass {
  keys: any;
  hashCode: number;
  public constructor(key1?: any, key2?: any, key3?: any, key4?: any) {
    super();
    this['key1'] = key1;
    this['key2'] = key2;
    this['key3'] = key3;
    this['key4'] = key4;
    this.className = 'KeySet';
  }
  static fromSet(keys?: Set<any>) {
    var jsObj = new KeySet();
    jsObj['mx_keys'] = keys;
    jsObj['constructorName'] = 'fromSet';
    return jsObj;
  }
}
export { KeySet };
class LogicalKeySet extends KeySet {
  public constructor(key1?: LogicalKeyboardKey, key2?: LogicalKeyboardKey, key3?: LogicalKeyboardKey, key4?: LogicalKeyboardKey) {
    super();
    this['key1'] = key1;
    this['key2'] = key2;
    this['key3'] = key3;
    this['key4'] = key4;
    this.className = 'LogicalKeySet';
  }
  static fromSet(keys?: Set<any>) {
    var jsObj = new LogicalKeySet();
    jsObj['keys'] = keys;
    jsObj['constructorName'] = 'fromSet';
    return jsObj;
  }
}
export { LogicalKeySet };
class ShortcutManager extends ChangeNotifier {
  modal: boolean;
  shortcuts: Map<any, any>;
  public constructor(namedParameters: {shortcuts?: Map<any, any>, modal?: boolean} = {}) {
    super();
    this.shortcuts = namedParameters.shortcuts;
    this.modal = namedParameters.modal;
    this.className = 'ShortcutManager';
  }
}
export { ShortcutManager };
class Shortcuts extends StatefulWidget {
  manager: ShortcutManager;
  shortcuts: Map<any, any>;
  child: MXWidget;
  debugLabel: string;
  public constructor(namedParameters: {key?: Key, manager?: ShortcutManager, shortcuts?: Map<any, any>, child?: MXWidget, debugLabel?: string} = {}) {
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
class _ShortcutsState extends State {
  internalManager: ShortcutManager;
}
export { _ShortcutsState };
class _ShortcutsMarker extends InheritedNotifier {
  public constructor(namedParameters: {manager?: ShortcutManager, child?: MXWidget} = {}) {
    super();
    this['manager'] = namedParameters.manager;
    this['child'] = namedParameters.child;
    this.className = '_ShortcutsMarker';
  }
}
export { _ShortcutsMarker };
