import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './Components/user/user.component';
import { User } from './Models/user';
import { AddUserComponent } from './Components/forms/add-user/add-user.component';
import { ListUserComponent } from './Components/list-user/list-user.component';

@NgModule({
  imports: [
    CommonModule,
    User
  ],
  declarations: [UserComponent, AddUserComponent, ListUserComponent]
})
export class UserModule { }
