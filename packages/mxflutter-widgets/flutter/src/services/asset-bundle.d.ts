import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class AssetBundle extends MXDartClass {
}
export { AssetBundle };
declare class NetworkAssetBundle extends AssetBundle {
    baseUrl: any;
    httpClient: any;
    constructor(baseUrl?: any);
}
export { NetworkAssetBundle };
declare abstract class CachingAssetBundle extends AssetBundle {
    stringCache: Map<any, any>;
    structuredDataCache: Map<any, any>;
}
export { CachingAssetBundle };
declare class PlatformAssetBundle extends CachingAssetBundle {
}
export { PlatformAssetBundle };
