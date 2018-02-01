import { Injectable } from '@angular/core';
import { Car } from '../Models/car';

@Injectable()
export class CarService {

  private listCars: Array<Car>;


  constructor() {
    
    this.listCars = [];
    this.getAll();

  }

  /**
   * 
   */
  public getAll(): Array<Car> {
    return this.listCars = [new Car(1, 1, "peugeot", "206", "90ch 2L hdi", 2005, "BF-205-YG", "/image/cartegrise"),
      new Car(1, 1, "renault", "207", "85ch 5L hdi", 2006, "AR-255-FF", "/image/cartegrise"),
      new Car(1, 2, "peugeot", "208", "77ch 4L hdi", 2007, "DC-789-CC", "/image/cartegrise"),
      new Car(1, 2, "renault", "209", "69ch 3L hdi", 2008, "KO-755-JK", "/image/cartegrise")];


  }

  /**
   * 
   */
  public add(car: Car): any {
    this.listCars.unshift(car);

  }

  public createNewCar(): Car {
    return new Car(null, null, null, null, null, null, null, null);
  }
}
