import { Key } from '../foundation/key';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Decoration } from '../painting/decoration';
import { StatelessWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class DrawerHeader extends StatelessWidget {
    decoration: Decoration;
    padding: EdgeInsetsGeometry;
    margin: EdgeInsetsGeometry;
    duration: Duration;
    curve: Curve;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        decoration?: Decoration;
        margin?: EdgeInsetsGeometry;
        padding?: EdgeInsetsGeometry;
        duration?: Duration;
        curve?: Curve;
        child?: MXWidget;
    });
}
export { DrawerHeader };
