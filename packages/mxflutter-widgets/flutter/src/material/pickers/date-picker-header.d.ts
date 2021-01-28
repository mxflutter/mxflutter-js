import { Key } from '../../foundation/key';
import { IconData } from '../../widgets/icon-data';
import { Orientation } from '../../widgets/media-query';
import { TextStyle } from '../../painting/text-style';
import { StatelessWidget$ } from '../../widgets/framework';
declare class DatePickerHeader extends StatelessWidget$ {
    helpText: string;
    titleText: string;
    titleSemanticsLabel: string;
    titleStyle: TextStyle;
    orientation: Orientation;
    isShort: boolean;
    icon: IconData;
    iconTooltip: string;
    onIconPressed: any;
    constructor(namedParameters?: {
        key?: Key;
        helpText?: string;
        titleText?: string;
        titleSemanticsLabel?: string;
        titleStyle?: TextStyle;
        orientation?: Orientation;
        isShort?: boolean;
        icon?: IconData;
        iconTooltip?: string;
        onIconPressed?: any;
    });
}
export { DatePickerHeader };
