import { isValidEmail, isAllLetters } from './validator.js';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    console.log(
      `${new Date()} | The value of ${property}} is ${Reflect.get(
        target, 
        property
      )}`
    )

  }

})