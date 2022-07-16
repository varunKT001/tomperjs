"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eventing = void 0;
class Eventing {
    constructor() {
        this.events = {};
        this.on = (eventName, callback) => {
            const handlers = this.events[eventName] || [];
            handlers.push(callback);
            this.events[eventName] = handlers;
        };
        this.trigger = (eventName) => {
            const handlers = this.events[eventName];
            if (!handlers || handlers.length === 0)
                return;
            handlers.forEach((callback) => {
                callback();
            });
        };
    }
}
exports.Eventing = Eventing;
