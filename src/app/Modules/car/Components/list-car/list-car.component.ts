import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../../Services/car.service';
import { Car } from '../../Models/car';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {


  @Input() car: Car;
  cars: Array<Car>;
  constructor(CarService: CarService) {

    this.cars = CarService.getAll();


  }

  ngOnInit() {
  }

}
