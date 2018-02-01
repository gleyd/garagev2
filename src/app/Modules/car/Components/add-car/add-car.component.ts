import { Component, OnInit } from '@angular/core';
import { Car } from '../../Models/car';
import { CarService } from '../../Services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  private car: Car;
  private CarService: CarService;

  constructor(CarService: CarService) {
    
    this.CarService = CarService;
    this.initCar();

  }

  initCar() {
    this.car = this.CarService.createNewCar();
  }


  createCar() {

    this.CarService.add(this.car);

  }

  ngOnInit() {
  }

}
