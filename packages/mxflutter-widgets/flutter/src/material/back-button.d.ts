import { Color } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { StatelessWidget$ } from '../widgets/framework';
declare class BackButtonIcon extends StatelessWidget$ {
    constructor(namedParameters?: {
        key?: Key;
    });
}
export { BackButtonIcon };
declare class BackButton extends StatelessWidget$ {
    color: Color;
    onPressed: any;
    constructor(namedParameters?: {
        key?: Key;
        color?: Color;
        onPressed?: any;
    });
}
export { BackButton };
declare class CloseButton extends StatelessWidget$ {
    color: Color;
    onPressed: any;
    constructor(namedParameters?: {
        key?: Key;
        color?: Color;
        onPressed?: any;
    });
}
export { CloseButton };
