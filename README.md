<p align='center'>
<img src='./assets/logo.svg'  width='25%'>
</p>
<p align='center'>
<b>A classic Web-Framework</b>
</p>
<p align='center'>
<a href='https://varunkt001.github.io/tomperjs/' target='_blank'>https://varunkt001.github.io/tomperjs</a>
</p>

---

<p align='center'>
This is the complete source code of TomperJS build using <a href="https://www.typescriptlang.org/">Typescript</a>
</p>

## 📄 Link to [Documentation](https://varunkt001.github.io/tomperjs/)

## 🧾 Description

TomperJS is a web-framework based on MVC(Model-View-Controller) architecture pattern. It is very similar to one of the most popular web-framework [BackboneJS](https://backbonejs.org/)

## 💿 Installation

```sh
npm i --save @varuntiwari/tomperjs
```

## 🏁 Example

- Typescript

```ts
import { View } from '@varuntiwari/tomperjs';
import { User, UserProps } from './models/User';

class MyView extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>Hey, I'm ${this.model.get('name')}</h1>
    </div>
    `;
  }
}

const root = document.getElementById('root');

if (root) {
  // Create model
  const user = User.buildUser({ name: 'Varun' });
  // Create view
  const myView = new MyView(root, user);
  // Render the view
  myView.render();
}
```

- Javascript

```js
import { View } from '@varuntiwari/tomperjs';

class MyView extends View {
  template() {
    return `
    <div>
      <h1>Hey, I'm ${this.model.get('name')}</h1>
    </div>
    `;
  }
}

const root = document.getElementById('root');

if (root) {
  // Create model
  const user = User.buildUser({ name: 'Varun' });
  // Create view
  const myView = new MyView(root, user);
  // Render the view
  myView.render();
}
```

## ✨ Features

- [x] Uses Model-View-Controller pattern.
- [x] Collection support for handling multiple models of similar type.
- [x] Reactive views which reacts to change on a Model.
- [x] User and custom events support using `Eventing` module.
- [x] Built-in standard API controllers like `fetch()` and `save()`.

## ⚙ Tools and Technologies used

1. [Typescript](https://www.typescriptlang.org/)
2. [Axios]()

## 🛠 Local Installation and setup

1. Clone the repo to your local machine.
2. Install the required dependency for server using :

   ```javascript
   npm install
   ```

## 🏎 Creating production built

1. Build the package using

   ```javascript
   npm run build
   ```

2. Update the Docs using

   ```javascript
   npm run docs
   ```

## 😎 Team Members

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/83509023?v=4" width="150px" alt="GSSoC'22" />
      <br/>
      Varun Kumar Tiwari
      <br/>
      <a href="https://www.linkedin.com/in/varun-tiwari-454591178/">LinkedIn</a>
      <a href="https://github.com/varunKT001">Github</a>
    </td> 
  </tr>
</table>

## ⚖ License

[MIT](./LICENSE.md)

<br>
<br>
<br>

<p align='center'>
(If you liked the project, give it star 😃)
</p>
