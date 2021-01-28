import { TargetPlatform } from '../foundation/platform';
import { TextTheme } from './text-theme';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum ScriptCategory {
    englishLike = "{ \"_name\": \"ScriptCategory.englishLike\", \"index\": 0 }",
    dense = "{ \"_name\": \"ScriptCategory.dense\", \"index\": 1 }",
    tall = "{ \"_name\": \"ScriptCategory.tall\", \"index\": 2 }"
}
export { ScriptCategory };
declare class Typography extends MXDartClass {
    black: TextTheme;
    white: TextTheme;
    englishLike: TextTheme;
    dense: TextTheme;
    tall: TextTheme;
    static get blackMountainView(): TextTheme;
    static get whiteMountainView(): TextTheme;
    static get blackRedmond(): TextTheme;
    static get whiteRedmond(): TextTheme;
    static get blackHelsinki(): TextTheme;
    static get whiteHelsinki(): TextTheme;
    static get blackCupertino(): TextTheme;
    static get whiteCupertino(): TextTheme;
    static get englishLike2014(): TextTheme;
    static get englishLike2018(): TextTheme;
    static get dense2014(): TextTheme;
    static get dense2018(): TextTheme;
    static get tall2014(): TextTheme;
    static get tall2018(): TextTheme;
    constructor(namedParameters?: {
        platform?: TargetPlatform;
        black?: TextTheme;
        white?: TextTheme;
        englishLike?: TextTheme;
        dense?: TextTheme;
        tall?: TextTheme;
    });
    static material2014(namedParameters?: {
        platform?: TargetPlatform;
        black?: TextTheme;
        white?: TextTheme;
        englishLike?: TextTheme;
        dense?: TextTheme;
        tall?: TextTheme;
    }): Typography;
    static material2018(namedParameters?: {
        platform?: TargetPlatform;
        black?: TextTheme;
        white?: TextTheme;
        englishLike?: TextTheme;
        dense?: TextTheme;
        tall?: TextTheme;
    }): Typography;
}
export { Typography };
