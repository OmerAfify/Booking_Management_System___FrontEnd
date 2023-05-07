import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from 'src/app/Core/Services/accounts.service';
import {  IRole, IUpdateUser, IUser } from 'src/app/Shared/Interfaces/IUser';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html'
 
})
export class UpdateUserComponent implements OnInit {


UpdateUserForm = new FormGroup({
  "firstName" : new FormControl(null,Validators.required),
  "lastName" : new FormControl(null,Validators.required),
  "email":new FormControl(null),
  "roles" : new FormControl([], Validators.required)
});

serverValidationErrors : string[] | null = null;
rolesList : IRole[]=[];
email :string ="";
user : IUser
dropdownSettings :IDropdownSettings= {};

  constructor(private _accountService:AccountsService, private router:Router, private toastr:ToastrService, 
    private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params:Params)=>{
      this.email = params['email'];
      if(this.email)
        this.getUser()
      else
        return;
    })

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

  
getUser(){
  this._accountService.getUserByEmail(this.email).subscribe((user)=>{
    this.user = user;

this.UpdateUserForm.get("firstName")?.setValue(user.firstName)
this.UpdateUserForm.get("lastName")?.setValue(user.lastName)
this.UpdateUserForm.get("email")?.setValue(user.email)

let selectedItems : {name:string}[]=[];
user.roles.forEach(element => {
  selectedItems.push({"name":element})
    }); 
this.UpdateUserForm.get("roles")?.setValue(selectedItems)
  })
}


getAllRoles(){
  this._accountService.getAllRoles().subscribe((roles)=>{this.rolesList = roles})
}

onSubmitForm(){

      let updatedUser:IUpdateUser = {
              firstName : this.UpdateUserForm.get("firstName")?.value??null,
              lastName : this.UpdateUserForm.get("lastName")?.value??null,
              roles : this.UpdateUserForm.get("roles")?.value.map((element:any) => {
                return element.name
            })??null   
 };  


//  console.log(this.UpdateUserForm.value)
//   console.log("user >>>>")
//   console.log(updatedUser)

     this._accountService.UpdateUser(this.email, updatedUser).subscribe((response)=>{
      this.UpdateUserForm.reset();
      this.router.navigate(["/Accounts"]);
      this.toastr.info("User is updated successfully!")
    },(error) =>{
      this.serverValidationErrors = error.error.errors;
    })
}



isFieldValid(property:string){
return (this.UpdateUserForm.get(property)?.touched && this.UpdateUserForm.get(property)?.invalid)? false:true;
}

isFormValid(){
  return (this.UpdateUserForm.invalid)? false : true; 
}

}
