import { Key } from '../foundation/key';
import { InheritedWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum CupertinoUserInterfaceLevelData {
    base = "{ \"_name\": \"CupertinoUserInterfaceLevelData.base\", \"index\": 0 }",
    elevated = "{ \"_name\": \"CupertinoUserInterfaceLevelData.elevated\", \"index\": 1 }"
}
export { CupertinoUserInterfaceLevelData };
declare class CupertinoUserInterfaceLevel extends InheritedWidget {
    data: CupertinoUserInterfaceLevelData;
    constructor(namedParameters?: {
        key?: Key;
        data?: CupertinoUserInterfaceLevelData;
        child?: MXWidget;
    });
}
export { CupertinoUserInterfaceLevel };
