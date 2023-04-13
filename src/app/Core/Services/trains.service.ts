import { Injectable } from '@angular/core';
import { ITrain } from 'src/app/Shared/Interfaces/ITrain';
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
}
