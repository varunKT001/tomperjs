"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const axios_1 = __importDefault(require("axios"));
const Eventing_1 = require("./Eventing");
class Collection {
    constructor(rootUrl, deserialize) {
        this.rootUrl = rootUrl;
        this.deserialize = deserialize;
        this.models = [];
        this.events = new Eventing_1.Eventing();
    }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    fetch() {
        axios_1.default.get(this.rootUrl).then((response) => {
            response.data.forEach((obj) => {
                this.models.push(this.deserialize(obj));
            });
            this.trigger('change');
        });
    }
}
exports.Collection = Collection;
