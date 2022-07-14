import { User } from './models/User';

const user = new User({ name: 'newrecord', age: 10 });

user.save();
