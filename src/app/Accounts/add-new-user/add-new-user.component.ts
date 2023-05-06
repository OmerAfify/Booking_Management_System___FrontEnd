import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from 'src/app/Core/Services/accounts.service';
import { IAddNewUser, IRole } from 'src/app/Shared/Interfaces/IUser';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html'
 
})
export class AddNewUserComponent implements OnInit {


AddNewUserForm = new FormGroup({
  "firstName" : new FormControl(null,Validators.required),
  "lastName" : new FormControl(null,Validators.required),
  "email" : new FormControl(null,Validators.required),
  "password" : new FormControl(null,[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]),
  "roles" : new FormControl([], Validators.required)
});

serverValidationErrors : string[] | null = null;

rolesList : IRole[]=[];

dropdownSettings :IDropdownSettings= {};

  constructor(private _accountService:AccountsService, private router:Router, private toastr:ToastrService) { }

  ngOnInit() {

    this.getAllRoles()

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'name',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
  }

  
getAllRoles(){
  this._accountService.getAllRoles().subscribe((roles)=>{this.rolesList = roles})
 
}

onSubmitForm(){

      let user:IAddNewUser = {
              firstName : this.AddNewUserForm.get("firstName")?.value??null,
              lastName : this.AddNewUserForm.get("lastName")?.value??null,
              email : this.AddNewUserForm.get("email")?.value??null,
              password : this.AddNewUserForm.get("password")?.value??null,
              roles : this.AddNewUserForm.get("roles")?.value.map((element:any) => {
                return element.name
            })??null   
 };  


//  console.log(this.AddNewUserForm.value)
//  console.log("user >>>>")
//  console.log(user)

     this._accountService.AddNewUser(user).subscribe((response)=>{
    
      this.AddNewUserForm.reset();
      this.router.navigate(["/Accounts"]);
      this.toastr.success("User is added successfully!")
    },(error) =>{
      this.serverValidationErrors = error.error.errors;
    })
}



isFieldValid(property:string){
return (this.AddNewUserForm.get(property)?.touched && this.AddNewUserForm.get(property)?.invalid)? false:true;
}

isFormValid(){
  return (this.AddNewUserForm.invalid)? false : true; 
}

}
