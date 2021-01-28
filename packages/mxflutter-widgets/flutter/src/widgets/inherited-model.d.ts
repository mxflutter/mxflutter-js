import { InheritedWidget, InheritedElement } from './framework';
declare abstract class InheritedModel extends InheritedWidget {
}
export { InheritedModel };
declare class InheritedModelElement extends InheritedElement {
    constructor(widget?: InheritedModel);
}
export { InheritedModelElement };
