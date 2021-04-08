// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { InheritedNotifier } from './inherited-notifier';
import { Key } from '../foundation/key';
import { FocusNode, FocusAttachment, FocusScopeNode } from './focus-manager';
import { StatefulWidget, Widget, State, StatelessWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Focus extends StatefulWidget {
  debugLabel: string;
  child: MXWidget;
  onKey: any;
  onFocusChange: any;
  autofocus: boolean;
  focusNode: FocusNode;
  skipTraversal: boolean;
  includeSemantics: boolean;
  canRequestFocus: boolean;
  descendantsAreFocusable: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, focusNode?: FocusNode, autofocus?: boolean, onFocusChange?: any, onKey?: any, debugLabel?: string, canRequestFocus?: boolean, descendantsAreFocusable?: boolean, skipTraversal?: boolean, includeSemantics?: boolean} = {}) {
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
class _FocusState extends State {
  internalNode: FocusNode;
  hasPrimaryFocus: boolean;
  canRequestFocus: boolean;
  descendantsAreFocusable: boolean;
  didAutofocus: boolean;
  focusAttachment: FocusAttachment;
}
export { _FocusState };
class FocusScope extends Focus {
  public constructor(namedParameters: {key?: Key, node?: FocusScopeNode, child?: MXWidget, autofocus?: boolean, onFocusChange?: any, canRequestFocus?: boolean, skipTraversal?: boolean, onKey?: any, debugLabel?: string} = {}) {
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
class _FocusScopeState extends _FocusState {}
export { _FocusScopeState };
class _FocusMarker extends InheritedNotifier {
  public constructor(namedParameters: {key?: Key, node?: FocusNode, child?: MXWidget} = {}) {
    super();
    this['key'] = namedParameters.key;
    this['node'] = namedParameters.node;
    this['child'] = namedParameters.child;
    this.className = '_FocusMarker';
  }
}
export { _FocusMarker };
class ExcludeFocus extends StatelessWidget {
  excluding: boolean;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, excluding?: boolean, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.excluding = namedParameters.excluding;
    this.child = namedParameters.child;
    this.className = 'ExcludeFocus';
  }
}
export { ExcludeFocus };
