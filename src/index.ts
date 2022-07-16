import { User } from './models/User';

const user = User.buildUser({ id: 3 });

user.on('change', () => {
  console.log('user changed', user.current);
});
user.on('save', () => {
  console.log('user saved', user.current);
});

user.fetch();
