import { PlaceholderAlignment, TextBaseline } from '../../../mx-dart-sdk';
import { InlineSpan } from './inline-span';
declare abstract class PlaceholderSpan extends InlineSpan {
    alignment: PlaceholderAlignment;
    baseline: TextBaseline;
}
export { PlaceholderSpan };
