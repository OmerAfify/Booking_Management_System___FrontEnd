export interface IAddTrain{
    name: string,
    firstClassSeats:number,
    secondClassSeats: number
}
export interface ITrain extends IAddTrain{
    id: number
}

