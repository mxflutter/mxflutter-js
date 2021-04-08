// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderBox } from '../rendering/box';
import { RenderShiftedBox } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { MaterialStateMouseCursor } from './material-state';
import { FocusNode } from '../widgets/focus-manager';
import { Clip, Size } from '../../../mx-dart-sdk';
import { ButtonStyle } from './button-style';
import { StatefulWidget, Widget, State, SingleChildRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class ButtonStyleButton extends StatefulWidget {
  onPressed: any;
  onLongPress: any;
  style: ButtonStyle;
  clipBehavior: Clip;
  focusNode: FocusNode;
  autofocus: boolean;
  child: MXWidget;
}
export { ButtonStyleButton };
class _ButtonStyleState extends State {
  states: Set<any>;
}
export { _ButtonStyleState };
class _MouseCursor extends MaterialStateMouseCursor {
  resolveCallback: any;
  public constructor(resolveCallback?: any) {
    super();
    this.resolveCallback = resolveCallback;
    this.className = '_MouseCursor';
  }
}
export { _MouseCursor };
class _InputPadding extends SingleChildRenderObjectWidget {
  minSize: Size;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, minSize?: Size} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.minSize = namedParameters.minSize;
    this.className = '_InputPadding';
  }
}
export { _InputPadding };
class _RenderInputPadding extends RenderShiftedBox {
  minSize: Size;
  public constructor(_minSize?: Size, child?: RenderBox) {
    super();
    this.minSize = _minSize;
    this['child'] = child;
    this.className = '_RenderInputPadding';
  }
}
export { _RenderInputPadding };
