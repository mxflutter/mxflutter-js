import { AnimationController } from './animation-controller';
import { Tween } from './tween';
import { Listenable } from '../foundation/change-notifier';
declare enum AnimationStatus {
    dismissed = "{ \"_name\": \"AnimationStatus.dismissed\", \"index\": 0 }",
    forward = "{ \"_name\": \"AnimationStatus.forward\", \"index\": 1 }",
    reverse = "{ \"_name\": \"AnimationStatus.reverse\", \"index\": 2 }",
    completed = "{ \"_name\": \"AnimationStatus.completed\", \"index\": 3 }"
}
export { AnimationStatus };
declare class Animation extends Listenable {
    constructor(namedParameters?: {
        tween?: Tween;
        controller?: AnimationController;
    });
    statusListenerCallback(status: AnimationStatus): void;
    listenerCallback(status: AnimationStatus): void;
    addListener(callback: Function): void;
    removeListener(callback: Function): void;
    addStatusListener(callback: Function): void;
    removeStatusListener(callback: Function): void;
}
export { Animation };
