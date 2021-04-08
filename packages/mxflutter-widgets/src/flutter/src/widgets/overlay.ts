// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextDirection } from '../../../mx-dart-sdk';
import { Alignment } from '../painting/alignment';
import { RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { GlobalKey, StatefulWidget, State, MultiChildRenderObjectWidget, MultiChildRenderObjectElement } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class OverlayEntry extends MXDartClass {
  builder: any;
  opaque: boolean;
  maintainState: boolean;
  overlay: OverlayState;
  key: GlobalKey;
  public constructor(namedParameters: {builder?: any, opaque?: boolean, maintainState?: boolean} = {}) {
    super();
    this.builder = namedParameters.builder;
    this.opaque = namedParameters.opaque;
    this.maintainState = namedParameters.maintainState;
    this.className = 'OverlayEntry';
  }
}
export { OverlayEntry };
class _OverlayEntryWidget extends StatefulWidget {
  entry: OverlayEntry;
  tickerEnabled: boolean;
  public constructor(namedParameters: {key?: Key, entry?: OverlayEntry, tickerEnabled?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.entry = namedParameters.entry;
    this.tickerEnabled = namedParameters.tickerEnabled;
    this.className = '_OverlayEntryWidget';
  }
}
export { _OverlayEntryWidget };
class _OverlayEntryWidgetState extends State {}
export { _OverlayEntryWidgetState };
class Overlay extends StatefulWidget {
  initialEntries: Array<any>;
  public constructor(namedParameters: {key?: Key, initialEntries?: Array<any>} = {}) {
    super();
    this.key = namedParameters.key;
    this.initialEntries = namedParameters.initialEntries;
    this.className = 'Overlay';
  }
}
export { Overlay };
class OverlayState extends State {
  entries: Array<any>;
}
export { OverlayState };
class _Theatre extends MultiChildRenderObjectWidget {
  skipCount: number;
  public constructor(namedParameters: {key?: Key, skipCount?: number, children?: Array<any>} = {}) {
    super();
    this.key = namedParameters.key;
    this.skipCount = namedParameters.skipCount;
    this.children = namedParameters.children;
    this.className = '_Theatre';
  }
}
export { _Theatre };
class _TheatreElement extends MultiChildRenderObjectElement {
  public constructor(widget?: _Theatre) {
    super();
    this['widget'] = widget;
    this.className = '_TheatreElement';
  }
}
export { _TheatreElement };
class _RenderTheatre extends RenderBox {
  hasVisualOverflow: boolean;
  resolvedAlignment: Alignment;
  textDirection: TextDirection;
  skipCount: number;
  public constructor(namedParameters: {children?: Array<any>, textDirection?: TextDirection, skipCount?: number} = {}) {
    super();
    this['children'] = namedParameters.children;
    this.textDirection = namedParameters.textDirection;
    this.skipCount = namedParameters.skipCount;
    this.className = '_RenderTheatre';
  }
}
export { _RenderTheatre };
