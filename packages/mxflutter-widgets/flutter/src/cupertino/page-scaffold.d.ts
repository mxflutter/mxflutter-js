import { ScrollController } from '../widgets/scroll-controller';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget, State } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class CupertinoPageScaffold extends StatefulWidget {
    navigationBar: ObstructingPreferredSizeWidget;
    child: MXWidget;
    backgroundColor: Color;
    resizeToAvoidBottomInset: boolean;
    constructor(namedParameters?: {
        key?: Key;
        navigationBar?: ObstructingPreferredSizeWidget;
        backgroundColor?: Color;
        resizeToAvoidBottomInset?: boolean;
        child?: MXWidget;
    });
}
export { CupertinoPageScaffold };
declare class _CupertinoPageScaffoldState extends State {
    primaryScrollController: ScrollController;
}
export { _CupertinoPageScaffoldState };
declare abstract class ObstructingPreferredSizeWidget extends MXDartClass {
}
export { ObstructingPreferredSizeWidget };
