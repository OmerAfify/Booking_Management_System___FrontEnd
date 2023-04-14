export interface IAddRoute{
    departure:string,
    arrival:string
  }
  
  export interface IRoute extends IAddRoute{
    id:number,
  }