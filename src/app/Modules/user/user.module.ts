import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './Components/user/user.component';
import { AddUserComponent } from './Components/forms/add-user/add-user.component';
import { ListUserComponent } from './Components/list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UserComponent],
  declarations: [UserComponent, AddUserComponent, ListUserComponent],
  providers: [UserService],
})
export class UserModule { }
