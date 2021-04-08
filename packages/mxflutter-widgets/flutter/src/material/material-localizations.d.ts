import { LocalizationsDelegate } from '../widgets/localizations';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class MaterialLocalizations extends MXDartClass {
}
export { MaterialLocalizations };
declare class _MaterialLocalizationsDelegate extends LocalizationsDelegate {
}
export { _MaterialLocalizationsDelegate };
declare class DefaultMaterialLocalizations extends MXDartClass {
    static get delegate(): {
        className: string;
        mirrorID: string;
    };
}
export { DefaultMaterialLocalizations };
