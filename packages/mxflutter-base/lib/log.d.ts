declare const MXJSLog: {
    logLev: number;
    setLogLev: (lev: number) => void;
    debug: (msg: string) => void;
    log: (msg: string) => void;
    error: (msg: string) => void;
};
export { MXJSLog };
