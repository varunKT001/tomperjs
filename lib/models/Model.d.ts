import { AxiosPromise } from 'axios';
interface ModelAttributes<T> {
    set(update: T): void;
    get<K extends keyof T>(key: K): T[K];
    getAll(): T;
}
interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(update: T): AxiosPromise;
}
interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}
interface Id {
    id?: number;
}
export declare class Model<T extends Id> {
    private attributes;
    private events;
    private sync;
    constructor(attributes: ModelAttributes<T>, events: Events, sync: Sync<T>);
    get on(): (eventName: string, callback: () => void) => void;
    get trigger(): (eventName: string) => void;
    get get(): <K extends keyof T>(key: K) => T[K];
    get current(): Readonly<T>;
    set(update: T): void;
    fetch(): void;
    save(): void;
}
export {};
