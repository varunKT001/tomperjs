declare type Callback = () => void;
export declare class Eventing {
    events: {
        [key: string]: Callback[];
    };
    on: (eventName: string, callback: Callback) => void;
    trigger: (eventName: string) => void;
}
export {};
