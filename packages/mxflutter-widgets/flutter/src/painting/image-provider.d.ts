import { ImageStreamCompleter } from './image-stream';
import { TargetPlatform } from '../foundation/platform';
import { Locale, TextDirection, Size } from '../../../mx-dart-sdk';
import { AssetBundle } from '../services/asset-bundle';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ImageConfiguration extends MXDartClass {
    bundle: AssetBundle;
    devicePixelRatio: number;
    locale: Locale;
    textDirection: TextDirection;
    size: Size;
    platform: TargetPlatform;
    constructor(namedParameters?: {
        bundle?: AssetBundle;
        devicePixelRatio?: number;
        locale?: Locale;
        textDirection?: TextDirection;
        size?: Size;
        platform?: TargetPlatform;
    });
    static get empty(): ImageConfiguration;
}
export { ImageConfiguration };
declare abstract class ImageProvider extends MXDartClass {
}
export { ImageProvider };
declare class AssetBundleImageKey extends MXDartClass {
    bundle: AssetBundle;
    name: string;
    scale: number;
    constructor(namedParameters?: {
        bundle?: AssetBundle;
        name?: string;
        scale?: number;
    });
}
export { AssetBundleImageKey };
declare abstract class AssetBundleImageProvider extends ImageProvider {
}
export { AssetBundleImageProvider };
declare class _SizeAwareCacheKey extends MXDartClass {
    providerCacheKey: any;
    width: number;
    height: number;
    constructor(providerCacheKey?: any, width?: number, height?: number);
}
export { _SizeAwareCacheKey };
declare class ResizeImage extends ImageProvider {
    imageProvider: ImageProvider;
    width: number;
    height: number;
    allowUpscaling: boolean;
    constructor(imageProvider?: ImageProvider, namedParameters?: {
        width?: number;
        height?: number;
        allowUpscaling?: boolean;
    });
}
export { ResizeImage };
declare class NetworkImage extends ImageProvider {
    constructor(url?: string, namedParameters?: {
        scale?: number;
        headers?: Map<any, any>;
    });
}
export { NetworkImage };
declare class FileImage extends ImageProvider {
    file: any;
    scale: number;
    constructor(file?: any, namedParameters?: {
        scale?: number;
    });
}
export { FileImage };
declare class MemoryImage extends ImageProvider {
    bytes: any;
    scale: number;
    constructor(bytes?: any, namedParameters?: {
        scale?: number;
    });
}
export { MemoryImage };
declare class ExactAssetImage extends AssetBundleImageProvider {
    assetName: string;
    scale: number;
    bundle: AssetBundle;
    __mx_package: string;
    constructor(assetName?: string, namedParameters?: {
        scale?: number;
        bundle?: AssetBundle;
        __mx_package?: string;
    });
}
export { ExactAssetImage };
declare class _ErrorImageCompleter extends ImageStreamCompleter {
}
export { _ErrorImageCompleter };
declare class NetworkImageLoadException extends MXDartClass {
    statusCode: number;
    message: string;
    uri: any;
    constructor(namedParameters?: {
        statusCode?: number;
        uri?: any;
    });
}
export { NetworkImageLoadException };
