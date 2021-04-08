import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum GestureDisposition {
    accepted = "{ \"_name\": \"GestureDisposition.accepted\", \"index\": 0 }",
    rejected = "{ \"_name\": \"GestureDisposition.rejected\", \"index\": 1 }"
}
export { GestureDisposition };
declare abstract class GestureArenaMember extends MXDartClass {
}
export { GestureArenaMember };
declare class GestureArenaEntry extends MXDartClass {
    arena: GestureArenaManager;
    pointer: number;
    member: GestureArenaMember;
}
export { GestureArenaEntry };
declare class _GestureArena extends MXDartClass {
    members: Array<any>;
    isOpen: boolean;
    isHeld: boolean;
    hasPendingSweep: boolean;
    eagerWinner: GestureArenaMember;
}
export { _GestureArena };
declare class GestureArenaManager extends MXDartClass {
    arenas: Map<any, any>;
}
export { GestureArenaManager };
