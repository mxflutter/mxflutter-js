import { TextDirection } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class SemanticsEvent extends MXDartClass {
    type: string;
}
export { SemanticsEvent };
declare class AnnounceSemanticsEvent extends SemanticsEvent {
    message: string;
    textDirection: TextDirection;
    constructor(message?: string, textDirection?: TextDirection);
}
export { AnnounceSemanticsEvent };
declare class TooltipSemanticsEvent extends SemanticsEvent {
    message: string;
    constructor(message?: string);
}
export { TooltipSemanticsEvent };
declare class LongPressSemanticsEvent extends SemanticsEvent {
}
export { LongPressSemanticsEvent };
declare class TapSemanticEvent extends SemanticsEvent {
}
export { TapSemanticEvent };
declare class UpdateLiveRegionEvent extends SemanticsEvent {
}
export { UpdateLiveRegionEvent };
