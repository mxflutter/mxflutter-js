import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, State$ } from '../widgets/framework';
declare class ExpandIcon extends StatefulWidget$ {
    isExpanded: boolean;
    size: number;
    onPressed: any;
    padding: EdgeInsetsGeometry;
    color: Color;
    disabledColor: Color;
    expandedColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        isExpanded?: boolean;
        size?: number;
        onPressed?: any;
        padding?: EdgeInsetsGeometry;
        color?: Color;
        disabledColor?: Color;
        expandedColor?: Color;
    });
}
export { ExpandIcon };
declare class _ExpandIconState extends State$ {
    controller: AnimationController;
    iconTurns: Animation;
}
export { _ExpandIconState };
