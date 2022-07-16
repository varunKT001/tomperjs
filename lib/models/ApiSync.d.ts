import { AxiosPromise } from 'axios';
interface Id {
    id?: number;
}
export declare class ApiSync<T extends Id> {
    rootUrl: string;
    constructor(rootUrl: string);
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}
export {};
