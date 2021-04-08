import { GestureArenaMember, GestureArenaEntry } from './arena';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _CombiningGestureArenaEntry extends MXDartClass {
    combiner: _CombiningGestureArenaMember;
    member: GestureArenaMember;
    constructor(_combiner?: _CombiningGestureArenaMember, _member?: GestureArenaMember);
}
export { _CombiningGestureArenaEntry };
declare class _CombiningGestureArenaMember extends GestureArenaMember {
    owner: GestureArenaTeam;
    members: Array<any>;
    pointer: number;
    resolved: boolean;
    winner: GestureArenaMember;
    entry: GestureArenaEntry;
    constructor(_owner?: GestureArenaTeam, _pointer?: number);
}
export { _CombiningGestureArenaMember };
declare class GestureArenaTeam extends MXDartClass {
    combiners: Map<any, any>;
    captain: GestureArenaMember;
}
export { GestureArenaTeam };
