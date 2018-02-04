import { Injectable } from '@angular/core';
import { Work } from '../Models/work';

@Injectable()
export class WorkService {

  private listWorks: Array<Work>;

  constructor() {
    this.listWorks = [];
    this.getAll();

  }

  /**
   * 
   */
  public getAll(): Array<Work> {
    return this.listWorks = [new Work(1, 1, 15000, "effectuer", "Distribution", ["frein", "pneu"], "10/11/1989", 1200, [1,2,3], [2,2,2]),
      new Work(1, 1, 25000, "à faire", "Distribution", ["frein", "pneu"], "10/11/1989", 1200, [1, 2, 3], [2, 2, 2]),
      new Work(1, 1, 188000, "effectuer", "Distribution", ["frein", "pneu"], "10/11/1989", 1200, [1, 2, 3], [2, 2, 2])];
  

  }

  /**
   * 
   */
  public add(work: Work): any {
    this.listWorks.unshift(work); 

  }

  public createNewUser(): Work {
    return new Work(null, null, null, null, null, null, null, null, null, null);
  }

}
