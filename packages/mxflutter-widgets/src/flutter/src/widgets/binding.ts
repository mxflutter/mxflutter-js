// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { BindingBase } from '../foundation/binding';
import { RenderObjectWithChildMixin } from '../rendering/object';
import { BuildOwner, Element, RenderObjectWidget, Widget, RootRenderObjectElement } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class WidgetsBindingObserver extends MXDartClass {}
export { WidgetsBindingObserver };
abstract class WidgetsBinding extends MXDartClass {
  buildOwner: BuildOwner;
  observers: Array<any>;
  needToReportFirstFrame: boolean;
  firstFrameCompleter: any;
  debugBuildingDirtyElements: boolean;
  renderViewElement: Element;
  readyToProduceFrames: boolean;
}
export { WidgetsBinding };
class RenderObjectToWidgetAdapter extends RenderObjectWidget {
  child: MXWidget;
  container: RenderObjectWithChildMixin;
  debugShortDescription: string;
  public constructor(namedParameters: {child?: MXWidget, container?: RenderObjectWithChildMixin, debugShortDescription?: string} = {}) {
    super();
    this.child = namedParameters.child;
    this.container = namedParameters.container;
    this.debugShortDescription = namedParameters.debugShortDescription;
    this.className = 'RenderObjectToWidgetAdapter';
  }
}
export { RenderObjectToWidgetAdapter };
class RenderObjectToWidgetElement extends RootRenderObjectElement {
  child: Element;
  newWidget: MXWidget;
  public constructor(widget?: RenderObjectToWidgetAdapter) {
    super();
    this['mx_widget'] = widget;
    this.className = 'RenderObjectToWidgetElement';
  }
}
export { RenderObjectToWidgetElement };
class WidgetsFlutterBinding extends BindingBase {}
export { WidgetsFlutterBinding };
