import { Key } from '../foundation/key';
import { LeafRenderObjectWidget } from './framework';
declare class PerformanceOverlay extends LeafRenderObjectWidget {
    optionsMask: number;
    rasterizerThreshold: number;
    checkerboardRasterCacheImages: boolean;
    checkerboardOffscreenLayers: boolean;
    constructor(namedParameters?: {
        key?: Key;
        optionsMask?: number;
        rasterizerThreshold?: number;
        checkerboardRasterCacheImages?: boolean;
        checkerboardOffscreenLayers?: boolean;
    });
    static allEnabled(namedParameters?: {
        key?: Key;
        rasterizerThreshold?: number;
        checkerboardRasterCacheImages?: boolean;
        checkerboardOffscreenLayers?: boolean;
    }): PerformanceOverlay;
}
export { PerformanceOverlay };
