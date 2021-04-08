import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class StackFrame extends MXDartClass {
    source: string;
    number: number;
    packageScheme: string;
    __mx_package: string;
    packagePath: string;
    line: number;
    column: number;
    className: string;
    method: string;
    isConstructor: boolean;
    constructor(namedParameters?: {
        number?: number;
        column?: number;
        line?: number;
        packageScheme?: string;
        __mx_package?: string;
        packagePath?: string;
        className?: string;
        method?: string;
        isConstructor?: boolean;
        source?: string;
    });
    static get asynchronousSuspension(): StackFrame;
    static get stackOverFlowElision(): StackFrame;
}
export { StackFrame };
