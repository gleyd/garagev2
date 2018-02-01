import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './Components/add-car/add-car.component';
import { ListCarComponent } from './Components/list-car/list-car.component';
import { CarComponent } from './Components/car/car.component';
import { CarService } from './Services/car.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CarComponent],
    declarations: [AddCarComponent, ListCarComponent, CarComponent],
  providers: [CarService],
})
export class CarModule { }
