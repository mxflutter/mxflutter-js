import { MXDartClass, MXLifecycleDartClassBase } from '../mirror/base-type';
declare abstract class MXWidget {
}
declare abstract class MXBaseKey extends MXDartClass {
    /**
     * Key 有转化成唯一string接口，便于框架比较
     */
    abstract toString(): string;
}
declare class MXMirrorWidget extends MXDartClass implements MXWidget {
    key: MXBaseKey;
    get pathComponent(): string;
    preBuild(buildContext: any): void;
}
declare abstract class MXLifecycleWidgetBase extends MXLifecycleDartClassBase {
    constructor();
}
declare class MXBuildProfileInfo {
    buildWidgetDataSeq: string;
    startBuildTreeTime: number;
    startEncodeDataTime: number;
    startTransferDataTime: number;
    startDecodeDataTime: number;
    endDecodeDataTime: number;
    firstFrameEndTime: number;
    transferDataLen: number;
    profileText(): string;
    updateFirstFrameProfileInfo(flutterProfileInfo: {
        startDecodeDataTime: number;
        endDecodeDataTime: number;
        firstFrameEndTime: number;
    }): void;
}
export { MXWidget, MXBaseKey, MXMirrorWidget, MXLifecycleWidgetBase, MXBuildProfileInfo };
