export class Work {
  constructor(private id: number, private car_id: number, private kilometer: number, private stateWork: string, private Title: string, private description: Array<string>, private date: string,
    private workForcePrice: number, private piece_id: Array<number>, private quantity: Array<number>) { }

}
