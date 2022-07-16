import { Eventing } from './Eventing';
export declare class Collection<T, K> {
    rootUrl: string;
    deserialize: (json: K) => T;
    models: T[];
    events: Eventing;
    constructor(rootUrl: string, deserialize: (json: K) => T);
    get on(): (eventName: string, callback: () => void) => void;
    get trigger(): (eventName: string) => void;
    fetch(): void;
}
