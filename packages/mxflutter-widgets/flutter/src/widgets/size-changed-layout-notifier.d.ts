import { RenderBox } from '../rendering/box';
import { Size } from '../../../mx-dart-sdk';
import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { SingleChildRenderObjectWidget } from './framework';
import { LayoutChangedNotification } from './notification-listener';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class SizeChangedLayoutNotification extends LayoutChangedNotification {
}
export { SizeChangedLayoutNotification };
declare class SizeChangedLayoutNotifier extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { SizeChangedLayoutNotifier };
declare class _RenderSizeChangedWithCallback extends RenderProxyBox {
    onLayoutChangedCallback: any;
    oldSize: Size;
    constructor(namedParameters?: {
        child?: RenderBox;
        onLayoutChangedCallback?: any;
    });
}
export { _RenderSizeChangedWithCallback };
