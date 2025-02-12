/* 
Create a User class and extend it with Admin and Guest. Each role has different access permissions:
- User has username and a getPermissions() method (returns "Create and Read").  
- Admin overrides getPermissions() to return "Create, Read, Update, Delete".  
- Guest overrides getPermissions() to return "Read-only".
*/

class User {
  #username;
  // these properties are also inherited I guess...
  someData = 'foo';

  constructor(username) {
    this.#username = username;
  }
  getPermissions() {
    return "Create and Read";
  }
  getUsername() {
    return this.#username;
  }
  setUsername(newUsername) {
    if (!(this instanceof Admin)) return
    this.#username = newUsername;
  }
}

class Admin extends User {
  getPermissions() {
    return super.getPermissions() + " and Update and Delete";
  }
}

class Guest extends User {
  getPermissions() {
    return "Read-only";
  }
}

const ben = new User('13spectorb');
ben.setUsername('BEN!!!')
const carmen = new Admin('carms');
carmen.setUsername('CARMS!!!!');
const gonzalo = new Guest('gonzo');

const users = [ben, carmen, gonzalo];

users.forEach(user => {
  console.log(user instanceof User)
  console.log(user);
  console.log(user.getPermissions())
  console.log(user.getUsername())
})