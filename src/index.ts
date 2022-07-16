import { User } from './models/User';

const userCollection = User.buildUserCollection();

userCollection.on('change', () => {
  console.log(userCollection.models);
});

userCollection.fetch();
