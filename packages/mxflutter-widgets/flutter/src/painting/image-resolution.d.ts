import { AssetBundle } from '../services/asset-bundle';
import { AssetBundleImageProvider } from './image-provider';
declare class AssetImage extends AssetBundleImageProvider {
    assetName: string;
    bundle: AssetBundle;
    __mx_package: string;
    constructor(assetName?: string, namedParameters?: {
        bundle?: AssetBundle;
        __mx_package?: string;
    });
}
export { AssetImage };
