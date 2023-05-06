import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AccountsService } from 'src/app/Core/Services/accounts.service';
import { IUser } from 'src/app/Shared/Interfaces/IUser';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit,OnDestroy {

usersList : IUser[];

userEmailToDelete:string;


dtOptions: DataTables.Settings = { destroy:true,
  retrieve:true };
dtTrigger: Subject<any> = new Subject<any>();

  constructor(private _usersService : AccountsService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this._usersService.getAllUsers().subscribe((users)=>{
      this.usersList = users;
      this.dtTrigger.next();
    })
  }


  deleteUser(email:string){
    this._usersService.DeleteUser(email).subscribe((response)=>{
      this.toastr.error(`user ' ${email} ' is removed successfully!`);

      this.getAllUsers();
    })
  }

  onDeleteSelected(email:string){
    this.userEmailToDelete = email;
  }



  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
