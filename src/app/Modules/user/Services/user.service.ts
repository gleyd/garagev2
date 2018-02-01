import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable()
export class UserService {

  private listUsers: Array<User>;


  constructor() {

    this.listUsers = [];
    this.getAll();

  }

  /**
   * 
   */
  public getAll(): Array<User> {
    return this.listUsers = [new User(1, "jean", "torres", "06855542", "torres@gmail.com"),
    new User(2, "jean", "torres", "06855542", "torres@gmail.com"),
    new User(3, "jean", "torres", "06855542", "torres@gmail.com")];


  }

  /**
   * 
   */
  public add(user: User): any {
    this.listUsers.unshift(user);

  }

  public createNewUser(): User {
    return new User(null, null, null, null, null);
  }

}
