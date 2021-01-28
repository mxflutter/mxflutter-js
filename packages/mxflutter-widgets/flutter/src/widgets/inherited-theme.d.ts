import { Key } from '../foundation/key';
import { InheritedWidget, StatelessWidget$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class InheritedTheme extends InheritedWidget {
}
export { InheritedTheme };
declare class _CaptureAll extends StatelessWidget$ {
    themes: Array<any>;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        themes?: Array<any>;
        child?: MXWidget;
    });
}
export { _CaptureAll };
