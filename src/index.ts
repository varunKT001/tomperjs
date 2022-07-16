import { User } from './models/User';

const user = new User({ name: 'newer name', age: 30 });

user.on('change', () => console.log('user changed'));
user.on('save', () => console.log(user.current));
user.on('error', () => console.log('error occured'));

user.save();
