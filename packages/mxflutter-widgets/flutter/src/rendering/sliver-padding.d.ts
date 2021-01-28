import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { TextDirection } from '../../../mx-dart-sdk';
import { RenderSliver } from './sliver';
declare abstract class RenderSliverEdgeInsetsPadding extends RenderSliver {
}
export { RenderSliverEdgeInsetsPadding };
declare class RenderSliverPadding extends RenderSliverEdgeInsetsPadding {
    resolvedPadding: EdgeInsets;
    padding: EdgeInsetsGeometry;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        padding?: EdgeInsetsGeometry;
        textDirection?: TextDirection;
        child?: RenderSliver;
    });
}
export { RenderSliverPadding };
