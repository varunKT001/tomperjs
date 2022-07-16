"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionView = void 0;
class CollectionView {
    constructor(parent, collection) {
        this.parent = parent;
        this.collection = collection;
    }
    render() {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        for (let model of this.collection.models) {
            const itemParent = document.createElement('div');
            this.renderItem(model, itemParent);
            templateElement.content.append(itemParent);
        }
        this.parent.append(templateElement.content);
    }
}
exports.CollectionView = CollectionView;
