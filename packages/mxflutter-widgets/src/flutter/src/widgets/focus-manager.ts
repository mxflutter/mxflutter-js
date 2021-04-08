// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { BuildContext } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class FocusAttachment extends MXDartClass {
  node: FocusNode;
}
export { FocusAttachment };
enum UnfocusDisposition {
  scope = '{ "_name": "UnfocusDisposition.scope", "index": 0 }',
  previouslyFocusedChild = '{ "_name": "UnfocusDisposition.previouslyFocusedChild", "index": 1 }',
};

export { UnfocusDisposition };
class FocusNode extends MXDartClass {
  skipTraversal: boolean;
  canRequestFocus: boolean;
  descendantsAreFocusable: boolean;
  context: BuildContext;
  onKey: any;
  manager: FocusManager;
  ancestors: Array<any>;
  descendants: Array<any>;
  hasKeyboardToken: boolean;
  parent: FocusNode;
  children: Array<any>;
  debugLabel: string;
  attachment: FocusAttachment;
  requestFocusWhenReparented: boolean;
  public constructor(namedParameters: {debugLabel?: string, onKey?: any, skipTraversal?: boolean, canRequestFocus?: boolean, descendantsAreFocusable?: boolean} = {}) {
    super();
    this.debugLabel = namedParameters.debugLabel;
    this.onKey = namedParameters.onKey;
    this.skipTraversal = namedParameters.skipTraversal;
    this.canRequestFocus = namedParameters.canRequestFocus;
    this.descendantsAreFocusable = namedParameters.descendantsAreFocusable;
    this.className = 'FocusNode';
  }
}
export { FocusNode };
class FocusScopeNode extends FocusNode {
  focusedChildren: Array<any>;
  public constructor(namedParameters: {debugLabel?: string, onKey?: any, skipTraversal?: boolean, canRequestFocus?: boolean} = {}) {
    super();
    this.debugLabel = namedParameters.debugLabel;
    this.onKey = namedParameters.onKey;
    this.skipTraversal = namedParameters.skipTraversal;
    this.canRequestFocus = namedParameters.canRequestFocus;
    this.className = 'FocusScopeNode';
  }
}
export { FocusScopeNode };
enum FocusHighlightMode {
  touch = '{ "_name": "FocusHighlightMode.touch", "index": 0 }',
  traditional = '{ "_name": "FocusHighlightMode.traditional", "index": 1 }',
};

export { FocusHighlightMode };
enum FocusHighlightStrategy {
  automatic = '{ "_name": "FocusHighlightStrategy.automatic", "index": 0 }',
  alwaysTouch = '{ "_name": "FocusHighlightStrategy.alwaysTouch", "index": 1 }',
  alwaysTraditional = '{ "_name": "FocusHighlightStrategy.alwaysTraditional", "index": 2 }',
};

export { FocusHighlightStrategy };
class FocusManager extends MXDartClass {
  highlightStrategy: FocusHighlightStrategy;
  highlightMode: FocusHighlightMode;
  lastInteractionWasTouch: boolean;
  listeners: any;
  rootScope: FocusScopeNode;
  primaryFocus: FocusNode;
  dirtyNodes: Set<any>;
  markedForFocus: FocusNode;
  haveScheduledUpdate: boolean;
}
export { FocusManager };
