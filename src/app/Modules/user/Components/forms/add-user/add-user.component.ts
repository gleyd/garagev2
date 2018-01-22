import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/user';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  private user: User;
  private userService: UserService;

  constructor(userService: UserService) {
    this.resetUser();
  }

  resetUser() {
    this.user = this.userService.createNewUser();
  }

  
  createUser() {

    this.userService.addUser(this.user);

  }

  ngOnInit() {
  }

}
