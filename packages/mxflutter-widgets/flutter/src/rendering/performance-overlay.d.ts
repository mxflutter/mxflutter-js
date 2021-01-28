import { RenderBox } from './box';
declare enum PerformanceOverlayOption {
    displayRasterizerStatistics = "{ \"_name\": \"PerformanceOverlayOption.displayRasterizerStatistics\", \"index\": 0 }",
    visualizeRasterizerStatistics = "{ \"_name\": \"PerformanceOverlayOption.visualizeRasterizerStatistics\", \"index\": 1 }",
    displayEngineStatistics = "{ \"_name\": \"PerformanceOverlayOption.displayEngineStatistics\", \"index\": 2 }",
    visualizeEngineStatistics = "{ \"_name\": \"PerformanceOverlayOption.visualizeEngineStatistics\", \"index\": 3 }"
}
export { PerformanceOverlayOption };
declare class RenderPerformanceOverlay extends RenderBox {
    optionsMask: number;
    rasterizerThreshold: number;
    checkerboardRasterCacheImages: boolean;
    checkerboardOffscreenLayers: boolean;
    constructor(namedParameters?: {
        optionsMask?: number;
        rasterizerThreshold?: number;
        checkerboardRasterCacheImages?: boolean;
        checkerboardOffscreenLayers?: boolean;
    });
}
export { RenderPerformanceOverlay };
