import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'varun' });

user.on('change-name', () => console.log('name changed #1'));
user.on('change-name', () => console.log('name changed #2'));
user.on('change-age', () => console.log('age change'));

user.trigger('change-name');
user.trigger('change-age');

console.log(user.get('name'), user.get('age'));
