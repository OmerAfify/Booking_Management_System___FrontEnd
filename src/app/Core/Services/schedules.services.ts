import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAddSchedule, ISchedule, IViewSchedule } from 'src/app/Shared/Interfaces/ISchedule';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllSchedules(){
    return this.http.get<ISchedule[]>(this.baseUrl+"GetAllSchedules");
  }


  getScheduleById(id:number){
    return this.http.get<ISchedule>(this.baseUrl+"GetScheduleById/"+id);
  }

  AddNewSchedule(schedule : IAddSchedule){
    return this.http.post(this.baseUrl+"AddNewSchedule", schedule);
  }

  
  UpdateSchedule(id:number ,updatedSchedule : IAddSchedule){
    return this.http.put(this.baseUrl+"UpdateSchedule/"+id, updatedSchedule );
  }

  
  DeleteSchedule(id :number){
    return this.http.delete(this.baseUrl+"DeleteSchedule/"+id);
  }


}

