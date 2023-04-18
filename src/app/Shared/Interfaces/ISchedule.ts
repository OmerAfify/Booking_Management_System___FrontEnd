export interface IAddSchedule{
    trainId : number,
    routeId: number,
    date: string,
    firstClassPrice: number,
    secondClassPrice: number
}

export interface ISchedule extends IAddSchedule {
    id: number,
    trainName: string,
    route: string,
    firstClassAvailableBookings: number,
    secondClassAvailableBookings: number,
}

export interface IViewSchedule extends IAddSchedule,ISchedule { 
    dateOnly:string,
    timeOnly:string
}

