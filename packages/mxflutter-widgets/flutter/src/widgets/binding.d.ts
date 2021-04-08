import { BindingBase } from '../foundation/binding';
import { RenderObjectWithChildMixin } from '../rendering/object';
import { BuildOwner, Element, RenderObjectWidget, RootRenderObjectElement } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class WidgetsBindingObserver extends MXDartClass {
}
export { WidgetsBindingObserver };
declare abstract class WidgetsBinding extends MXDartClass {
    buildOwner: BuildOwner;
    observers: Array<any>;
    needToReportFirstFrame: boolean;
    firstFrameCompleter: any;
    debugBuildingDirtyElements: boolean;
    renderViewElement: Element;
    readyToProduceFrames: boolean;
}
export { WidgetsBinding };
declare class RenderObjectToWidgetAdapter extends RenderObjectWidget {
    child: MXWidget;
    container: RenderObjectWithChildMixin;
    debugShortDescription: string;
    constructor(namedParameters?: {
        child?: MXWidget;
        container?: RenderObjectWithChildMixin;
        debugShortDescription?: string;
    });
}
export { RenderObjectToWidgetAdapter };
declare class RenderObjectToWidgetElement extends RootRenderObjectElement {
    child: Element;
    newWidget: MXWidget;
    constructor(widget?: RenderObjectToWidgetAdapter);
}
export { RenderObjectToWidgetElement };
declare class WidgetsFlutterBinding extends BindingBase {
}
export { WidgetsFlutterBinding };
