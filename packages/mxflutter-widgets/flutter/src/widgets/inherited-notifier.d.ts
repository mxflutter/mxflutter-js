import { InheritedWidget, InheritedElement } from './framework';
declare abstract class InheritedNotifier extends InheritedWidget {
    notifier: any;
}
export { InheritedNotifier };
declare class _InheritedNotifierElement extends InheritedElement {
    dirty: boolean;
    constructor(widget?: InheritedNotifier);
}
export { _InheritedNotifierElement };
