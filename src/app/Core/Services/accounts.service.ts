import { Injectable } from '@angular/core';
import { IAddTrain, ITrain } from 'src/app/Shared/Interfaces/ITrain';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAddNewUser, IRole, IUser } from 'src/app/Shared/Interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<IUser[]>(this.baseUrl+"GetAllUsers");
  }

  getUserByEmail(email:string){
    return this.http.get<IUser>(this.baseUrl+"GetUserByEmail/"+email);
  }

getAllRoles(){
    return this.http.get<IRole[]>(this.baseUrl+"GetAllRoles");
  }


  AddNewUser(user : IAddNewUser){
    return this.http.post(this.baseUrl+"AddNewUser", user);
  }

  
  UpdateUser(email:string ,updateduser : IAddNewUser){
    return this.http.put(this.baseUrl+"UpdateUser/"+email, updateduser );
  }

  
  DeleteUser(email :string){
    return this.http.delete(this.baseUrl+"DeleteUser?email="+email);
  }

}
