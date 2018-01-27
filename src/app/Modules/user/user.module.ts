import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './Components/user/user.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ListUserComponent } from './Components/list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';
import { ValidateNameDirective } from './Directives/validators/validate-name.directive';
import { ValidateEmailDirective } from './Directives/validators/validate-email.directive';
import { ValidatePhoneDirective } from './Directives/validators/validate-phone.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UserComponent],
  declarations: [UserComponent, AddUserComponent, ListUserComponent, ValidateNameDirective, ValidateEmailDirective, ValidatePhoneDirective],
  providers: [UserService],
})
export class UserModule { }
