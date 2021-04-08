import { TextStyle } from '../painting/text-style';
import { PlaceholderAlignment, TextBaseline } from '../../../mx-dart-sdk';
import { PlaceholderSpan } from '../painting/placeholder-span';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class WidgetSpan extends PlaceholderSpan {
    child: MXWidget;
    constructor(namedParameters?: {
        child?: MXWidget;
        alignment?: PlaceholderAlignment;
        baseline?: TextBaseline;
        style?: TextStyle;
    });
}
export { WidgetSpan };
