import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAddRoute, IRoute } from 'src/app/Shared/Interfaces/IRoute';


@Injectable({
  providedIn: 'root'
})

export class RoutesService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllRoutes(){
    return this.http.get<IRoute[]>(this.baseUrl+"GetAllRoutes");
  }

  getRouteById(id:number){
    return this.http.get<IRoute>(this.baseUrl+"GetRouteById/"+id);
  }

  AddNewRoute(route  : IAddRoute){
    return this.http.post(this.baseUrl+"AddNewRoute", route);
  }

  
  UpdateRoute(id:number ,updatedRoute : IAddRoute){
    return this.http.put(this.baseUrl+"UpdateRoute/"+id, updatedRoute );
  }

  
  DeleteRoute(id :number){
    return this.http.delete(this.baseUrl+"DeleteRoute/"+id);
  }

}
