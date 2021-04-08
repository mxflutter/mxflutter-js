export declare abstract class WidgetsBindingObserver {
    didPopRoute(): Promise<boolean>;
    didPushRoute(): Promise<boolean>;
    didChangeMetrics(): void;
    didChangeTextScaleFactor(): void;
    didChangePlatformBrightness(): void;
    didChangeLocales(locale: any): void;
    didChangeAppLifecycleState(state: any): void;
    didHaveMemoryPressure(): void;
    didChangeAccessibilityFeatures(): void;
}
