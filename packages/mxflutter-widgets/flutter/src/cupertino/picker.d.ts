import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { FixedExtentScrollController, ListWheelChildDelegate } from '../widgets/list-wheel-scroll-view';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, State, SingleChildRenderObjectWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CupertinoPicker extends StatefulWidget {
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
    constructor(namedParameters?: {
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
    });
    static builder(namedParameters?: {
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
    }): CupertinoPicker;
}
export { CupertinoPicker };
declare class _CupertinoPickerState extends State {
    lastHapticIndex: number;
    controller: FixedExtentScrollController;
}
export { _CupertinoPickerState };
declare class _CupertinoPickerSemantics extends SingleChildRenderObjectWidget {
    scrollController: FixedExtentScrollController;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        scrollController?: FixedExtentScrollController;
    });
}
export { _CupertinoPickerSemantics };
declare class _RenderCupertinoPickerSemantics extends RenderProxyBox {
    controller: FixedExtentScrollController;
    textDirection: TextDirection;
    currentIndex: number;
    constructor(controller?: FixedExtentScrollController, _textDirection?: TextDirection);
}
export { _RenderCupertinoPickerSemantics };
