import { Matrix4 } from '../../../vector-math-64';
import { BoxConstraints } from '../rendering/box';
import { Color, Clip, TextDirection } from '../../../mx-dart-sdk';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { AlignmentGeometry } from '../painting/alignment';
import { Key } from '../foundation/key';
import { DecorationPosition, CustomClipper } from '../rendering/proxy-box';
import { Decoration } from '../painting/decoration';
import { SingleChildRenderObjectWidget, StatelessWidget$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class DecoratedBox extends SingleChildRenderObjectWidget {
    decoration: Decoration;
    position: DecorationPosition;
    constructor(namedParameters?: {
        key?: Key;
        decoration?: Decoration;
        position?: DecorationPosition;
        child?: MXWidget;
    });
}
export { DecoratedBox };
declare class Container extends StatelessWidget$ {
    child: MXWidget;
    alignment: AlignmentGeometry;
    padding: EdgeInsetsGeometry;
    color: Color;
    decoration: Decoration;
    foregroundDecoration: Decoration;
    constraints: BoxConstraints;
    margin: EdgeInsetsGeometry;
    transform: Matrix4;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: AlignmentGeometry;
        padding?: EdgeInsetsGeometry;
        color?: Color;
        decoration?: Decoration;
        foregroundDecoration?: Decoration;
        width?: number;
        height?: number;
        constraints?: BoxConstraints;
        margin?: EdgeInsetsGeometry;
        transform?: Matrix4;
        child?: MXWidget;
        clipBehavior?: Clip;
    });
}
export { Container };
declare class _DecorationClipper extends CustomClipper {
    textDirection: TextDirection;
    decoration: Decoration;
    constructor(namedParameters?: {
        textDirection?: TextDirection;
        decoration?: Decoration;
    });
}
export { _DecorationClipper };
