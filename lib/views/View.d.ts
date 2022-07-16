import { Model } from '../models/Model';
export declare abstract class View<T extends Model<K>, K> {
    parent: Element;
    model?: T | undefined;
    regions: {
        [key: string]: Element;
    };
    abstract template(): string;
    constructor(parent: Element, model?: T | undefined);
    regionsMap(): {
        [key: string]: string;
    };
    eventsMap(): {
        [key: string]: () => void;
    };
    bindEvents(fragment: DocumentFragment): void;
    mapRegions(fragment: DocumentFragment): void;
    onRender(): void;
    render(): void;
}
