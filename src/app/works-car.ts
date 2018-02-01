export class Work {

  constructor(
    public id: number,
    public car_id: string,
    public title: string,
    public stateWork: string,
    public workDescription: Array<string>,
    public date: number,
    public idPiece: Array<number>,
    public PrestationPrice,
    public TotalPrice,
  ) {}

}
