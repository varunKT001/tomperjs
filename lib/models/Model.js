"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    constructor(attributes, events, sync) {
        this.attributes = attributes;
        this.events = events;
        this.sync = sync;
    }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    get get() {
        return this.attributes.get;
    }
    get current() {
        return Object.freeze(this.attributes.getAll());
    }
    set(update) {
        this.attributes.set(update);
        this.events.trigger('change');
    }
    fetch() {
        const id = this.get('id');
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an `id`');
        }
        this.sync
            .fetch(id)
            .then((response) => {
            this.set(response.data);
        })
            .catch(() => {
            this.trigger('error');
        });
    }
    save() {
        const data = this.attributes.getAll();
        this.sync
            .save(data)
            .then((response) => {
            this.trigger('save');
        })
            .catch(() => {
            this.trigger('error');
        });
    }
}
exports.Model = Model;
