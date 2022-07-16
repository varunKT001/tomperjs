export declare class Attributes<T> {
    private data;
    constructor(data: T);
    get: <K extends keyof T>(key: K) => T[K];
    getAll: () => T;
    set: (update: T) => void;
}
