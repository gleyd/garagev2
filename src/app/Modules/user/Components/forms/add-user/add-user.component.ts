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
  private UserService: UserService;

  constructor(UserService: UserService) {
    
    this.UserService = UserService;
    this.initUser();

  }

  initUser() {
    this.user = this.UserService.createNewUser();
  }

  
  createUser() {

    this.UserService.addUser(this.user);

  }

  ngOnInit() {
  }

}
