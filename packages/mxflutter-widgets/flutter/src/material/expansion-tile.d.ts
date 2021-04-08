import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { ColorTween } from '../animation/tween';
import { Key } from '../foundation/key';
import { CrossAxisAlignment } from '../rendering/flex';
import { Alignment } from '../painting/alignment';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget, State } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class ExpansionTile extends StatefulWidget {
    leading: MXWidget;
    title: MXWidget;
    subtitle: MXWidget;
    onExpansionChanged: any;
    children: Array<any>;
    backgroundColor: Color;
    trailing: MXWidget;
    initiallyExpanded: boolean;
    maintainState: boolean;
    tilePadding: EdgeInsetsGeometry;
    expandedAlignment: Alignment;
    expandedCrossAxisAlignment: CrossAxisAlignment;
    childrenPadding: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        key?: Key;
        leading?: MXWidget;
        title?: MXWidget;
        subtitle?: MXWidget;
        backgroundColor?: Color;
        onExpansionChanged?: any;
        children?: Array<any>;
        trailing?: MXWidget;
        initiallyExpanded?: boolean;
        maintainState?: boolean;
        tilePadding?: EdgeInsetsGeometry;
        expandedCrossAxisAlignment?: CrossAxisAlignment;
        expandedAlignment?: Alignment;
        childrenPadding?: EdgeInsetsGeometry;
    });
}
export { ExpansionTile };
declare class _ExpansionTileState extends State {
    borderColorTween: ColorTween;
    headerColorTween: ColorTween;
    iconColorTween: ColorTween;
    backgroundColorTween: ColorTween;
    controller: AnimationController;
    iconTurns: Animation;
    heightFactor: Animation;
    borderColor: Animation;
    headerColor: Animation;
    iconColor: Animation;
    backgroundColor: Animation;
    isExpanded: boolean;
}
export { _ExpansionTileState };
