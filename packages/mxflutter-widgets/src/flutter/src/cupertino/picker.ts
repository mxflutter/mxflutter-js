//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { SemanticsConfiguration, SemanticsNode } from '../semantics/semantics';
import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { FixedExtentScrollController, ListWheelChildDelegate } from '../widgets/list-wheel-scroll-view';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$, BuildContext$, SingleChildRenderObjectWidget, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoPicker extends StatefulWidget$ {
  diameterRatio: number;
  backgroundColor: Color;
  offAxisFraction: number;
  useMagnifier: boolean;
  magnification: number;
  scrollController: FixedExtentScrollController;
  itemExtent: number;
  squeeze: number;
  onSelectedItemChanged: any;
  childDelegate: ListWheelChildDelegate;
  public constructor(
    namedParameters: {
      key?: Key;
      diameterRatio?: number;
      backgroundColor?: Color;
      offAxisFraction?: number;
      useMagnifier?: boolean;
      magnification?: number;
      scrollController?: FixedExtentScrollController;
      squeeze?: number;
      itemExtent?: number;
      onSelectedItemChanged?: any;
      children?: Array<any>;
      looping?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.diameterRatio = namedParameters.diameterRatio;
    this.backgroundColor = namedParameters.backgroundColor;
    this.offAxisFraction = namedParameters.offAxisFraction;
    this.useMagnifier = namedParameters.useMagnifier;
    this.magnification = namedParameters.magnification;
    this.scrollController = namedParameters.scrollController;
    this.squeeze = namedParameters.squeeze;
    this.itemExtent = namedParameters.itemExtent;
    this.onSelectedItemChanged = namedParameters.onSelectedItemChanged;
    this['children'] = namedParameters.children;
    this['looping'] = namedParameters.looping;
    this.className = 'CupertinoPicker';
  }
  static builder(
    namedParameters: {
      key?: Key;
      diameterRatio?: number;
      backgroundColor?: Color;
      offAxisFraction?: number;
      useMagnifier?: boolean;
      magnification?: number;
      scrollController?: FixedExtentScrollController;
      squeeze?: number;
      itemExtent?: number;
      onSelectedItemChanged?: any;
      itemBuilder?: any;
      childCount?: number;
    } = {},
  ) {
    var jsObj = new CupertinoPicker();
    jsObj.key = namedParameters.key;
    jsObj.diameterRatio = namedParameters.diameterRatio;
    jsObj.backgroundColor = namedParameters.backgroundColor;
    jsObj.offAxisFraction = namedParameters.offAxisFraction;
    jsObj.useMagnifier = namedParameters.useMagnifier;
    jsObj.magnification = namedParameters.magnification;
    jsObj.scrollController = namedParameters.scrollController;
    jsObj.squeeze = namedParameters.squeeze;
    jsObj.itemExtent = namedParameters.itemExtent;
    jsObj.onSelectedItemChanged = namedParameters.onSelectedItemChanged;
    jsObj['itemBuilder'] = namedParameters.itemBuilder;
    jsObj['childCount'] = namedParameters.childCount;
    jsObj['constructorName'] = 'builder';
    return jsObj;
  }
}
export { CupertinoPicker };
class _CupertinoPickerState extends State$ {
  lastHapticIndex: number;
  controller: FixedExtentScrollController;
}
export { _CupertinoPickerState };
class _CupertinoPickerSemantics extends SingleChildRenderObjectWidget {
  scrollController: FixedExtentScrollController;
  public constructor(
    namedParameters: { key?: Key; child?: MXWidget; scrollController?: FixedExtentScrollController } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.scrollController = namedParameters.scrollController;
    this.className = '_CupertinoPickerSemantics';
  }
}
export { _CupertinoPickerSemantics };
class _RenderCupertinoPickerSemantics extends RenderProxyBox {
  controller: FixedExtentScrollController;
  textDirection: TextDirection;
  currentIndex: number;
  public constructor(controller?: FixedExtentScrollController, _textDirection?: TextDirection) {
    super();
    this.controller = controller;
    this.textDirection = _textDirection;
    this.className = '_RenderCupertinoPickerSemantics';
  }
}
export { _RenderCupertinoPickerSemantics };
