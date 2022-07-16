import { User } from '../models/User';

export class UserForm {
  constructor(public parent: HTMLElement, public model: User) {
    this.bindModel();
  }

  eventsMap(): { [key: string]: (event: Event) => void } {
    return {
      'click:#random-age': this.onSetAgeClick,
      'click:#update-name': this.onUpdateName,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onUpdateName = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <div>Username: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
        <label for='username'>Name</label>
        <input id='username'/>
        <button id='update-name'>Update name</button>
        <button id='random-age'>Set random age</button>
      </div>
    `;
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
