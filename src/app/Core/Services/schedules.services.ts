import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAddSchedule, ISchedule } from 'src/app/Shared/Interfaces/ISchedule';


@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllSchedules(){
    return this.http.get<ISchedule[]>(this.baseUrl+"GetAllSchedules");
  }

  getTrainById(id:number){
    return this.http.get<ISchedule>(this.baseUrl+"GetScheduleById/"+id);
  }

  AddNewSchedule(schedule : IAddSchedule){
    return this.http.post(this.baseUrl+"AddNewSchedule", schedule);
  }

  
  // UpdateTrain(id:number ,updatedtrain : IAddTrain){
  //   return this.http.put(this.baseUrl+"UpdateTrain/"+id, updatedtrain );
  // }

  
  DeleteSchedule(id :number){
    return this.http.delete(this.baseUrl+"DeleteSchedule/"+id);
  }


}

