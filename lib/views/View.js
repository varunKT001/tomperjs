"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
class View {
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.regions = {};
        if (this.model) {
            this.model.on('change', () => {
                this.render();
            });
        }
    }
    regionsMap() {
        return {};
    }
    eventsMap() {
        return {};
    }
    bindEvents(fragment) {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }
    mapRegions(fragment) {
        const regionsMap = this.regionsMap();
        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }
    }
    onRender() { }
    render() {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);
        this.onRender();
        this.parent.append(templateElement.content);
    }
}
exports.View = View;
