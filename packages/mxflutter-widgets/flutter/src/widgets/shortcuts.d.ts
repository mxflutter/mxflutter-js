import { InheritedNotifier } from './inherited-notifier';
import { Key } from '../foundation/key';
import { StatefulWidget$, State$ } from './framework';
import { ChangeNotifier } from '../foundation/change-notifier';
import { LogicalKeyboardKey } from '../services/keyboard-key';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class KeySet extends MXDartClass {
    keys: any;
    hashCode: number;
    constructor(key1?: any, key2?: any, key3?: any, key4?: any);
    static fromSet(keys?: Set<any>): KeySet;
}
export { KeySet };
declare class LogicalKeySet extends KeySet {
    constructor(key1?: LogicalKeyboardKey, key2?: LogicalKeyboardKey, key3?: LogicalKeyboardKey, key4?: LogicalKeyboardKey);
    static fromSet(keys?: Set<any>): LogicalKeySet;
}
export { LogicalKeySet };
declare class ShortcutManager extends ChangeNotifier {
    modal: boolean;
    shortcuts: Map<any, any>;
    constructor(namedParameters?: {
        shortcuts?: Map<any, any>;
        modal?: boolean;
    });
}
export { ShortcutManager };
declare class Shortcuts extends StatefulWidget$ {
    manager: ShortcutManager;
    shortcuts: Map<any, any>;
    child: MXWidget;
    debugLabel: string;
    constructor(namedParameters?: {
        key?: Key;
        manager?: ShortcutManager;
        shortcuts?: Map<any, any>;
        child?: MXWidget;
        debugLabel?: string;
    });
}
export { Shortcuts };
declare class _ShortcutsState extends State$ {
    internalManager: ShortcutManager;
}
export { _ShortcutsState };
declare class _ShortcutsMarker extends InheritedNotifier {
    constructor(namedParameters?: {
        manager?: ShortcutManager;
        child?: MXWidget;
    });
}
export { _ShortcutsMarker };
