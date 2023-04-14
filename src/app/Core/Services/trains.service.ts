import { Injectable } from '@angular/core';
import { IAddTrain, ITrain } from 'src/app/Shared/Interfaces/ITrain';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllTrains(){
    return this.http.get<ITrain[]>(this.baseUrl+"GetAllTrains");
  }

  getTrainById(id:number){
    return this.http.get<ITrain>(this.baseUrl+"GetTrainById/"+id);
  }

  AddNewTrain(train : IAddTrain){
    return this.http.post(this.baseUrl+"AddNewTrain", train);
  }

  
  UpdateTrain(id:number ,updatedtrain : IAddTrain){
    return this.http.put(this.baseUrl+"UpdateTrain/"+id, updatedtrain );
  }

  
  DeleteTrain(id :number){
    return this.http.delete(this.baseUrl+"DeleteTrain/"+id);
  }

}
