import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserService } from './Modules/user/Services/user.service';
import { UserModule } from './Modules/user/user.module';
import { routing } from './app-routing.module';
import { CarService } from './Modules/car/Services/car.service';
import { CarModule } from './Modules/car/car.module';
import { WorkService } from './Modules/work/Services/work.service';
import { WorkModule } from './Modules/work/work.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    CarModule,
    WorkModule,
    routing
  ],
  providers: [UserService, CarService, WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
