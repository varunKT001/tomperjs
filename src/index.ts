import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'varun' });

console.log(user.get('name'), user.get('age'));
