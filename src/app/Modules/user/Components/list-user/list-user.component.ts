import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../Models/user';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {


  @Input() user: User;
  users: Array<User>;
  constructor(UserService: UserService) {

    this.users = UserService.getAllUsers();


  }

  ngOnInit() {
  }

}
