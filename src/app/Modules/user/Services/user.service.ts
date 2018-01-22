import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable()
export class UserService {

  public listUsers: Array<User>;


  constructor() {

    this.listUsers = [];
    this.getAllUsers();

  }

  /**
   * 
   */
  getAllUsers(): Array<User> {
    return this.listUsers = [new User(1, "jean", "torres", "06855542", "torres@gmail.com"),
    new User(2, "jean", "torres", "06855542", "torres@gmail.com"),
    new User(3, "jean", "torres", "06855542", "torres@gmail.com")];


  }

  /**
   * 
   */
  addUser(user: User): any {
    this.listUsers.unshift(user);

  }

  createNewUser(): User {
    return new User(null, null, null, null, null);
  }

}
